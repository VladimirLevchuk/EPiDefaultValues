//>>built
define("epi-cms/widget/overlay/overlayFactory",["dojo/_base/lang","dojo/_base/Deferred","epi/string","epi-cms/widget/overlay/Property"],function(_1,_2,_3){return {defaultType:"epi-cms/widget/overlay/Property",create:function(_4){var _5=new _2();var _6=_4.property.metadata.overlaySettings&&_4.property.metadata.overlaySettings.customType;var _7=_4.property,_8=_3.slashName(_6||this.defaultType);require([_8],_1.hitch(this,function(_9){var _a=_1.mixin({name:_7.name,contentModel:_7.contentModel,displayName:_7.metadata.displayName,disabled:_4.disabled,sourceItemNode:_4.node},_7.overlayParams);var _b=new _9(_a);_5.resolve(_b);}));return _5;}};});