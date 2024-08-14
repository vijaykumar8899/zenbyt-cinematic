(function($) {
    "use strict";

    jQuery(document).ready(function($) {

        //BLOG WIDGET    
        blogAjaxHandler();

        //CARDS WIDGET
        movieCardsAjaxHandler();
        tvshowCardsAjaxHandler();
        videoCardsAjaxHandler();

        //GENRES WIDGET
        genresAjaxHandler();

        //PERSONS WIDGET
        personAjaxHandler();

        //SLIDERS WIDGET
        movieSliderAjaxHandler();
        tvshowSliderAjaxHandler();
        videoSliderAjaxHandler();

        //TAGS WIDGET
        tagsAjaxHandler();

        //TOP TEN WIDGET
        toptenAjaxHandler();

        jQuery('.streamit_loadmore_btn_viewall').click(function() {
            var button_load = jQuery(this).attr('data-loading-text');
            var button_text = jQuery(this).text();
            var max_page = jQuery(this).data('max-page');
            var url = window.location.href;

            var button = jQuery(this),
                data = {
                    'action': 'loadmore_viewall',
                    'query': streamit_loadmore_params.posts,
                    'page': streamit_loadmore_params.current_page,
                    'href': url,
                };

            jQuery.ajax({
                url: streamit_loadmore_params.ajaxurl,
                data: data,
                type: 'POST',
                beforeSend: function(xhr) {
                    button.text(button_load);
                },
                success: function(data) {
                    if (data) {
                        button.text(button_text);
                        button.parent().parent('.streamit_datapass_view').find('.viewall-list').append(data);

                        streamit_loadmore_params.current_page++;
                        if (streamit_loadmore_params.current_page == max_page)
                            button.remove();

                    } else {
                        button.remove();
                    }
                }
            });
        });

        //watchlist ALL AJAX CALL
        jQuery('.streamit_loadmore_btn_watchlist').click(function() {
            var button_text = jQuery(this).text();
            var query_args = jQuery(this).attr('data-query_args');
            var button_load = jQuery(this).attr('data-loading-text');

            var button = jQuery(this),
                style = button.data("style"),
                imgOrientation = button.data("img-orientation"),
                data = {
                    'action': 'loadmore_watchlist',
                    'style': style,
                    'img_orientation': imgOrientation,
                    'query': streamit_loadmore_params.posts,
                    'page': streamit_loadmore_params.current_page,
                    'query_args': query_args,
                    'button_text': button_text
                };

            jQuery.ajax({
                url: streamit_loadmore_params.ajaxurl,
                data: data,
                type: 'POST',
                beforeSend: function(xhr) {
                    button.text(button_load);
                },
                success: function(data) {
                    if (data) {
                        button.text(button_text).parent().prev().after(data);
                        watchlist_last_item();
                        streamit_loadmore_params.current_page++;

                        if (streamit_loadmore_params.current_page == streamit_loadmore_params.max_page)
                            button.remove();

                    } else {
                        button.remove();
                    }
                }
            });
        });

        // Infinite Scroll 
        jQuery(function(jQuery) {

            var canBeLoaded = true,
                bottomOffset = 2000;

            var streamit_options = jQuery('.streamit_datapass_viewall').data('options');
            var streamit_options_watchlist = jQuery('.streamit_datapass_watchlist').data('options');

            if (streamit_options == "infinite_scroll") {

                jQuery(window).scroll(function() {

                    var data = {
                        'action': 'loadmore_viewall',
                        'query': streamit_loadmore_params.posts,
                        'page': streamit_loadmore_params.current_page,
                        'href': window.location.href
                    };

                    max_page = jQuery('.streamit_datapass_viewall').data('max-page');

                    if (jQuery(document).scrollTop() > (jQuery(document).height() - bottomOffset) && canBeLoaded == true) {

                        jQuery.ajax({
                            url: streamit_loadmore_params.ajaxurl,
                            data: data,
                            type: 'POST',
                            beforeSend: function(xhr) {
                                canBeLoaded = false;
                                jQuery(".loader-wheel-container").html('<div class="loader-wheel"><i><i><i><i><i><i><i><i><i><i><i><i></i></i></i></i></i></i></i></i></i></i></i></i></div>');
                            },
                            success: function(data) {
                                if (data) {
                                    watchlist_last_item();
                                    if (streamit_loadmore_params.current_page == max_page) {
                                        canBeLoaded = false;
                                        jQuery(".loader-wheel-container").html('');
                                    } else {
                                        streamit_loadmore_params.current_page++;
                                        jQuery('.viewall-list').append(data); // where to insert posts
                                        canBeLoaded = true; // the ajax is completed, now we can run it again
                                    }
                                } else {
                                    jQuery(".loader-wheel-container").html('');
                                }
                            }
                        });
                    }


                });

            }
            if (streamit_options_watchlist == "infinite_scroll") {

                jQuery(window).scroll(function() {

                    //** search load more *//
                    var style = jQuery(".infinite_watchlist").data("style");
                    var imgOrientation = jQuery(".infinite_watchlist").data("img-orientation");
                    var data = {
                        'action': 'loadmore_watchlist',
                        'style': style,
                        'img_orientation': imgOrientation,
                        'query': streamit_loadmore_params.posts,
                        'page': streamit_loadmore_params.current_page,

                    };

                    if (jQuery(document).scrollTop() > (jQuery(document).height() - bottomOffset) && canBeLoaded == true) {

                        jQuery.ajax({
                            url: streamit_loadmore_params.ajaxurl,
                            data: data,
                            type: 'POST',
                            beforeSend: function(xhr) {
                                canBeLoaded = false;
                                jQuery(".loader-wheel-container").html('<div class="loader-wheel"><i><i><i><i><i><i><i><i><i><i><i><i></i></i></i></i></i></i></i></i></i></i></i></i></div>');
                            },
                            success: function(data) {
                                if (data) {
                                    watchlist_last_item();
                                    jQuery('.infinite_watchlist').prev().after(data); // where to insert posts
                                    canBeLoaded = true; // the ajax is completed, now we can run it again
                                    streamit_loadmore_params.current_page++;
                                    if (streamit_loadmore_params.current_page == streamit_loadmore_params.max_page) {
                                        canBeLoaded = false;
                                        jQuery(".loader-wheel-container").html('');
                                    }
                                    jQuery('.loader-wheel').remove();
                                } else {
                                    jQuery(".loader-wheel-container").html('');
                                }

                            }
                        });
                    }
                });
            }
        });
    });
})(jQuery);

