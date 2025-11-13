<template>
  <section class="w-full flex flex-col md:flex-row items-center justify-center py-16 px-4 md:px-12 bg-white gap-12">
    <!-- Left: Service Cards -->
    <div class="flex flex-col gap-8 w-full md:w-1/2 max-w-md">
      <div class="flex items-center gap-6 bg-[#F76C39]/90 rounded-2xl shadow-xl p-6 hover:scale-[1.03] transition-transform">
        <div class="flex items-center justify-center w-24 h-24 rounded-full bg-[#F76C39] shadow-lg">
          <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 8h18"/></svg>
        </div>
        <div>
          <h3 class="text-xl font-bold text-gray-900 mb-1">Web Development</h3>
          <p class="text-gray-700 text-sm">Vue, React, Nuxt.JS, & Next.JS</p>
        </div>
      </div>
      <div class="flex items-center gap-6 bg-[#FFB82E]/90 rounded-2xl shadow-xl p-6 hover:scale-[1.03] transition-transform">
        <div class="flex items-center justify-center w-24 h-24 rounded-full bg-[#FFB82E] shadow-lg">
          <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
        </div>
        <div>
          <h3 class="text-xl font-bold text-gray-900 mb-1">Backend Development</h3>
          <p class="text-gray-700 text-sm">Node.JS, Python</p>
        </div>
      </div>
      <div class="flex items-center gap-6 bg-[#6C4DFF]/90 rounded-2xl shadow-xl p-6 hover:scale-[1.03] transition-transform">
        <div class="flex items-center justify-center w-24 h-24 rounded-full bg-[#6C4DFF] shadow-lg">
          <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="8"/><path d="M9 12h6M12 9v6"/></svg>
        </div>
        <div>
          <h3 class="text-xl font-bold text-gray-900 mb-1">AI Integration</h3>
          <p class="text-gray-700 text-sm">Assistant, Voice, & Agents</p>
        </div>
      </div>
    </div>
    <!-- Right: Text Content -->
    <div class="w-full md:w-1/2 max-w-2xl">
      <h2 class="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
        How can <span class="text-zeleman-orange-500">I Help?</span>
      </h2>
      <p class="text-lg text-gray-700 mb-4">
        You know that feeling when something just <span class="italic">works?</span> That’s what I <span class="font-bold">deliver</span>.
      </p>
      <p class="text-md text-gray-700 mb-4">
        My clients describe me <span class="font-bold">as skilled, professional, excellent work</span> and you know what they are absolutely right. I do more than code - I solve problems, create value and turn ideas into reality.
      </p>
      <p class="text-md text-gray-700 mb-4">
        Here is how I can help: My expertise is I build websites and SaaS products and deploy them to scale to 100,000+ users easily. You know when you need a developer for your startup to get your product running? I can be that person. Web Development, Backend Engineer I’m all in for this development with years of experience.
      </p>
      <p class="text-md text-gray-700 mb-4">
        Another area that I can be a huge help is working with LLMs to build ChatBots, AI agents, and Voice Assistant: I can give you creative ways to use Agents & Chatbots for your company and make an impact.
      </p>
      <p class="text-md text-gray-700">
        You may be wondering, "Who is this guy, and is he for real?" Yes I’m for real and the answer is simple: I take on projects that I understand.
      </p>
    </div>
  </section>
</template>

<script setup>
// No script needed for static content
</script>

<style scoped>
</style>