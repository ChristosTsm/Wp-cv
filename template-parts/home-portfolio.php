<?php

/**
 * Custom Post Types Query
 * 
 */
$args = array(
    'post_type' => 'projects',
    'post_status' => 'publish',
    'posts_per_page' => 4
);

$query = new WP_Query($args);
?>

<div data-scroll-section>

    <section class="section-padding" id="portfolio">

        <div class="container">
            <div class="row" data-scroll data-scroll-speed="2">
                <div class="col-lg-12 gsap-div">
                    <h3 class="b-title portfolio-b-title"><span>Latest</span> <span>Projects</span></h3>
                    <h2 class="font-extra-bold gsap-portfolio-title">Solving diverse business needs.</h2>
                </div>
            </div>

            <div class="portfolio-wrapper">
                <?php if ($query->have_posts()) : ?>
                    <?php while ($query->have_posts()) : $query->the_post(); ?>
                        <div class="portfolio-item" id="<?php the_ID(); ?>" data-scroll data-scroll-speed="3">
                            <a href="<?php the_permalink(); ?>" class="portfolio-link">
                                <?php the_post_thumbnail('post-thumbnail', ['class' => 'portfolio-img']); ?>
                                <div class="gsap-div">
                                    <h4 class="portfolio-title font-bold"><?php the_title(); ?></h4>
                                </div>
                            </a>
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