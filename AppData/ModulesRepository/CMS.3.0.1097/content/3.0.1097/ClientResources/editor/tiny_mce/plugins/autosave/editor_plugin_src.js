(function(tinymce){var undefined,unloadHandlerAdded,PLUGIN_NAME="autosave",RESTORE_DRAFT="restoredraft",TRUE=!0,Dispatcher=tinymce.util.Dispatcher;tinymce.create("tinymce.plugins.AutoSave",{init:function(ed){function parseTime(time){var multipels={s:1e3,m:6e4};return time=/^(\d+)([ms]?)$/.exec(""+time),(time[2]?multipels[time[2]]:1)*parseInt(time)}var self=this,settings=ed.settings;self.editor=ed,tinymce.each({ask_before_unload:TRUE,interval:"30s",retention:"20m",minlength:50},function(value,key){key=PLUGIN_NAME+"_"+key,settings[key]===undefined&&(settings[key]=value)}),settings.autosave_interval=parseTime(settings.autosave_interval),settings.autosave_retention=parseTime(settings.autosave_retention),ed.addButton(RESTORE_DRAFT,{title:PLUGIN_NAME+".restore_content",onclick:function(){ed.getContent({draft:!0}).replace(/\s|&nbsp;|<\/?p[^>]*>|<br[^>]*>/gi,"").length>0?ed.windowManager.confirm(PLUGIN_NAME+".warning_message",function(ok){ok&&self.restoreDraft()}):self.restoreDraft()}}),ed.onNodeChange.add(function(){var controlManager=ed.controlManager;controlManager.get(RESTORE_DRAFT)&&controlManager.setDisabled(RESTORE_DRAFT,!self.hasDraft())}),ed.onInit.add(function(){ed.controlManager.get(RESTORE_DRAFT)&&(self.setupStorage(ed),setInterval(function(){ed.removed||(self.storeDraft(),ed.nodeChanged())},settings.autosave_interval))}),self.onStoreDraft=new Dispatcher(self),self.onRestoreDraft=new Dispatcher(self),self.onRemoveDraft=new Dispatcher(self),unloadHandlerAdded||(window.onbeforeunload=tinymce.plugins.AutoSave._beforeUnloadHandler,unloadHandlerAdded=TRUE)},getInfo:function(){return{longname:"Auto save",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",infourl:"http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/autosave",version:tinymce.majorVersion+"."+tinymce.minorVersion}},getExpDate:function(){return new Date((new Date).getTime()+this.editor.settings.autosave_retention).toUTCString()},setupStorage:function(ed){var self=this,testKey=PLUGIN_NAME+"_test",testVal="OK";self.key=PLUGIN_NAME+ed.id,tinymce.each([function(){return localStorage&&(localStorage.setItem(testKey,testVal),localStorage.getItem(testKey)===testVal)?(localStorage.removeItem(testKey),localStorage):undefined},function(){return sessionStorage&&(sessionStorage.setItem(testKey,testVal),sessionStorage.getItem(testKey)===testVal)?(sessionStorage.removeItem(testKey),sessionStorage):undefined},function(){return tinymce.isIE?(ed.getElement().style.behavior="url('#default#userData')",{autoExpires:TRUE,setItem:function(key,value){var userDataElement=ed.getElement();userDataElement.setAttribute(key,value),userDataElement.expires=self.getExpDate();try{userDataElement.save("TinyMCE")}catch(e){}},getItem:function(key){var userDataElement=ed.getElement();try{return userDataElement.load("TinyMCE"),userDataElement.getAttribute(key)}catch(e){return null}},removeItem:function(key){ed.getElement().removeAttribute(key)}}):undefined}],function(setup){try{if(self.storage=setup(),self.storage)return!1}catch(e){}})},storeDraft:function(){var expires,content,self=this,storage=self.storage,editor=self.editor;if(storage){if(!storage.getItem(self.key)&&!editor.isDirty())return;content=editor.getContent({draft:!0}),content.length>editor.settings.autosave_minlength&&(expires=self.getExpDate(),self.storage.autoExpires||self.storage.setItem(self.key+"_expires",expires),self.storage.setItem(self.key,content),self.onStoreDraft.dispatch(self,{expires:expires,content:content}))}},restoreDraft:function(){var content,self=this,storage=self.storage;storage&&(content=storage.getItem(self.key),content&&(self.editor.setContent(content),self.onRestoreDraft.dispatch(self,{content:content})))},hasDraft:function(){var expDate,exists,self=this,storage=self.storage;if(storage&&(exists=!!storage.getItem(self.key))){if(self.storage.autoExpires)return TRUE;if(expDate=new Date(storage.getItem(self.key+"_expires")),(new Date).getTime()<expDate.getTime())return TRUE;self.removeDraft()}return!1},removeDraft:function(){var content,self=this,storage=self.storage,key=self.key;storage&&(content=storage.getItem(key),storage.removeItem(key),storage.removeItem(key+"_expires"),content&&self.onRemoveDraft.dispatch(self,{content:content}))},"static":{_beforeUnloadHandler:function(){var msg;return tinymce.each(tinyMCE.editors,function(ed){ed.plugins.autosave&&ed.plugins.autosave.storeDraft(),ed.getParam("fullscreen_is_enabled")||!msg&&ed.isDirty()&&ed.getParam("autosave_ask_before_unload")&&(msg=ed.getLang("autosave.unload_msg"))}),msg}}}),tinymce.PluginManager.add("autosave",tinymce.plugins.AutoSave)})(tinymce);