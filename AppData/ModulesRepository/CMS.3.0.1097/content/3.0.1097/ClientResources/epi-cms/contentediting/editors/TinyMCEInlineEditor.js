//>>built
require({cache:{"url:epi-cms/contentediting/editors/templates/TinyMCEInlineEditor.html":"<div id=\"widget_${id}\" style=\"position: relative; overflow: visible;\">\r\n    <div data-dojo-attach-point=\"stateNode, tooltipNode\">\r\n        <textarea data-dojo-attach-point=\"editorFrame\" id=\"${id}_editorFrame\" style=\"border: none; visibility: hidden; position: absolute; top:0; left:0; bottom:0; right:0;\"></textarea>\r\n    </div>\r\n    <div data-dojo-attach-point=\"dndOverlay\" style=\"background: rgba(0, 0, 0, 0.01); position: absolute; left: 0; top: 0; right: 0; bottom: 0; display: none\"></div>\r\n</div>\r\n"}});define("epi-cms/contentediting/editors/TinyMCEInlineEditor",["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/dom","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dojo/aspect","dojo/on","dojo/sniff","epi/string","epi-cms/contentediting/_HasFloatingComponent","epi-cms/contentediting/editors/TinyMCEEditor","dojo/text!./templates/TinyMCEInlineEditor.html"],function(_1,_2,_3,_4,_5,_6,_7,_8,on,_9,_a,_b,_c,_d){return _2([_b,_c],{baseClass:"epiTinyMCEInlineEditor",autoResizable:true,templateString:_d,inlineSettings:null,supportCustomDnd:true,_lastRng:null,_maxCheckRenderedTime:10,_editorIframe:null,onEditorBlur:function(_e){this._stopEditing();},onEditorResizing:function(_f){},onEditorResized:function(_10){},isEditing:function(){return this.domNode&&_7.get(this.domNode,"display").toLowerCase()!=="none";},startup:function(){this._checkingTime=0;if(this._started){return;}this.inherited(arguments);if(!this.ready){return;}this.own(this.watch("state",_3.hitch(this,function(_11,_12,_13){on.emit(this.domNode,"editorstatechanged",_13);})));},destroy:function(){this._clearLocalDefers();this._externalToolbar=this._toolbarSizeBox=this._toolbarRelativeContainer=this._toolbarRefContainer=null;this._latestButtonIds=this._editorIframe=this._toolbarFinishRender=null;this._lastRng=null;this.inherited(arguments);},focus:function(){this.inherited(arguments);var _14=this.getEditor();if(!_14){return;}_14.selection.setRng(this._lastRng||_14.selection.getRng());this.resizeEditor();},resizeEditor:function(){if(_7.get(this.containerNode,"display")=="none"){this.onEditorResized();return;}var _15=this.getEditor(),_16={"height":"auto"},_17=this._getEditorIframe();_7.set(_17,_16);_16.height=_15.getBody().parentNode.scrollHeight+"px";this.onEditorResizing({"style":_16});_7.set(_17,_16);this.onEditorResized(_3.hitch(this,this._floatToolbar));this.isResized=true;},_onBlur:function(){},_updateTinySettings:function(){this.inherited(arguments);this.settings.width=this.settings.height="100%";this.settings=_3.mixin(this.settings,this.inlineSettings);},_setupEditorEventHandling:function(_18,_19){this.inherited(arguments);this._disableSetTopStyle();this._appendEditorResizeHandler(_19);this._appendEditorFloatToolbarHandler(_19);_9("ie")&&_19.onNodeChange.add(_3.hitch(this,function(_1a){this._lastRng=_1a.selection.getRng();}));},_clearLocalDefers:function(){this._deferToolbarFullSize&&this._deferToolbarFullSize.remove();this._deferOnKeyUp&&this._deferOnKeyUp.remove();},_appendEditorResizeHandler:function(_1b){var _1c=_3.hitch(this,this.resizeEditor);_1b.onChange.add(_1c);_1b.onSetContent.add(_1c);_1b.onPaste.add(_1c);_1b.onPostRender.add(_1c);_1b.onKeyUp.add(_3.hitch(this,function(){this._clearLocalDefers();this._deferOnKeyUp=this.defer(_1c,10);}));_1b.onInit.add(_3.hitch(this,function(ed){if(this._isFullScreen(ed)){_5.remove(ed.getBody(),this.settings.body_class);}}));},_appendEditorFloatToolbarHandler:function(_1d){_1d.onInit.add(_3.hitch(this,this._showEditorToolbar));_1d.onActivate.add(_3.hitch(this,this._floatToolbar));_1d.onMouseUp.add(_3.hitch(this,this._floatToolbar));},_showEditorToolbar:function(_1e){if(!_1e){return;}this.focus();_1e.dom.show(this._getExternalToolbar());this._floatToolbar();},_disableSetTopStyle:function(){this.own(_8.before(this.getEditorDOM(),"setStyle",_3.hitch(this,function(n,na,v){if(n==this._getExternalToolbar()&&na==="top"){return [];}return;})));},_floatToolbar:function(){this._clearLocalDefers();if(!this._getExternalToolbar()){return;}if(!this._isToolbarRendered()){this._deferToolbarFullSize=this.defer(this._floatToolbar,100);return;}this.onComponentFloat(this._getComponentFloatInfo());},_getComponentFloatInfo:function(){return {"componentInfo":{"component":this._getExternalToolbar(),"componentSizeBox":_3.hitch(this,function(){return this._toolbarSizeBox||(this._toolbarSizeBox=_4.byId(this.editorFrame.id+"_tblext"));})(),"relativeContainer":_3.hitch(this,function(){return this._toolbarRelativeContainer||(this._toolbarRelativeContainer=this._getExternalToolbar().parentNode);})(),"refContainer":_3.hitch(this,function(){return this._toolbarRefContainer||(this._toolbarRefContainer=_4.byId(this.editorFrame.id+"_parent"));})()},"floatingInfo":{"refreshPosition":false}};},_isToolbarRendered:function(){if(this._checkingTime>this._maxCheckRenderedTime){return true;}this._checkingTime++;var _1f=null,_20=0;return this._toolbarFinishRender||(this._toolbarFinishRender=this._getToolbarLatestButtonIds().every(function(_21){_1f=_4.byId(this.editorFrame.id+"_"+_21);_20=_1f&&_6.position(_1f).w;return _20!==0;},this));},_getToolbarLatestButtonIds:function(){if(this._latestButtonIds){return this._latestButtonIds;}this._latestButtonIds=[];var _22=null;for(var _23 in this.settings){if(_23.toLowerCase().indexOf("theme_advanced_button")!=-1){_22=this.settings[_23].split(",").pop();if(!_a.isNullOrEmpty(_22)){this._latestButtonIds.push(_22);}}}return this._latestButtonIds;},_getExternalToolbar:function(){return this._externalToolbar||(this._externalToolbar=_4.byId(this.editorFrame.id+"_external"));},_getEditorIframe:function(){return this._editorIframe||(this._editorIframe=_4.byId(this.editorFrame.id+"_ifr"));}});});