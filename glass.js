// ================================
// Glass Engine v1
// ================================

const glassCards = [];

function initGlass() {

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
                `${50 + (px - .5) * 8}% ${50 + (py - .5) * 8}%`;

        });

        card.addEventListener("mouseleave", () => {

            layer.style.backgroundPosition = "50% 50%";

        });

    });

}

function animateGlass(){

    glassCards.forEach(g=>{

        g.x += g.dx;
        g.y += g.dy;

        if(g.x>40||g.x<0) g.dx*=-1;
        if(g.y>40||g.y<0) g.dy*=-1;

        g.layer.style.transform =

            `translate(${g.x*0.25}px,${g.y*0.18}px) scale(1.05)`;

    });

    requestAnimationFrame(animateGlass);

}

window.addEventListener("load",()=>{

    setTimeout(()=>{

        initGlass();

        animateGlass();

    },100);

});

.glass-reflection{
    position:absolute;
    inset:0;
    border-radius:inherit;
    pointer-events:none;
    z-index:4;

    background:
        radial-gradient(
            ellipse at 18% 18%,
            rgba(255,255,255,.34),
            rgba(255,255,255,.10) 22%,
            transparent 42%
        ),
        radial-gradient(
            ellipse at 82% 88%,
            rgba(160,245,255,.18),
            rgba(160,245,255,.06) 24%,
            transparent 46%
        );

    opacity:.55;
    mix-blend-mode:screen;

    animation:reflectionBreathe 6.5s ease-in-out infinite alternate;
}

.glass:hover .glass-reflection{
    opacity:.78;
}

@keyframes reflectionBreathe{
    0%{
        transform:translate3d(-1%, -1%, 0) scale(1);
        filter:blur(0px);
    }

    100%{
        transform:translate3d(1%, 1%, 0) scale(1.04);
        filter:blur(1.5px);
    }
}
