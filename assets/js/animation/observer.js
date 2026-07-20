const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.style.animation = "fadeInUp .6s ease-out forwards";
			}
		});
	},
	{
		threshold: 0.1,
		rootMargin: "0px 0px -100px 0px",
	},
);

document.querySelectorAll(".project-card, .stat-card").forEach((el) => observer.observe(el));
