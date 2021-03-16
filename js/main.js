const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('.logo');
const menuIcon = document.querySelector('.menu-icon');

const timeLine = new TimelineMax();

timeLine.fromTo(
    hero,
    1,
    {height: "0%"},
    {height: "80%",
    ease: Power2.easeInOut
})
.fromTo(
    hero,
    1.5,
    {width: "100%"},
    {width: "80%",
    ease: Power2.easeInOut
})
.fromTo(
    slider,
    1.2,
    {x: "-100%"},
    {x: "0%",
    ease: Power2.easeOutIn
})
.to(
    menuIcon,
    0.5,
    {rotation: 360},
    "+=0.2"
)