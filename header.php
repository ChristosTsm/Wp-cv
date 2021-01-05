<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <div class="body-wrapper">
        <!-- open body wrapper -->
        <div class="loader">
            <!-- <php echo file_get_contents(get_template_directory_uri() . '/src/assets/loading.svg'); ?> -->
            <!-- <h1 style="color: #fff; margin: auto;">loading..</h1> -->
            <?php get_template_part('template-parts/home', 'loading') ?>
        </div>
        <div class="loader-2"></div>
        <!-- <div class="page-wrapper"> Locomotove JS Container -->