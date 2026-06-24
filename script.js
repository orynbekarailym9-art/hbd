
window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});
// =====================
// REVEAL ANIMATION
// =====================

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

// =====================
// CAT ANIMATION
// =====================

window.addEventListener("load", () => {

    const cat = document.getElementById("cat");

    setTimeout(() => {

        dropCat(cat);

    }, 5000);

});

// =====================
// FALL
// =====================

function dropCat(cat){

    cat.animate(

        [
            {
                top: "-400px",
                transform: "translateY(0) scale(1)"
            },

            {
                top: "65vh",
                transform: "translateY(0) scale(1)"
            }

        ],

        {
            duration: 1000,
            easing: "cubic-bezier(.2,.8,.3,1)",
            fill: "forwards"
        }

    );

    setTimeout(() => {

        pancake(cat);

    }, 1000);

}

// =====================
// SPLAT
// =====================

function pancake(cat){

    cat.animate(

        [
            {
                transform:"scale(1,1)"
            },

            {
                transform:"scale(1.6,.35)"
            },

            {
                transform:"scale(1.4,.45)"
            }

        ],

        {
            duration:500,
            fill:"forwards"
        }

    );

    setTimeout(() => {

        bounce(cat);

    }, 500);

}

// =====================
// STAND UP
// =====================

function bounce(cat){

    cat.animate(

        [

            {
                transform:"scale(1.5,.45)"
            },

            {
                transform:"translateY(-80px) scale(.9,1.1)"
            },

            {
                transform:"translateY(0) scale(1,1)"
            }

        ],

        {
            duration:900,
            easing:"ease-out",
            fill:"forwards"
        }

    );

    setTimeout(() => {

        lookAround(cat);

    }, 900);

}

// =====================
// LOOK LEFT RIGHT
// =====================

function lookAround(cat){

    cat.animate(

        [

            {
                transform:"rotate(0deg)"
            },

            {
                transform:"rotate(-12deg)"
            },

            {
                transform:"rotate(12deg)"
            },

            {
                transform:"rotate(0deg)"
            }

        ],

        {
            duration:1200,
            fill:"forwards"
        }

    );

    setTimeout(() => {

        wave(cat);

    }, 1200);

}

// =====================
// WAVE
// =====================

function wave(cat){

    let count = 0;

    const waving = setInterval(() => {

        cat.animate(

            [

                {
                    transform:"rotate(0deg)"
                },

                {
                    transform:"rotate(-10deg)"
                },

                {
                    transform:"rotate(0deg)"
                }

            ],

            {
                duration:300
            }

        );

        count++;

        if(count >= 4){

            clearInterval(waving);

            setTimeout(() => {

                walkAway(cat);

            }, 600);

        }

    }, 350);

}

// =====================
// WALK LEFT
// =====================

function walkAway(cat){

    cat.animate(

        [

            {
                right:"120px",
                opacity:1
            },

            {
                right:"1200px",
                opacity:0
            }

        ],

        {
            duration:3500,
            easing:"linear",
            fill:"forwards"
        }

    );

}