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
    public class DefaultsTestLocalController : BlockController<DefaultsTestLocalBlock>
    {
        public override ActionResult Index(DefaultsTestLocalBlock currentBlock)
        {
            return PartialView(currentBlock);
        }
    }
}
