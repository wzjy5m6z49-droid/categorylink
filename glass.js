/* ===========================
   Glass Engine v2
   White Background Edition
=========================== */

.glass{
    position:relative;
    overflow:hidden;
    isolation:isolate;

    border-radius:20px;

    background:
        linear-gradient(
            135deg,
            rgba(255,255,255,.92),
            rgba(245,252,255,.72)
        );

    border:1px solid rgba(120,190,215,.28);

    box-shadow:
        0 10px 24px rgba(40,90,120,.12),
        inset 0 1px 0 rgba(255,255,255,.95),
        inset 0 -1px 0 rgba(120,190,215,.12);

    transition:
        transform .25s ease,
        border-color .25s ease,
        box-shadow .25s ease,
        background .25s ease;
}

.glass:hover{
    transform:translateY(-3px) scale(1.01);

    background:
        linear-gradient(
            135deg,
            rgba(255,255,255,.98),
            rgba(235,250,255,.82)
        );

    border-color:rgba(40,170,210,.42);

    box-shadow:
        0 16px 34px rgba(40,90,120,.18),
        0 0 0 1px rgba(90,210,240,.10),
        inset 0 1px 0 rgba(255,255,255,1),
        inset 0 -1px 0 rgba(60,180,220,.18);
}

/* 内側の淡い海色反射 */
.glass-layer{
    position:absolute;
    inset:-20%;
    pointer-events:none;

    background:
        radial-gradient(
            circle at 18% 18%,
            rgba(255,255,255,.88),
            transparent 24%
        ),
        radial-gradient(
            circle at 82% 82%,
            rgba(0,185,220,.16),
            transparent 34%
        ),
        radial-gradient(
            circle at 30% 95%,
            rgba(0,220,170,.10),
            transparent 30%
        );

    filter:blur(10px);
    opacity:.72;

    animation:liquidFloat 9s ease-in-out infinite alternate;
}

/* 流れる光沢 */
.glass-highlight{
    position:absolute;
    inset:-60%;
    pointer-events:none;

    background:
        linear-gradient(
            110deg,
            transparent 0%,
            rgba(255,255,255,0) 34%,
            rgba(255,255,255,.82) 49%,
            rgba(255,255,255,0) 64%,
            transparent 100%
        );

    transform:rotate(12deg);
    opacity:0;

    animation:glassShine 6s ease-in-out infinite;
}

/* 微細ノイズ */
.glass-noise{
    position:absolute;
    inset:0;
    pointer-events:none;

    opacity:.055;

    background-image:
        radial-gradient(circle, rgba(40,120,150,.55) .7px, transparent .8px);

    background-size:11px 11px;

    mix-blend-mode:multiply;
}

/* 追加したreflection用 */
.glass-reflection{
    position:absolute;
    inset:0;
    border-radius:inherit;
    pointer-events:none;
    z-index:4;

    background:
        radial-gradient(
            ellipse at 18% 16%,
            rgba(255,255,255,.78),
            rgba(255,255,255,.22) 24%,
            transparent 48%
        ),
        radial-gradient(
            ellipse at 86% 92%,
            rgba(0,190,230,.14),
            rgba(0,190,230,.04) 24%,
            transparent 48%
        );

    opacity:.52;
    mix-blend-mode:screen;

    animation:reflectionBreathe 7s ease-in-out infinite alternate;
}

/* 本文 */
.glass-content{
    position:relative;
    z-index:10;

    width:100%;
    height:100%;

    display:flex;
    align-items:center;
    justify-content:space-between;
}

/* 文字・アイコンを白背景用に補正 */
.glass .left span{
    color:#263846;
    text-shadow:none;
}

.glass .left svg{
    color:#179cc5;
    filter:
        drop-shadow(0 2px 4px rgba(30,120,150,.18));
}

.glass:hover .left svg{
    color:#00a9d6;
    filter:
        drop-shadow(0 0 8px rgba(0,185,220,.28));
}

.glass .arrow{
    color:#4c8ca3;
}

/* Animations */

@keyframes liquidFloat{
    0%{
        transform:
            translate3d(-2%, -1%, 0)
            scale(1.02);
    }

    100%{
        transform:
            translate3d(2%, 1%, 0)
            scale(1.06);
    }
}

@keyframes glassShine{
    0%{
        transform:
            translateX(-120%)
            rotate(12deg);
        opacity:0;
    }

    55%{
        opacity:0;
    }

    66%{
        opacity:.42;
    }

    84%{
        transform:
            translateX(120%)
            rotate(12deg);
        opacity:.12;
    }

    100%{
        transform:
            translateX(120%)
            rotate(12deg);
        opacity:0;
    }
}

@keyframes reflectionBreathe{
    0%{
        transform:translate3d(-1%, -1%, 0) scale(1);
        filter:blur(0);
    }

    100%{
        transform:translate3d(1%, 1%, 0) scale(1.035);
        filter:blur(1px);
    }
}
