<script setup>
useHead({
  title: 'Blogs - Betselot Abraham',
  meta: [
    {
      name: 'description',
      content: 'Read insightful blogs by Betselot Abraham on software development, technology trends, and personal growth in the tech industry.',
    },
    {
      name: 'keywords',
      content: 'Betselot Abraham, Blogs, Software Development, Technology Trends, Personal Growth, Tech Industry, Programming, Coding, Web Development, AI, Software Engineering, Tech Insights, Development Tips',
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

const blogs = [
  {
    title: 'Factor out overconfidence',
    date: 'Jan 30, 2025',
    summary:
      'When taking an exam, indicate your confidence level. High confidence with wrong answers could lead to big risks. Careful calibration is key.',
  },
  {
    title: 'Auto saving for your App',
    date: 'Jan 15, 2025',
    summary:
      'Don’t overload your server with every keystroke. Batch updates creatively for performance and a better UX.',
  },
  {
    title: 'Solving coding problem over a phone call',
    date: 'Mar 21, 2024',
    summary:
      'Sometimes the best debugging happens in conversation. Even if you don’t know the answer, you might spark insight.',
  },
  {
    title: 'Getting angry and lost what I know',
    date: 'Apr 8, 2022',
    summary:
      "The frustration of switching contexts—like moving from React to Angular—can cloud what you already know. Stay patient!",
  },
  {
    title: 'Write your program with a messy code first then refactor it',
    date: 'May 7, 2022',
    summary:
      'Big problems? Make it work first, then clean it up. Messy code is part of the process—refactor for clarity after.',
  },
  {
    title: 'Check List',
    date: 'May 1, 2022',
    summary:
      'Memory will fail you, but checklists won’t. Rely on them for consistency in work and life.',
  },
];
</script>

<template>
  <section class="bg-gradient-to-br from-zeleman-orange-200 via-green-50 to-yellow-50 min-h-screen py-12 px-2 md:px-0">
    <!-- Hero Title -->
    <div class="max-w-5xl mx-auto text-center mb-12 mt-10">
      <h1 class="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 tracking-tight">Blogs</h1>
      <p class="text-lg md:text-xl text-gray-700 mb-6">Insightful articles on software development, technology trends & personal growth.</p>
      <div class="w-20 border-b-4 border-yellow-400 mx-auto mb-1"></div>
    </div>

    <!-- Blogs Listing -->
    <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="(blog, idx) in blogs"
        :key="idx"
        class="group relative bg-white shadow-xl hover:shadow-2xl transition rounded-2xl p-8 flex flex-col overflow-hidden border-t-4 border-blue-400 hover:border-yellow-400 hover:bg-gradient-to-tr hover:from-yellow-50/70 hover:to-green-50/60 cursor-pointer"
      >
        <span class="absolute right-6 top-3 text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-600 font-medium group-hover:bg-yellow-100 group-hover:text-yellow-700 transition">
          {{ blog.date }}
        </span>
        <h2 class="text-2xl font-bold text-gray-900 mb-3 mt-2 leading-tight group-hover:text-blue-700 transition">{{ blog.title }}</h2>
        <p class="text-base text-gray-600 mb-6 flex-1">{{ blog.summary }}</p>
        <div class="flex items-center justify-between mt-auto">
          <span class="inline-block text-blue-500 font-semibold group-hover:text-yellow-500 transition">Read More →</span>
        </div>
      </div>
    </div>
  </section>
</template>