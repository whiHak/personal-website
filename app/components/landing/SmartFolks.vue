<template>
  <section class="w-full bg-[#FFEFF3] py-16 px-4 flex flex-col items-center">
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-10">
      Smart folks <span class="text-zeleman-orange-500">saying nice things about me!</span>
    </h2>
    <!-- Testimonials Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mb-12">
      <div v-for="(testimonial, idx) in testimonials" :key="idx" class="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
        <p class="text-lg font-semibold text-gray-900 mb-4">{{ testimonial.text }}</p>
        <span class="text-gray-600 text-sm">{{ testimonial.author }}</span>
      </div>
    </div>
    <!-- Highlighted Statement -->
    <div class="w-full max-w-5xl rounded-2xl bg-[#FFD12E] flex flex-col md:flex-row p-10 gap-8 items-center shadow-xl">
      <div class="flex-1 mb-6 md:mb-0">
        <div class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 flex items-center gap-2">
          <span>🎧</span><span>💻</span><span>💡</span><span>☕</span>
        </div>
        <div class="text-2xl md:text-3xl font-bold text-gray-900">
          Life is too short for poor user experience and bad coffee. I never compromise on these two.
        </div>
      </div>
      <div class="flex-1 text-gray-800 text-md md:text-lg">
        Nothing excites me like a smart product that solves a real problem and it’s got a great growth potential. I love working with founders and teams who know their stuff and understand the importance of clean Code, and Design for their product and business growth.<br/><br/>
        In recent years, I’ve become obsessed with delivering end-to-end SaaS products—from the first line of code to launching them. I’ve helped founders transform their ideas into successful MVPs.<br/><br/>
        I always think about how to make your users fall in love with your product. How do I create a great user experience that’s so seamless and intuitive that your customers simply say, “This is the product I’ve always wanted.”
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    text: 'Excellent work! Very flexible, willing to commit himself completely to the project.',
    author: 'Chaitra Koneru – Founder Of Neraulmind.io',
  },
  {
    text: 'Abraham did a wonderful job, he is professional, communicative, patient and great to work with. Will probably use his service again.',
    author: 'Yoav Fael – Co-Founder at Swipify Shopify app',
  },
  {
    text: 'Abraham is very good and reliable developer. All recommendations for him!',
    author: 'Miljan Zekovic – Client',
  },
  {
    text: 'Abraham is great to work with. Highly recommend.',
    author: 'Diego Andres – Business Tech Savvy',
  },
];
</script>

<style scoped>
</style>