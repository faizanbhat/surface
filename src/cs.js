(function(){var e,t,i,s,r,o,n=[].slice,l=function(e,t){return function(){return e.apply(t,arguments)}};e=jQuery,e(function(){var e;return window.media=[{ad:!0,src:{mp4:"src/propel.mp4",webm:"src/propel.webm"},poster:"src/poster.png",title:"Advertisement",url:"https://www.facebook.com/propel"},{ad:!1,src:{mp4:"src/miller.mp4",webm:"src/miller.webm"},poster:"src/poster.png",title:"Marissa Miller's Shape Magazine Cover",url:""},{ad:!1,src:{mp4:"src/audrina.mp4",webm:"src/audrina.webm"},poster:"src/audrina.png",title:"Behind The Scenes With Audrina Patridge",url:""},{ad:!1,src:{mp4:"src/brooke.mp4",webm:"src/brooke.webm"},poster:"",title:"Brooke Burke's Shape Magazine Cover Shoot",url:""},{ad:!1,src:{mp4:"src/olivia.mp4",webm:"src/olivia.webm"},poster:"",title:"Olivia Munn's Shape Magazine Photoshoot",url:""},{ad:!1,src:{mp4:"src/new.mp4",webm:"src/new.webm"},poster:"",title:"See What's New in Shape Magazine",url:""}],e=new r("ShapeTV",3e3)}),s=function(){function e(){var e,t,i,s,r,o,l,a;r=2<=arguments.length?n.call(arguments,0,a=arguments.length-1):(a=0,[]),e=arguments[a++],this.libraries={jQuery:"http://ajax.googleapis.com/ajax/libs/jquery/$version/jquery.js",videoJs:"vjs/video.dev.js"},i=r[0],l=r[1],t=r[2],this.libraries[i]&&(i=this.libraries[i]),s=function(t){return function(){return t.loaded?void 0:(t.loaded=!0,e())}}(this),o=document.createElement("script"),o.onload=s,o.onreadystatechange=function(){return/loaded|complete/.test(o.readyState)?s():void 0},o.src=i.replace("$version",l),t&&(i=i.replace(".js",".min.js")),document.getElementsByTagName("head")[0].appendChild(o)}return e}(),t=function(){function e(){this.getStyle=l(this.getStyle,this),this.get=l(this.get,this),this.appendDivToParent=l(this.appendDivToParent,this),this.appendDivToBody=l(this.appendDivToBody,this),this.body=document.getElementsByTagName("body")[0],this.head=document.getElementsByTagName("head")[0]}return e.prototype.appendDivToBody=function(e){var t;return t=document.createElement("div"),t.id=e,this.body.appendChild(t)},e.prototype.appendDivToParent=function(e,t){var i,s;return s=document.createElement("div"),s.id=e,i=document.getElementById(t),i.appendChild(s)},e.prototype.get=function(e){var t;return t=document.getElementById(e)},e.prototype.getStyle=function(e){var t;return t=document.createElement("link"),t.href=e,t.rel="stylesheet",t.type="text/css",this.head.appendChild(t)},e}(),i=function(){function t(e,t){this.showProgressBar=l(this.showProgressBar,this),this.hideProgressBar=l(this.hideProgressBar,this),this.isPlaying=l(this.isPlaying,this),this.set_fullscreen_action=l(this.set_fullscreen_action,this),this.disable_fullscreen=l(this.disable_fullscreen,this),this.enable_fullscreen=l(this.enable_fullscreen,this),this.moveToParentWithId=l(this.moveToParentWithId,this),this.setCurrentTime=l(this.setCurrentTime,this),this.loadedmetadata=l(this.loadedmetadata,this),this.ready=l(this.ready,this),this.onpause=l(this.onpause,this),this.onplay=l(this.onplay,this),this.ended=l(this.ended,this),this.timeUpdate=l(this.timeUpdate,this),this.on=l(this.on,this),this.isMuted=l(this.isMuted,this),this.timeRemaining=l(this.timeRemaining,this),this.currentTime=l(this.currentTime,this),this.duration=l(this.duration,this),this.loadFile=l(this.loadFile,this),this.unmute=l(this.unmute,this),this.mute=l(this.mute,this),this.pause=l(this.pause,this),this.play=l(this.play,this);var i;this.id=e,this.parent_id=t,i=document.createElement("video"),i.setAttribute("id",e),i.setAttribute("class","video-js vjs-default-skin vjs-big-play-button"),i.setAttribute("height","100%"),i.setAttribute("width","100%"),i.setAttribute("data-setup","{}"),i.setAttribute("controls",""),document.getElementById(t).appendChild(i),this.elem=videojs(e),this.playing=!1,this.elem.on("play",function(e){return function(){return e.playing=!0}}(this)),this.elem.on("pause",function(e){return function(){return e.playing=!1}}(this))}return t.prototype.play=function(){return this.elem.play()},t.prototype.pause=function(){return this.elem.pause()},t.prototype.mute=function(){return this.elem.volume(0)},t.prototype.unmute=function(){return this.elem.volume(1)},t.prototype.loadFile=function(e){var t;return t=e.sources(),this.elem.src([{type:"video/mp4",src:t.mp4},{type:"video/webm",src:t.webm}]),e.poster()?this.elem.poster(e.poster()):void 0},t.prototype.duration=function(){return this.elem.duration()},t.prototype.currentTime=function(){return this.elem.currentTime()},t.prototype.timeRemaining=function(){return this.duration()-this.currentTime()},t.prototype.isMuted=function(){return this.elem.muted()},t.prototype.on=function(e,t){return this.elem.on(e,t())},t.prototype.timeUpdate=function(e){return this.elem.on("timeupdate",e)},t.prototype.ended=function(e){return this.elem.on("ended",e)},t.prototype.onplay=function(e){return this.elem.on("play",e)},t.prototype.onpause=function(e){return this.elem.on("pause",e)},t.prototype.ready=function(e){return this.elem.ready(e)},t.prototype.loadedmetadata=function(e){return this.elem.on("loadedmetadata",e)},t.prototype.setCurrentTime=function(e){return this.elem.currentTime(e)},t.prototype.moveToParentWithId=function(e){var t,i,s;return t=document.getElementById(this.parent_id),s=document.getElementById(this.id),t.removeChild(s),i=document.getElementById(e),i.appendChild(s),s.width=i.width,s.height=i.height,this.parent_id=e},t.prototype.enable_fullscreen=function(){return e(".vjs-fullscreen-control").css("display","inline")},t.prototype.disable_fullscreen=function(){return e(".vjs-fullscreen-control").css("display","none")},t.prototype.set_fullscreen_action=function(t){return e(".vjs-fullscreen-control")[0].onclick=t},t.prototype.isPlaying=function(){return this.elem.isPlaying()},t.prototype.hideProgressBar=function(){return this.elem.controlBar.progressControl.hide()},t.prototype.showProgressBar=function(){return this.elem.controlBar.progressControl.show()},t}(),r=function(){function r(e,i){var r,n,a,d,h,u;for(this.site_name=e,this.remove_overlay=l(this.remove_overlay,this),this.set_blur=l(this.set_blur,this),this.update_current_time=l(this.update_current_time,this),this.toggle_mute=l(this.toggle_mute,this),this.toggle_slug=l(this.toggle_slug,this),this.rewind=l(this.rewind,this),this.forward=l(this.forward,this),this.load_UI=l(this.load_UI,this),this.next_content_title=l(this.next_content_title,this),this.hide_slug=l(this.hide_slug,this),this.enable_navigation=l(this.enable_navigation,this),this.disable_navigation=l(this.disable_navigation,this),this.enable_minimise=l(this.enable_minimise,this),this.disable_minimise=l(this.disable_minimise,this),this.maximise=l(this.maximise,this),this.minimise=l(this.minimise,this),this.play_previous_video=l(this.play_previous_video,this),this.play_next_video=l(this.play_next_video,this),this.current_video=l(this.current_video,this),this.current_video_index=parseInt(this.getCookie("gmcs-surface-current-video-index")),isNaN(this.current_video_index)&&(this.current_video_index=0),this.current_time=parseInt(this.getCookie("gmcs-surface-current_time")),console.log(this.current_time),isNaN(this.current_time)&&(this.current_time=0),this.start_minimised=parseInt(this.getCookie("gmcs-surface-minimised")),isNaN(this.start_minimised)&&(this.start_minimised=0),this.start_slug_closed=parseInt(this.getCookie("gmcs-surface-start-slug-closed")),isNaN(this.start_slug_closed)&&(this.start_slug_closed=0),console.log("start minimised = "+this.start_minimised),console.log("Current index = "+this.current_video_index),console.log("Current time = "+this.current_time),console.log("start slug closed = "+this.start_slug_closed),this.minimised=!1,this.isSlugClosed=!1,this.player=null,this.videos=[],u=window.media,d=0,h=u.length;h>d;d++)r=u[d],a=new o(r.src,0,r.poster,r.title,r.url,r.ad),this.videos.push(a);this.dom=new t,this.dom.getStyle("src/style.css"),this.dom.getStyle("vjs/video-js.css"),n=function(e){return function(){return e.set_blur(),new s("videoJs",e.load_UI)}}(this),setTimeout(n,i)}return r.prototype.current_video=function(){return this.videos[this.current_video_index]},r.prototype.play_next_video=function(){return this.current_time=0,this.current_video_index<this.videos.length-1?(this.current_video_index=this.current_video_index+1,console.log(this.current_video_index),this.player.loadFile(this.current_video()),this.$video_title.html(this.current_video().title()),this.player.play(),this.setCookie("gmcs-surface-current-video-index",this.current_video_index,1e4),e("#cs-footer").text(this.next_content_title()),this.current_video().isAd()?(this.disable_minimise(),this.disable_navigation(),console.log("isad"),this.player.hideProgressBar()):(console.log("not ad"),this.enable_minimise(),this.enable_navigation(),this.player.showProgressBar())):void 0},r.prototype.play_previous_video=function(){var t,i;for(console.log("play previous reached"),t=this.current_video_index-1,i=[];t>=0;){if(console.log("temp index is "+t),!this.videos[t].isAd()){console.log("Index is not ad"),this.current_video_index=t,console.log("Changed index to "+this.current_video_index),this.player.loadFile(this.current_video()),this.$video_title.html(this.current_video().title()),this.player.play(),this.setCookie("gmcs-surface-current-video-index",this.current_video_index,1e4),this.enable_minimise(),this.enable_navigation(),this.player.showProgressBar(),e("#cs-footer").text(this.next_content_title());break}console.log("Index is ad"),i.push(t-=1)}return i},r.prototype.minimise=function(t){var i;return null==t&&(t=!1),this.$slugCloseButton.css("display","inline"),i=this.player.playing?!0:!1,this.current_video().setPosition(this.player.currentTime()),this.remove_overlay(),this.$wrapper.hide(),this.player.moveToParentWithId("cs-small-player-container"),this.player.enable_fullscreen(),e("#cs-slug-wrapper").show("100"),this.minimised=!0,i&&this.player.play(),this.setCookie("gmcs-surface-minimised",1,1e4),t?this.toggle_slug():void 0},r.prototype.maximise=function(){return this.$slugCloseButton.css("display","none"),this.minimised===!0?(this.player.disable_fullscreen(),this.hide_slug(),this.set_blur(),this.player.moveToParentWithId("cs-player-container"),this.$wrapper.show(),this.player.play(),this.minimised=!1,this.setCookie("gmcs-surface-minimised",0,1e4)):void 0},r.prototype.disable_minimise=function(){return this.current_video().isAd()?(e("#cs-close").addClass("cs-close-inactive"),e("#cs-close").attr("onclick","").unbind("click")):void 0},r.prototype.enable_minimise=function(){return e("#cs-close").removeClass("cs-close-inactive"),e("#cs-close").attr("onclick","").unbind("click"),e("#cs-close").click(function(e){return function(){return e.minimise()}}(this))},r.prototype.disable_navigation=function(){return console.log("disabling nav"),e("#cs-forward").addClass("cs-forward-disable"),e("#cs-forward").attr("onclick","").unbind("click"),e("#cs-rewind").addClass("cs-rewind-disable"),e("#cs-rewind").attr("onclick","").unbind("click")},r.prototype.enable_navigation=function(){var t,i,s;for(s=this.current_video_index-1,i=!1;s>=0;)this.videos[s].isAd()||(i=!0),s-=1;for(i?e("#cs-rewind").show():e("#cs-rewind").hide(),s=this.current_video_index+1,t=!1;s<this.videos.length;)this.videos[s].isAd()||(t=!0),s+=1;return t?e("#cs-forward").show():e("#cs-forward").hide(),console.log("enabling nav"),e("#cs-forward").removeClass("cs-forward-disable"),e("#cs-forward").attr("onclick","").unbind("click"),e("#cs-forward").click(this.forward),e("#cs-rewind").removeClass("cs-rewind-disable"),e("#cs-rewind").attr("onclick","").unbind("click"),e("#cs-rewind").click(this.rewind)},r.prototype.hide_slug=function(){return this.current_video().setPosition(this.player.currentTime()),e("#cs-slug-wrapper").hide()},r.prototype.next_content_title=function(){var t;for(t=this.current_video_index+1;t<this.videos.length;){if(!this.videos[t].isAd())return this.videos[this.current_video_index].isAd()?(e("#cs-footer").attr("onclick","").unbind("click"),e("#cs-footer").removeClass("footer-enabled"),"Coming Up: "+this.videos[t].title()):(e("#cs-footer").attr("onclick","").unbind("click"),e("#cs-footer").click(this.forward),e("#cs-footer").addClass("footer-enabled"),"Next: "+this.videos[t].title());t+=1}return""},r.prototype.load_UI=function(){var t,s,r,o;return o=document.createElement("div"),o.id="cs-wrapper",t=document.getElementsByTagName("html")[0],t.appendChild(o),this.dom.appendDivToParent("cs-overlay","cs-wrapper"),this.dom.appendDivToParent("cs-header","cs-wrapper"),this.dom.appendDivToParent("cs-close","cs-header"),this.dom.appendDivToParent("cs-main","cs-wrapper"),this.dom.appendDivToParent("cs-info-wrapper","cs-main"),this.dom.appendDivToParent("cs-top-line","cs-info-wrapper"),this.dom.appendDivToParent("cs-rule","cs-info-wrapper"),this.dom.appendDivToParent("cs-bottom-line","cs-info-wrapper"),this.dom.appendDivToParent("cs-label","cs-top-line"),this.dom.appendDivToParent("cs-video-title","cs-bottom-line"),this.dom.appendDivToParent("cs-video-time-remaining","cs-bottom-line"),this.dom.appendDivToParent("cs-player-wrapper","cs-main"),this.dom.appendDivToParent("cs-rewind","cs-player-wrapper"),this.dom.appendDivToParent("cs-forward","cs-player-wrapper"),this.dom.appendDivToParent("cs-player-container","cs-player-wrapper"),this.dom.appendDivToParent("cs-footer","cs-player-wrapper"),this.$wrapper=e("#cs-wrapper"),this.$video_title=e("#cs-video-title"),s=e("#cs-label"),r=e("#cs-player-container"),e("#cs-close").addClass("cs-minimise"),e("#cs-rewind").hide(),r.addClass("largeVideoWrapper"),s.html(this.site_name),this.$video_title.html(this.current_video().isAd()?this.videos[this.current_video_index+1].title():this.current_video().title()),this.enable_minimise(),this.player=new i("cs-video-player","cs-player-container"),this.player.ready(function(t){return function(){return t.player.loadFile(t.current_video()),t.player.mute(),t.current_time>0&&t.player.loadedmetadata(function(){return t.player.setCurrentTime(t.current_time)}),t.player.ended(t.play_next_video),t.player.set_fullscreen_action(t.maximise),e("#cs-footer").text(t.next_content_title()),t.current_video().isAd()?(t.disable_navigation(),t.player.onplay(function(){return t.disable_minimise()}),t.player.hideProgressBar()):t.enable_navigation(),t.player.onplay(function(){return t.$video_title.html(t.current_video().title())}),t.player.timeUpdate(t.update_current_time),t.slugCloseButton=t.player.elem.addChild("button",{}),t.slugCloseButton.addClass(t.isSlugClosed?"slug-open-btn slug-slide-button":"slug-close-btn slug-slide-button"),t.slugCloseButton.on("click",t.toggle_slug),t.$slugCloseButton=e(".slug-slide-button"),t.$slugCloseButton.css("display","none")}}(this)),this.dom.appendDivToBody("cs-slug-wrapper"),this.$slugWrapper=e("#cs-slug-wrapper"),this.$slugWrapper.addClass(this.isSlugClosed?"slug-closed":"slug-open"),this.dom.appendDivToParent("cs-small-player-container","cs-slug-wrapper"),r=e("#cs-small-player-container"),r.addClass("smallVideoWrapper"),this.hide_slug(),this.start_minimised>0?this.minimise(this.start_slug_closed>0?!0:!1):void 0},r.prototype.forward=function(){return console.log("forward"),this.current_video().isAd()?void 0:this.play_next_video()},r.prototype.rewind=function(){return this.play_previous_video()},r.prototype.toggle_slug=function(){return this.isSlugClosed?(console.log("it's closed - opening"),this.$slugWrapper.removeClass("slug-closed"),this.$slugWrapper.addClass("slug-open"),this.$slugCloseButton.removeClass("slug-open-btn"),this.$slugCloseButton.addClass("slug-close-btn"),this.player.play(),this.isSlugClosed=!1,this.setCookie("gmcs-surface-start-slug-closed",0,1e4)):(console.log("it's not closed - closing"),this.$slugWrapper.removeClass("slug-open"),this.$slugWrapper.addClass("slug-closed"),this.$slugCloseButton.removeClass("slug-close-btn"),this.$slugCloseButton.addClass("slug-open-btn"),this.player.pause(),this.isSlugClosed=!0,this.setCookie("gmcs-surface-start-slug-closed",1,1e4))},r.prototype.toggle_mute=function(){return this.player.isMuted()?this.player.unmute():this.player.mute()},r.prototype.update_current_time=function(){return this.player.playing?this.setCookie("gmcs-surface-current_time",this.player.currentTime(),1e4):void 0},r.prototype.set_blur=function(){return e("body").css("filter","blur(15px)"),e("body").css("filter","url(src/blur.svg#blur)"),e("body").css("-webkit-filter","blur(15px)"),e("body").css("-moz-filter","blur(15px)"),e("body").css("-o-filter","blur(15px)"),e("body").css("-ms-filter","blur(15px)"),e("html, body").css({overflow:"hidden",height:"100%"})},r.prototype.remove_overlay=function(){return e("body").css("-webkit-filter","blur(0px)"),e("html").css("filter","blur(0px)"),e("body").css("filter","url(src/blur.svg#noBlur)"),e("body").css("-moz-filter","blur(0px)"),e("body").css("-o-filter","blur(0px)"),e("body").css("-ms-filter","blur(0px)"),e("html, body").css({overflow:"auto",height:"auto"})},r.prototype.setCookie=function(e,t,i){var s,r;return i?(s=new Date,s.setTime(s.getTime()+24*i*60*60*1e3),r="; expires="+s.toGMTString()):r="",document.cookie=e+"="+t+r+"; path=/"},r.prototype.getCookie=function(e){var t,i,s,r;for(r=e+"=",i=document.cookie.split(";"),s=0;s<i.length;){for(t=i[s];" "===t.charAt(0);)t=t.substring(1,t.length);if(0===t.indexOf(r))return t.substring(r.length,t.length);s++}return null},r.prototype.deleteCookie=function(e){return setCookie(e,"",-1)},r}(),o=function(){function e(e,t,i,s,r,o){this.video_url=r,this.ad=o,this.isAd=l(this.isAd,this),this.poster=l(this.poster,this),this.url=l(this.url,this),this.title=l(this.title,this),this.setPosition=l(this.setPosition,this),this.position=l(this.position,this),this.sources=l(this.sources,this),this.file_src=null!=e?e:"",this.playback_position=null!=t?t:0,this.video_poster=null!=i?i:"",this.video_title=null!=s?s:""}return e.prototype.sources=function(){return this.file_src},e.prototype.position=function(){return this.playback_position},e.prototype.setPosition=function(e){return this.playback_position=e},e.prototype.title=function(){return this.video_title},e.prototype.url=function(){return this.video_url},e.prototype.poster=function(){return this.video_poster.length>0?this.video_poster:null},e.prototype.isAd=function(){return this.ad},e}()}).call(this);