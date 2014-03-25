//>>built
define("epi-cms/widget/_DndStateMixin",["dojo","dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/_base/Deferred","dojo/aspect","dojo/dom-class"],function(_1,_2,_3,_4,_5,_6,_7){return _3([],{baseDndStateClass:"epi-dropTarget",dndStateClass:null,dropTarget:null,_aspectAfterHandler:null,postCreate:function(){this.subscribe("/dnd/start","_onDndStart");this.subscribe("/dnd/cancel","_onDndCancel");this.subscribe("/dnd/drop","_onDndDrop");if(this.dropTarget){this._aspectAfterHandler=_6.after(this.dropTarget,"onDndStart",_4.hitch(this,"_onAfterDndStart"));}},_getDndStateClassAttr:function(){var _8=this.canAccept()?"Enabled":"Disabled";this.dndStateClass=this.baseDndStateClass+_8;return this.dndStateClass;},canAccept:function(){return false;},_onDndStart:function(){if(!this.dropTarget){_7.add(this.domNode,this.get("DndStateClass"));}},_onAfterDndStart:function(){_7.add(this.domNode,this.get("DndStateClass"));},_onDndCancel:function(){_7.remove(this.domNode,this.dndStateClass);},_onDndDrop:function(){_7.remove(this.domNode,this.dndStateClass);},destroy:function(){this.inherited(arguments);if(this._aspectAfterHandler){this._aspectAfterHandler.remove();this._aspectAfterHandler=null;}}});});