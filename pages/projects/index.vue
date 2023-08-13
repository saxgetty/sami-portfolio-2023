<template>
  <div class="animate-slide-in">
    <div class="flex items-center justify-center p-4 pt-20 pb-20 md-icon:p-20">
      <div class="container grid gap-8 grid-cols-1 grid-rows-9 max-w-6xl project-md:grid-cols-8 project-md:grid-rows-9">
        <div class="flex flex-1 flex-col justify-between overflow-hidden rounded-md bg-white shadow-2xl col-span-4 animate-slide-in-delayed">
          <div>
            <ProjectsImagesSamiPortfolio2023Img />
          </div>
          <div class="animate-slide-in-delayed">
            <ProjectsDescriptionsSamiPortfolio2023Desc />
          </div>
          <div class="animate-slide-in-delayed">
            <ProjectsTagsSamiPortfolio2023Tags />
          </div>
        </div>
        <div class="flex flex-1 flex-col justify-between overflow-hidden rounded-md bg-white shadow-2xl col-span-4 animate-slide-in-delayed">
          <div>
            <ProjectsImagesSamiPortfolio2022Img />
          </div>
          <div class="animate-slide-in-delayed">
            <ProjectsDescriptionsSamiPortfolio2022Desc />
          </div>
          <div class="animate-slide-in-delayed">
            <ProjectsTagsSamiPortfolio2022Tags />
          </div>
        </div>
        <div class="flex flex-1 flex-col justify-between overflow-hidden rounded-md bg-white shadow-2xl col-span-4 animate-slide-in-delayed">
          <div>
            <ProjectsImagesBusyGatorImg />
          </div>
          <div class="animate-slide-in-delayed">
            <ProjectsDescriptionsBusyGatorDesc />
          </div>
          <div class="animate-slide-in-delayed">
            <ProjectsTagsBusyGatorTags />
          </div>
        </div>
        <div class="flex flex-1 flex-col justify-between overflow-hidden rounded-md bg-white shadow-2xl col-span-4 animate-slide-in-delayed">
          <div>
            <ProjectsImagesLamdbavibeImg />
          </div>
          <div class="animate-slide-in-delayed">
            <ProjectsDescriptionsLamdbavibeDesc />
          </div>
          <div class="animate-slide-in-delayed">
            <ProjectsTagsLamdbavibeTags />
          </div>
        </div>
        <div class="flex flex-1 flex-col justify-between overflow-hidden rounded-md bg-white shadow-2xl col-span-4 animate-slide-in-delayed">
          <div>
            <ProjectsImagesItineraryImg />
          </div>
          <div class="animate-slide-in-delayed">
            <ProjectsDescriptionsItineraryDesc />
          </div>
          <div class="animate-slide-in-delayed">
            <ProjectsTagsItineraryTags />
          </div>
        </div>
        <div class="flex flex-1 flex-col justify-between overflow-hidden rounded-md bg-white shadow-2xl col-span-4 animate-slide-in-delayed">
          <div>
            <ProjectsImagesBdrDiscordBotImg />
          </div>
          <div class="animate-slide-in-delayed">
            <ProjectsDescriptionsBdrDiscordBotDesc />
          </div>
          <div class="animate-slide-in-delayed">
            <ProjectsTagsBdrDiscordBotTags />
          </div>
        </div>
        <div class="flex flex-1 flex-col justify-between overflow-hidden rounded-md bg-white shadow-2xl col-span-4 row-span-2 animate-slide-in-delayed">
          <div>
            <ProjectsImagesWowProfDiscordBotImg />
          </div>
          <div class="animate-slide-in-delayed">
            <ProjectsDescriptionsWowProfDiscordBotDesc />
          </div>
          <div class="animate-slide-in-delayed">
            <ProjectsTagsWowProfDiscordBotTags />
          </div>
        </div>
        <div class="flex flex-1 flex-col justify-between overflow-hidden rounded-md bg-white shadow-2xl col-span-4 row-span-2 animate-slide-in-delayed">
          <div>
            <ProjectsImagesImageGalleryImg />
          </div>
          <div class="animate-slide-in-delayed">
            <ProjectsDescriptionsImageGalleryDesc />
          </div>
          <div class="animate-slide-in-delayed">
            <ProjectsTagsImageGalleryTags />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  @import "../../assets/css/main.css";
</style>
<!-- <template>
    <div class="flex items-center justify-center p-4 pt-20 pb-20 md-icon:p-20">
      <div class="container grid gap-8 grid-cols-1 grid-rows-9 max-w-6xl project-md:grid-cols-8 project-md:grid-rows-9">
        <div class="flex flex-1 flex-col justify-between overflow-hidden rounded-md bg-white shadow-2xl col-span-4">        
          <div>
            <ProjectsSamiPortfolio2023 />
          </div>
          <div>
            <ProjectsTagsSamiPortfolio2023Tags />
          </div>     
        </div>
        <div class="flex flex-1 flex-col justify-between overflow-hidden rounded-md bg-white shadow-2xl col-span-4">
          <div>
            <ProjectsSamiPortfolio2022 />
          </div>
          <div>
            <ProjectsTagsSamiPortfolio2022Tags />
          </div>        
        </div>
        <div class="flex flex-1 flex-col justify-between overflow-hidden rounded-md bg-white shadow-2xl col-span-4">
          <div>
            <ProjectsBusyGator />
          </div>
          <div>
            <ProjectsTagsBusyGatorTags />
          </div>       
        </div>
        <div class="flex flex-1 flex-col justify-between overflow-hidden rounded-md bg-white shadow-2xl col-span-4">
          <div>
            <ProjectsLamdbavibe />
          </div>
          <div>
            <ProjectsTagsLamdbavibeTags />
          </div>    
        </div>
        <div class="flex flex-1 flex-col justify-between overflow-hidden rounded-md bg-white shadow-2xl col-span-4">
          <div>
            <ProjectsItinerary />
          </div>
          <div>
            <ProjectsTagsItineraryTags />
          </div>    
        </div>
        <div class="flex flex-1 flex-col justify-between overflow-hidden rounded-md bg-white shadow-2xl col-span-4">
          <div>
            <ProjectsBdrDiscordBot />
          </div>
          <div>
            <ProjectsTagsBdrDiscordBotTags />
          </div>    
        </div>
        <div class="flex flex-1 flex-col justify-between overflow-hidden rounded-md bg-white shadow-2xl col-span-4 row-span-2">
          <div>
            <ProjectsWowProfDiscordBot />
          </div>
          <div>
            <ProjectsTagsWowProfDiscordBotTags />
          </div>
        </div>
        <div class="flex flex-1 flex-col justify-between overflow-hidden rounded-md bg-white shadow-2xl col-span-4 row-span-2">
          <div>
            <ProjectsImageGallery />
          </div>
          <div>
            <ProjectsTagsImageGalleryTags />
          </div>
        </div>
      </div>
    </div>
</template> -->
