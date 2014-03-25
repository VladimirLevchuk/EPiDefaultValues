using System;
using System.Collections.Generic;
using System.ComponentModel;
using EPiServer.Editor;

namespace EPiDefaultValues
{
    /// <summary>
    /// Defines contract and by default provides default values for the properties by reading it from the System.Componentmodel.DefaultValueAttribute
    /// </summary>
    public class DefaultValueProvider
    {
        private readonly Dictionary<string, object> _cache = new Dictionary<string, object>();

        protected virtual IDictionary<string, object> Cache { get { return _cache; } }

        protected virtual bool TryGetCachedValue(string key, out object value)
        {
            return Cache.TryGetValue(key, out value);
        }

        protected virtual void CacheValue(string key, object value)
        {
            Cache[key] = value;
        }

        /// <summary>
        /// Gets the default value.
        /// </summary>
        /// <param name="type">The type.</param>
        /// <param name="propertyName">Name of the property.</param>
        /// <param name="nullValue">The null value.</param>
        /// <returns></returns>
        /// <exception cref="System.ArgumentNullException">type
        /// or
        /// propertyName</exception>
        public virtual object GetDefaultValue(Type type, string propertyName, object nullValue)
        {
            if (type == null)
            {
                throw new ArgumentNullException("type");
            }
            if (propertyName == null)
            {
                throw new ArgumentNullException("propertyName");
            }

            var cacheKey = type.AssemblyQualifiedName + "->" + propertyName;

            object result;

            if (!TryGetCachedValue(cacheKey, out result))
            {
                // if default value is not cached yet
                var propertyInfo = type.GetProperty(propertyName);
                var defaultValueAttribute = (DefaultValueAttribute) Attribute.GetCustomAttribute(propertyInfo, typeof(DefaultValueAttribute));

                var defaultValue = nullValue;
                     
                if (defaultValueAttribute != null)
                {
                    if (defaultValueAttribute.Value != null)
                    {
                        var defaultValueType = defaultValueAttribute.Value.GetType();
                        var propertyType = propertyInfo.PropertyType;

                        if (propertyType.IsAssignableFrom(defaultValueType))
                        {
                            defaultValue = defaultValueAttribute.Value;
                        }
                        else if (defaultValueAttribute.Value is string)
                        {
                            defaultValue = TypeDescriptor.GetConverter(propertyType).ConvertFromInvariantString((string) defaultValueAttribute.Value);
                        }
                    }
                }

                // get it from the attribute
                result = defaultValue;

                // and cache 
                CacheValue(cacheKey, result);
            }

            return result;
        }
    }
}
