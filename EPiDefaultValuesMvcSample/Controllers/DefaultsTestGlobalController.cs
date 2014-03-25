using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EPiDefaultValuesMvcSample.Models.Blocks;
using EPiServer;
using EPiServer.Core;
using EPiServer.Web;
using EPiServer.Web.Mvc;

namespace EPiDefaultValuesMvcSample.Controllers
{
    public class DefaultsTestGlobalController : BlockController<DefaultsTestGlobalBlock>
    {
        public override ActionResult Index(DefaultsTestGlobalBlock currentBlock)
        {
            return PartialView(currentBlock);
        }
    }
}
