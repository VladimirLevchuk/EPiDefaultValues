using EPiInterceptors;
using EPiServer.Framework;
using EPiServer.ServiceLocation;
using StructureMap;

namespace EPiDefaultValues
{
    /// <summary>
    /// Since we override a part of EPiServer stuff - ContentDataInterceptor - 
    /// we have to use InitializableModule instead of StructureMap registry, 
    /// because EPiServer dows it's own initialization after Registry-based configuration is done 
    /// (and before initializable modules called). 
    /// </summary>
    [ModuleDependency(typeof(ServiceContainerInitialization))]
    public class DefaultValuesSupportInitializationModule : InterceptionRegistrationInitModuleBase
    {
        #region IConfigurableModule Members

        public override void ConfigureContainer(ServiceConfigurationContext context)
        {
            base.ConfigureContainer(context);

            var container = context.Container;
#if DEBUG
            // container.AssertConfigurationIsValid();
            var dump = container.WhatDoIHave();
            System.Diagnostics.Debug.WriteLine(dump);
#endif
            ConfigureIoC(container);
        }

        #endregion

        public virtual void ConfigureIoC(IContainer container)
        {
            container.Configure(x =>
            {
                x.For<DefaultValueProvider>().Singleton().Use<DefaultValueProvider>();
            });
        }

        public override void RegisterContentDataInterceptors(ContentDataInterceptonRegistry registry)
        {
            registry.InterceptWith<DefaultValuesContentDataInterceptor>();
        }
    }

}
