//>>built
require({cache:{"url:epi/shell/widget/layout/templates/_ComponentWrapperHeader.htm":"<div>\r\n    <div class=\"epi-gadgetTitle dojoxDragHandle\" data-dojo-attach-point=\"titleBarNode\">\r\n        <div data-dojo-attach-point=\"focusNode\" class=\"epi-gadgetTitleFocus\">\r\n            <button data-dojo-type=\"dijit/form/ToggleButton\" data-dojo-attach-point=\"toggleButton\"\r\n                data-dojo-attach-event=\"onClick:toggle\" data-dojo-props=\"title:'${res.togglebuttontooltip}', showLabel:true, iconClass:'epi-gadget-toggle', 'class':'epi-chromelessButton'\">\r\n                ${title}</button>\r\n        </div>\r\n        <div class=\"epi-gadgetButtonBar\">\r\n            <button data-dojo-type=\"dijit/form/Button\" data-dojo-attach-point=\"closeButton\" data-dojo-attach-event=\"onClick:onClose\"\r\n                data-dojo-props=\"showLabel:false, title:'${res.closebuttontooltip}', iconClass:'epi-gadget-delete', 'class':'epi-chromelessButton'\">\r\n                ${res.closebuttontooltip}</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n"}});define("epi/shell/widget/layout/_ComponentWrapper",["dojo/_base/declare","dojo/_base/array","dojo/string","dojo/_base/lang","dojo/dom-style","dojo/dom-attr","dojo/dom-class","dojo/dom-geometry","dojo/Evented","dijit/_base/wai","dijit/_CssStateMixin","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_Widget","dijit/layout/BorderContainer","epi/shell/command/_CommandProviderMixin","epi/shell/widget/command/GadgetAction","epi/shell/widget/command/RemoveGadget","epi/shell/widget/ComponentChrome","epi/shell/widget/dialog/Confirmation","epi/shell/widget/layout/_ComponentResizeMixin","epi/shell/widget/layout/_ComponentSplitter","dojo/text!./templates/_ComponentWrapperHeader.htm","epi/i18n!epi/shell/ui/nls/episerver.shell.ui.resources.gadgetchrome","dijit/form/Button","dijit/form/ToggleButton"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e,_f,_10,_11,_12,_13,_14,_15,_16,_17,res){var _18=_1([_e,_c,_d,_b,_9],{templateString:_17,title:"",res:res,open:true,toggleable:true,closable:false,"class":"epi-gadgetHeader",toggle:function(){},onClose:function(){},postCreate:function(){this.inherited(arguments);if(this.toggleable){this._trackMouseState(this.titleBarNode,"epi-gadgetTitle");}},startup:function(){this.inherited(arguments);this.toggleButton.set("checked",!this.open);},_setClosableAttr:function(_19){_5.set(this.closeButton.domNode,"display",_19?"":"none");_7.toggle(this.titleBarNode,"epi-gadget-unlocked",_19);},_setTitleAttr:function(_1a){this._set("title",_1a||"");this.toggleButton.set("label",this.title);},_setToggleableAttr:function(_1b){this.toggleable=_1b;_a.setWaiRole(this.focusNode,_1b?"button":"heading");if(_1b){_a.setWaiState(this.focusNode,"controls",this.id+"_pane");_6.set(this.focusNode,"tabIndex",this.tabIndex);}else{_6.remove(this.focusNode,"tabIndex");}this.toggleButton.set("disabled",!this.toggleable);this.toggleButton.set("iconClass",this.toggleable?"epi-gadget-toggle":"");}});return _1([_f,_15,_b,_10,_9],{dndType:"epi.shell.layout._ComponentWrapper",heading:"",toggleable:true,tabIndex:"0",baseClass:"epi-gadget","class":"epi-gadgetContainer",closable:false,dragRestriction:false,confirmationBeforeRemoval:true,res:res,gutters:false,postCreate:function(){this.inherited(arguments);this._header=new _18({region:"top",splitter:false,title:this.heading||"",closable:this.closable,toggle:_4.hitch(this,this.toggle),onClose:_4.hitch(this,this.onClose)});this.addChild(this._header);},_setIsRemovableAttr:function(_1c){_1c=_1c!==false;this._set("isRemovable",_1c);this.set("closable",!!(_1c&&this.closable));},_setClosableAttr:function(_1d){this._set("closable",_1d);this._header&&this._header.set("closable",_1d);},_showRemovalConfirmationDialog:function(_1e){var _1f=this.heading?_3.substitute(this.res.removecomponentquestion,{name:this.heading}):this.res.removecomponentquestionwithoutname;var _20=new _14({description:_1f,title:epi.resources.header.episerver,onAction:_1e});_20.show();},onClose:function(evt){if(!this.confirmationBeforeRemoval){_5.set(this.domNode,"display","none");this.onClosed();}else{this._showRemovalConfirmationDialog(_4.hitch(this,function(_21){if(_21){_5.set(this.domNode,"display","none");this.onClosed();}}));return true;}},startup:function(){this._header.set("open",this.open);this.set("open",this.open);this.inherited(arguments);},resize:function(_22){_22=_4.mixin({},_22);if(!_22.h){if(!this.open){var _23=_8.getMarginExtents(this.domNode).h;_22.h=_23+this._getClosedHeight();}else{if(this.lastOpenHeight){_22.h=this.lastOpenHeight;}}}this.inherited(arguments,[_22]);},getSize:function(){var _24=_8.getMarginBox(this.domNode);if(!this.open){_24.h=this._getClosedHeight();}return _24;},_getClosedHeight:function(){var _25=this._header?_8.getMarginBox(this._header.domNode).h:0,_26=this._splitter?_8.getMarginBox(this._splitter.domNode).h:0;return _25+_26;},onClosed:function(){},_setHeadingAttr:function(_27){this._set("heading",_27);this._header&&this._header.set("title",_27);},_setToggleableAttr:function(_28){this._header&&this._header.set("toggleable",_28);},toggle:function(){if(this._started){if(!open){this.lastOpenHeight=_8.getMarginBox(this.domNode).h;}}this._started&&this.set("open",!this.get("open"));},_setOpenAttr:function(_29){this.inherited(arguments);if(this._started){this.emit("toggle",this.open);}},addChild:function(_2a){if(_2a.isInstanceOf(_16)||_2a.isInstanceOf(_18)){return this.inherited(arguments);}this._addGadgetCommands(_2a);this.add("commands",new _12({model:this}));var _2b=new _13({region:"center",splitter:false});_2b.addProvider(this);_2b.addChild(_2a);this._child=_2b;this.inherited("addChild",[_2b]);if(this._started&&!_2a.started&&!_2a._started){_2a.startup();}},_addGadgetCommands:function(_2c){if(_2c&&_4.isArray(_2c.gadgetActions)){_2.forEach(_2c.gadgetActions,function(_2d){this.add("commands",new _11({actionName:_2d.actionName,label:_2d.text,model:_2c}));},this);}}});});