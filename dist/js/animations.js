(function () {
	new kursor({
		type: 4,
		removeDefaultCursor: true,
		color: "#ff5757",
		multiplier: -5,
	});

	const locoScroll = new LocomotiveScroll({
		el: document.querySelector("[data-scroll-container]"),
		smooth: true,
	});

	locoScroll.on("scroll", ScrollTrigger.update);

	ScrollTrigger.scrollerProxy(".page-wrapper", {
		scrollTop(value) {
			return arguments.length
				? locoScroll.scrollTo(value, 0, 0)
				: locoScroll.scroll.instance.scroll.y;
		},
		getBoundingClientRect() {
			return {
				top: 0,
				left: 0,
				width: window.innerWidth,
				height: window.innerHeight,
			};
		},
		pinType: document.querySelector(".page-wrapper").style.transform
			? "transform"
			: "fixed",
	});

	var tl = gsap.timeline();

	tl.to(".loader", {
		x: 5000,
		zIndex: -1,
		duration: 4,
		delay: 5,
		ease: "power4.inOut",
	})
		.to(
			"#loading",
			{
				opacity: 0,
				duration: 2,
				stagger: 0.1,
				delay: 1,
			},
			"-=6"
		)
		.to(
			".loader-2",
			{
				x: 5000,
				zIndex: -1,
				duration: 3,
				ease: "power4.inOut",
			},
			"-=3"
		)
		.from(
			".gsap-subtitle span",
			{
				opacity: 0,
				duration: 1,
				y: 500,
				stagger: 0.2,
			},
			"-=2"
		)
		.from(
			".gsap-title span",
			{
				opacity: 0,
				x: -500,
				duration: 1,
				stagger: 0.2,
				ease: "power4.inOut",
			},
			"-=1"
		)
		.from(
			".gsap-description span",
			{
				opacity: 0,
				duration: 2,
				stagger: 0.2,
				ease: "power4.inOut",
			},
			"-=1"
		)
		.from(
			".cta-wrapper hr",
			{
				opacity: 0,
				duration: 1,
				ease: "power4.inOut",
			},
			"-=1"
		)
		.from(
			".cta-header",
			{
				opacity: 0,
				duration: 1,
				ease: "power4.inOut",
			},
			"-=1.2"
		)
		.from(
			".navbar a",
			{
				opacity: 0,
				y: -500,
				duration: 1,
				ease: "power4.inOut",
			},
			"-=1"
		)
		.from(
			".navbar ul li",
			{
				opacity: 0,
				y: -500,
				duration: 1,
				stagger: 0.2,
				ease: "power4.inOut",
			},
			"-=1"
		)
		.from(
			".header-social a",
			{
				opacity: 0,
				x: -500,
				duration: 2,
				stagger: 0.2,
				ease: "power4.inOut",
			},
			"-=3"
		)
		.from(
			".svg-dots path",
			{
				opacity: 0,
				stagger: 0.01,
				duration: 1,
				ease: "power4.inOut",
			},
			"-=3"
		);

	gsap.from(".b-title-gsap span", {
		scrollTrigger: {
			trigger: ".b-title-gsap",
			start: "center center",
			scroller: ".page-wrapper",
		},
		opacity: 0,
		stagger: 0.2,
		duration: 2,
		ease: Expo.easeInOuteaseInOut,
	});
	gsap.from(".skills-gsap-title h2", {
		scrollTrigger: {
			trigger: ".b-title-gsap",
			start: "center center",
			scroller: ".page-wrapper",
		},
		opacity: 0,
		y: 500,
		stagger: 0.3,
		duration: 2,
		ease: Expo.easeInOuteaseInOut,
		delay: 0.5,
	});
	gsap.from(".skills-section-title span", {
		scrollTrigger: {
			trigger: ".b-title-gsap",
			start: "center center",
			scroller: ".page-wrapper",
		},
		opacity: 0,
		stagger: 0.2,
		duration: 2,
		ease: Expo.easeInOuteaseInOut,
		delay: 0.6,
	});
	gsap.from(".skills-section-description span", {
		scrollTrigger: {
			trigger: ".b-title-gsap",
			start: "center center",
			scroller: ".page-wrapper",
		},
		opacity: 0,
		stagger: 0.2,
		duration: 2,
		ease: Expo.easeInOuteaseInOut,
		delay: 0.7,
	});
	gsap.from(".gsap-ul-title span", {
		scrollTrigger: {
			trigger: ".b-title-gsap",
			start: "center center",
			scroller: ".page-wrapper",
		},
		opacity: 0,
		stagger: 0.2,
		duration: 2,
		ease: Expo.easeInOuteaseInOut,
		delay: 0.8,
	});
	gsap.from(".skills-ul li", {
		scrollTrigger: {
			trigger: ".b-title-gsap",
			start: "center center",
			scroller: ".page-wrapper",
		},
		opacity: 0,
		stagger: 0.15,
		duration: 2,
		ease: Expo.easeInOuteaseInOut,
		delay: 0.9,
	});

	// Home-Work Animations
	gsap.from(".work-gsap-title h2", {
		scrollTrigger: {
			trigger: "#work",
			start: "center center",
			scroller: ".page-wrapper",
		},
		opacity: 0,
		y: 500,
		stagger: 0.3,
		duration: 2,
		ease: Expo.easeInOuteaseInOut,
	});
	gsap.from(".skills-b-title-gsap span", {
		scrollTrigger: {
			trigger: "#work",
			start: "center center",
			scroller: ".page-wrapper",
		},
		opacity: 0,
		stagger: 0.2,
		duration: 2,
		ease: Expo.easeInOuteaseInOut,
	});
	gsap.from(".gsap-work-title span", {
		scrollTrigger: {
			trigger: "#work",
			start: "center center",
			scroller: ".page-wrapper",
		},
		opacity: 0,
		stagger: 0.2,
		duration: 2,
		ease: Expo.easeInOuteaseInOut,
	});
	gsap.from(".gsap-work-description span", {
		scrollTrigger: {
			trigger: "#work",
			start: "center center",
			scroller: ".page-wrapper",
		},
		opacity: 0,
		stagger: 0.2,
		duration: 2,
		ease: Expo.easeInOuteaseInOut,
	});
	gsap.from(".company,.job,.time, .job-title", {
		scrollTrigger: {
			trigger: "#work",
			start: "center center",
			scroller: ".page-wrapper",
		},
		opacity: 0,
		y: 500,
		stagger: 0.3,
		duration: 2,
		ease: Expo.easeInOuteaseInOut,
		delay: 0.5,
	});

	// Home Portfolio
	gsap.from(".portfolio-b-title", {
		scrollTrigger: {
			trigger: "#portfolio",
			start: "center center",
			scroller: ".page-wrapper",
		},
		opacity: 0,
		stagger: 0.2,
		duration: 2,
		ease: Expo.easeInOuteaseInOut,
	});
	gsap.from(".gsap-portfolio-title", {
		scrollTrigger: {
			trigger: "#portfolio",
			start: "bottom bottom",
			scroller: ".page-wrapper",
		},
		opacity: 0,
		// y: 500,
		duration: 1,
		ease: Expo.easeInOuteaseInOut,
	});
	gsap.from(".portfolio-link h4", {
		scrollTrigger: {
			trigger: "#portfolio",
			start: "bottom bottom",
			scroller: ".page-wrapper",
		},
		opacity: 0,
		// y: 500,
		duration: 1,
		// ease: Expo.easeInOuteaseInOut,
	});

	//Home Blog
	gsap.from(".gsap-blog-title", {
		scrollTrigger: {
			trigger: "#blog",
			start: "top bottom",
			scroller: ".page-wrapper",
		},
		opacity: 0,
		y: 500,
		duration: 2,
		ease: Expo.easeInOuteaseInOut,
	});
	gsap.from(".blog-b-title span", {
		scrollTrigger: {
			trigger: "#blog",
			start: "top bottom",
			scroller: ".page-wrapper",
		},
		opacity: 0,
		stagger: 0.2,
		duration: 2,
		ease: Expo.easeInOuteaseInOut,
	});

	ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
	ScrollTrigger.refresh();
})();
