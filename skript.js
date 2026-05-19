// ================= ПЛАВНЫЙ СКРОЛЛ =================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", e => {

        e.preventDefault();

        const target = document.querySelector(
            link.getAttribute("href")
        );

        target.scrollIntoView({
            behavior:"smooth"
        });

    });

});


// ================= СТАТИСТИКА =================

const stats = {

    levels:24,
    coins:1520,
    bosses:8,
    players:1200

};

function animateValue(id, endValue, speed){

    let start = 0;

    const element =
    document.getElementById(id);

    const counter = setInterval(() => {

        start += Math.ceil(endValue / 80);

        if(start >= endValue){

            start = endValue;

            clearInterval(counter);

        }

        element.textContent = start;

    }, speed);

}

animateValue("levels", stats.levels, 30);
animateValue("coins", stats.coins, 20);
animateValue("bosses", stats.bosses, 60);
animateValue("players", stats.players, 10);


// ================= ПОЯВЛЕНИЕ БЛОКОВ =================

const hiddenElements =
document.querySelectorAll(
".card, .character-card, .stat, .gallery img"
);

function showOnScroll(){

    hiddenElements.forEach(el => {

        const top =
        el.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll", showOnScroll);

showOnScroll();


// ================= PIXEL CURSOR =================

const cursor =
document.querySelector(".cursor");

document.addEventListener("mousemove", e => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});

document.querySelectorAll("a, button")
.forEach(el => {

    el.addEventListener("mouseenter", () => {

        cursor.classList.add("active");

    });

    el.addEventListener("mouseleave", () => {

        cursor.classList.remove("active");

    });

});


// ================= PARALLAX =================

window.addEventListener("scroll", () => {

    const scrollY = window.scrollY;

    document.querySelector(".stars")
    .style.transform =
    `translateY(${scrollY * 0.1}px)`;

    document.querySelector(".mountains")
    .style.transform =
    `translateY(${scrollY * 0.3}px)`;

    document.querySelector(".fog")
    .style.transform =
    `translateY(${scrollY * 0.2}px)`;

});
