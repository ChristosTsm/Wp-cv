(function () {
	var headerTimeline = gsap.timeline();
	var aboutTimeline = gsap.timeline();

	gsap.set(".gsap-title span", { y: -500 });

	headerTimeline
		.to(".loader", {
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
				// y: -500,
				ease: "power4.inOut",
			},
			"-=3"
		);

	gsap.from(".b-title-gsap span", {
		scrollTrigger: {
			trigger: ".b-title-gsap",
			start: "center center",
		},
		opacity: 0,
		stagger: 0.2,
		duration: 2,
		ease: Expo.easeInOuteaseInOut,
	});
})();
