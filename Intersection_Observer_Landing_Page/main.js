const header = document.querySelector(".header");
const heroSection = document.querySelector(".hero");
const aboutSection = document.querySelector(".about");
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slider");
const lazyImages = document.querySelectorAll("img[data-src]");

const headerObserver = new IntersectionObserver(
	function (entries) {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) {
				header.classList.add("header--scroll");
			} else {
				header.classList.remove("header--scroll");
			}
		});
	},
	{
		rootMargin: "-92px 0px 0px 0px",
	}
);

headerObserver.observe(heroSection);

const faderObserver = new IntersectionObserver(
	function (entries) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("appear");
				faderObserver.unobserve(entry.target);
			}
		}, faderObserver);
	},
	{
		threshold: 1,
		rootMargin: "0px 0px -92px 0px",
	}
);

faders.forEach((fader) => {
	faderObserver.observe(fader);
});

const sliderObserver = new IntersectionObserver(
	function (entries, sliderObserver) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("appear");
				sliderObserver.unobserve(entry.target);
			}
		});
	},
	{ threshold: 0.7 }
);

sliders.forEach((slider) => {
	sliderObserver.observe(slider);
});

const lazyImageObserver = new IntersectionObserver(
	function (entries, lazyImageObserver) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.src = entry.target.getAttribute("data-src");
				lazyImageObserver.unobserve(entry.target);
			}
		});
	},
	{
		rootMargin: "0px 0px 500px 0px",
	}
);

lazyImages.forEach((lazyImage) => {
	lazyImageObserver.observe(lazyImage);
});
