// =========================
// Animated Counter
// =========================

const counters = document.querySelectorAll(".counter");

const startCounter = () => {
    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");
        const speed = target / 100;

        const updateCounter = () => {

            const current = +counter.innerText.replace("+","");

            if(current < target){
                counter.innerText = Math.ceil(current + speed) + "+";
                setTimeout(updateCounter,20);
            }
            else{
                counter.innerText = target + "+";
            }
        };

        updateCounter();
    });
};

const counterSection = document.querySelector(".stats");

const counterObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            startCounter();
            counterObserver.unobserve(counterSection);
        }
    });
});

counterObserver.observe(counterSection);


// =========================
// Scroll Reveal Animation
// =========================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{

        if(entry.isIntersecting){
            entry.target.classList.add("active");
        }

    });
},{
    threshold:0.2
});

revealElements.forEach(el=>{
    revealObserver.observe(el);
});


// =========================
// Navbar Active Menu
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 150;

        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active-link");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active-link");
        }

    });

});


// =========================
// Floating Background Glow
// =========================

const bg = document.querySelector(".bg");

window.addEventListener("mousemove",(e)=>{

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    bg.style.transform =
        `translate(${x * 20}px, ${y * 20}px)`;

});


// =========================
// Smooth Scroll
// =========================

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({
                behavior: 'smooth'
            });

    });

});


// =========================
// Hero Text Animation
// =========================

const heroText = document.querySelector(".hero h1");

heroText.style.opacity = "0";

setTimeout(()=>{
    heroText.style.transition = "1.5s";
    heroText.style.opacity = "1";
    heroText.style.transform = "translateY(0px)";
},300);


// =========================
// Floating VMC Card Effect
// =========================

const vmcCard = document.querySelector(".vmc-card");

document.addEventListener("mousemove",(e)=>{

    const xAxis = (window.innerWidth / 2 - e.pageX) / 40;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 40;

    vmcCard.style.transform =
        `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

});

document.addEventListener("mouseleave",()=>{
    vmcCard.style.transform =
        "rotateY(0deg) rotateX(0deg)";
});


// =========================
// Loading Animation
// =========================

window.addEventListener("load",()=>{

    document.body.style.opacity = "1";

});


// =========================
// Console Message
// =========================

console.log(
"%cMARUTHI TOOLINGS PREMIUM WEBSITE LOADED",
"color:orange;font-size:18px;font-weight:bold;"
);
