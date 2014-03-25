using System;
using Castle.DynamicProxy;

namespace EPiDefaultValues
{
    public class DefaultValuesContentDataInterceptor : IInterceptor
    {
        private const string PropertyGetMethodNameStart = "get_";

        protected virtual DefaultValueProvider DefaultValueProvider { get; private set; }

        public DefaultValuesContentDataInterceptor(DefaultValueProvider defaultValueProvider)
        {
            if (defaultValueProvider == null)
            {
                throw new ArgumentNullException("defaultValueProvider");
            }

            DefaultValueProvider = defaultValueProvider;
        }

        public void Intercept(IInvocation invocation)
        {
            if (invocation.Method.ReturnType == typeof(void))
            {
                return;
            }

            string methodName = invocation.Method.Name;
            if (methodName.StartsWith(PropertyGetMethodNameStart))
            {
                string propertyName = methodName.Substring(PropertyGetMethodNameStart.Length);
                if (invocation.TargetType.GetProperty(propertyName) == null)
                {
                    return;
                }

                object nullValue = null;
                if (invocation.Method.ReturnType.IsValueType)
                {
                    nullValue = Activator.CreateInstance(invocation.Method.ReturnType);
                }

                if (object.Equals(invocation.ReturnValue, nullValue))
                {
                    invocation.ReturnValue = DefaultValueProvider.GetDefaultValue(invocation.TargetType, propertyName, nullValue);
                }
            }
        }
    }
}
