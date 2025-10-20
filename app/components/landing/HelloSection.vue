<template>
  <section class="w-full flex flex-col md:flex-row items-center justify-center py-16 px-4 md:px-12 bg-white gap-12">
    <!-- Left: Greeting and Info -->
    <div class="w-full md:w-1/2 max-w-xl mb-10 md:mb-0">
      <h2 class="text-4xl md:text-5xl font-extrabold mb-4 flex items-center">
        Say <span class="ml-2 mr-2 text-4xl">👋</span>, <span class="text-zeleman-orange-500 ml-1">Hello!</span>
      </h2>
      <p class="text-lg text-gray-700 mb-6">
        I enjoy discussing new projects and coding challenges. Please share as much info, as possible so we can get the most out of our first catch-up.
      </p>
      <div class="text-md text-gray-700 mb-2">
        <span class="font-semibold">E-mail:</span> <a href="mailto:betseab1@gmail.com" class="text-gray-700 hover:text-zeleman-orange-500 hover:underline">betseab1@gmail.com</a>
      </div>
      <div class="text-md text-gray-700">
        <span class="font-semibold">Twitter:</span> <a href="https://twitter.com/betse_ab" target="_blank" class="text-gray-700 hover:text-zeleman-orange-500 hover:underline">@betse_ab</a>
      </div>
    </div>  
    <!-- Right: Contact Form -->
    <div class="w-full md:w-1/2 max-w-xl">
      <form class="bg-white rounded-2xl shadow-2xl p-8 flex flex-col gap-6">
        <div>
          <label for="name" class="block text-gray-700 font-semibold mb-2">Name</label>
          <input id="name" type="text" class="w-full px-4 py-3 rounded-lg bg-gray-200 focus:bg-white focus:ring-2 focus:ring-zeleman-orange-500 outline-none transition" placeholder="Your name" />
        </div>
        <div>
          <label for="email" class="block text-gray-700 font-semibold mb-2">E-mail</label>
          <input id="email" type="email" class="w-full px-4 py-3 rounded-lg bg-gray-200 focus:bg-white focus:ring-2 focus:ring-zeleman-orange-500 outline-none transition" placeholder="you@email.com" />
        </div>
        <div>
          <label for="message" class="block text-gray-700 font-semibold mb-2">Message</label>
          <textarea id="message" rows="4" class="w-full px-4 py-3 rounded-lg bg-gray-200 focus:bg-white focus:ring-2 focus:ring-zeleman-orange-500 outline-none transition" placeholder="Type your message..."></textarea>
        </div>
        <button type="submit" class="w-full py-3 rounded-xl bg-zeleman-orange-500 text-white font-bold text-lg shadow-lg hover:bg-zeleman-orange-700 transition">SUBMIT</button>
      </form>
    </div>
  </section>
</template>

<script setup>
// No script needed for static content
</script>

<style scoped>
section {
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
}
</style>