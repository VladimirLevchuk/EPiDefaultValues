//>>built
require({cache:{"url:epi-cms/widget/templates/ContentType.html":"<li class=\"clearfix\" data-dojo-attach-event=\"onkeypress:_onKeyPress, onmouseover:_onMouseOver, onmouseout:_onMouseOut\" data-dojo-attach-point=\"focusNode\">\r\n    <div class=\"epi-browserWindow\"><div class=\"epi-browserWindowContent\" data-dojo-attach-point=\"iconNode\">${emptyIconTemplate}</div></div>\r\n    <h3 data-dojo-attach-point=\"nameNode\"></h3>\r\n    <p data-dojo-attach-point=\"descriptionNode\"></p>\r\n</li>"}});define("epi-cms/widget/ContentType",["dojo","dojo/dom-class","dojo/string","dijit/focus","dijit/_Widget","dijit/_TemplatedMixin","epi/i18n!epi/cms/nls/episerver.cms.widget.pagetype","dojo/text!./templates/ContentType.html"],function(_1,_2,_3,_4,_5,_6,_7,_8){return _1.declare([_5,_6],{templateString:_8,contentType:null,iconTemplate:"<img src=\"${0}\" alt=\"${1}\" class=\"epi-preview\" />",emptyIconTemplate:_3.substitute("<div class=\"epi-noPreviewIcon\"><span class=\"epi-noPreview\">${0}</span></div>",[_7.nopreview]),buildRendering:function(){this.inherited(arguments);this.connect(this.domNode,"onclick",this._onClick);this.render();},render:function(){var _9=this.contentType;if(_9){this.set("name",_9.localizedName);this.set("description",_9.localizedDescription||_7.nodescription);this.set("icon",_9.imagePath);}},_setContentTypeAttr:function(_a){this._set("contentType",_a);if(this._created){this.render();}},_setNameAttr:{node:"nameNode",type:"innerText"},_setDescriptionAttr:{node:"descriptionNode",type:"innerText"},_setIconAttr:function(_b){this._set("icon",_b);this.iconNode.innerHTML=_b?_3.substitute(this.iconTemplate,[_b,this.name]):this.emptyIconTemplate;},focus:function(){this.inherited(arguments);_2.add(this.focusNode,"epi-advancedListingItemActive");_4.focus(this.focusNode);},_onBlur:function(){this.inherited(arguments);_2.remove(this.focusNode,"epi-advancedListingItemActive");},_onKeyPress:function(e){if(e.keyCode===13||e.keyCode===32){this.onSelect(this.contentType);}},_onClick:function(){this.onSelect(this.contentType);},_onMouseOver:function(){_2.add(this.focusNode,"epi-advancedListingItemActive");},_onMouseOut:function(){_2.remove(this.focusNode,"epi-advancedListingItemActive");},onSelect:function(_c){}});});