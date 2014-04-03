// Generated by CoffeeScript 1.6.3
(function() {
  var $, DomManager, Player, ScriptLoader, Surface, VideoFile,
    __slice = [].slice,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  $ = jQuery;

  $(function() {
    var surface;
    window.media = [
      {
        ad: true,
        src: {
          mp4: "src/propel.mp4",
          webm: "src/propel.webm"
        },
        poster: "src/poster.png",
        title: "Advertisement",
        url: "https://www.facebook.com/propel"
      }, {
        ad: false,
        src: {
          mp4: "src/miller.mp4",
          webm: "src/miller.webm"
        },
        poster: "src/poster.png",
        title: "Marissa Miller's Shape Magazine Cover",
        url: ""
      }, {
        ad: false,
        src: {
          mp4: "src/audrina.mp4",
          webm: "src/audrina.webm"
        },
        poster: "src/audrina.png",
        title: "Audrina Patridge",
        url: ""
      }
    ];
    return surface = new Surface("ShapeTV", 0);
  });

  ScriptLoader = (function() {
    function ScriptLoader() {
      var callback, compressed, lib, loadCallback, options, s, version, _i,
        _this = this;
      options = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), callback = arguments[_i++];
      this.libraries = {
        jQuery: "http://ajax.googleapis.com/ajax/libs/jquery/$version/jquery.js",
        videoJs: "vjs/video.dev.js"
      };
      lib = options[0], version = options[1], compressed = options[2];
      if (this.libraries[lib]) {
        lib = this.libraries[lib];
      }
      loadCallback = function() {
        if (_this.loaded) {
          return;
        }
        _this.loaded = true;
        return callback();
      };
      s = document.createElement('script');
      s.onload = loadCallback;
      s.onreadystatechange = function() {
        if (/loaded|complete/.test(s.readyState)) {
          return loadCallback();
        }
      };
      s.src = lib.replace('$version', version);
      if (compressed) {
        lib = lib.replace('.js', '.min.js');
      }
      document.getElementsByTagName('head')[0].appendChild(s);
    }

    return ScriptLoader;

  })();

  DomManager = (function() {
    function DomManager() {
      this.getStyle = __bind(this.getStyle, this);
      this.get = __bind(this.get, this);
      this.appendDivToParent = __bind(this.appendDivToParent, this);
      this.appendDivToBody = __bind(this.appendDivToBody, this);
      this.body = document.getElementsByTagName("body")[0];
      this.head = document.getElementsByTagName("head")[0];
    }

    DomManager.prototype.appendDivToBody = function(id) {
      var s;
      s = document.createElement("div");
      s.id = id;
      return this.body.appendChild(s);
    };

    DomManager.prototype.appendDivToParent = function(id, parent_id) {
      var parent, s;
      s = document.createElement("div");
      s.id = id;
      parent = document.getElementById(parent_id);
      return parent.appendChild(s);
    };

    DomManager.prototype.get = function(id) {
      var e;
      e = document.getElementById(id);
      return e;
    };

    DomManager.prototype.getStyle = function(url) {
      var l;
      l = document.createElement("link");
      l.href = url;
      l.rel = "stylesheet";
      l.type = "text/css";
      return this.head.appendChild(l);
    };

    return DomManager;

  })();

  Player = (function() {
    function Player(id, parent_id) {
      this.showProgressBar = __bind(this.showProgressBar, this);
      this.hideProgressBar = __bind(this.hideProgressBar, this);
      this.isPlaying = __bind(this.isPlaying, this);
      this.set_fullscreen_action = __bind(this.set_fullscreen_action, this);
      this.disable_fullscreen = __bind(this.disable_fullscreen, this);
      this.enable_fullscreen = __bind(this.enable_fullscreen, this);
      this.moveToParentWithId = __bind(this.moveToParentWithId, this);
      this.setCurrentTime = __bind(this.setCurrentTime, this);
      this.loadedmetadata = __bind(this.loadedmetadata, this);
      this.ready = __bind(this.ready, this);
      this.onpause = __bind(this.onpause, this);
      this.onplay = __bind(this.onplay, this);
      this.ended = __bind(this.ended, this);
      this.timeUpdate = __bind(this.timeUpdate, this);
      this.on = __bind(this.on, this);
      this.isMuted = __bind(this.isMuted, this);
      this.isMuted = __bind(this.isMuted, this);
      this.timeRemaining = __bind(this.timeRemaining, this);
      this.currentTime = __bind(this.currentTime, this);
      this.duration = __bind(this.duration, this);
      this.loadFile = __bind(this.loadFile, this);
      this.unmute = __bind(this.unmute, this);
      this.mute = __bind(this.mute, this);
      this.pause = __bind(this.pause, this);
      this.play = __bind(this.play, this);
      var p,
        _this = this;
      this.id = id;
      this.parent_id = parent_id;
      p = document.createElement("video");
      p.setAttribute("id", id);
      p.setAttribute("class", "video-js vjs-default-skin vjs-big-play-button");
      p.setAttribute("height", "100%");
      p.setAttribute("width", "100%");
      p.setAttribute("data-setup", "{}");
      p.setAttribute("controls", "");
      document.getElementById(parent_id).appendChild(p);
      this.elem = videojs(id);
      this.playing = false;
      this.elem.on("play", function() {
        return _this.playing = true;
      });
      this.elem.on("pause", function() {
        return _this.playing = false;
      });
    }

    Player.prototype.play = function() {
      return this.elem.play();
    };

    Player.prototype.pause = function() {
      return this.elem.pause();
    };

    Player.prototype.mute = function() {
      return this.elem.volume(0);
    };

    Player.prototype.unmute = function() {
      return this.elem.volume(1);
    };

    Player.prototype.loadFile = function(vf) {
      var s;
      s = vf.sources();
      this.elem.src([
        {
          type: "video/mp4",
          src: s.mp4
        }, {
          type: "video/webm",
          src: s.webm
        }
      ]);
      if (vf.poster()) {
        return this.elem.poster(vf.poster());
      }
    };

    Player.prototype.duration = function() {
      return this.elem.duration();
    };

    Player.prototype.currentTime = function() {
      return this.elem.currentTime();
    };

    Player.prototype.timeRemaining = function() {
      return this.duration() - this.currentTime();
    };

    Player.prototype.isMuted = function() {
      return this.elem.muted();
    };

    Player.prototype.isMuted = function() {
      return this.elem.isPlaying();
    };

    Player.prototype.on = function(callback, func) {
      return this.elem.on(callback, func());
    };

    Player.prototype.timeUpdate = function(func) {
      return this.elem.on("timeupdate", func);
    };

    Player.prototype.ended = function(func) {
      return this.elem.on("ended", func);
    };

    Player.prototype.onplay = function(func) {
      return this.elem.on("play", func);
    };

    Player.prototype.onpause = function(func) {
      return this.elem.on("pause", func);
    };

    Player.prototype.ready = function(func) {
      return this.elem.ready(func);
    };

    Player.prototype.loadedmetadata = function(func) {
      return this.elem.on("loadedmetadata", func);
    };

    Player.prototype.setCurrentTime = function(time) {
      return this.elem.currentTime(time);
    };

    Player.prototype.moveToParentWithId = function(new_parent_id) {
      var container, new_parent, player_div;
      container = document.getElementById(this.parent_id);
      player_div = document.getElementById(this.id);
      container.removeChild(player_div);
      new_parent = document.getElementById(new_parent_id);
      new_parent.appendChild(player_div);
      player_div.width = new_parent.width;
      player_div.height = new_parent.height;
      return this.parent_id = new_parent_id;
    };

    Player.prototype.enable_fullscreen = function() {
      return $(".vjs-fullscreen-control").css("display", "inline");
    };

    Player.prototype.disable_fullscreen = function() {
      return $(".vjs-fullscreen-control").css("display", "none");
    };

    Player.prototype.set_fullscreen_action = function(func) {
      return $(".vjs-fullscreen-control")[0].onclick = func;
    };

    Player.prototype.isPlaying = function() {
      return this.elem.isPlaying();
    };

    Player.prototype.hideProgressBar = function() {
      return this.elem.controlBar.progressControl.hide();
    };

    Player.prototype.showProgressBar = function() {
      return this.elem.controlBar.progressControl.show();
    };

    return Player;

  })();

  Surface = (function() {
    function Surface(site_name, delay) {
      var item, run_surface, vf, _i, _len, _ref,
        _this = this;
      this.site_name = site_name;
      this.remove_overlay = __bind(this.remove_overlay, this);
      this.set_blur = __bind(this.set_blur, this);
      this.update_current_time = __bind(this.update_current_time, this);
      this.toggle_mute = __bind(this.toggle_mute, this);
      this.set_bindings = __bind(this.set_bindings, this);
      this.toggle_slug = __bind(this.toggle_slug, this);
      this.load_UI = __bind(this.load_UI, this);
      this.hide_slug = __bind(this.hide_slug, this);
      this.enable_minimise = __bind(this.enable_minimise, this);
      this.disable_minimise = __bind(this.disable_minimise, this);
      this.maximise = __bind(this.maximise, this);
      this.minimise = __bind(this.minimise, this);
      this.play_next_video = __bind(this.play_next_video, this);
      this.current_video = __bind(this.current_video, this);
      this.current_video_index = this.getCookie("gmcs-surface-current-video-index");
      if (this.current_video_index === null) {
        this.current_video_index = 0;
      }
      this.current_time = this.getCookie("gmcs-surface-current_time");
      if (this.current_time === null) {
        this.current_time = 0;
      }
      this.start_minimised = this.getCookie("gmcs-surface-minimised");
      if (this.start_minimised === null) {
        this.start_minimised = 0;
      }
      console.log("start minimised = " + this.start_minimised);
      console.log("Current index = " + this.current_video_index);
      console.log("Current time = " + this.current_time);
      this.minimised = false;
      this.isSlugClosed = false;
      this.player = null;
      this.videos = [];
      _ref = window.media;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        vf = new VideoFile(item.src, 0, item.poster, item.title, item.url, item.ad);
        this.videos.push(vf);
      }
      this.dom = new DomManager();
      this.dom.getStyle("src/style.css");
      this.dom.getStyle("vjs/video-js.css");
      run_surface = function() {
        _this.set_blur();
        return new ScriptLoader("videoJs", _this.load_UI);
      };
      setTimeout(run_surface, delay);
    }

    Surface.prototype.current_video = function() {
      return this.videos[this.current_video_index];
    };

    Surface.prototype.play_next_video = function() {
      if ((this.current_video_index + 1) < this.videos.length) {
        this.current_video_index = this.current_video_index + 1;
        this.player.loadFile(this.current_video());
        this.$video_title.html(this.current_video().title());
        this.player.play();
        this.setCookie("gmcs-surface-current-video-index", this.current_video_index, 10000);
      }
      if (this.current_video().isAd()) {
        this.disable_minimise();
        return this.player.hideProgressBar();
      } else {
        this.enable_minimise();
        return this.player.showProgressBar();
      }
    };

    Surface.prototype.minimise = function() {
      var playing;
      this.$slugCloseButton.css("display", "inline");
      if (this.player.playing) {
        playing = true;
      } else {
        playing = false;
      }
      this.current_video().setPosition(this.player.currentTime());
      this.remove_overlay();
      this.$wrapper.hide();
      this.player.moveToParentWithId("cs-small-player-container");
      this.player.enable_fullscreen();
      $("#cs-slug-wrapper").show();
      this.minimised = true;
      if (playing) {
        this.player.play();
      }
      return this.setCookie("gmcs-surface-minimised", 1, 10000);
    };

    Surface.prototype.maximise = function() {
      this.$slugCloseButton.css("display", "inline");
      if (this.minimised === true) {
        this.player.disable_fullscreen();
        this.hide_slug();
        this.set_blur();
        this.player.moveToParentWithId("cs-player-container");
        this.$wrapper.show();
        this.player.play();
        this.minimised = false;
        return this.setCookie("gmcs-surface-minimised", 0, 10000);
      }
    };

    Surface.prototype.disable_minimise = function() {
      if (this.current_video().isAd()) {
        $("#cs-close").css("opacity", "0.2");
        return $("#cs-close").attr('onclick', '').unbind('click');
      }
    };

    Surface.prototype.enable_minimise = function() {
      var _this = this;
      $("#cs-close").css("opacity", "0.8");
      $("#cs-close").attr('onclick', '').unbind('click');
      return $("#cs-close").click(function() {
        return _this.minimise();
      });
    };

    Surface.prototype.hide_slug = function() {
      this.current_video().setPosition(this.player.currentTime());
      return $("#cs-slug-wrapper").hide();
    };

    Surface.prototype.load_UI = function() {
      var html, label, player_container, s,
        _this = this;
      s = document.createElement("div");
      s.id = "cs-wrapper";
      html = document.getElementsByTagName("html")[0];
      html.appendChild(s);
      this.dom.appendDivToParent("cs-overlay", "cs-wrapper");
      this.dom.appendDivToParent("cs-header", "cs-wrapper");
      this.dom.appendDivToParent("cs-close", "cs-header");
      this.dom.appendDivToParent("cs-main", "cs-wrapper");
      this.dom.appendDivToParent("cs-info-wrapper", "cs-main");
      this.dom.appendDivToParent("cs-top-line", "cs-info-wrapper");
      this.dom.appendDivToParent("cs-rule", "cs-info-wrapper");
      this.dom.appendDivToParent("cs-bottom-line", "cs-info-wrapper");
      this.dom.appendDivToParent("cs-label", "cs-top-line");
      this.dom.appendDivToParent("cs-video-title", "cs-bottom-line");
      this.dom.appendDivToParent("cs-video-time-remaining", "cs-bottom-line");
      this.dom.appendDivToParent("cs-player-wrapper", "cs-main");
      this.dom.appendDivToParent("cs-player-container", "cs-player-wrapper");
      this.dom.appendDivToParent("cs-footer", "cs-wrapper");
      this.$wrapper = $("#cs-wrapper");
      this.$video_title = $("#cs-video-title");
      label = $("#cs-label");
      player_container = $("#cs-player-container");
      player_container.addClass("largeVideoWrapper");
      label.html(this.site_name);
      if (this.current_video().isAd()) {
        this.$video_title.html(this.videos[this.current_video_index + 1].title());
      } else {
        this.$video_title.html(this.current_video().title());
      }
      this.enable_minimise();
      this.player = new Player("cs-video-player", "cs-player-container");
      this.player.ready(function() {
        _this.player.loadFile(_this.current_video());
        if (_this.current_time > 0) {
          _this.player.loadedmetadata(function() {
            return _this.player.setCurrentTime(_this.current_time);
          });
        }
        _this.player.ended(_this.play_next_video);
        _this.player.set_fullscreen_action(_this.maximise);
        if (_this.current_video().isAd()) {
          _this.player.onplay(_this.disable_minimise);
          _this.player.hideProgressBar();
        }
        _this.player.onplay(function() {
          return _this.$video_title.html(_this.current_video().title());
        });
        _this.player.timeUpdate(_this.update_current_time);
        _this.slugCloseButton = _this.player.elem.addChild('button', {});
        if (_this.isSlugClosed) {
          _this.slugCloseButton.addClass("slug-open-btn slug-slide-button");
        } else {
          _this.slugCloseButton.addClass("slug-close-btn slug-slide-button");
        }
        _this.slugCloseButton.on("click", _this.toggle_slug);
        return _this.$slugCloseButton = $(".slug-slide-button");
      });
      this.$slugCloseButton.css("display", "none");
      this.dom.appendDivToBody("cs-slug-wrapper");
      this.$slugWrapper = $("#cs-slug-wrapper");
      if (this.isSlugClosed) {
        this.$slugWrapper.addClass("slug-closed");
      } else {
        this.$slugWrapper.addClass("slug-open");
      }
      this.dom.appendDivToParent("cs-small-player-container", "cs-slug-wrapper");
      player_container = $("#cs-small-player-container");
      player_container.addClass("smallVideoWrapper");
      this.hide_slug();
      if (this.start_minimised > 0) {
        return this.minimise();
      }
    };

    Surface.prototype.toggle_slug = function() {
      if (!this.isSlugClosed) {
        console.log("it's not closed - closing");
        this.$slugWrapper.removeClass("slug-open");
        this.$slugWrapper.addClass("slug-closed");
        this.$slugCloseButton.removeClass("slug-close-btn");
        this.$slugCloseButton.addClass("slug-open-btn");
        this.player.pause();
        return this.isSlugClosed = true;
      } else {
        console.log("it's closed - opening");
        this.$slugWrapper.removeClass("slug-closed");
        this.$slugWrapper.addClass("slug-open");
        this.$slugCloseButton.removeClass("slug-open-btn");
        this.$slugCloseButton.addClass("slug-close-btn");
        this.player.play();
        return this.isSlugClosed = false;
      }
    };

    Surface.prototype.set_bindings = function() {
      var _this = this;
      return $("#cs-close").click(function() {
        return _this.minimise();
      });
    };

    Surface.prototype.toggle_mute = function() {
      if (this.player.isMuted()) {
        return this.player.unmute();
      } else {
        return this.player.mute();
      }
    };

    Surface.prototype.update_current_time = function() {
      if (this.player.playing) {
        return this.setCookie("gmcs-surface-current_time", this.player.currentTime(), 10000);
      }
    };

    Surface.prototype.set_blur = function() {
      $("body").css("filter", "blur(15px)");
      $("body").css("filter", "url(src/blur.svg#blur)");
      $("body").css("-webkit-filter", "blur(15px)");
      $("body").css("-moz-filter", "blur(15px)");
      $("body").css("-o-filter", "blur(15px)");
      $("body").css("-ms-filter", "blur(15px)");
      return $('html, body').css({
        'overflow': 'hidden',
        'height': '100%'
      });
    };

    Surface.prototype.remove_overlay = function() {
      $("body").css("-webkit-filter", "blur(0px)");
      $("html").css("filter", "blur(0px)");
      $("body").css("filter", "url(src/blur.svg#noBlur)");
      $("body").css("-moz-filter", "blur(0px)");
      $("body").css("-o-filter", "blur(0px)");
      $("body").css("-ms-filter", "blur(0px)");
      return $('html, body').css({
        'overflow': 'auto',
        'height': 'auto'
      });
    };

    Surface.prototype.setCookie = function(name, value, days) {
      var date, expires;
      if (days) {
        date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
      } else {
        expires = "";
      }
      return document.cookie = name + "=" + value + expires + "; path=/";
    };

    Surface.prototype.getCookie = function(name) {
      var c, ca, i, nameEQ;
      nameEQ = name + "=";
      ca = document.cookie.split(";");
      i = 0;
      while (i < ca.length) {
        c = ca[i];
        while (c.charAt(0) === " ") {
          c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
          return c.substring(nameEQ.length, c.length);
        }
        i++;
      }
      return null;
    };

    Surface.prototype.deleteCookie = function(name) {
      return setCookie(name, "", -1);
    };

    return Surface;

  })();

  VideoFile = (function() {
    function VideoFile(src, position, poster, title, video_url, ad) {
      this.video_url = video_url;
      this.ad = ad;
      this.isAd = __bind(this.isAd, this);
      this.poster = __bind(this.poster, this);
      this.url = __bind(this.url, this);
      this.title = __bind(this.title, this);
      this.setPosition = __bind(this.setPosition, this);
      this.position = __bind(this.position, this);
      this.sources = __bind(this.sources, this);
      this.file_src = src != null ? src : "";
      this.playback_position = position != null ? position : 0;
      this.video_poster = poster != null ? poster : "";
      this.video_title = title != null ? title : "";
    }

    VideoFile.prototype.sources = function() {
      return this.file_src;
    };

    VideoFile.prototype.position = function() {
      return this.playback_position;
    };

    VideoFile.prototype.setPosition = function(pos) {
      return this.playback_position = pos;
    };

    VideoFile.prototype.title = function() {
      return this.video_title;
    };

    VideoFile.prototype.url = function() {
      return this.video_url;
    };

    VideoFile.prototype.poster = function() {
      if (this.video_poster.length > 0) {
        return this.video_poster;
      }
      return null;
    };

    VideoFile.prototype.isAd = function() {
      return this.ad;
    };

    return VideoFile;

  })();

}).call(this);
