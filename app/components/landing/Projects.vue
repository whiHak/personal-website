<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const projects = [
  // {
  //   desktop: '/images/project-1-Desktop.png',
  //   mobile: '/images/project-1-Mobile.png',
  //   title: 'Project 1',
  //   desktopWidth: '780px',
  //   desktopHeight: 'auto',
  //   mobileWidth: '220px',
  //   mobileHeight: 'auto',
  // },
  {
    desktop: '/images/project-2-Desktop.png',
    mobile: '/images/project-2-Mobile.png',
    title: 'Project 2',
    desktopWidth: '780px',
    desktopHeight: 'auto',
    mobileWidth: '220px',
    mobileHeight: 'full',
  },
  {
    desktop: '/images/project-3-Desktop.png',
    mobile: '/images/project-3-Mobile.png',
    title: 'Project 3',
    desktopWidth: '780px',
    desktopHeight: 'auto',
    mobileWidth: '220px',
    mobileHeight: 'full',
  },
  {
    desktop: '/images/project-4-Desktop.png',
    mobile: '/images/project-5-Mobile.png',
    title: 'Project 4',
    desktopWidth: '780px',
    desktopHeight: 'auto',
    mobileWidth: '220px',
    mobileHeight: 'full',
  },
  {
    desktop: '/images/project-6-Desktop.png',
    mobile: '/images/project-6-Mobile.png',
    title: 'Project 4',
    desktopWidth: '780px',
    desktopHeight: 'auto',
    mobileWidth: '220px',
    mobileHeight: 'full',
  }
];

const currentIndex = ref(0);
let intervalId;

const nextProject = () => {
  currentIndex.value = (currentIndex.value + 1) % projects.length;
};

onMounted(() => {
  intervalId = setInterval(nextProject, 4000);
});
onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <section class="w-full flex flex-col items-center justify-center py-16 bg-white">
    <h2 class="text-3xl md:text-4xl font-bold mb-10 text-center">Featured Projects</h2>
    <div class="flex flex-col lg:flex-row items-center justify-center gap-12">
      <!-- Macbook Frame -->
       <NuxtLink to="/projects">
         <div class="relative left-0 lg:left-20 w-[410px] md:w-[810px] lg:w-[910px] aspect-[16/10] flex items-center justify-center cursor-pointer">
           <NuxtImg
             src="/images/macbook-frame.png"
             alt="Macbook Frame"
             class="absolute w-full h-full object-cover z-20 pointer-events-none select-none"
           />
           <NuxtImg
             :src="projects[currentIndex].desktop"
             :alt="projects[currentIndex].title + ' Desktop'"
             class="absolute md:top-[4%] w-[355px] md:w-[695px] lg:w-[780px] h-auto object-cover shadow-lg z-10 transition-all duration-700"
           />
         </div>
       </NuxtLink>
      <!-- iPhone Frame -->
      <NuxtLink to="/projects">
        <div class="relative left-35 md:left-75 lg:-left-30 -top-50 md:-top-70 lg:top-40 z-20 w-[120px] md:w-[250px] aspect-[9/19] md:h-full flex items-center justify-center cursor-pointer">
          <NuxtImg
            src="/images/Iphone-frame.png"
            alt="iPhone Frame"
            class="absolute w-full h-full object-cover z-20 pointer-events-none select-none"
          />
          <NuxtImg
            :src="projects[currentIndex].mobile"
            :alt="projects[currentIndex].title + ' Mobile'"
            class="absolute top-[10%] w-[107px]  md:w-[220px] h-auto object-cover rounded-md shadow-md z-10 transition-all duration-700"
          />
        </div>
      </NuxtLink>
    </div>
    <!-- Carousel Dots -->
    <div class="flex justify-center mt-8 space-x-3">
      <button
        v-for="(project, idx) in projects"
        :key="idx"
        @click="currentIndex = idx"
        :class="[
          'w-4 h-4 rounded-full border-2 transition-all duration-300 cursor-pointer',
          currentIndex === idx ? 'bg-primary-green border-primary-green scale-110' : 'bg-gray-300 border-gray-300'
        ]"
        aria-label="Go to project"
      ></button>
    </div>
  </section>
</template>


<style scoped>
@media (max-width: 768px) {
  section {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}
</style>