function blogAjaxHandler() {
    const blogGrid = jQuery('.streamit_datapass_blog_grid');

    if (blogGrid.length > 0)
        paginationAjaxHandler(blogGrid);
}

function movieCardsAjaxHandler() {
    const movie_cards = jQuery('.movie_cards');

    if (movie_cards.length > 0)
        paginationAjaxHandler(movie_cards);
}

function tvshowCardsAjaxHandler() {
    const tvshow_cards = jQuery('.tvshow_cards');

    if (tvshow_cards.length > 0)
        paginationAjaxHandler(tvshow_cards);
}

function videoCardsAjaxHandler() {
    const video_cards = jQuery('.video_cards');

    if (video_cards.length > 0)
        paginationAjaxHandler(video_cards);
}

function genresAjaxHandler() {
    const genresGrid = jQuery('.streamit_datapass_genres');

    if (genresGrid.length > 0)
        paginationAjaxHandler(genresGrid);
}

function personAjaxHandler() {
    const personsGrid = jQuery('.streamit_datapass_person');

    if (personsGrid.length > 0)
        paginationAjaxHandler(personsGrid);
}

function movieSliderAjaxHandler() {
    const movieSlider = jQuery('.streamit_datapass_movie');

    if (movieSlider.length > 0)
        paginationAjaxHandler(movieSlider);
}

function tvshowSliderAjaxHandler() {
    const tvshowSlider = jQuery('.streamit_datapass_tvshow');

    if (tvshowSlider.length > 0)
        paginationAjaxHandler(tvshowSlider);
}

function videoSliderAjaxHandler() {
    const videoSlider = jQuery('.streamit_datapass_video');

    if (videoSlider.length > 0)
        paginationAjaxHandler(videoSlider);
}

function tagsAjaxHandler() {
    const tagsGrid = jQuery('.streamit_datapass_tags_grid');

    if (tagsGrid.length > 0)
        paginationAjaxHandler(tagsGrid);
}

function toptenAjaxHandler() {
    const top_ten = jQuery('.streamit-top_ten');

    if (top_ten.length > 0)
        paginationAjaxHandler(top_ten);
}

