document.getElementById("jobForm").addEventListener("submit",function(e){

    e.preventDefault();

    alert("Application Submitted Successfully!");

    this.reset();

});

window.addEventListener("scroll",()=>{

    const cards=document.querySelectorAll(".card");

    cards.forEach(card=>{

        const position=card.getBoundingClientRect().top;

        if(position<window.innerHeight-100){
            card.style.opacity="1";
            card.style.transform="translateY(0px)";
        }

    });
    /* Counter Animation */

const counters = document.querySelectorAll(".counter");

const startCounter = () => {
    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");

        let count = 0;

        const updateCounter = () => {

            const increment = target / 100;

            if(count < target){
                count += increment;
                counter.innerText = Math.ceil(count) + "+";
                setTimeout(updateCounter,20);
            }else{
                counter.innerText = target + "+";
            }
        };

        updateCounter();
    });
};

startCounter();


/* Scroll Reveal Animation */

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach(reveal => {

        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){
            reveal.style.opacity = "1";
            reveal.style.transform = "translateY(0)";
        }
    });

});

});
