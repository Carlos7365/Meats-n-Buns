// Responsive Nav bar
const navSlide = () => {
    const burger = document.querySelector(".burger-icon");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // nav toggle
        nav.classList.toggle('nav-active');
        //link animation
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.15}s`
            }
        })
        //burger animation
        burger.classList.toggle('toggle');
    });
    nav.addEventListener('click', () => {
        // nav toggle
        nav.classList.toggle('nav-active');
        //link animation
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.15}s`
            }
        })
        //burger animation
        burger.classList.toggle('toggle');
    });

}
navSlide();

// Parallax on Pancakes

const parallax = document.getElementById
("cocktail-image");

window.addEventListener("scroll", function ()
{
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * .1 + "px";
    // console.log('Offset: ' + offset);
    // console.log("offset * 0.7" + offset)
})