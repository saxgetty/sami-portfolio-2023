<template>
  <div class="flex flex-wrap flex-row justify-center gap-8">
    <img src="@/assets/images/avatar.svg" alt="avatar" class="w-64 h-64" />
    <div class="flex flex-wrap flex-col">
      <h1 class="text-3xl font-medieval">CHARACTER INFO</h1>
      <div class="card w-96 h-56 bg-base-100 shadow-xl">
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
    <div class="flex flex-wrap flex-col">
      <h1 class="text-3xl font-medieval">DESCRIPTION</h1>
      <div class="card w-96 h-80 bg-base-100 shadow-xl">
        <div class="card-body">
          <p>
            Hey there, my name is Sami! I am a passionate and determined
            programmer looking for a QA or software engineering role at a fast
            growing technology company. I love solving complex problems, working
            with others, and being a dependable team member.
          </p>
          <div class="card-actions justify-end"></div>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap flex-col">
      <h1 class="text-3xl font-medieval">PASSIONS & VALUES</h1>
      <div class="card w-96 h-80 bg-base-100 shadow-xl">
        <div class="card-body">
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
    <ul class="timeline timeline-vertical lg:timeline-horizontal">
      <li>
        <div class="timeline-start">1984</div>
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
        <div class="timeline-end timeline-box">First Macintosh computer</div>
        <hr />
      </li>
      <li>
        <hr />
        <div class="timeline-start">1998</div>
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
        <div class="timeline-start">2015</div>
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
        <div class="timeline-end timeline-box">Apple Watch</div>
      </li>
    </ul>
  </div>
</template>

<script setup></script>
