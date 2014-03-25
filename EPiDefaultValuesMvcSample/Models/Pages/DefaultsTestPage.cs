using System.ComponentModel;
using EPiServer.Core;
using EPiServer.DataAnnotations;

namespace EPiDefaultValuesMvcSample.Models.Pages
{
    [ContentType(DisplayName = "Defaults Test Page", GUID = "37e46425-7b28-4b44-9f95-e972f7eb765c", Description = "")]
    public class DefaultsTestPage : PageData
    {
        [DefaultValue(5)]
        public virtual int? IntValue { get; set; }

        [DefaultValue("Default String")]
        public virtual string StringValue { get; set; }

        [DefaultValue("<i>Default Html</i>")]
        public virtual XhtmlString HtmlValue { get; set; }
    }
}