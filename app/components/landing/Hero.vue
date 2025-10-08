<!-- components/HeroSection.vue -->
<script setup>

const testimonials = [
  {
    image: '/images/testimonials/main4.png',
    text: "Spending the entire day learning, exploring, and working with AI was truly invaluable i.e. bringing AI to the table and actively using it made the experience even more enriching. It was also a pleasure to learn about how one can choose and manage a team of AI engineers. A huge thank you to Elvis and Anne for sharing your time and invaluable insights on AI. And, of course, gratitude to Ojemba for making this learning opportunity possible!",
    name: "Junior Hirwa",
    title: "Software Engineer at Ojemba"
  },
  {
    image: '/images/testimonials/main3.png',
    text: "This workshop was an incredible experience! Thank you, Elvis Melia, for leading such engaging discussions on AI and its impact. The hackathon challenge was intense but super rewarding—I learned so much from everyone. Big congrats to Gasangwa Thomas for the win, and I’m grateful to have been among the top solutions with hashtag #ONWAY! Looking forward to more sessions like this. 🚀🔥",
    name: "Gasangwa Thomas",
    title: "Software Engineer"
  },
  {
    image: '/images/testimonials/main1.png',
    text: "This was such an insightful and inspiring workshop! I learned a lot about AI and its potential to solve real-world problems. Thanks to Ojemba for bringing Elvis Melia to share such valuable knowledge with us. Congratulations to all the participants for their innovative solutions and excited to see how these ideas grow! 👏👏",
    name: "Aristide Isingizwe",
    title: "Software Engineer"
  },
  {
    image: '/images/testimonials/main2.png',
    text: "This workshop was truly a game-changer! Learning how to craft effective AI prompts was an invaluable skill, and the discussions on AI’s role in our work were insightful. Thanks, Elvis, for facilitating such an engaging and practical session. Looking forward to applying these skills!",
    name: "Indira Teiko Nartey",
    title: "Software Engineer"
  }
];

const currentIndex = ref(0);

const nextTestimonial = () => {
    currentIndex.value = (currentIndex.value + 1) % testimonials.length;
};

const prevTestimonial = () => {
    currentIndex.value = (currentIndex.value - 1 + testimonials.length) % testimonials.length;
};

let autoAdvanceInterval;
onMounted(() => {
    autoAdvanceInterval = setInterval(nextTestimonial, 5000);
});
onUnmounted(() => clearInterval(autoAdvanceInterval));

/**
 * Calculate where each testimonial should go:
 * - 0 = current
 * - -1 = left
 * - +1 = right
 * others = hidden
 */
const getPositionClass = (index) => {
    const total = testimonials.length;
    const diff = (index - currentIndex.value + total) % total;

    if (diff === 0) {
        return 'opacity-100 scale-100 z-20 translate-x-0'; // center
    }
    if (diff === 1) {
        return 'opacity-60 scale-90 translate-x-80 z-10'; // right
    }
    if (diff === total - 1) {
        return 'opacity-60 scale-90 -translate-x-80 z-10'; // left
    }

    return 'opacity-0 scale-75'; // hidden
};
onUnmounted(() => {
    clearInterval(autoAdvanceInterval);
});
</script>


