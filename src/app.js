var rellax = new Rellax('.rellax', {
    center:true,
    speed: 2
});


if (document.querySelector('.nav_toggle')) {

    let toggle = document.querySelector('.nav_toggle');
    let navbar = document.querySelector('.nav_bar');
    let bool = false;
    let tl = gsap.timeline();

    toggle.addEventListener('click', function() {

        if( bool == false ) {
            gsap.to('.bar1', { 
                duration:.2,
                width:'45px',
                height:'2px',
                top:'45%',
                left:'15%',
                rotate:'45deg',
                zIndex: 5,
                backgroundColor: '#fff'
            })
            gsap.to('.bar2', { 
                duration:.2,
                opacity:0 
            })
            gsap.to('.bar3', { 
                duration:.2,
                width:'45px',
                height:'2px',
                top:'45%',
                left:'15%',
                rotate:'-45deg',
                zIndex: 5,
                backgroundColor: '#fff'
            })
            gsap.to('.nav_bar', {
                zIndex: 5
            })
            tl.to('.nav_back', {
                duration: .5,
                width: '100%',
                ease: 'power2.in'
            });
            tl.to('li', {
                duration: .5,
                opacity: 1,
                ease: 'power3.in',
                stagger: .15
            })
            bool = true
        } else {
            gsap.to('.bar1', {
                duration: .2,
                width: '30px',
                height: '2px',
                top: '25%',
                left: '22%',
                rotate: '0deg',
                backgroundColor: '#111'

            })
            gsap.to('.bar2', {
                duration: .2,
                width: '30px',
                height: '2px',
                top: '45%',
                left: '22%',
                opacity: 1,
                ease: 'power3.in'
            })
            gsap.to('.bar3', {
                duration: .2,
                width: '30px',
                height: '2px',
                top: '65%',
                left: '22%',
                rotate: '0deg',
                backgroundColor: '#111'
            })
            tl.to('.nav_back_li', {
                duration: .7,
                opacity:0,
                ease:'power3.out',
                stagger: .1
            })
            tl.to('.nav_back', {
                duration: .5,
                delay: .2,
                width: 0,
                ease: 'power2.out'
            })
            bool = false
        }
    })


    window.addEventListener('scroll', function() {
        navbar.classList.toggle('nav_bar_scroll', window.scrollY > 300);
    })

    gsap.to('#blog', {
        x:700,
        duration: 1,
        delay: 1,
        scrollTrigger: {
            trigger: '#blog'
        }
    })

    gsap.from('.deery-black-box', {
        duration: 1,
        width: '0em',
        ease: Expo.in
    })
    
    TweenMax.from(".center-container", 1, {
        delay: 1.2,
        width: "0",
        ease: Expo
    });
    
    TweenMax.from(".deery-burger-logo",  2, {
        delay: 1.5,
        opacity: 0,
        ease: Expo
      });
    
    TweenMax.from(".deery-hero-text", 2, {
        delay: 2,
        y: 20,
        opacity: 0,
        ease: Expo
    });
    
    TweenMax.staggerFrom(
        ".deery-social a",
        2,
        {
          delay: 2.5,
          opacity: 0,
          ease: Expo,
          y:20
        },
        0.1
    );

    TweenMax.from(".about-us-img", 2, {
        duration: 2,
        y: 1000,
        opacity: 0,
        ease: Expo,
        delay: 1,
        scrollTrigger: {
            trigger: '#about'
        }
    });

}

