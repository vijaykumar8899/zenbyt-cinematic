/*
------------------------------------------------
Index Of Script
----------------------------------------------*/
(function($) {
    "use strict";

    // Direction Rtl Mode
    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
        return false;
    };


    //copy link
    jQuery(document).on('click', '.iq-copy-link', function() {
        let link = jQuery(this).data('link');
        document.addEventListener('copy', function(e) {
            e.clipboardData.setData('text/plain', link);
            e.preventDefault();
        }, true);
        if (document.execCommand('copy')) {
            alert('Link Copied To Clipboard');
        }
    });

    // User Profile
    jQuery(".custom-file-input").on("change", function() {
        let fileName = jQuery(this).val().split("\\").pop();
        jQuery(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    });

    //Paid membership plugin input button override
    if (jQuery('#pms_register-form [name=pms_register]').length > 0) {
        let pmsRegisterText = jQuery('#pms_register-form [name=pms_register]').val();
        jQuery('#pms_register-form [name=pms_register]').after('<button name="pms_register" type="submit" class="btn btn-hover iq-button" value="' + pmsRegisterText + '">' + pmsRegisterText + '</button>');
        jQuery('#pms_register-form [name=pms_register]:first').remove();
    }
    if (jQuery('#pms_login [name=wp-submit]').length > 0) {
        let pmsLoginText = jQuery('#pms_login [name=wp-submit]').val();
        jQuery('#pms_login [name=wp-submit]').after('<button type="submit" name="wp-submit" id="wp-submit" class="btn btn-hover iq-button" value="' + pmsLoginText + '">' + pmsLoginText + '</button>');
        jQuery('#pms_login [name=wp-submit]').first().remove();
    }
    if (jQuery('#pms-upgrade-subscription-form [name=pms_upgrade_subscription]').length > 0) {
        let pmsUpgradeText = jQuery('#pms-upgrade-subscription-form [name=pms_upgrade_subscription]').val();
        jQuery('#pms-upgrade-subscription-form [name=pms_upgrade_subscription]').after('<button type="submit" name="pms_upgrade_subscription" class="btn btn-hover iq-button mr-3" value="' + pmsUpgradeText + '">' + pmsUpgradeText + '</button>');
        jQuery('#pms-upgrade-subscription-form [name=pms_upgrade_subscription]:first').remove();
    }
    if (jQuery('#pms-upgrade-subscription-form [name=pms_redirect_back]').length > 0) {
        let pmsBackText = jQuery('#pms-upgrade-subscription-form [name=pms_redirect_back]').val();
        jQuery('#pms-upgrade-subscription-form [name=pms_redirect_back]').after('<button type="submit" name="pms_redirect_back" class="btn btn-hover iq-button" value="' + pmsBackText + '">' + pmsBackText + '</button>');
        jQuery('#pms-upgrade-subscription-form [name=pms_redirect_back]:first').remove();
    }
    if (jQuery('#pms_edit-profile-form [name=pms_edit_profile]').length > 0) {
        let pmsEditText = jQuery('#pms_edit-profile-form [name=pms_edit_profile]').val();
        jQuery('#pms_edit-profile-form [name=pms_edit_profile]').after('<button name="pms_edit_profile" type="submit" class="btn btn-hover iq-button" value="' + pmsEditText + '">' + pmsEditText + '</button>');
        jQuery('#pms_edit-profile-form [name=pms_edit_profile]:first').remove();
    }
    if (jQuery('#pms_recover_password_form [name=submit]').length > 0) {
        let pmsRecoverText = jQuery('#pms_recover_password_form [name=submit]').val();
        jQuery('#pms_recover_password_form [name=submit]').after('<button type="submit" name="submit" class="btn btn-hover iq-button" value="' + pmsRecoverText + '">' + pmsRecoverText + '</button>');
        jQuery('#pms_recover_password_form [name=submit]:first').remove();
    }
    // user forms validation
    if (jQuery('.iq-login-form #loginform').length > 0) {
        let iqonicLoginText = jQuery('.iq-login-form #loginform #wp-submit').val();
        jQuery('.iq-login-form #loginform #wp-submit').remove();
        jQuery('.iq-login-form #loginform .login-submit').append('<button type="submit" name="wp-submit" id="wp-submit" class="btn btn-hover iq-button" value="' + iqonicLoginText + '">' + iqonicLoginText + '</button>');

        jQuery('.iq-login-form #loginform').submit(function() {
            jQuery('.iq-login-form .error-msg').hide();
            let user_id = jQuery.trim(jQuery("#user_login").val());
            let user_pass = jQuery.trim(jQuery("#user_pass").val());
            let error = '';

            if (user_id === "" || user_pass === "") {
                if (user_id === "") {
                    error = '1';
                }
                if (user_pass === "") {
                    error = '1';
                }
            }
            if (error !== '' && error === '1') {
                jQuery('.iq-login-form .error-msg').html('Require Empty Field.');
                jQuery('.iq-login-form .error-msg').slideDown();
                return false;
            }
        });
    }
    if (jQuery('.iq-login-form #changepass').length > 0) {
        jQuery('.iq-login-form #changepass').submit(function() {
            jQuery('.iq-login-form .error-msg').hide();
            let user_email = jQuery.trim(jQuery("#user_email").val());
            let error = '';
            if (user_email === "") {
                error = '1';
            }
            if (error !== '' && error === '1') {
                jQuery('.iq-login-form .error-msg').html('Require Empty Field.');
                jQuery('.iq-login-form .error-msg').slideDown();
                return false;
            }
        });
    }

    if (jQuery('#update-avatar').length > 0) {
        jQuery(document).on('click', '#iq-edit-avatar-btn', function() {
            jQuery('#update-avatar').slideToggle();
        });
        jQuery(document).on('click', '#cancel-avatar-edit', function() {
            jQuery('#update-avatar').slideToggle();
        });
    }

    jQuery(".iq-register .pms-account-subscription-details-table").parents('.iq-register .elementor-shortcode').css("height", "unset");


    /***************************************
        ajax like shot feature
    ***************************************/
    jQuery(document).on("click", ".watch-list", function() {

        var rel = jQuery(this).attr("rel");
        var thisElement = jQuery(this);

        // console.log(jQuery(".watch-list[rel=" + rel + "] span:first").html());
        let data = {
            data: rel,
            action: 'watchlist_callback'
        }
        jQuery.ajax({
            action: "watchlist_callback",
            type: "GET",
            dataType: "json",
            url: ajaxurl,
            data: data,
            beforeSend: function(xhr) {
                thisElement.find("span").first().html('<i class="fa fa-circle-o-notch fa-spin w-loader"></i>').addClass("adding");
            },
            success: function(data) {
                if (data.status === true) {
                    thisElement.find("span").first().addClass("adding");
                    thisElement.find("span").first().html('<i class="fa fa-check" aria-hidden="true"></i>').addClass("added");
                } else {
                    thisElement.find("span").first().html('<i class="ri-add-line"></i>').removeClass("removed");
                    thisElement.closest('.wl-child').remove();
                }

            }
        });

    });

    jQuery('.favorites-slider').on('beforeChange init', function(event, count, currentSlide, nextSlide) {
        if (count['$nextArrow'] == null || !count['$nextArrow'].hasClass('slick-hidden')) {
            count['$slider'].addClass('iq-rtl-direction');
        } else {
            count['$slider'].removeClass('iq-rtl-direction');
        }
    });
})(jQuery);

