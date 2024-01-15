<template>
  <div class="flex flex-col">
    <section id="one" class="panel-1 flex"><h1>ONE</h1></section>
    <section id="two" class="panel-2 flex"><h1>TWO</h1></section>
    <section id="three" class="panel-3 flex"><h1>THREE</h1></section>
    <section id="four" class="panel-4 flex"><h1>FOUR</h1></section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// Receive the navigation links from the layout
const navLinks = ref([])

// Use navLinks in your logic
onMounted(() => {

  let panelCreated = false;
  let panelNum = 4;

  const createPanel = (index) => {
      const section = document.createElement("section");
      const h1 = document.createElement("h1");
      container.appendChild(section);
      section.appendChild(h1);
      h1.innerHTML = `Panel ${index}`;
      gsap.set(section, {
          backgroundColor: colors[gsap.utils.random(0, colors.length-1, 1)],
          className: `panel-${index}`
      }); 
  };

  ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
          let progress = self.progress.toFixed(2);
          if (progress >= 0.9 && self.direction === 1) {
              createPanel(panelNum++);
              ScrollTrigger.refresh();
          }
      },
  });

  gsap.utils.toArray(".panel").forEach((panel, i) => {
    let trigger = ScrollTrigger.create({
      trigger: panel,
      start: "top top",
      pin: true,
      pinSpacing: false,
    })

    let nav = navLinks.value[i]

    if (nav) {
      nav.addEventListener("click", function (e) {
        e.preventDefault()
        gsap.to(window, {
          duration: 1,
          scrollTo: trigger.start,
        })
      })
    } else {
      console.error("nav is undefined for index", i)
    }
  })
})
</script>

<style>
@import "../assets/css/main.css";
</style>
