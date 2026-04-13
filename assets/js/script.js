// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close mobile menu when link is clicked
navItems.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Active nav link on scroll
window.addEventListener("scroll", () => {
    let current = "";
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").slice(1) === current) {
            link.classList.add("active");
        }
    });
});

// Smooth scroll for buttons
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.animation = "fadeInUp 0.6s ease-out forwards";
        }
    });
}, observerOptions);

document.querySelectorAll(".team-card, .project-card, .stat-card").forEach((el) => {
    observer.observe(el);
});
