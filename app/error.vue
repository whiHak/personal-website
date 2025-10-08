<template>
  <div v-if="error?.statusCode === 404" class="flex flex-col items-center justify-center h-screen px-4 text-center bg-gray-100 dark:bg-[var(--steep-dark)]">
    <img 
      src="/images/error/404_page.png"
      alt="404 Not Found"
      class="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl"
    />
    
    <h1 class="text-2xl font-bold text-gray-800 mt-6 dark:text-white sm:text-3xl md:text-4xl">
      Oops! Page Not Found
    </h1>
    
    <p class="text-gray-600 mt-2 dark:text-white sm:text-lg">
      The page you're looking for doesn't exist or has been moved.
    </p>
    
    <NuxtLink to="/" class="mt-4 px-6 py-3 bg-zeleman-orange-700 text-white dark:text-secondary-lite font-semibold rounded-lg shadow-md hover:bg-primaryDark transition-all">
      Go Back Home
    </NuxtLink>
  </div>

  <div v-else class="flex flex-col items-center justify-center h-screen px-4 text-center bg-gray-100 dark:bg-[var(--steep-dark)]">
    <img 
      src="/images/error/500_error.png"
      alt="500 Error"
      class="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl"
    />
    
    <h1 class="text-2xl font-bold text-gray-800 dark:text-white mt-6 sm:text-3xl md:text-4xl">
      Oops! Something Went Wrong
    </h1>
    
    <p class="text-gray-600 mt-2 dark:text-white sm:text-lg">
      {{ error?.message }}
    </p>
    
    <p class="text-gray-500 mt-2 dark:text-secondary sm:text-lg max-w-full">
      {{ error?.statusMessage || 'Internal Server Error' }}
    </p>
    
    <NuxtLink to="/" class="mt-4 px-6 py-3 bg-zeleman-orange-700 text-white font-semibold rounded-lg shadow-md hover:bg-primaryDark transition-all">
      Go Back Home
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { useError } from '#app'

const error = useError()

useHead({
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
</script>
