using System.Web.Optimization;

[assembly: WebActivatorEx.PostApplicationStartMethod(typeof(EPiDefaultValuesMvcSample.App_Start.BootstrapBundleConfig), "Initialize")]

namespace EPiDefaultValuesMvcSample.App_Start
{
	public class BootstrapBundleConfig
	{
        public static void RegisterBundles(BundleCollection bundles)
		{
			// Add @Styles.Render("~/Content/bootstrap") in the <head/> of your _Layout.cshtml view
			// For Bootstrap theme add @Styles.Render("~/Content/bootstrap-theme") in the <head/> of your _Layout.cshtml view
			// Add @Scripts.Render("~/bundles/bootstrap") after jQuery in your _Layout.cshtml view
			// When <compilation debug="true" />, MVC4 will render the full readable version. When set to <compilation debug="false" />, the minified version will be rendered automatically

            bundles.UseCdn = true;

            bundles.Add(
                new ScriptBundle("~/bundles/jquery-1.9.1.min", "//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js")
                .Include("~/public/libs/jquery/jquery-1.9.1.js"));

            bundles.Add(new ScriptBundle("~/public/bundles/scripts")
                .Include("~/public/lib/bootstrap/scripts/bootstrap.js")
            );
            
            bundles.Add(new StyleBundle("~/public/bundles/styles")
                .Include("~/public/lib/bootstrap/styles/bootstrap.css")
                .Include("~/public/lib/bootstrap/styles/bootstrap-theme.css")
            );

            BundleTable.Bundles.Add(new StyleBundle("~/Public/Styles/bootstrap-theme").Include("~/Public/Styles/bootstrap-theme.css"));
		}

        public static void Initialize()
        {
            RegisterBundles(BundleTable.Bundles);
        }

	}
}
