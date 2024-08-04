//? =========  OPENING ANIMATION
gsap.from(".clip-top, .clip-bottom", 2, {
	delay: 1,
	height: "50vh",
	ease: "power4.inOut",
});

//? ========= TEXT REVEAL
gsap.to(".marquee", 3.5, {
	delay: 0.75,
	top: "50%",
	ease: "power4.inOut",
});

//? =========  TOP & BOTTOM CLIP ANIMATION
gsap.from(".clip-top .marquee, .clip-bottom .marquee", 5, {
	delay: 1,
	left: "100%",
	ease: "power3.inOut",
});

//? ========= CENTER CLIP ANIMATION
gsap.from(".clip-center .marquee", 5, {
	delay: 1,
	left: "-50%",
	ease: "power3.inOut",
});

//? =========  TOP CLIP RETURN ANIMATION
gsap.to(".clip-top", 2, {
	delay: 6,
	clipPath: "inset(0 0 100% 0)",
	ease: "power4.inOut",
});

//? =========  BOTTOM CLIP RETURN ANIMATION
gsap.to(".clip-bottom", 2, {
	delay: 6,
	clipPath: "inset(100% 0 0 0)",
	ease: "power4.inOut",
});

//? =========  CENTER CLIP EXTRA TEXT HIDE
gsap.to(
	".clip-top .marquee, .clip-bottom .marquee, .clip-center .marquee  span",
	1,
	{
		delay: 6,
		opacity: 0,
		ease: "power2.inOut",
	}
);
