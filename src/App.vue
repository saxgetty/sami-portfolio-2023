<template>
  <main>
  <div class="description panel blue">
    <div><h1>Slide-in panels</h1>
      <p>A simple animation linked to a ScrollTrigger with <code>scrub: true</code> creates a nifty effect.</p>
      <div class="scroll-down">Scroll down<div class="arrow"></div></div>
    </div>
  </div>

<div id="container">
  <section class="panel red">
    ONE
  </section>
  <section class="panel orange">
    TWO
  </section>
  <section class="panel purple">
    THREE
  </section>
  <section class="panel green">
    FOUR
  </section>

</div>
</main>
</template>

<!-- <script setup>
import "./assets/style.css"
// import "./assets/test.css"
import { onMounted } from "vue";
import { animateElements, setUpAnimations } from "./animations"
import  gsap  from "gsap"
import  ScrollTrigger  from "gsap/ScrollTrigger"

export default {
  setup() {
    onMounted (() => {
      gsap.registerPlugin(ScrollTrigger)
      setUpAnimations();
      animateElements();
    })


  }
}
</script> -->
<script setup>
import { onMounted } from 'vue';
import "./assets/style.css"
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { setUpAnimations, animateElements } from "./animations"

gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  console.log("on mounted called")
    setUpAnimations();  // Setup any defaults or initial states for GSAP
    animateElements();  // Initialize the GSAP timeline and animations
});
</script>
