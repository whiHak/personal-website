<script setup>
const scrolled = ref(false);

const handleScroll = () => {
  scrolled.value = window.scrollY > 10;
};

const isOpen = ref(false);
const isSocialOpen = ref(false);

const dropdownRef = ref(null);

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isSocialOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  document.removeEventListener("click", handleClickOutside);
});

const route = useRoute();

const isActive = (path) => {
  return path === route.path;
};
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'bg-white/30 backdrop-blur-md shadow-md' : 'bg-transparent',
    ]"
  >
    <div class="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-16">
      <div class="flex justify-between h-16 items-center">
        <!-- Logo -->
        <div class="flex items-center">
          <div id="logo" class="flex-shrink-0 flex items-center">
            <NuxtLink to="/" class="text-2xl font-bold text-gray-800 mr-2">
              <span>
                Betselot
              </span>
            </NuxtLink>
            <NuxtLink to="/" class="text-2xl font-bold text-zeleman-orange-500">
              <span>
                Abraham 
              </span>
            </NuxtLink>
            <Icon name="ic:round-verified" class="inline h-6 w-6 text-zeleman-orange-500 ml-2" />
          </div>
        </div>

        <!-- Centered Navigation Links -->
        <div class="hidden sm:flex justify-center space-x-8 flex-grow">
          <a
            href="/about-me"
            title="About Me"
            :class="{
              'border-transparent text-gray-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium hover:text-zeleman-orange-500 hover:border-zeleman-orange-500': true,
              'text-zeleman-orange-500 border-b-2 border-zeleman-orange-500': isActive('/about-me')
            }"
            >About Me</a
          >
          <a
            href="/projects"
            title="Projects"
            :class="{
              'border-transparent text-gray-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium hover:text-zeleman-orange-500 hover:border-zeleman-orange-500': true,
              'text-zeleman-orange-500 border-b-2 border-zeleman-orange-500': isActive('/projects')
            }"
            >Projects</a
          >
          <!-- <a
            href="#"
            title="Country Profiles"
            class="border-transparent text-gray-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium hover:text-zeleman-orange-500 hover:border-zeleman-orange-500"
            >Country Profiles</a
          > -->
          <a
            href="/services"
            title="Services"
            :class="{
              'border-transparent text-gray-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium hover:text-zeleman-orange-500 hover:border-zeleman-orange-500': true,
              'text-zeleman-orange-500 border-b-2 border-zeleman-orange-500': isActive('/services')
            }"
            >Services</a
          >
          <a
            href="/blogs"
            title="Blogs"
            :class="{
              'border-transparent text-gray-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium hover:text-zeleman-orange-500 hover:border-zeleman-orange-500': true,
              'text-zeleman-orange-500 border-b-2 border-zeleman-orange-500': isActive('/blogs')
            }"
            >Blogs</a
          >
          <!-- <a
            href="/about"
            title="about"
            :class="{
              'border-transparent text-gray-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium hover:text-zeleman-orange-500 hover:border-zeleman-orange-500': true,
              'text-zeleman-orange-500 border-b-2 border-zeleman-orange-500': isActive('/about')
            }"
            >About</a
          >
          <a
            href="/contact"
            title="Contact"
            :class="{
              'border-transparent text-gray-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium hover:text-zeleman-orange-500 hover:border-zeleman-orange-500': true,
              'text-zeleman-orange-500 border-b-2 border-zeleman-orange-500': isActive('/contact')
            }"
            >Contact</a
          > -->
        </div>

        <div class="flex items-center space-x-4">
          <Icon
            name="material-symbols:arrow-back-ios-new-rounded"
            class="text-zeleman-orange-500 text-xl md:hidden cursor-pointer"
            @click="isOpen = true"
          />
        </div>

        <UDrawer v-model:open="isOpen" direction="right" :handle="false">
          <template #content>
            <div class="min-w-96 min-h-96 size-full space-y-10 m-4">
              <div id="logo" class="flex-shrink-0 flex items-center">
            <NuxtLink to="/" class="text-lg font-bold text-gray-800 mr-2">
                Betselot
            </NuxtLink>
            <NuxtLink to="/" class="text-lg font-bold text-zeleman-orange-500">
                Abraham 
            </NuxtLink>
            <Icon name="ic:round-verified" class="inline h-6 w-6 text-zeleman-orange-500 ml-2" />
            <Icon
              name="lucide:x"
              @click="isOpen = false"
              class="h-6 w-6 absolute right-5 text-zeleman-orange-500 border-1 border-zeleman-orange-500 rounded-full ml-auto"
            />
          </div>
              
              <hr class="border-t border-gray-300 w-70" />

              <div
                class="flex flex-col sm:hidden justify-center space-y-2 flex-grow"
              >
                <a
                  href="/about-me"
                  title="About Me"
                  :class="{
                    'border-transparent text-gray-500 inline-flex items-center px-1 pt-1 border-b-2 text-md w-max font-medium hover:text-zeleman-orange-500 hover:border-zeleman-orange-500': true,
                    'text-zeleman-orange-500 border-b-2 border-zeleman-orange-500': isActive('/about-me')
                  }"
                  >About Me</a
                >
                <a
                  href="/projects"
                  title="Projects"
                  :class="{
                    'border-transparent text-gray-500 inline-flex items-center px-1 pt-1 border-b-2 text-md w-max font-medium hover:text-zeleman-orange-500 hover:border-zeleman-orange-500': true,
                    'text-zeleman-orange-500 border-b-2 border-zeleman-orange-500': isActive('/projects')
                  }"
                  >Projects</a
                >
                <!-- <a
                  href="#"
                  title="Country Profiles"
                  class="border-transparent text-gray-500 inline-flex items-center px-1 pt-1 border-b-2 text-md w-max font-medium hover:text-zeleman-orange-500 hover:border-zeleman-orange-500"
                  >Country Profiles</a
                > -->
                <a
                  href="/services"
                  title="Services"
                  :class="{
                    'border-transparent text-gray-500 inline-flex items-center px-1 pt-1 border-b-2 text-md w-max font-medium hover:text-zeleman-orange-500 hover:border-zeleman-orange-500': true,
                    'text-zeleman-orange-500 border-b-2 border-zeleman-orange-500': isActive('/services')
                  }"
                  >Services</a
                >
                <a
                  href="/blogs"
                  title="Blogs"
                  :class="{
                    'border-transparent text-gray-500 inline-flex items-center px-1 pt-1 border-b-2 text-md w-max font-medium hover:text-zeleman-orange-500 hover:border-zeleman-orange-500': true,
                    'text-zeleman-orange-500 border-b-2 border-zeleman-orange-500': isActive('/blogs')
                  }"
                  >Blogs</a
                >
                <!-- <a
                  href="/contact"
                  title="Contact"
                  :class="{
                    'border-transparent text-gray-500 inline-flex items-center px-1 pt-1 border-b-2 text-md w-max font-medium hover:text-zeleman-orange-500 hover:border-zeleman-orange-500': true,
                    'text-zeleman-orange-500 border-b-2 border-zeleman-orange-500': isActive('/contact')
                  }"
                  >Contact</a
                >
                <a
                  href="/about"
                  title="About"
                  :class="{
                    'border-transparent text-gray-500 inline-flex items-center px-1 pt-1 border-b-2 text-md w-max font-medium hover:text-zeleman-orange-500 hover:border-zeleman-orange-500': true,
                    'text-zeleman-orange-500 border-b-2 border-zeleman-orange-500': isActive('/about')
                  }"
                  >About</a
                > -->
              </div>

              <hr class="border-t border-gray-200 w-70" />

              <!-- Social Media Icons -->
              <div class="md:hidden items-center flex space-x-4">
                <!-- <div
                  class="flex items-center justify-center px-1.5 py-1.5 rounded-sm bg-zeleman-orange-200 text-white cursor-pointer"
                >
                  <Icon
                    name="iconoir:youtube"
                    class="h-5 w-5 text-zeleman-orange-500"
                  />
                </div> -->
                <div
                  class="flex items-center justify-center px-1.5 py-1.5 rounded-sm bg-zeleman-orange-200 hover:shadow-md text-white cursor-pointer"
                >
                  <Icon
                    name="mdi:linkedin"
                    class="h-5 w-5 text-zeleman-orange-500"
                  />
                </div>
                <div
                  class="flex items-center justify-center px-1.5 py-1.5 rounded-sm bg-zeleman-orange-200 text-white cursor-pointer"
                >
                  <Icon
                    name="mdi:instagram"
                    class="h-5 w-5 text-zeleman-orange-500"
                  />
                </div>
                <div
                  class="flex items-center justify-center px-1.5 py-1.5 rounded-sm bg-zeleman-orange-200 text-white cursor-pointer"
                >
                  <Icon name="mdi:telegram" class="h-5 w-5 text-zeleman-orange-500" />
                </div>
              </div>
            </div>
          </template>
        </UDrawer>
        <!-- Social Media Icons -->
        <div class="lg:flex items-center hidden space-x-4">
          <!-- <div
            class="flex items-center justify-center px-1.5 py-1.5 rounded-sm bg-zeleman-orange-200 text-white cursor-pointer"
          >
            <Icon name="mdi:youtube" class="h-5 w-5 text-zeleman-orange-500" />
          </div> -->
          <div
            class="flex items-center justify-center px-1.5 py-1.5 rounded-sm bg-zeleman-orange-200 hover:shadow-md text-white cursor-pointer"
          >
            <Icon name="mdi:linkedin" class="h-5 w-5 text-zeleman-orange-500" />
          </div>
          <div
            class="flex items-center justify-center px-1.5 py-1.5 rounded-sm bg-zeleman-orange-200 hover:shadow-md text-white cursor-pointer"
          >
            <Icon name="mdi:instagram" class="h-5 w-5 text-zeleman-orange-500" />
          </div>
          <div
            class="flex items-center justify-center px-1.5 py-1.5 rounded-sm bg-zeleman-orange-200 hover:shadow-md text-white cursor-pointer"
          >
            <Icon name="mdi:telegram" class="h-5 w-5 text-zeleman-orange-500" />
          </div>
        </div>

        <Icon
          name="ic:baseline-keyboard-arrow-down"
          @click.stop="isSocialOpen = !isSocialOpen"
          class="h-5 w-5 text-zeleman-orange-500 text-gray-500 cursor-pointer hidden md:block lg:hidden"
        />

        <Transition
          enter-active-class="transition duration-500 ease-out"
          enter-from-class="opacity-0 -translate-y-5"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-300 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-5"
        >
          <div
            v-if="isSocialOpen"
            ref="dropdownRef"
            class="absolute right-4.5 top-16 lg:flex flex-col items-center space-y-4"
          >
            <!-- <div
              class="flex items-center justify-center px-1.5 py-1.5 rounded-sm bg-zeleman-orange-200 text-white cursor-pointer hover:scale-110 transition-transform"
            >
              <Icon name="iconoir:youtube" class="h-5 w-5 text-zeleman-orange-500" />
            </div> -->
            <div
              class="flex items-center justify-center px-1.5 py-1.5 rounded-sm bg-zeleman-orange-200 hover:shadow-md text-white cursor-pointer hover:scale-110 transition-transform"
            >
              <Icon name="mdi:linkedin" class="h-5 w-5 text-zeleman-orange-500" />
            </div>
            <div
              class="flex items-center justify-center px-1.5 py-1.5 rounded-sm bg-zeleman-orange-200 text-white cursor-pointer hover:scale-110 transition-transform"
            >
              <Icon name="mdi:instagram" class="h-5 w-5 text-zeleman-orange-500" />
            </div>
            <div
              class="flex items-center justify-center px-1.5 py-1.5 rounded-sm bg-zeleman-orange-200 text-white cursor-pointer hover:scale-110 transition-transform"
            >
              <Icon name="mdi:telegram" class="h-5 w-5 text-zeleman-orange-500" />
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </nav>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gugi&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
#logo {
  font-family: 'Gugi', cursive;
}

</style>

