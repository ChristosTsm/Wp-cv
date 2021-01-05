<?php
function tsm_portfolio_custom_post_type()
{

    $args = array(

        'labels' => array(
            'name' => 'Projects',
            'singular_name' => 'Project'
        ),
        'menu_icon' => 'dashicons-portfolio',
        'hierarchical' => true,
        'public' => true,
        'has_archive' => true,
        'show_in_rest' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt')
    );

    register_post_type('projects', $args);
}

add_action('init', 'tsm_portfolio_custom_post_type');
