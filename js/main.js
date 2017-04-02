var masthead,
    slides,
    buttons,
    contents,
    container,
    i,
    k,
    pictures,
    fadeOut,

pictures = [
    "<figure><img src=\"./img/1.JPG\" alt=\"1\"></figure>",
    "<figure><img src=\"./img/2.jpg\" alt=\"2\"></figure>",
    "<figure><img src=\"./img/3.jpg\" alt=\"3\"></figure>",
    "<figure><img src=\"./img/4.jpg\" alt=\"4\"></figure>"
];

var slides = document.querySelector('.banner');
var masthead = 0;

function fadeOut() {
    if (masthead < pictures.length) {
        slides.innerHTML = pictures[masthead];
        masthead +=1;
        if (masthead === pictures.length) {
            masthead = 0;
       
        }
    }
}

window.setInterval(fadeOut, 6000);

buttons = document.querySelectorAll(".btn");
contents = [
    "<figure><img src=\"./img/windmill.jpg\" alt=\"windmill\"></figure><figcaption>WIND TURBINES: Wind Turbines have been around for hundreds of years aiding in harnessing the wind's energy. They effectively reduce energy costs and reduce a carbon footprint in the world. However, wind turbines can be very noisy and a distraction in an environment. Besides this factor wind turbines are a respectable renewable green energy resource. </figcaption>",
    
    "<figure><img src=\"./img/solarpanel.jpg\" alt=\"solar\"></figure><figcaption>SOLAR PANELS: If you were to compare the use of solar panels on rooftops to create energy vs using common electricty such as light bulbs, you would find that solar power becomes time consuming and does not always properly function due to poor weather conditions. However it does tend to save a household more money in the longrun as hydro bills are lower on days where solar panels are used. </figcaption>",
    
    "<figure><img src=\"./img/earth.jpg\" alt=\"earth\"></figure><figcaption>PLANET EARTH: It is vital to remember that our planet has existed for millions of years and we want it to continue to grow with the least amount of pollution as possible. Therefore while some green energy resources have minor disadvantages, their benefits overshadow the problems through cutting energy costs, and being a positive factor to the earth. </figcaption>"
];

container = document.querySelector(".container");

container.innerHTML = contents[0];

function handleClick(ev) {
    console.log(ev.target.innerHTML);
    for (i = 0; i < buttons.length; i += 1) {
        if (buttons[i].hasAttributes("id")) {
            buttons[i].removeAttribute("id");
        }
    }
    if (ev.target.innerHTML === " A") {
        container.innerHTML = contents[0];
    }
    if (ev.target.innerHTML === " B") {
        container.innerHTML = contents[1];
    }
    if (ev.target.innerHTML === " C") {
        container.innerHTML = contents[2];
    }
    ev.target.parentNode.setAttribute("id", "active");
}
for (k = 0; k < buttons.length; k += 1) {
    buttons[k].addEventListener("click", handleClick, false);
}
