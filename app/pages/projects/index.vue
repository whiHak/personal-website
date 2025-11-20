<template>
  <section class="w-full min-h-screen py-24 px-2 md:px-10 lg:px-24 bg-gradient-to-br from-zeleman-orange-200 via-green-50 to-yellow-50 flex flex-col items-center">
    <h1 class="text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-green-500 to-yellow-400 tracking-tight mb-20 animate-gradient-x">
      🚀 Projects
    </h1>
    <div class="flex flex-col gap-24 w-full max-w-6xl">
      <!-- Project 1: Zeleman Academy -->
      <div class="flex flex-col lg:flex-row w-full shadow-2xl bg-white rounded-3xl overflow-hidden relative group hover:scale-[1.02] transition-transform duration-300">
        <!-- Video Area -->
        <div class="w-full lg:w-1/2 bg-orange-50 flex items-center justify-center p-8 relative">
          <div class="rounded-3xl overflow-hidden shadow-lg border-4 border-white/60 relative">
            <iframe
              src="https://www.youtube.com/embed/DhZZYbPO5Ew?autoplay=1&mute=1&loop=1&playlist=DhZZYbPO5Ew"
              class="w-[350px] h-[210px] md:w-[470px] md:h-[265px] lg:w-[520px] lg:h-[295px] rounded-2xl"
              frameborder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowfullscreen
            ></iframe>
            <span class="absolute top-3 left-3 bg-orange-500/70 text-white px-3 py-1 rounded-md text-xs font-bold shadow border">Featured Demo</span>
          </div>
        </div>
        <!-- Description Area -->
        <div class="w-full lg:w-1/2 p-10 flex flex-col justify-center text-left gap-6 bg-gradient-to-br from-white via-yellow-50 to-orange-50">
          <h2 class="text-3xl md:text-4xl font-extrabold mb-2 text-orange-600">Zeleman Academy</h2>
          <p class="text-lg text-gray-800 mb-2 leading-relaxed">
            Where African storytelling meets technology. Zeleman Academy empowers Pan-African creatives with hands-on training in film, photography, advertising, and digital innovation. Learn, create, and innovate in a world-class, vibrant environment.
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-semibold">Storytelling</span>
            <span class="px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-semibold">Film & Video</span>
            <span class="px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold">AI/Tech</span>
            <span class="px-4 py-2 rounded-full bg-zeleman-orange-100 text-orange-600 font-semibold">Pan-African Network</span>
          </div>
          <a href="https://www.zelemanacademy.com/" target="_blank" rel="noopener" class="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold shadow-md text-lg transition">
            Visit Zeleman Academy
          </a>
        </div>
      </div>
      <!-- Project 2: MeliaCRED -->
      <div class="flex flex-col lg:flex-row-reverse w-full shadow-2xl bg-white rounded-3xl overflow-hidden relative group hover:scale-[1.02] transition-transform duration-300">
        <!-- Video Area -->
        <div class="w-full lg:w-1/2 bg-green-50 flex items-center justify-center p-8 relative">
          <div class="rounded-3xl overflow-hidden shadow-lg border-4 border-white/60 relative">
            <iframe
              src="https://www.youtube.com/embed/uQblqYDQYuk?autoplay=1&mute=1&loop=1&playlist=uQblqYDQYuk"
              class="w-[350px] h-[210px] md:w-[470px] md:h-[265px] lg:w-[520px] lg:h-[295px] rounded-2xl"
              frameborder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowfullscreen
            ></iframe>
            <span class="absolute top-3 left-3 bg-green-500/70 text-white px-3 py-1 rounded-md text-xs font-bold shadow border">Featured Demo</span>
          </div>
        </div>
        <!-- Description Area -->
        <div class="w-full lg:w-1/2 p-10 flex flex-col justify-center text-left gap-6 bg-gradient-to-br from-white via-green-50 to-yellow-50">
          <h2 class="text-3xl md:text-4xl font-extrabold mb-2 text-green-700">MeliaCRED</h2>
          <p class="text-lg text-gray-800 mb-2 leading-relaxed">
            MeliaCRED bridges AI innovation and African development. We empower businesses and talent with hands-on AI training, offshoring strategy, and expert-driven research partnerships. Learn, connect, and lead the AI transformation across borders.
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold">AI Training</span>
            <span class="px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-semibold">Offshoring</span>
            <span class="px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-semibold">Research</span>
            <span class="px-4 py-2 rounded-full bg-gray-100 text-gray-800 font-semibold">Pan-African</span>
          </div>
          <a href="https://meliacred.com/" target="_blank" rel="noopener" class="inline-block px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold shadow-md text-lg transition">
            Visit MeliaCRED
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>


useHead({
  title: 'Projects - Betselot Abraham',
  meta: [
    {
      name: 'description',
      content: 'Explore the projects of Betselot Abraham, showcasing skills in software engineering and development.',
    },
    {
      name: 'keywords',
      content: 'Betselot Abraham, Projects, Software Engineer, Portfolio, Web Development, AI, Offshoring, Storytelling, Film, Technology, Pan-African Network, Zeleman Academy, MeliaCRED, Software Development, Coding, GitHub, LinkedIn, Betselot Resume, Betselot Skills',
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

<style scoped>
@keyframes gradient-x {
  0%, 100% {
    background-position: left;
  }
  50% {
    background-position: right;
  }
}
.animate-gradient-x {
  background-size: 200% 100%;
  animation: gradient-x 7s ease-in-out infinite;
}
</style>