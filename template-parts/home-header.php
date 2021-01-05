<header id="header">
    <?php get_template_part('template-parts/navbar'); ?>
    <div class="container">
        <div class="col-lg-8 header-text">

            <div class="b-title gsap-subtitle font-bold"><span>Web</span> <span>Developer</span> <span>|</span> <span>Web</span> <span>Designer<span> </div>

            <!-- <div class="gsap-container"> -->
            <h1 class="font-bold gsap-title"><span>Let's</span> <span>create</span> <span>your</span> <span>success.</span></h1>
            <!-- </div> -->

            <p class="font-thin gsap-description"><span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, possimus quibusdam cupiditate </span> <span>vitae consequuntur architecto?</span></p>
            <div class="cta-wrapper">
                <hr>
                <a href="/" class="cta cta-header font-light">Get to know me</a>
            </div>
        </div>
    </div>

    <div class="header-social">
        <a href="/">Fb</a>
        <a href="/">Ig</a>
        <a href="/">Tw</a>
        <a href="/">In</a>
    </div>
    <?php echo file_get_contents(get_template_directory_uri() . '/src/assets/dots.svg'); ?>
    <p class="dots-text font-light">Designing and developing websites since 2018.</p>
</header>