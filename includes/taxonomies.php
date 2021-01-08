<?php
//create a custom taxonomy name it subjects for your posts
function tsm_custom_taxonomies()
{

    // Add new taxonomy, make it hierarchical like categories
    //first do the translations part for GUI

    $labels = array(
        'name' => _x('Technologies', 'taxonomy general name'),
        'singular_name' => _x('Technology', 'taxonomy singular name'),
        'search_items' =>  __('Search Technologies'),
        'all_items' => __('All Technologies'),
        'parent_item' => __('Parent Technology'),
        'parent_item_colon' => __('Parent Technology:'),
        'edit_item' => __('Edit Technology'),
        'update_item' => __('Update Technology'),
        'add_new_item' => __('Add New Technology'),
        'new_item_name' => __('New Technology Name'),
        'menu_name' => __('Technologies'),
    );

    // Now register the taxonomy
    register_taxonomy('Technologies', array('projects'), array(
        'hierarchical' => true,
        'labels' => $labels,
        'show_ui' => true,
        'show_in_rest' => true,
        'show_admin_column' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'subject'),
    ));

    $labels = array(
        'name' => _x('Tasks', 'taxonomy general name'),
        'singular_name' => _x('Task', 'taxonomy singular name'),
        'search_items' =>  __('Search Tasks'),
        'all_items' => __('All Tasks'),
        'parent_item' => __('Parent Task'),
        'parent_item_colon' => __('Parent Task:'),
        'edit_item' => __('Edit Task'),
        'update_item' => __('Update Task'),
        'add_new_item' => __('Add New Task'),
        'new_item_name' => __('New Task Name'),
        'menu_name' => __('Tasks'),
    );

    // Now register the taxonomy
    register_taxonomy('Tasks', array('projects'), array(
        'hierarchical' => true,
        'labels' => $labels,
        'show_ui' => true,
        'show_in_rest' => true,
        'show_admin_column' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'subject'),
    ));
}

add_action('init', 'tsm_custom_taxonomies', 0);
