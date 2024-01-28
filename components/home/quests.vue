<template>
  <div class="flex flex-col w-full items-center">
    <h1
      class="flex p-2 w-3/4 lg:w-full border-double border-6 border-black text-4xl font-medieval justify-center"
    >
      QUEST LOG
    </h1>
    <div class="flex flex-col w-3/4 lg:w-full gap-4 pt-6 items-center">
      <div
        class="collapse collapse-arrow border-solid border-2 border-black rounded"
      >
        <input type="radio" name="my-accordion-2" />
        <div class="collapse-title text-xl font-medium">
          <div class="flex justify-between">
            <h2>Click to open this one and close others</h2>
            <h2>ONGOING</h2>
          </div>
        </div>
        <div class="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div
        class="collapse collapse-arrow border-solid border-2 border-black rounded"
      >
        <input type="radio" name="my-accordion-2" />
        <div class="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div class="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div
        class="collapse collapse-arrow border-solid border-2 border-black rounded"
      >
        <input type="radio" name="my-accordion-2" />
        <div class="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div class="collapse-content">
          <p>hello</p>
        </div>
      </div>
    </div>
  </div>
</template>
