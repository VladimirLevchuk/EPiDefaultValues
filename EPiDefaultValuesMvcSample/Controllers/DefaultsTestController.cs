using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using EPiDefaultValuesMvcSample.Models.Pages;
using EPiServer;
using EPiServer.Core;
using EPiServer.Framework.DataAnnotations;
using EPiServer.Web.Mvc;

namespace EPiDefaultValuesMvcSample.Controllers
{
    public class DefaultsTestController : PageController<DefaultsTestPage>
    {
        public ActionResult Index(DefaultsTestPage currentPage)
        {
            /* Implementation of action. You can create your own view model class that you pass to the view or
             * you can pass the page type for simpler templates */

            return View(currentPage);
        }
    }
}