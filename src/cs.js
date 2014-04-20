// Generated by CoffeeScript 1.7.1
(function() {
  var $, CookieHandler, DomManager, Player, Playlist, ScriptLoader, Surface, User, VideoFile,
    __slice = [].slice,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  $ = jQuery;

  $(function() {
    window.gmcs = {};
    window.gmcs.site_id = "1";
    window.gmcs.host = "http://localhost:8080";
    window.gmcs.utils = {};
    window.gmcs.utils.cookieHandler = new CookieHandler();
    return window.gmcs.utils.surface = new Surface("Nat Geo TV");
  });

  CookieHandler = (function() {
    function CookieHandler() {}

    CookieHandler.prototype.setCookie = function(name, value, days) {
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

    CookieHandler.prototype.getCookie = function(name) {
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

    CookieHandler.prototype.deleteCookie = function(name) {
      return setCookie(name, "", -1);
    };

    return CookieHandler;

  })();

  ScriptLoader = (function() {
    function ScriptLoader() {
      var callback, compressed, lib, loadCallback, options, s, version, _i;
      options = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), callback = arguments[_i++];
      this.libraries = {
        jQuery: "http://ajax.googleapis.com/ajax/libs/jquery/$version/jquery.js",
        videoJs: "vjs/video.dev.js"
      };
      lib = options[0], version = options[1], compressed = options[2];
      if (this.libraries[lib]) {
        lib = this.libraries[lib];
      }
      loadCallback = (function(_this) {
        return function() {
          if (_this.loaded) {
            return;
          }
          _this.loaded = true;
          return callback();
        };
      })(this);
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
      this.dispose = __bind(this.dispose, this);
      this.showProgressBar = __bind(this.showProgressBar, this);
      this.hideProgressBar = __bind(this.hideProgressBar, this);
      this.isPlaying = __bind(this.isPlaying, this);
      this.setCurrentTime = __bind(this.setCurrentTime, this);
      this.loadedmetadata = __bind(this.loadedmetadata, this);
      this.ready = __bind(this.ready, this);
      this.onpause = __bind(this.onpause, this);
      this.onplay = __bind(this.onplay, this);
      this.ended = __bind(this.ended, this);
      this.timeUpdate = __bind(this.timeUpdate, this);
      this.one = __bind(this.one, this);
      this.on = __bind(this.on, this);
      this.isMuted = __bind(this.isMuted, this);
      this.timeRemaining = __bind(this.timeRemaining, this);
      this.currentTime = __bind(this.currentTime, this);
      this.duration = __bind(this.duration, this);
      this.loadFile = __bind(this.loadFile, this);
      this.unmute = __bind(this.unmute, this);
      this.mute = __bind(this.mute, this);
      this.pause = __bind(this.pause, this);
      this.play = __bind(this.play, this);
      var p;
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
      this.elem.on("play", (function(_this) {
        return function() {
          return _this.playing = true;
        };
      })(this));
      this.elem.on("pause", (function(_this) {
        return function() {
          return _this.playing = false;
        };
      })(this));
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
      s = vf.src();
      return this.elem.src([
        {
          type: "video/flv",
          src: s
        }
      ]);
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

    Player.prototype.on = function(callback, func) {
      return this.elem.on(callback, func);
    };

    Player.prototype.one = function(callback, func) {
      return this.elem.one(callback, func);
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

    Player.prototype.isPlaying = function() {
      return this.playing;
    };

    Player.prototype.hideProgressBar = function() {
      return this.elem.controlBar.progressControl.hide();
    };

    Player.prototype.showProgressBar = function() {
      return this.elem.controlBar.progressControl.show();
    };

    Player.prototype.dispose = function() {
      return this.elem.dispose();
    };

    return Player;

  })();

  Surface = (function() {
    function Surface(site_name, delay) {
      this.site_name = site_name;
      this.remove_overlay = __bind(this.remove_overlay, this);
      this.set_blur = __bind(this.set_blur, this);
      this.update_current_time = __bind(this.update_current_time, this);
      this.hide_slug = __bind(this.hide_slug, this);
      this.maximise = __bind(this.maximise, this);
      this.minimise = __bind(this.minimise, this);
      this.like_video = __bind(this.like_video, this);
      this.play_next_video = __bind(this.play_next_video, this);
      this.create_player = __bind(this.create_player, this);
      this.load_UI = __bind(this.load_UI, this);
      this.hostname = window.gmcs.host;
      this.cookieHandler = window.gmcs.utils.cookieHandler;
      this.callbacks = {
        'playlist_loaded': this.load_UI
      };
      this.user = new User(this.callbacks['playlist_loaded']);
      this.current_time = parseInt(this.cookieHandler.getCookie("gmcs-surface-current_time"));
      if (isNaN(this.current_time)) {
        this.current_time = 0;
      }
      this.start_minimised = parseInt(this.cookieHandler.getCookie("gmcs-surface-minimised"));
      if (isNaN(this.start_minimised)) {
        this.start_minimised = 0;
      }
      this.minimised = false;
      this.player = null;
      this.dom = new DomManager();
      this.dom.getStyle("src/style.css");
      this.dom.getStyle("vjs/video-js.css");
      this.set_blur();
      new ScriptLoader("videoJs", function() {});
    }

    Surface.prototype.load_UI = function() {
      var html, s;
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
      this.dom.appendDivToParent("cs-player-wrapper", "cs-main");
      this.dom.appendDivToParent("cs-player-container", "cs-player-wrapper");
      this.dom.appendDivToParent("cs-footer", "cs-player-wrapper");
      this.dom.appendDivToParent("cs-footer-skip", "cs-footer");
      this.dom.appendDivToParent("cs-footer-like", "cs-footer");
      this.dom.appendDivToBody("cs-slug-wrapper");
      this.$wrapper = $("#cs-wrapper");
      this.$slugWrapper = $("#cs-slug-wrapper");
      this.$slugWrapper.click(this.maximise);
      this.hide_slug();
      $("#cs-player-container").addClass("largeVideoWrapper");
      this.video = this.user.playlist.next();
      this.$video_title = $("#cs-video-title");
      this.$video_title.html(this.video.title());
      $("#cs-label").html(this.site_name);
      $("#cs-close").addClass("cs-close");
      $("#cs-close").click(this.minimise);
      $("#cs-footer-skip").text("Skip");
      $("#cs-footer-skip").click(this.play_next_video);
      $("#cs-footer-skip").addClass("footer-enabled");
      $("#cs-footer-like").text("Like");
      $("#cs-footer-like").click(this.like_video);
      $("#cs-footer-like").addClass("footer-enabled");
      this.player = this.create_player(this.video, false, true);
      if (this.start_minimised > 0) {
        this.minimise();
      }
      return void 0;
    };

    Surface.prototype.create_player = function(video, autoplay, resume) {
      var player;
      player = new Player("cs-video-player", "cs-player-container");
      player.ready((function(_this) {
        return function() {
          player.loadFile(video);
          player.ended(_this.play_next_video);
          if (autoplay) {
            player.play();
          }
          if (resume) {
            player.one("loadedmetadata", function() {
              return player.setCurrentTime(_this.current_time);
            });
          }
          return player.timeUpdate(_this.update_current_time);
        };
      })(this));
      return player;
    };

    Surface.prototype.play_next_video = function() {
      this.video = this.user.playlist.next();
      console.log("Surface: Play next video: " + this.video.title());
      this.$video_title.html(this.video.title());
      this.player.pause();
      this.player.loadFile(this.video);
      return this.player.play();
    };

    Surface.prototype.like_video = function() {
      $("#cs-footer-like").unbind("click");
      $("#cs-footer-like").removeClass("footer-enabled");
      return $("#cs-footer-like").removeClass("footer-enabled");
    };

    Surface.prototype.minimise = function() {
      this.player.dispose();
      this.remove_overlay();
      this.$wrapper.hide();
      $("#cs-slug-wrapper").show("100");
      this.minimised = true;
      return this.cookieHandler.setCookie("gmcs-surface-minimised", 1, 10000);
    };

    Surface.prototype.maximise = function() {
      if (this.minimised === true) {
        this.hide_slug();
        this.set_blur();
        this.$wrapper.show();
        this.player = this.create_player(this.video, true, true);
        this.minimised = false;
        return this.cookieHandler.setCookie("gmcs-surface-minimised", 0, 10000);
      }
    };

    Surface.prototype.hide_slug = function() {
      return $("#cs-slug-wrapper").hide();
    };

    Surface.prototype.update_current_time = function() {
      if (this.player.playing) {
        this.current_time = this.player.currentTime();
        return this.cookieHandler.setCookie("gmcs-surface-current_time", this.current_time, 10000);
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

    return Surface;

  })();

  VideoFile = (function() {
    function VideoFile(video_id, file_src, video_title, thumb_href) {
      this.video_id = video_id;
      this.file_src = file_src;
      this.video_title = video_title;
      this.thumb_href = thumb_href;
      this.thumb = __bind(this.thumb, this);
      this.isAd = __bind(this.isAd, this);
      this.url = __bind(this.url, this);
      this.title = __bind(this.title, this);
      this.setPosition = __bind(this.setPosition, this);
      this.position = __bind(this.position, this);
      this.src = __bind(this.src, this);
      this.id = __bind(this.id, this);
      this.playback_position = 0;
    }

    VideoFile.prototype.id = function() {
      return this.video_id;
    };

    VideoFile.prototype.src = function() {
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

    VideoFile.prototype.isAd = function() {
      return this.ad;
    };

    VideoFile.prototype.thumb = function() {
      return this.thumb_href;
    };

    return VideoFile;

  })();

  User = (function() {
    function User(callback) {
      var requestURI, user_id;
      this.cookie_handler = window.gmcs.utils.cookieHandler;
      user_id = this.cookie_handler.getCookie("gmcs-surface-current-user-id");
      if (user_id === null) {
        requestURI = window.gmcs.host + "/create-user/" + window.gmcs.site_id;
        $.getJSON(requestURI, (function(_this) {
          return function(data) {
            _this.user_id = data.id.toString();
            console.log("User: Model: New Surface User " + _this.user_id);
            _this.cookie_handler.setCookie("gmcs-surface-current-user-id", _this.user_id, 10000);
            _this.playlist = new Playlist(data.playlist);
            return callback();
          };
        })(this));
      } else {
        this.user_id = user_id;
        requestURI = window.gmcs.host + "/users/" + this.user_id;
        $.getJSON(requestURI, (function(_this) {
          return function(data) {
            _this.playlist = new Playlist(data.playlist);
            return callback();
          };
        })(this));
        console.log("Surface: User: Existing Surface User " + this.user_id);
      }
    }

    return User;

  })();

  Playlist = (function() {
    function Playlist(playlist) {
      this.next = __bind(this.next, this);
      this.current = __bind(this.current, this);
      this.add = __bind(this.add, this);
      var item, vf, _i, _len;
      this.videos = [];
      for (_i = 0, _len = playlist.length; _i < _len; _i++) {
        item = playlist[_i];
        vf = new VideoFile(item.id, item.src, item.title, item.thumb);
        this.add(vf);
      }
    }

    Playlist.prototype.add = function(vf) {
      this.videos.push(vf);
      return console.log("Surface: User: Playlist: Add: " + vf.title());
    };

    Playlist.prototype.current = function() {
      return this.videos[0];
    };

    Playlist.prototype.next = function() {
      return this.videos.shift();
    };

    return Playlist;

  })();

}).call(this);
