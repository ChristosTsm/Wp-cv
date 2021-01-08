<?php

/**
 * Custom Post Types Query
 * 
 */
$args = array(
    'post_type' => 'post',
    'post_status' => 'publish',
    'posts_per_page' => 4
);

$query = new WP_Query($args);
?>
<div data-scroll-section>
    <section id="blog" class="section-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 gsap-div" data-scroll data-scroll-speed="2">
                    <h3 class="b-title blog-b-title"><span>Insi</span><span>ghts</span></h3>
                    <h2 class="font-extra-bold gsap-blog-title">Perspectives on digital and web.</h2>
                </div>
            </div>


            <div class="blog-wrapper">
                <?php if ($query->have_posts()) : ?>
                    <?php while ($query->have_posts()) : $query->the_post(); ?>
                        <div class="blog-item" id="<?php the_ID(); ?>" data-scroll data-scroll-speed="3">
                            <a href="<?php the_permalink(); ?>" class="blog-link">
                                <?php the_post_thumbnail('post-thumbnail', ['class' => 'blog-img']); ?>
                                <div class="gsap-div">
                                    <!-- <php the_category(''); ?> -->
                                    <h4 class="blog-title font-bold"><?php the_title(); ?></h4>
                                </div>
                            </a>
                            <?php the_category(''); ?>
                        </div>
                    <?php endwhile;
                    wp_reset_postdata(); ?>
                <?php else :  ?>
                    <p><?php _e('Sorry, no projects yet.'); ?></p>
                <?php endif; ?>
            </div>
        </div>
    </section>
</div>