<template>
    <section
        class="relative overflow-hidden max-w-[1920px] min-h-[500px] px-5 2xl:px-40 bg-white lg:min-h-[710px] 2xl:min-h-[790px]  mx-auto">
        <!-- Gradient Overlay on the Left Side -->
        <div
            class="absolute top-0 left-0 w-[80%] lg:w-[70%] h-full z-30 bg-gradient-to-r from-zeleman-orange-200 via-accent-green to-primary-green/0">
        </div>

        <div class="fixed md:absolute top-30 left-25 flex flex-col gap-8 z-30">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" aria-label="LinkedIn" class="group">
                <span class="flex items-center justify-center w-10 h-10 rounded-full bg-[#0077B5] hover:scale-110 transition-transform shadow-lg">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.62 2.01 3.62 4.62v4.69z"/></svg>
                </span>
            </a>
            <a href="https://twitter.com/betse_ab" target="_blank" aria-label="Twitter" class="group">
                <span class="flex items-center justify-center w-10 h-10 rounded-full bg-[#1DA1F2] hover:scale-110 transition-transform shadow-lg">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 5.924c-.793.352-1.646.59-2.542.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 11.1 9.03a12.72 12.72 0 0 1-9.23-4.68 4.48 4.48 0 0 0 1.39 5.98A4.44 4.44 0 0 1 2 9.097v.057a4.48 4.48 0 0 0 3.6 4.39c-.4.11-.82.17-1.25.17-.31 0-.6-.03-.89-.08a4.48 4.48 0 0 0 4.18 3.11A8.98 8.98 0 0 1 2 19.54a12.7 12.7 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.78 0-.2 0-.39-.01-.58a9.1 9.1 0 0 0 2.23-2.3z"/></svg>
                </span>
            </a>
            <a href="https://github.com/betseab1" target="_blank" aria-label="GitHub" class="group">
                <span class="flex items-center justify-center w-10 h-10 rounded-full bg-black hover:scale-110 transition-transform shadow-lg">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.03 1.01-2.75-.1-.26-.44-1.3.1-2.7 0 0 .83-.27 2.75 1.02a9.36 9.36 0 0 1 5 0c1.92-1.29 2.75-1.02 2.75-1.02.54 1.4.2 2.44.1 2.7.63.72 1.01 1.63 1.01 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/></svg>
                </span>
            </a>
            <a href="https://instagram.com/yourprofile" target="_blank" aria-label="Instagram" class="group">
                <span class="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:scale-110 transition-transform shadow-lg">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.13 1.12a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0z"/></svg>
                </span>
            </a>
            </div>

        <div class="relative mx-auto">
            <div
                class="grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-[590px] md:min-h-[620px] lg:min-h-[680px] xl:min-h-[750px] items-center">
                <!-- Left Section: Hero Content -->
                <div class="2xl:px-20 sm:px-10 py-10 md:py-16 2xl:py-32 z-30">
                    <h1 class="text-4xl md:text-5xl 2xl:text-6xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Freelance<br><span class="text-zeleman-orange-500">Developer</span>
                    </h1>
                    <p class="text:md md:text-lg text-gray-800 mb-8">
                        You're about to meet the developer you've  wanted but never imagined existed.
                    </p>
                    <p class="text-sm md:text-md text-gray-800 mb-8 max-w-lg">
                        Bridging the gap between AI innovation and African development through evidence-based research,
                        policy insights, and hands-on training.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4">
                        <NuxtLink to="/projects"
                            class="inline-flex items-center justify-center 2xl:px-6 px-5 py-3 border border-transparent text-sm md:text-md lg:text-md xl:text-md hover:shadow-xl hover:border-1 hover:border-gray-400/30 font-medium rounded-md shadow-sm text-white bg-zeleman-orange-500 hover:bg-zeleman-orange-700 transition-colors duration-300 text-nowrap">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Explore My Projects
                        </NuxtLink>
                        <!-- <NuxtLink to="#"
                            class="inline-flex items-center justify-center 2xl:px-6 px-5 py-3 bg-white text-sm md:text-md lg:text-md xl:text-md font-medium rounded-md text-primary-green hover:bg-primary-green hover:text-white transition-colors duration-300 text-nowrap">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Get Free Hands-On AI Training
                        </NuxtLink> -->
                    </div>
                </div>

                <!-- <div class="hidden md:block lg:hidden absolute top-0 left-[-30%] w-[130%] h-full z-0">
                    <NuxtImg format="webp" src="/images/hero1.png" alt="Hero Image"
                        class="w-full 2xl:h-full min-h-[800px] " />
                </div> -->

                <!-- Right Section: Image + Testimonials -->
                <div class="hidden lg:block relative h-full">
                    <!-- Hero Image Positioned on the Right -->
                    <!-- <div class="absolute top-0 left-[-30%] w-[130%] h-full z-0">
                        <NuxtImg format="webp" src="/images/hero1.png" alt="Hero Image"
                            class="w-full 2xl:h-full min-h-[800px] " />
                    </div> -->

                    <!-- Testimonials Carousel -->
                    <div class="absolute bottom-[30%] right-[10%] w-[350px] z-30">
                        <div class="relative flex items-center justify-center">
                            <!-- Testimonial Cards -->
                            <div v-for="(testimonial, index) in testimonials" :key="index"
                                class="absolute transition-all duration-700 ease-in-out transform"
                                :class="getPositionClass(index)">
                                <div
                                    class="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg lg:w-[320px] 2xl:w-[380px] relative">
                                    <div class="flex items-center mt-6  p-2">
                                        <!-- Quote Text -->
                                        <div class="flex-1 ">
                                            <!-- Quote Icon Top Left -->
                                            <Icon name="fa6-solid:quote-left"
                                                class="w-5 h-5 text-yellow-500 absolute top-2 left-3" />
                                            <div class="p-5 space-y-3">
                                                <p class="text-xs text-gray-700 italic line-clamp-8">"{{ testimonial.text }}"</p>
                                                <div class="mt-2">
                                                    <p class="text-xs font-medium text-gray-900">{{ testimonial.name }}
                                                    </p>
                                                    <p class="text-xs text-gray-500">{{ testimonial.title }}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Image -->
                                        <div class="flex-shrink-0 px-2 py-7">
                                            <NuxtImg :src="testimonial.image" alt="Testimonial"
                                                class="w-[100px] h-[100px] rounded-full  object-cover" />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <!-- Pagination Dots -->
                            <div class="absolute -bottom-40 left-1/2 transform -translate-x-1/2 flex space-x-2 z-40">
                                <button v-for="(testimonial, index) in testimonials" :key="index"
                                    @click="currentIndex = index"
                                    class="w-3 h-3 rounded-full transition-all duration-300" :class="{
                                        'bg-primary-green px-5': currentIndex === index,
                                        'bg-gray-300': currentIndex !== index
                                    }"></button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gugi&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

/* Transition animations */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease, transform 0.5s ease;
}

h1{
    font-family: 'Gugi', cursive;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(20px);
}
</style>