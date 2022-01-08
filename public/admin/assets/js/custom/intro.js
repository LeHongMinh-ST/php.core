"use strict";

// Class definition
var KTIntro = function () {
    // Private functions
    var initIntro1 = function(timeout) {
        var element = document.querySelector('#kt_explore_toggle_label');

        if (!element) {
            return;
        }

        var popover = new bootstrap.Popover(element, {
            customClass: 'popover-dark',
            trigger: 'hover',
            container: 'body',
            boundary: 'window',
            placement: 'right',
            html: true,
            title: 'Explore Metronic',
            content: 'Looking for more layouts? Check out Metronic\'s other amazingly unique demos to better suit your project needs.'
        });

        popover.show();

        // Remove
        setTimeout(function(params) {
            if (popover) {
                popover.dispose();
            } 
        }, timeout);
    }

    var initIntro2 = function(timeout) {
        var element = document.querySelector('#kt_header_search_toggle');

        if (!element) {
            return;
        }

        var popover = new bootstrap.Popover(element, {
            customClass: 'popover-dark',
            container: 'body',
            trigger: 'hover',
            boundary: 'window',
            placement: 'left',
            html: true,
            title: 'Quick Search',
            content: 'Click here to check out our brand new, frontend ready Quick Search feature.'
        });

        popover.show();

        // Remove
        setTimeout(function(params) {
            if (popover) {
                popover.dispose();
            } 
        }, timeout);
    }

    var initIntro3 = function(timeout) {
        var element = document.querySelector('#kt_toolbar_primary_button');

        if (!element) {
            return;
        }

        var popover = new bootstrap.Popover(element, {
            customClass: 'popover-dark',
            container: 'body',
            trigger: 'hover',
            boundary: 'window',
            placement: 'left',
            html: true,
            title: 'Modal Form Wizard',
            content: 'Completely improved from the ground up, our new Wizard Modals provides an exceptional solution for any ad-hoc form requirement.'
        });

        popover.show();

        // Remove
        setTimeout(function(params) {
            if (popover) {
                popover.dispose();
            } 
        }, timeout);
    }

    var initIntro4 = function(timeout) {
        var element = document.querySelector('#kt_header_user_menu_toggle');

        if (!element) {
            return;
        }

        var popover = new bootstrap.Popover(element, {
            customClass: 'popover-dark',
            container: 'body',
            trigger: 'hover',
            boundary: 'window',
            placement: 'left',
            html: true,
            title: 'Advanced User Menu',
            content: 'Explore our updated User Menus that fits perfectly within any project.'
        });

        popover.show();

        // Remove
        setTimeout(function(params) {
            if (popover) {
                popover.dispose();
            }            
        }, timeout);
    }

    var handleIntrosDisplay = function(params) {
        var date, expires;

        if (!KTCookie.get('show_intro_popovers')) {
            // Intro 1
            setTimeout(function() {
                initIntro1(1000 * 5); // hide in 10 secondas
            }, 1000 * 3); // show in 3 seconds

            // Intro 2
            setTimeout(function() {
                initIntro2(1000 * 5); // hide in 10 secondas
            }, 1000 * 10); // show in 3 seconds

            // Intro 3
            setTimeout(function() {
                initIntro3(1000 * 5); // hide in 10 secondas
            }, 1000 * 17); // show in 3 seconds

            // Intro 4
            setTimeout(function() {
                initIntro4(1000 * 5); // hide in 10 secondas
            }, 1000 * 24); // show in 3 seconds
           

            date = new Date();
            expires = 1000 * 60 * 60 * 24 * 10; // 1 day
            KTCookie.set("show_intro_popovers", 1, {expires: new Date(date.getTime() + expires)});
        }        
    }

    var handleExplorePanelDisplay = function(params) {
        var date, expires;
        var drawerEl = document.querySelector("#kt_explore");

        if (!drawerEl) {
            return;
        }

        if (!KTCookie.get('show_explore_panel')) {
            setTimeout(function() {
                KTDrawer.getInstance(drawerEl).show();
            }, 1000 * 40); //  40 seconds

            date = new Date();
            expires = 1000 * 60 * 60 * 24 * 2; // 1 day
            KTCookie.set("show_explore_panel", 1, {expires: new Date(date.getTime() + expires)});
        }        
    }

    // Public methods
    return {
        init: function () {
            if (KTUtil.inIframe() === false) {
                handleIntrosDisplay();
            } 
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTIntro;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTIntro.init();
});
