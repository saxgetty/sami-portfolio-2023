import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";


export function setUpAnimations() {
    console.log("animations set up from animations.js");
    // Setup default properties or additional configurations here if needed
    gsap.defaults({ ease: "none", duration: 2 });
}

export function animateElements() {
  gsap.registerPlugin(ScrollTrigger);
  
  // create a sequence that moves 3 of the panels in from different directions 
  const tl = gsap.timeline();
  tl.from(".orange", {xPercent: -100})
    .from(".purple", {xPercent: 100})
    .from(".green", {yPercent: -100});
  
  // pin the container and link the animation to the scrollbar (scrub: true). We could easily embed this in the gsap.timeline() to shorten things a bit, but this is to show that you can create the ScrollTrigger separately if you prefer. 
  ScrollTrigger.create({
    animation: tl,
    trigger: "#container",
    start: "top top", //the animation starts when the TOP of the trigger (container) reaches the TOP
    //of the viewport. you can also use percentages but they gotta be in quotes. 
    end: "+=4000", // this means the scrolltrigger lasts for 4000px of scrolling
    //can also be positional just like start. for example - end: "bottom center" means
    //you want the trigger to end when the BOTTOM of the trigger (container) reaches the center of the viewport
    // in this regard, it might be easier to split up the animations to allow better clarity
    scrub: true,
    pin: true, //we pin the container of the panels
    anticipatePin: 1,
    markers: true
  });
}


