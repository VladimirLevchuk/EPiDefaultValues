using System.ComponentModel;
using EPiServer.Core;
using EPiServer.DataAnnotations;

namespace EPiDefaultValuesMvcSample.Models.Blocks
{
    [ContentType(DisplayName = "Defaults Test Local Block", GUID = "baa834f5-5c02-426c-ac05-1014e6bb54b5", Description = "")]
    public class DefaultsTestLocalBlock : BlockData
    {
        [DefaultValue(5)]
        public virtual int? IntValue { get; set; }

        [DefaultValue("Default String")]
        public virtual string StringValue { get; set; }

        [DefaultValue("<i>Default Html</i>")]
        public virtual XhtmlString HtmlValue { get; set; }
    }
}