// Call Slider Function  
function callSlider(item) {
    item.each(function() {
        var jQuerySlider = jQuery(this);
        if (jQuerySlider.hasClass('slick-slider')) return;
        jQuerySlider.slick({
            dots: false,
            arrows: jQuerySlider.data("nav"),
            infinite: jQuerySlider.data("loop"),
            speed: jQuerySlider.data("speed"),
            centerPadding: '100px',
            autoplay: jQuerySlider.data("autoplay"),
            autoplaySpeed: jQuerySlider.data("autoplay-speed"),
            slidesToShow: jQuerySlider.data("items"),
            nextArrow: '<a href="#" class="slick-arrow animated slick-next"><i class= "fa fa-chevron-right"></i></a>',
            prevArrow: '<a href="#" class="slick-arrow animated slick-prev"><i class= "fa fa-chevron-left"></i></a>',
            responsive: [{
                    breakpoint: 1601,
                    settings: {
                        slidesToShow: jQuerySlider.data("items-laptop-lg"),
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 1366,
                    settings: {
                        slidesToShow: jQuerySlider.data("items-laptop"),
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: jQuerySlider.data("items-tab")
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: jQuerySlider.data("items-mobile")
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: jQuerySlider.data("items-mobile-sm"),
                        arrows: false
                    }
                },

            ]
        });
    });
}

var LazyLoadObserver = function() {
    if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazySection = entry.target;

                    let img = lazySection.querySelectorAll("img.iqonic-lazy");
                    img.forEach(function(img) {
                        if (img.dataset.srcset)
                            img.srcset = img.dataset.srcset;

                        lazySection.classList.remove("iqonic-lazy-load-images");
                        lazyImageObserver.unobserve(lazySection);
                    });

                    //For Banner Sliders
                    let bg_img = lazySection.querySelectorAll("div.iqonic-lazy");
                    bg_img.forEach(function(bg_img) {
                        if (bg_img.dataset.srcset)
                            bg_img.style.backgroundImage = "url(" + bg_img.dataset.srcset + ")";

                        lazySection.classList.remove("iqonic-lazy-load-images");
                        lazyImageObserver.unobserve(lazySection);
                    });
                }
            });
        });

        var lazySection = document.querySelectorAll(".iqonic-lazy-load-images");

        lazySection.forEach(function(lazySection) {
            lazyImageObserver.observe(lazySection);
        });
    }
}

//Lazy Load Images
document.addEventListener("DOMContentLoaded", LazyLoadObserver);

window.onresize = LazyLoadObserver;