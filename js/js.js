let x1 = document.getElementById("x1");
let x2 = document.getElementById("x2");
let x3 = document.getElementById("x3");
let x4 = document.getElementById("x4");


window.sr = ScrollReveal();
sr.reveal(x1,{
    duration:800,
    origin:"bottom",
    distance:"-100px"

});

window.sr = ScrollReveal();
sr.reveal(x2,{
    duration:800,
    origin:"bottom",
    distance:"-100px"

});

window.sr = ScrollReveal();
sr.reveal(x3,{
    duration:800,
    origin:"right",
    distance:"-100px"

});

window.sr = ScrollReveal();
sr.reveal(x4,{
    duration:800,
    origin:"left",
    distance:"-100px"

});
