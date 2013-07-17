(function ( $ ) {
    var methods = {
        init : function(options) {
            var settings = $.extend({
                // These are the defaults.
                // :hover: If true, the plugin will be triggered on mouse hover
                // :click: If true, the plugin will be triggered on mouse click
                //   (or touch)
                hover: true
                ,click: true
            }, options );

            var _this = this;

            if ( settings.hover ) {
                $(this).hover(
                    function() {
                        _this.dropDownMenu('show_nav');
                    }
                    ,function() {
                        _this.dropDownMenu('hide_nav');
                    }
                );
            }

            if ( settings.click ) {
                $(document).bind('click', function(e) {
                    // for mobile devices we have no hover out, so tapping
                    // anywhere will do, but now we need to find out, if
                    // "anywhere" was inside our main nav element

                    is_inside = false;
                    if ($(e.target)[0] === _this[0]) {
                        is_inside = true;
                    } else if ($(e.target).parents(_this).first()[0] === _this[0]) {
                        // in case our main nav element contains more elements
                        // clicking on those should still be treated like
                        // clicking on the main nav element
                        is_inside = true;
                    }
                    if (is_inside) {
                        // if I clicked somewhere into the toolbar icon...
                        _this.dropDownMenu('toggle_nav', true);
                    } else {
                        // else I must have clicked anywhere else on the page...
                        _this.dropDownMenu('hide_nav');
                    }
                });
            }
            return _this;
        }
        ,hide_nav: function( ) {
            // Animation to hide the dropdown menu of a given toolbar item.

            // First we remove all indicators that this item is the active one
            $(this).removeAttr('data-clicked');
            $(this).removeAttr('data-visible');

            // Then we hide the dropdown menu
            $(this).find('ul').stop();
            if ($(this).find('ul').is(':visible')) {
                $(this).find('ul').fadeTo('fast', 0, function() {
                    $(this).css('display', 'none');
                });
            }
            return this;
        }
        ,show_nav: function( ) {
            // Shows the dropdown menu for the given toolbar item.
            $(this).attr('data-visible', 'true');
            $(this).find('ul').css('display', 'block');
            $(this).find('ul').stop();
            $(this).find('ul').fadeTo('fast', 1);
            return this;
        }
        ,toggle_nav: function( clicked ) {
            // Shows or hides the submenu for the given main menu item.
            // :clicked: true or false, indicating whether this function was called
            //   from a click event or a hover event.

            if (clicked && $(this).is('[data-clicked]') && $(this).is('[data-visible]')) {
                // If the subnav is already visible and has been clicked before, the
                // next click hides it again (needed for mobile devices)
                $(this).dropDownMenu('hide_nav');
                return this;
            }

            $(this).attr('data-clicked', 'true');

            if (clicked && $(this).is('[data-visible]')) {
                // If the subnav is already visible, the first click does nothing
                return this;
            }

            if ( $(this).is('[data-visible]')) {
                $(this).dropDownMenu('hide_nav');
            } else {
                $(this).dropDownMenu('show_nav');
            }
            return this;
        }
    };

    $.fn.dropDownMenu = function(methodOrOptions) {
        if (methods[methodOrOptions]) {
            return methods[ methodOrOptions ].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof methodOrOptions === 'object' || ! methodOrOptions) {
            // Default to "init"
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' +  methodOrOptions + ' does not exist on jQuery.dropDownMenu');
        }
    };
}( jQuery ));
