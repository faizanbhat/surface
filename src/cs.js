// Generated by CoffeeScript 1.6.3
(function() {
  var $, DomManager, Surface, VideoFile,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  $ = jQuery;

  $(function() {
    var surface;
    window.media = [
      {
        src: "src/truth.mp4",
        poster: "src/poster.png",
        title: "Meet the new Kia"
      }
    ];
    return surface = new Surface("Advertisement");
  });

  DomManager = (function() {
    function DomManager() {
      this.getStyle = __bind(this.getStyle, this);
      this.getScript = __bind(this.getScript, this);
      this.get = __bind(this.get, this);
      this.appendDivToParent = __bind(this.appendDivToParent, this);
      this.appendDivToBody = __bind(this.appendDivToBody, this);
      this.appendDivOutsideBody = __bind(this.appendDivOutsideBody, this);
      this.body = document.getElementsByTagName("body")[0];
      this.head = document.getElementsByTagName("head")[0];
      this.html = document.getElementsByTagName("html")[0];
    }

    DomManager.prototype.appendDivOutsideBody = function(id) {
      var s;
      s = document.createElement("div");
      s.id = id;
      return this.html.appendChild(s);
    };

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
      var elem;
      elem = document.getElementById(id);
      return elem;
    };

    DomManager.prototype.getScript = function(url, success) {
      var done, script;
      done = false;
      script = document.createElement("script");
      script.src = url;
      script.onload = function() {
        if (!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
          done = true;
          if (loaded === True && typeof success === 'function') {
            return success();
          }
        }
      };
      script.onreadystatechange = script.onload;
      return this.head.appendChild(script);
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

  Surface = (function() {
    function Surface(site_name) {
      var item, vf, _i, _len, _ref;
      this.site_name = site_name;
      this.hide_wrapper = __bind(this.hide_wrapper, this);
      this.show_wrapper = __bind(this.show_wrapper, this);
      this.maximise = __bind(this.maximise, this);
      this.remove_wrapper = __bind(this.remove_wrapper, this);
      this.remove_overlay = __bind(this.remove_overlay, this);
      this.update_time_remaining = __bind(this.update_time_remaining, this);
      this.minimise = __bind(this.minimise, this);
      this.set_bindings = __bind(this.set_bindings, this);
      this.hide_slug = __bind(this.hide_slug, this);
      this.show_slug = __bind(this.show_slug, this);
      this.toggle_mute = __bind(this.toggle_mute, this);
      this.load_elements_for_slug = __bind(this.load_elements_for_slug, this);
      this.load_elements = __bind(this.load_elements, this);
      this.set_overlay = __bind(this.set_overlay, this);
      this.current_video = __bind(this.current_video, this);
      this.player = null;
      this.small_player = null;
      this.videos = [];
      _ref = window.media;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        item = _ref[_i];
        vf = new VideoFile(item.src, 0, item.poster, item.title);
        this.videos.push(vf);
      }
      this.current_video_index = 0;
      this.dom = new DomManager();
      this.dom.getStyle("src/style.css");
      this.set_overlay();
      this.load_elements();
    }

    Surface.prototype.current_video = function() {
      return this.videos[this.current_video_index];
    };

    Surface.prototype.set_overlay = function() {
      $("body").css("-webkit-filter", "blur(15px)");
      $("body").css("filter", "blur(20px)");
      return $('html, body').css({
        'overflow': 'hidden',
        'height': '100%'
      });
    };

    Surface.prototype.load_elements = function() {
      var label, p;
      this.dom.appendDivOutsideBody("cs-wrapper");
      this.dom.appendDivToParent("cs-overlay", "cs-wrapper");
      this.$wrapper = $("#cs-wrapper");
      this.dom.appendDivToParent("cs-header", "cs-wrapper");
      this.dom.appendDivToParent("cs-close", "cs-header");
      this.dom.appendDivToParent("cs-main", "cs-wrapper");
      this.dom.appendDivToParent("cs-info-wrapper", "cs-wrapper");
      this.dom.appendDivToParent("cs-top-line", "cs-info-wrapper");
      this.dom.appendDivToParent("cs-rule", "cs-info-wrapper");
      this.dom.appendDivToParent("cs-bottom-line", "cs-info-wrapper");
      this.dom.appendDivToParent("cs-label", "cs-top-line");
      this.dom.appendDivToParent("cs-video-title", "cs-bottom-line");
      this.dom.appendDivToParent("cs-video-time-remaining", "cs-bottom-line");
      this.dom.appendDivToParent("cs-player-wrapper", "cs-wrapper");
      this.dom.appendDivToParent("cs-player-container", "cs-player-wrapper");
      this.dom.appendDivToParent("cs-footer", "cs-wrapper");
      this.dom.appendDivToParent("cs-video-title", "cs-wrapper");
      this.dom.appendDivToParent("cs-video-toolbar", "cs-wrapper");
      this.dom.appendDivToParent("cs-video-toolbar-forward", "cs-video-toolbar");
      this.dom.appendDivToParent("cs-video-toolbar-rewind", "cs-video-toolbar");
      label = $("#cs-label");
      label.html(this.site_name);
      this.$video_title = $("#cs-video-title");
      this.$video_title.html(this.current_video().title());
      this.$video_time_remaining = $("#cs-video-time-remaining");
      this.$video_time_remaining.html("");
      p = document.createElement("video");
      p.setAttribute("id", "cs-video-player");
      p.setAttribute("poster", this.current_video().poster);
      p.src = this.current_video().source();
      this.dom.get("cs-player-container").appendChild(p);
      this.player = this.dom.get("cs-video-player");
      this.player.addEventListener('timeupdate', this.update_time_remaining);
      this.player.play();
      this.set_bindings();
      return this.load_elements_for_slug();
    };

    Surface.prototype.load_elements_for_slug = function() {
      var p,
        _this = this;
      this.dom.appendDivToBody("cs-slug-wrapper");
      this.dom.appendDivToParent("cs-slug-header", "cs-slug-wrapper");
      this.dom.appendDivToParent("cs-slug-header-expand-btn", "cs-slug-header");
      this.dom.appendDivToParent("cs-slug-header-mute-btn", "cs-slug-header");
      this.dom.appendDivToParent("cs-small-player-container", "cs-slug-wrapper");
      this.$slug_wrapper = $("#cs-slug-wrapper");
      $('#cs-slug-header-expand-btn').on("click", function() {
        return _this.maximise();
      });
      $('#cs-slug-header-mute-btn').on("click", function() {
        return _this.toggle_mute();
      });
      p = document.createElement("video");
      p.setAttribute("id", "cs-small-video-player");
      p.setAttribute("poster", this.current_video().poster);
      p.src = this.current_video().source();
      this.dom.get("cs-small-player-container").appendChild(p);
      this.small_player = this.dom.get("cs-small-video-player");
      this.small_player.addEventListener('timeupdate', this.update_time_remaining(this));
      return this.hide_slug();
    };

    Surface.prototype.toggle_mute = function() {
      if (this.small_player.muted || this.small_player.volume === 0) {
        this.small_player.volume = 1;
        return $('#cs-slug-header-mute-btn').css("background", "url('src/mute.png')");
      } else {
        this.small_player.volume = 0;
        return $('#cs-slug-header-mute-btn').css("background", "url('src/unmute.png')");
      }
    };

    Surface.prototype.show_slug = function() {
      var _this = this;
      this.small_player.src = this.current_video().source();
      this.small_player.play();
      this.small_player.onloadedmetadata = function() {
        return _this.small_player.currentTime = _this.current_video().position();
      };
      return $("#cs-slug-wrapper").show();
    };

    Surface.prototype.hide_slug = function() {
      this.small_player.pause();
      this.current_video().setPosition(this.small_player.currentTime);
      return $("#cs-slug-wrapper").hide();
    };

    Surface.prototype.set_bindings = function() {
      var _this = this;
      return $("#cs-close").click(function() {
        return _this.minimise();
      });
    };

    Surface.prototype.minimise = function() {
      this.remove_overlay();
      this.hide_wrapper();
      return this.show_slug();
    };

    Surface.prototype.update_time_remaining = function() {
      var mins, mins_text, secs, secs_text, time_in_secs;
      time_in_secs = this.player.duration - this.player.currentTime;
      if (typeof time_in_secs === 'number') {
        mins = Math.floor(time_in_secs / 60);
        secs = Math.ceil(time_in_secs % 60);
        if (mins > 9) {
          mins_text = '' + mins;
        } else {
          mins_text = '0' + mins;
        }
        if (secs > 9) {
          secs_text = '' + secs;
        } else {
          secs_text = '0' + secs;
        }
        return this.$video_time_remaining.html(mins_text + ":" + secs_text);
      }
    };

    Surface.prototype.remove_overlay = function() {
      $("body").css("-webkit-filter", "blur(0px)");
      $("html").css("filter", "blur(0px)");
      $('html, body').css({
        'overflow': 'auto',
        'height': 'auto'
      });
      return this.hide_wrapper();
    };

    Surface.prototype.remove_wrapper = function() {
      this.player.pause();
      return this.$wrapper.remove();
    };

    Surface.prototype.maximise = function() {
      this.hide_slug();
      this.set_overlay();
      return this.show_wrapper();
    };

    Surface.prototype.show_wrapper = function() {
      var _this = this;
      this.player.src = this.current_video().source();
      this.player.play();
      this.player.onloadedmetadata = function() {
        console.log("loaded");
        return _this.player.currentTime = _this.current_video().position();
      };
      return this.$wrapper.show();
    };

    Surface.prototype.hide_wrapper = function() {
      this.player.pause();
      this.current_video().setPosition(this.player.currentTime);
      return this.$wrapper.hide();
    };

    return Surface;

  })();

  VideoFile = (function() {
    function VideoFile(src, position, poster, title) {
      this.title = __bind(this.title, this);
      this.setSource = __bind(this.setSource, this);
      this.setPosition = __bind(this.setPosition, this);
      this.position = __bind(this.position, this);
      this.source = __bind(this.source, this);
      this.file_src = src != null ? src : "";
      this.playback_position = position != null ? position : 0;
      this.video_poster = poster != null ? poster : "";
      this.video_title = title != null ? title : "";
    }

    VideoFile.prototype.source = function() {
      return this.file_src;
    };

    VideoFile.prototype.position = function() {
      return this.playback_position;
    };

    VideoFile.prototype.setPosition = function(pos) {
      return this.playback_position = pos;
    };

    VideoFile.prototype.setSource = function(src) {
      return this.playback_position = src;
    };

    VideoFile.prototype.title = function() {
      return this.video_title;
    };

    return VideoFile;

  })();

}).call(this);
