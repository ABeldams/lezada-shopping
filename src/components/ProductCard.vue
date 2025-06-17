<script setup>
import { ref } from 'vue';

// Props for dynamic data
defineProps({
  product: Object
});

// Reactive state for hover effect
const isHovered = ref(false);
</script>

<template>
    
  <div class="w-full sm:w-1/2 md:w-1/2 lg:w-[90%] mb-[45px] p-4">
    <div class="relative">
      <!-- Product Image -->
      <div class="relative" @mouseover="isHovered = true" @mouseleave="isHovered = false">
        <div class="block">
          <img 
            :src="product.image1" 
            class="w-full transition duration-900 relative z-20" 
            :class="{ 'opacity-0': isHovered, 'opacity-100': !isHovered }"
          />
          <img 
            :src="product.image2" 
            class="absolute top-0 left-0 w-full transition duration-900" 
            :class="{ 'opacity-100 visible': isHovered, 'opacity-0 invisible': !isHovered }"
          />
        </div>

        <!-- Floating Badges -->
        <div class="absolute top-5 left-5 z-30 flex flex-col space-y-2">
          <span v-if="product.sale" class="h-12 w-12 leading-[48px] font-medium text-white text-center text-sm rounded-full bg-[#98d8ca;]">
            -25
          </span>
          <span v-if="product.hot" class="h-12 w-12 leading-[48px] font-medium text-white text-center text-sm rounded-full bg-red-500">
            New
          </span>
        </div>

        <!-- Floating Icons -->
        <div class="absolute top-5 right-5 z-30 flex flex-col space-y-2">
          <span :class="{ 'visible opacity-100': isHovered, 'invisible opacity-0': !isHovered }" class="transition duration-300 mt-1">
            <a href="#" class="w-10 h-10 leading-10 bg-white text-center text-gray-500 block rounded-full hover:text-gray-800 shadow">
              <i class="ion-android-favorite-outline"></i>
            </a>
          </span>
          <span :class="{ 'visible opacity-100': isHovered, 'invisible opacity-0': !isHovered }" class="transition duration-600 mt-1">
            <a href="#" class="w-10 h-10 leading-10 bg-white text-center text-gray-500 block rounded-full hover:text-gray-800 shadow">
              <i class="text-xl fas fa-sync-alt"></i>
            </a>
          </span>
          <span :class="{ 'visible opacity-100': isHovered, 'invisible opacity-0': !isHovered }" class="transition duration-900 mt-1">
            <a href="#" class="w-10 h-10 leading-10 bg-white text-center text-gray-500 block rounded-full hover:text-gray-800 shadow">
              <i class="text-xl fas fa-shopping-cart"></i>
            </a>
          </span>
        </div>
      </div>

      <!-- Product Content -->
      <div class="relative pt-6 text-center">
        <h3 class="mb-0">
          <a href="#" class="block text-[17px] leading-[1.6] font-normal text-gray-800 transition duration-600" 
             :class="{ 'opacity-0 -translate-y-10': isHovered, 'opacity-100': !isHovered }">
            {{ product.name }}
          </a>
        </h3>
        <a href="#" class="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-3/5 opacity-0 invisible transition duration-600"
           :class="{ 'opacity-100 visible translate-y-0 text-[18px] leading-7 text-red-600 font-medium': isHovered, 'opacity-0 invisible': !isHovered }">
          Add to cart +
        </a>
        <div class="flex justify-center space-x-3 mt-2">
          <span class="text-sm font-semibold text-gray-800">${{ product.price }}</span>
          <span v-if="product.discountedPrice" class="text-sm font-semibold text-gray-400 line-through">${{ product.discountedPrice }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
