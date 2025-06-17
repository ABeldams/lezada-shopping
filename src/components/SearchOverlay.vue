<script setup>
defineProps(["isOpen", "closeSearch"]);
</script>

<template>
  <!-- Search Overlay -->
  <div
    :class="[
      'fixed inset-0 z-[999999] bg-white transition-transform duration-600',
      isOpen ? 'translate-x-0' : 'translate-x-full'
    ]"
  >
    <!-- Close Icon -->
    <span class="absolute top-8 right-8 cursor-pointer transition-transform duration-600 hover:rotate-90" @click="closeSearch">
      <i class="ti-close text-4xl text-gray-800 md:text-3xl sm:text-2xl"></i>
    </span>

    <!-- Search Content -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-md">
      <!-- Search Box -->
      <div class="mb-4 w-full focus:outline-none">
        <input
  type="search"
  class="w-full text-6xl border-b-2 border-l-0 border-r-0 border-t-0 outline-none border-gray-900  bg-transparent text-left placeholder-gray-300 transition-all duration-300
          focus:border-b-2 "
  placeholder="Search Products..."
/>

      </div>

      <!-- Search Hint -->
      <div class="text-gray-500 text-sm font-medium text-left">
        <span># Hit enter to search or ESC to close</span>
      </div>
    </div>
  </div>
</template>
