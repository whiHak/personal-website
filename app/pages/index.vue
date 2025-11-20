<script setup lang="ts">
import HowCanIHelp from '~/components/landing/HowCanIHelp.vue';


useHead({
    title: 'Betselot Abraham - Intermediate Software Engineer',
    meta: [
        {
            name: 'description',
            content: 'Welcome to Betselot Abraham\'s portfolio website. Explore projects, skills, and get in touch!',
        },
        {
            name: 'keywords',
            content: 'Betselot Abraham, Software Engineer, Portfolio, Projects, Skills, Contact, Web Developer, Full-Stack Developer, Tech Enthusiast, Programming, Software Development, Coding, GitHub, LinkedIn, Betselot Resume, Betselot Projects, Betselot Skills',
        },
        {
            name: 'author',
            content: 'Betselot Abraham',
        },
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
        },
        {
            name: 'robots',
            content: 'index, follow',
        },
        {
            name: 'theme-color',
            content: '#ffffff',
        },
    ],
});
</script>

<template>
    <div class="bg-[#ececec] min-h-screen text-black ">
        <!-- <h1 class="">Hello from index page</h1> -->
         <LandingHero />

         <HowCanIHelp />

         <LandingProjects />

         <LandingSmartFolks />

         <LandingHelloSection />

         <LandingTestimonials />
    </div>
</template>