//AJAX Handler For LoadMore And Infinite Scroll
function paginationAjaxHandler($class) {
    $class.each(function(key, item) {
        const _this = jQuery(item);

        let canBeLoaded = _this.data('can-beloaded');
        if (!canBeLoaded) return;

        const hidden_info = _this.next('.loader-wheel-container');
        const streamit_slider_pagination = jQuery(item).data('options');

        const streamit_ajax_loading = hidden_info.find('.is_ajax_loading_enabled').val();

        if (streamit_ajax_loading == "ajax_load") {
            const action = hidden_info.find('.action').val();
            const settings = hidden_info.find('.settings').val();
            const query_args = hidden_info.find('.query_args').val();
            const maxPage = Number(hidden_info.find('.max_page').val());
            let currentPage = Number(hidden_info.find('.current-page').val());
            const posts_per_page = Number(hidden_info.find('.posts_per_page').val());

            const data = {
                'action': action,
                'query_args': query_args,
                'page': currentPage,
                'settings': settings,
            };

            if (action == "top_ten") {
                var count_numbers = Number(hidden_info.find('.count_numbers').val());
                data['count_numbers'] = count_numbers;
            }

            jQuery.ajax({
                url: streamit_loadmore_params.ajaxurl,
                data: data,
                type: 'POST',
                beforeSend: function() {
                    canBeLoaded = false;
                },
                success: function(data) {
                    if (data) {
                        var dataArray = [];

                        jQuery(data).each(function() {
                            var $slideItem = jQuery(this);
                            var $append = {};

                            if (action !== "top_ten") {

                                //Get Post Images
                                var imgBox = $slideItem.find('.img-box').html();
                                $append['img-box'] = imgBox;

                                //Get Post Titles
                                var iqTitle = $slideItem.find('.iq-title').html();
                                $append['iq-title'] = iqTitle;

                                // Get Post Run Time
                                var duration = $slideItem.find('.movie-time').html();
                                $append['movie-time'] = duration;

                                // Get Post Watchlist
                                var watchlist = $slideItem.find('.watchlist').html();
                                if (watchlist !== undefined)
                                    $append['watchlist'] = watchlist;

                                // Get Post Sharing and Play Icon
                                var social_info = $slideItem.find('.block-social-info').html();
                                $append['social-info'] = social_info;

                                // Get Post Sharing and Play Icon
                                var hover_buttons = $slideItem.find('.hover-buttons').html();
                                if (hover_buttons !== undefined)
                                    $append['hover_buttons'] = hover_buttons;

                                if (
                                    imgBox !== undefined &&
                                    iqTitle !== undefined &&
                                    social_info !== undefined
                                ) {
                                    dataArray.push($append);
                                }
                            } else {
                                //Get Post Images
                                var imgBox = $slideItem.find('.img-box').html();
                                $append['img-box'] = imgBox;

                                var count = $slideItem.find('.top_ten_numbers').html();
                                $append['count_numbers'] = count;

                                if (imgBox !== undefined && count_numbers !== undefined) {
                                    dataArray.push($append);

                                    hidden_info.find('.count_numbers').val(count);
                                }
                            }
                        });

                        $replaceBlock = _this.find('li.slide-items');

                        if ($replaceBlock.length <= 0 || $replaceBlock === undefined)
                            $replaceBlock = _this.find('li.slide-item');

                        $replaceBlock.each(function(key) {
                            var $this = jQuery(this);

                            $this.removeClass('sk-cards-wrapper');

                            var $imgBox = $this.find('.img-box');
                            var $title = $this.find('.iq-title');
                            var $runTime = $this.find('.movie-time');
                            var $watchlist = $this.find('.watchlist');
                            var $social_info = $this.find('.block-social-info');
                            var $hover_buttons = $this.find('.hover-buttons');
                            var $count_numbers = $this.find('.count_numbers');

                            var $key = $this.data('slick-index');

                            // For Slider
                            if ($key !== undefined) {
                                if ($key < 0) {
                                    $key = Math.abs($key);
                                    $key = posts_per_page - $key;
                                } else {
                                    if ($key >= posts_per_page) {
                                        $key = $key - posts_per_page;
                                    }
                                }
                            } else {
                                // For Grid
                                $key = key;
                            }

                            if (dataArray[$key] !== undefined) {
                                $imgBox.html(dataArray[$key]['img-box']);
                                $title.html(dataArray[$key]['iq-title']);
                                $runTime.html(dataArray[$key]['movie-time']);
                                $social_info.html(dataArray[$key]['social-info']);

                                if ($watchlist.length > 0)
                                    $watchlist.html(dataArray[$key]['watchlist']);

                                if ($hover_buttons.length > 0)
                                    $hover_buttons.html(dataArray[$key]['hover_buttons']);

                                if ($count_numbers.length > 0)
                                    $count_numbers.html(dataArray[$key]['count_numbers']);

                            } else {
                                $this.hide();
                            }
                        });

                        currentPage++;
                        hidden_info.find('.current-page').val(currentPage);

                        canBeLoaded = true;
                    }
                },
                error: function(xhr) {
                    console.log(xhr);
                }
            });
        }

        if (streamit_slider_pagination == "infinite") {
            const action = hidden_info.find('.action').val();
            const settings = hidden_info.find('.settings').val();
            const query_args = hidden_info.find('.query_args').val();
            const maxPage = Number(hidden_info.find('.max_page').val());

            jQuery(window).scroll(function() {
                if (isScrolledIntoView(hidden_info) && canBeLoaded) {

                    let currentPage = Number(hidden_info.find('.current-page').val());
                    const posts_per_page = Number(hidden_info.find('.posts_per_page').val());

                    const data = {
                        'action': action,
                        'query_args': query_args,
                        'page': currentPage,
                        'settings': settings,
                    };

                    if (action == "top_ten") {
                        var count_numbers = Number(hidden_info.find('.count_numbers').val());
                        data['count_numbers'] = count_numbers;
                    }

                    jQuery.ajax({
                        url: streamit_loadmore_params.ajaxurl,
                        data: data,
                        type: 'POST',
                        beforeSend: function(xhr) {
                            canBeLoaded = false;
                            _this.find(".loader-wheel-container").html('<div class="loader-wheel"><i><i><i><i><i><i><i><i><i><i><i><i></i></i></i></i></i></i></i></i></i></i></i></i></div>');
                        },
                        success: function(data) {
                            if (data) {
                                _this.find('.list-grid').append(data);

                                currentPage++;
                                hidden_info.find('.current-page').val(currentPage);

                                hidden_info.find('.count_numbers').val(count_numbers + posts_per_page);

                                if (currentPage === maxPage) {
                                    _this.find(".loader-wheel-container").html('');
                                    canBeLoaded = false;
                                } else {
                                    canBeLoaded = true;
                                }
                            } else {
                                _this.find(".loader-wheel-container").html('');
                            }
                        }
                    });
                }
            });
        }

        if (streamit_slider_pagination === "loadmore") {
            const load_btn = hidden_info.find('.loadmore_btn').val();
            jQuery(load_btn).attr('loadmore-page-no', 1);

            jQuery(load_btn).click(function() {
                const button = jQuery(this);
                const buttonTxt = button.text();
                const $parent = button.parent();
                const currentPage = button.attr('loadmore-page-no');
                let count_numbers = 0;

                const action = $parent.find('.action').val();
                const buttonLoad = $parent.find('.iq-button');
                const settings = $parent.find('.settings').val();
                const query_args = $parent.find('.query_args').val();
                const loadingText = $parent.find('.loading-text').val();
                const maxPage = parseInt($parent.find('.max_page').val()) - 1;
                const posts_per_page = Number($parent.find('.posts_per_page').val());

                const data = {
                    'action': action,
                    'query_args': query_args,
                    'page': currentPage,
                    'settings': settings,
                };

                if (action == "top_ten") {
                    count_numbers = Number($parent.find('.count_numbers').val());
                    data['count_numbers'] = count_numbers;
                }

                jQuery.ajax({
                    url: streamit_loadmore_params.ajaxurl,
                    data: data,
                    type: 'POST',
                    beforeSend: function(xhr) {
                        buttonLoad.html('<span>' + loadingText + '<span>');
                    },
                    success: function(data) {
                        if (data) {
                            $parent.prev('.iq-ajax-content').find('.list-grid').append(data);

                            button.attr('loadmore-page-no', parseInt(currentPage) + 1);
                            button.html('<div class="btn btn-hover iq-button"><span>' + buttonTxt + '</span></div>');

                            if (action == "top_ten")
                                $parent.find('.count_numbers').val(count_numbers + posts_per_page);

                            if (currentPage == maxPage)
                                button.remove();
                        } else {
                            button.remove();
                        }
                    }
                });
            });
        }
    });
}

function isScrolledIntoView(elem) {
    var docViewTop = jQuery(window).scrollTop();
    var docViewBottom = docViewTop + jQuery(window).height();

    var elemTop = jQuery(elem).offset().top;
    var elemBottom = elemTop + jQuery(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}