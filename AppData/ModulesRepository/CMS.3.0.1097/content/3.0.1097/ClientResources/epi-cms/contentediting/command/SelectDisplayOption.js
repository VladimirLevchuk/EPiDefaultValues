//>>built
define("epi-cms/contentediting/command/SelectDisplayOption",["dojo/_base/declare","dojo/_base/lang","dojo/when","epi/dependency","epi-cms/contentediting/command/_ContentAreaCommand","epi-cms/contentediting/viewmodel/ContentBlockViewModel","epi-cms/widget/DisplayOptionSelector","epi/i18n!epi/cms/nls/episerver.cms.contentediting.editors.contentarea.displayoptions"],function(_1,_2,_3,_4,_5,_6,_7,_8){return _1([_5],{label:_8.label,category:"popup",_labelAutomatic:_2.replace(_8.label,[_8.automatic]),constructor:function(){this.popup=new _7();},postscript:function(){this.inherited(arguments);if(!this.store){var _9=_4.resolve("epi.storeregistry");this.store=_9.get("epi.cms.displayoptions");}_3(this.store.get(),_2.hitch(this,function(_a){this._setCommandAvailable(_a);this.popup.set("displayOptions",_a);}));},_onModelChange:function(){this.inherited(arguments);var _b=this.popup.displayOptions,_c=this.model.get("displayOption"),_d=_b&&_b.length>0;_d=_d&&(this.model instanceof _6);this._setCommandAvailable(_b);if(!_d){this.set("label",this._labelAutomatic);return;}this.popup.set("model",this.model);if(!_c){this.set("label",this._labelAutomatic);}else{this._setLabel(_c);}this._watch("displayOption",function(_e,_f,_10){if(!_10){this.set("label",this._labelAutomatic);}else{this._setLabel(_10);}},this);},_setCommandAvailable:function(_11){this.set("isAvailable",_11&&_11.length>0&&this.model instanceof _6);},_setLabel:function(_12){_3(this.store.get(_12),_2.hitch(this,function(_13){this.set("label",_2.replace(_8.label,[_13.name]));}),_2.hitch(this,function(_14){this.set("label",this._labelAutomatic);}));},_onModelValueChange:function(){this.set("canExecute",!!this.model&&this.model.contentLink&&!this.model.get("readOnly"));}});});