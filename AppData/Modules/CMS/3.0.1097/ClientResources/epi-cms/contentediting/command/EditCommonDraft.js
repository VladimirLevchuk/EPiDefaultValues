//>>built
define("epi-cms/contentediting/command/EditCommonDraft",["dojo/_base/declare","epi-cms/contentediting/command/_ContentCommandBase","epi-cms/contentediting/ContentActionSupport","epi/i18n!epi/cms/nls/episerver.cms.contentediting.toolbar.buttons"],function(_1,_2,_3,_4){return _1([_2],{name:"editcommondraft",label:_4.editcommondraft.label,tooltip:_4.editcommondraft.title,iconClass:"epi-iconPen",contentActionSupport:null,postscript:function(){this.inherited(arguments);this.contentActionSupport=this.contentActionSupport||_3;},_execute:function(){this.model.editCommonDraft();},_onModelChange:function(){this.inherited(arguments);var _5=this.model.contentData,_6=_5.status,_7=_3.versionStatus,_8=this.contentActionSupport.hasAccess(_5.accessMask,_3.accessLevel.Edit),_9=(_6==_7.Published||_6==_7.PreviouslyPublished)&&!_5.isCommonDraft&&_8&&this.contentActionSupport.hasProviderCapability(_5.providerCapabilityMask,_3.providerCapabilities.Edit);this.set("canExecute",_9&&this.model.canEditCurrentLanguage());this.set("isAvailable",_9);}});});