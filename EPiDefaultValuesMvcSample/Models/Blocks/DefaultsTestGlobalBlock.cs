using System.ComponentModel;
using EPiServer.Core;
using EPiServer.DataAnnotations;

namespace EPiDefaultValuesMvcSample.Models.Blocks
{
    [ContentType(DisplayName = "Defaults Test Global Block", GUID = "68bb198c-45a4-457f-af7e-bb40ad99feba", Description = "")]
    public class DefaultsTestGlobalBlock : BlockData
    {
        [DefaultValue(5)]
        public virtual int? IntValue { get; set; }

        [DefaultValue("Default String")]
        public virtual string StringValue { get; set; }

        [DefaultValue(typeof(XhtmlString), "<i>Default Html</i>")]
        public virtual XhtmlString HtmlValue { get; set; }
    }
}