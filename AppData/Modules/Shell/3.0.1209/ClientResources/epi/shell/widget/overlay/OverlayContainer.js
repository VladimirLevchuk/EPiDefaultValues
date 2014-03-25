//>>built
define("epi/shell/widget/overlay/OverlayContainer",["dojo/_base/array","dojo/_base/declare","dojo/_base/Deferred","dojo/_base/lang","dojo/dom-style","dijit/_Container","dijit/_WidgetBase","dijit/_TemplatedMixin","epi/shell/postMessage"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9){return _2([_7,_6,_8],{updateInterval:250,enabled:false,target:null,targetCoverEnabled:false,templateString:"<div data-dojo-attach-point=\"containerNode\" class=\"epi-overlay-container\"><div data-dojo-attach-point=\"targetCover\" class=\"epi-overlay-targetCover\"></div></div>",_childConnects:null,postMixInProperties:function(){this.inherited(arguments);this._childConnects={};},startup:function(){if(this._started){return;}this.inherited(arguments);this._toggleTargetCover(this.enabled);this.subscribe("/dnd/start",function(){this.set("targetCoverEnabled",true);});this.subscribe("/dnd/cancel",function(){this.set("targetCoverEnabled",false);});this.subscribe("/dnd/drop",function(){this.set("targetCoverEnabled",false);});this.connect(this.target,"onUnload",this.disconnectOverlayItems);this.connect(this.target,"onAfterResize",this._onAfterResizeHandler);},addChild:function(_a,_b){this.inherited(arguments);_a.set("parent",this);_a.resize();var _c=[];if(_a.onResize){_c.push(this.connect(_a,"onResize",this._onContentChange));}this._childConnects[_a.id]=_c;},removeChild:function(_d){this.inherited(arguments);var _e=this._childConnects[_d.id];this._childConnects[_d.id]=null;delete this._childConnects[_d.id];_1.forEach(_e,function(_f){_f.remove();});},disconnectOverlayItems:function(){this.set("enabled",false);_1.forEach(this.getChildren(),_4.hitch(this,function(_10){_10.set("sourceItemNode",null);}));},_setReadOnlyAttr:function(_11){this._set("readOnly",_11);_1.forEach(this.getChildren(),_4.hitch(this,function(_12){_12.set("readOnly",_11);}));},_onAfterResizeHandler:function(_13){this.set("documentSize",_13);this._updateOverlayItems(true);},_onContentChange:function(){this.target.contentChange();},_updateOverlayItems:function(_14){if(!this.get("enabled")||this.isUpdating||!this.target.isInspectable()){return;}var _15=4;var _16=1;var _17;var _18;this.isUpdating=true;do{_17=false;_1.forEach(this.getChildren(),function(_19){var _1a=_19.get("position");_18=_1a.isChanged||_18;if(_1a.isChanged){_17=_19.updatePosition(_1a)||_17;}},this);}while(_17&&_16++<_15);this.isUpdating=false;if(_16>=2||!_14&&_18){this.target.contentChange();}},_toggleTargetCover:function(_1b){var _1c=this.get("documentSize");if(_1b&&_1c){_5.set(this.targetCover,{width:(_1c.w)+"px",height:(_1c.h)+"px"});}_5.set(this.targetCover,{display:_1b?"block":"none"});},_togglePoller:function(_1d){var _1e=this;function _1f(){_1e._updateOverlayItems();_9.publish("/site/checksize",{});if(_1e.updateInterval>0){_1e._pollerToken=setTimeout(_1f,_1e.updateInterval);}};if(_1e._pollerToken){clearTimeout(_1e._pollerToken);}if(_1d){_1f();}},_setUpdateIntervalAttr:function(_20){this._set("updateInterval",_20);this._togglePoller(_20>0);},_setEnabledAttr:function(_21){this._set("enabled",_21);if(_21){this._updateOverlayItems();}_1.forEach(this.getChildren(),function(w){w.set("disabled",!_21);},this);this._togglePoller(_21);_5.set(this.domNode,{display:_21?"":"none"});},_setTargetCoverEnabledAttr:function(_22){if(this.targetCoverEnabled===_22){return;}this._toggleTargetCover(_22);this._set("targetCoverEnabled",_22);}});});