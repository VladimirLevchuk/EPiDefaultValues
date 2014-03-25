//>>built
define("epi-cms/ErrorDialog",["epi","dojo","dijit/Dialog"],function(_1,_2,_3){_1.cms=_1.cms||{};return _1.cms.ErrorDialog=function(){var _4=null;var _5="/shell/cms/errordialog/";var _6={title:"A background request has failed",reloadtext:"Reload",heading:"An unhandled error has occured in a background request.",description:"The page may not function properly unless it's reloaded. Press the button below to reload the page now."};var _7="        <div style=\"padding-bottom:10px; width:600px\">             <h1>${heading}</h1>             <div style=\"background-color:#FFF; border:1px solid #000; padding:3px\">${errorMessage}</div>             <p>${description}</p>             <input type=\"button\" onclick=\"document.location.reload()\" value=\"${reloadtext}\" />         </div>     ";function _8(){if(!_4){_4=new _3();}return _4;};function _9(_a,_b){var _c=_2.create("div",{innerHTML:_2.string.substitute(_7,_2.mixin({errorMessage:_a},_6))});var _d=_2.create("iframe",{style:"width:100%; height:400px; border:inset 1px #CCC",frameborder:"0",width:"600",height:"400",src:"about:blank"});if(_d.attachEvent){var _e=function(){_d.detachEvent("onload",_e);_d.contentWindow.document.write(_b);};_d.attachEvent("onload",_e);}else{var _f=_2.connect(_d,"load",null,function(){_2.disconnect(_f);_d.contentWindow.document.write(_b);});}_2.place(_d,_c);return _c;};var pub={getTextResourceKeys:function(){var _10=[];for(var p in _6){_10.push(_5+p);}return _10;},setTextResources:function(_11){if(!_2.isArray(_11)){return;}_2.forEach(_11,function(_12){if(_2.isString(_12.key)&&_2.isString(_12.text)){_6[_12.key.replace(_5,"")]=_12.text;}});},showXmlHttpError:function(_13,_14){var _15=_8();var _16="";var _17="";if(_14&&_14.xhr){_16=_14.xhr.responseText;}if(_2.isObject(_13)&&_2.isString(_13.message)){_17=_13.message;}else{_17=_13;}content=_9(_17,_16);_15.set("title",_6.title);_15.set("content",content);_15.show();}};return pub;}();});