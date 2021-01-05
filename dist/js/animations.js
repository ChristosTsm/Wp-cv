(function () {
	var headerTimeline = gsap.timeline();

	let div = document.querySelectorAll(".gsap-container");

	gsap.set(div, { overflow: "hidden" });

	gsap.set(".gsap-title span", { y: -500 });

	headerTimeline
		.from(".gsap-subtitle span", {
			opacity: 0,
			duration: 2,
			y: 500,
			stagger: 0.2,
		})
		.from(
			".gsap-title span",
			{
				opacity: 0,
				x: -500,
				duration: 2,
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
				duration: 2,
				ease: "power4.inOut",
			},
			"-=1"
		)
		.from(
			".cta-header",
			{
				opacity: 0,
				duration: 2,
				ease: "power4.inOut",
			},
			"-=1.2"
		)
		.from(
			".navbar a",
			{
				opacity: 0,
				y: -500,
				duration: 2,
				ease: "power4.inOut",
			},
			"-=1"
		)
		.from(
			".navbar ul li",
			{
				opacity: 0,
				y: -500,
				duration: 2,
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
		);
})();
