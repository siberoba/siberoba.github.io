document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
        const targetId = anchor.getAttribute("href");

        if (targetId.length <= 1) {
            return;
        }

        e.preventDefault();

        document
            .querySelector(targetId)
            ?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
    });
});