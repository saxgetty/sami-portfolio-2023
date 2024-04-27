<script setup>
import "./assets/style.css"
import "./assets/test.css"
</script>

<template>
  <div class="description panel blue">
    <div>
      <h1>Slide-in panels</h1>
      <p>
        A simple animation linked to a ScrollTrigger with
        <code>scrub: true</code> creates a nifty effect.
      </p>
      <div class="scroll-down">
        Scroll down
        <div class="arrow"></div>
      </div>
    </div>
  </div>

  <div id="container">
    <section class="panel red">ONE</section>
    <section class="panel orange">TWO</section>
    <section class="panel purple">THREE</section>
    <section class="panel green">FOUR</section>
  </div>
</template>

<script>
import { onMounted } from "vue";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default {
  setup() {
    onMounted (() => {
      gsap.registerPlugin(ScrollTrigger)
      gsap.defaults({ ease: "none", duration: 2 })

      // create a sequence that moves 3 of the panels in from different directions
      const tl = gsap.timeline()
      tl.from(".orange", { xPercent: -100 })
        .from(".purple", { xPercent: 100 })
        .from(".green", { yPercent: -100 })

      // pin the container and link the animation to the scrollbar (scrub: true). We could easily embed this in the gsap.timeline() to shorten things a bit, but this is to show that you can create the ScrollTrigger separately if you prefer.
      ScrollTrigger.create({
        animation: tl,
        trigger: "#container",
        start: "top top",
        end: "+=4000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      })
    })
  }
}
</script>
