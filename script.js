const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstpageAnim(){
    var tl = gsap.timeline();

    tl.from("#nav", {
y:'-10',
opacity:0,
duration:1.5,
ease:Expo.easeInOut
    })
      tl.to(".boundingelem", {
y:0,
ease:Expo.easeInOut,
duration:2,
delay:-1,
stagger:.2
    })
      tl.from("#herofooter", {
y:-10,
opacity:0,
duration:1.5,
delay:-1,
ease:Expo.easeInOut
    })
}


var timeout;

function circleChaptakaro(){
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;
    window.addEventListener("mousemove", function(dets){
  this.clearTimeout(timeout);
 xscale = gsap.utils.clamp(0.8,1.2, dets.clientX - xprev);
 yscale = gsap.utils.clamp(0.8,1.2, dets.clientY - yprev);

xprev = dets.clientX;
yprev = dets.clientY;
   
circleMouseFollower(xscale,yscale);
 timeout = setTimeout(function(){
     document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
},100)
});

}
circleChaptakaro();

function circleMouseFollower(xscale,yscale){
    window.addEventListener("mousemove", function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`;
    });
}
circleChaptakaro();
circleMouseFollower();
firstpageAnim();

document.querySelectorAll(".elem").forEach(function (elem) {

  elem.addEventListener("mouseleave", function (dets) {
 gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power4,
      duration: 0.5,
    });
  });
  elem.addEventListener("mousemove", function (dets) {
    var rotate = 0;
    var diffrot = 0;

    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot =dets.clientX - rotate;
    rotate = dets.clientX;
 gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power4,
      top: diff,
      left: dets.clientX,
    rotate: gsap.utils.clamp(-5, 5, diffrot * 0.5),
    });
  });
});