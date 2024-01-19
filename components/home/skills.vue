<template>
  <div class="flex flex-wrap justify-center gap-8">
    <div class="flex flex-wrap flex-col items-center">
      <h1 class="text-3xl font-medieval">PRIMARY STATS</h1>
      <div class="card card-bordered w-full h-56">
        <div class="card-body">
          <h2 class="card-title">Sami Saxton-Getty</h2>
          <h3>Title</h3>
          <p>Level 26</p>
          <p>Female Human</p>
          <p>She/They</p>
          <div class="card-actions justify-end"></div>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap flex-col items-center">
      <h1 class="text-3xl font-medieval">SKILLS</h1>
      <div class="flex flex-wrap flex-col gap-y-4">
        <p>JavaScript</p>
        <progress class="progress w-56" value="0" max="100"></progress>
        <p>JavaScript</p>
        <progress class="progress w-56" value="10" max="100"></progress>
        <progress class="progress w-56" value="40" max="100"></progress>
        <progress class="progress w-56" value="70" max="100"></progress>
        <progress class="progress w-56" value="100" max="100"></progress>
      </div>
    </div>
  </div>
</template>

<script setup></script>
