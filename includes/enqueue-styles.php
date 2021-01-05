<?php

function tsm_portfolio_enqueue_styles()
{

    // Get the theme data
    $the_theme = wp_get_theme();

    // Enqueue CSS 
    wp_enqueue_style('main-css', get_stylesheet_directory_uri() . '/dist/styles/main.css', array('bootstrap'), $the_theme->get('Version'), 'all');
    wp_enqueue_style('bootstrap', get_stylesheet_directory_uri() . '/dist/styles/bootstrap.min.css', array(), $the_theme->get('Version'), 'all');
    // wp_enqueue_style('swiper', 'https://unpkg.com/swiper/swiper-bundle.css', array(), '', 'all');


    // Enqueue JS
    wp_enqueue_script('jquery');

    // wp_enqueue_script('swiperjs', 'https://unpkg.com/swiper/swiper-bundle.min.js', array(), '', true);
    wp_enqueue_script('gsap', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js', array(), '', true);
    wp_enqueue_script('gsap-scrolltrigger', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollTrigger.min.js', array(), '', true);
    wp_enqueue_script('custom-animations-js', get_stylesheet_directory_uri() . '/dist/js/animations.js', array(), $the_theme->get('Version'), true);

    // if (is_singular() && comments_open() && get_option('thread_comments')) {

    //     wp_enqueue_script('comment-reply');
    // }

    // wp_enqueue_script('fontawesome', 'https://kit.fontawesome.com/0e69954788.js', array(), false);

    // wp_enqueue_script('aos-js', get_stylesheet_directory_uri() . '/js/aos.js', array(), true);

    // wp_enqueue_script('exelixis-custom', get_stylesheet_directory_uri() . '/js/exelixis-custom.js', array(), $the_theme->get('Version'), true);
}

add_action('wp_enqueue_scripts', 'tsm_portfolio_enqueue_styles');
