// ================================
// Glass Engine v1
// ================================

const glassCards = [];

function initGlass() {

    glassCards.length = 0;

    document.querySelectorAll(".glass").forEach(card => {

        const layer = card.querySelector(".glass-layer");
        const shine = card.querySelector(".glass-highlight");

        if (!layer || !shine) return;

        glassCards.push({

            card,
            layer,
            shine,

            x: Math.random() * 40,
            y: Math.random() * 40,

            dx: (Math.random() - 0.5) * 0.02,
            dy: (Math.random() - 0.5) * 0.02

        });

        card.addEventListener("mousemove", e => {

            const rect = card.getBoundingClientRect();

            const px = (e.clientX - rect.left) / rect.width;
            const py = (e.clientY - rect.top) / rect.height;

            layer.style.backgroundPosition =
                `${50 + (px - 0.5) * 8}% ${50 + (py - 0.5) * 8}%`;

        });

        card.addEventListener("mouseleave", () => {

            layer.style.backgroundPosition = "50% 50%";

        });

    });

}

function animateGlass() {

    glassCards.forEach(g => {

        g.x += g.dx;
        g.y += g.dy;

        if (g.x > 40 || g.x < 0) g.dx *= -1;
        if (g.y > 40 || g.y < 0) g.dy *= -1;

        g.layer.style.transform =
            `translate(${g.x * 0.25}px, ${g.y * 0.18}px) scale(1.05)`;

    });

    requestAnimationFrame(animateGlass);

}

window.addEventListener("load", () => {

    setTimeout(() => {

        initGlass();

        animateGlass();

    }, 100);

});
