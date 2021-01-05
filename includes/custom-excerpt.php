<?php

// add_post_type_support( 'page', 'excerpt' );

function tsm_portfolio_custom_excerpt($length)
{
    return 30;
}
add_filter('excerpt_length', 'tsm_portfolio_custom_excerpt', 999);


function change_excerpt($text)
{
    $pos = strrpos($text, '[');
    if ($pos === false) {
        return $text;
    }

    return rtrim(substr($text, 0, $pos));
}

add_filter('get_the_excerpt', 'change_excerpt');
