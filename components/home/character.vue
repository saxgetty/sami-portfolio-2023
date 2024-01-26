<template>
  <div class="flex flex-wrap justify-center gap-8">
    <img
      src="@/assets/images/avatar.svg"
      alt="avatar"
      class="flex grow w-72 h-72"
    />
    <div class="flex grow flex-col items-center pt-4">
      <h1 class="flex p-2 w-3/4 lg:w-full border-double border-6 border-black text-4xl font-medieval justify-center">PRIMARY STATS</h1>
      <div class="card w-5/6 lg:w-full">
        <div class="card-body">
          <h2 class="card-title justify-center">Sami Saxton-Getty</h2>
          <div class="flex flex-wrap justify-center gap-2">
            <div class="badge badge-outline">Title</div>
            <div class="badge badge-outline">Level 26</div>
            <div class="badge badge-outline">Female</div>
            <div class="badge badge-outline">Human</div>
            <div class="badge badge-outline">She/They</div>
          </div>
          <div class="card-actions justify-end"></div>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center">
      <h1 class="flex p-2 w-3/4 lg:w-full border-double border-6 border-black text-4xl font-medieval justify-center">BACKSTORY</h1>
      <div class="card w-5/6 lg:w-full">
        <div class="card-body">
          <p>
            Hey there, my name is Sami! I am a passionate and determined
            programmer looking for a QA or software engineering role at a fast
            growing technology company. I love solving complex problems, working
            with others, and being a dependable team member.
          </p>
          <p>
            Some of my core values include self-awareness, integrity,
            dedication, respect, and a positive outlook. Self-awareness is the
            most important to me because I can apply it to teamwork and team
            environments so that I interact well with people who share different
            characteristics, strengths, perspectives, and viewpoints.
          </p>
          <div class="card-actions justify-end"></div>
        </div>
      </div>
    </div>
    <div class="flex grow flex-col items-center">
      <h1 class="flex p-2 w-3/4 lg:w-full border-double border-6 border-black text-4xl font-medieval justify-center">EXPERIENCE</h1>
      <ul class="timeline timeline-vertical lg:timeline-horizontal">
        <li>
          <div class="timeline-start">2019</div>
          <div class="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="timeline-end timeline-box">Freedom Forever</div>
          <hr />
        </li>
        <li>
          <hr />
          <div class="timeline-start">20</div>
          <div class="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="timeline-end timeline-box">iMac</div>
          <hr />
        </li>
        <li>
          <hr />
          <div class="timeline-start">2001</div>
          <div class="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="timeline-end timeline-box">iPod</div>
          <hr />
        </li>
        <li>
          <hr />
          <div class="timeline-start">2007</div>
          <div class="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="timeline-end timeline-box">iPhone</div>
          <hr />
        </li>
        <li>
          <hr />
          <div class="timeline-start">2022 - 2023</div>
          <div class="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="timeline-end timeline-box">Binance.us</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>
