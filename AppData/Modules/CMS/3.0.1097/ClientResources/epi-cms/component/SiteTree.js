//>>built
define("epi-cms/component/SiteTree",["dojo/_base/declare","dojo/_base/Deferred","dojo/_base/lang","dojo/_base/array","dojo/when","dojo/dom-style","dijit/layout/_LayoutWidget","dijit/Tooltip","epi-cms/component/SiteTreeModel","epi-cms/component/SiteTreeNode","epi/dependency","epi/shell/command/_WidgetCommandProviderMixin","epi/shell/command/ToggleCommand","epi/shell/widget/Tree","epi/i18n!epi/cms/nls/episerver.cms.components.sitetree"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e,_f){return _1([_7,_c],{profile:null,buildRendering:function(){this.inherited(arguments);_6.set(this.domNode,"overflow","auto");},postCreate:function(){this.inherited(arguments);var _10=_b.resolve("epi.storeregistry");var _11=_10.get("epi.cms.sitestructure");this.profile=this.profile||_b.resolve("epi.shell.Profile");var _12=this._treeModel=new _9({store:_11});var _13=new _d({category:"setting",label:_f.showalllanguages,model:_12,property:"showAllLanguages"});this.commands.push(_13);this._tree=new _e({model:_12,showRoot:false,"class":"epi-simpleTree",persist:false,onClick:_3.hitch(this,function(_14){if(!_14.host||!_14.languageId){window.location.replace(_14.editUrl);}else{var _15=this;_5(_15.profile.setContentLanguage(_14.languageId,_14.host),function(){var _16=_14.editUrl;if(_4.some(_14.hosts,function(_17){return _17===window.location.host;})){_16=_14.editUrl.replace(new RegExp(_14.host,"i"),window.location.host);}window.location.replace(_16);});}}),_createTreeNode:function(_18){return new _a(_18);},_onNodeMouseEnter:function(_19){if(_19.item.isLanguageNode&&!_19.item.isAvailable){_8.show(_f.notavailabletooltip,_19.labelNode,["after-centered","below"]);}},_onNodeMouseLeave:function(_1a){_8.hide(_1a.labelNode);}});this.addChild(this._tree);},layout:function(){this._tree.resize();},startup:function(){this.inherited(arguments);this._setTreePath();},_setTreePath:function(){_2.when(this._treeModel.getCurrentSite(),_3.hitch(this,function(_1b){this._tree.set("path",["root",_1b.currentSite,_1b.currentEditLanguageId]);}));}});});