<script setup>
import TopNavBar from '@/components/NavBar.vue';

import Footers from '@/components/Footers.vue';

</script>

<template>
<TopNavBar/>

<div class="grid m-auto grid-cols-1 lg:grid-cols-2 gap-4 mt-10 w-[95%]">
  <!-- Left Column -->
  <div class="flex flex-col space-y-4 md:space-y-5">
    <div class="relative overflow-hidden rounded-lg">
      <img src="@/assets/images/creative-home/bg-banner-new-01.jpg"
           class="w-full h-auto object-cover hover:transition-all hover:transform hover:ease-in-out hover:scale-[1.1] hover:duration-[600ms]"/>
      <div class="absolute bottom-0 left-0 p-4 md:p-6">
        <h1 class="text-xl md:text-2xl font-semibold text-gray-900">New Arrivals</h1>
        <router-link class="text-base md:text-xl text-gray-900 hover:text-red-500 cursor-pointer mt-2">+ SHOP NOW</router-link>
      </div>
    </div>

    <div class="relative overflow-hidden rounded-lg">
      <img src="@/assets/images/creative-home/bg-banner-new-03.jpg"
           class="w-full h-auto object-cover hover:transition-all hover:transform hover:ease-in-out hover:scale-[1.1] hover:duration-[600ms]"/>
      <div class="absolute bottom-0 left-0 p-4 md:p-6">
        <h1 class="text-xl md:text-2xl font-semibold text-gray-900">New Arrivals</h1>
        <router-link :to="{name:'left-sidebar'}" class="text-base md:text-xl text-gray-900 hover:text-red-500 cursor-pointer mt-2">+ SHOP NOW</router-link>
      </div>
    </div>
  </div>

  <!-- Right Column -->
  <div class="flex flex-col space-y-4">
    <div class="relative overflow-hidden rounded-lg">
      <img src="@/assets/images/creative-home/bg-banner-new-02.jpg"
           class="w-full h-auto object-cover hover:transition-all hover:transform hover:ease-in-out hover:scale-[1.1] hover:duration-[600ms]"/>
      <div class="absolute bottom-0 left-0 p-4 md:p-6">
        <h1 class="text-xl md:text-2xl font-semibold text-gray-900">New Arrivals</h1>
        <router-link :to="{name:'left-sidebar'}" class="text-base md:text-xl text-gray-900 hover:text-red-500 cursor-pointer mt-2">+ SHOP NOW</router-link>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="relative overflow-hidden rounded-lg">
        <img src="@/assets/images/creative-home/bg-banner-new-04.jpg"
             class="w-full h-auto object-cover hover:transition-all hover:transform hover:ease-in-out hover:scale-[1.1] hover:duration-[600ms]"/>
        <div class="absolute bottom-0 left-0 p-4 md:p-6">
          <h1 class="text-xl md:text-2xl font-semibold text-gray-900">New Arrivals</h1>
          <router-link :to="{name:'left-sidebar'}" 
          class="text-base md:text-xl text-gray-900 hover:text-red-500 cursor-pointer mt-2">+ SHOP NOW</router-link>
        </div>
      </div>

      <div class="relative overflow-hidden rounded-lg">
        <img src="@/assets/images/creative-home/bg-banner-new-05.jpg"
             class="w-full h-auto object-cover hover:transition-all hover:transform hover:ease-in-out hover:scale-[1.1] hover:duration-[600ms]"/>
        <div class="absolute bottom-0 left-0 p-4 md:p-6">
          <h1 class="text-xl md:text-2xl font-semibold text-gray-900">New Arrivals</h1>
          <router-link :to="{name:'left-sidebar'}" class="text-base md:text-xl text-gray-900 hover:text-red-500 cursor-pointer mt-2">+ SHOP NOW</router-link>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Bottom Row -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-[95%] m-auto mt-5">
  <div class="relative overflow-hidden rounded-lg">
    <img src="@/assets/images/creative-home/bg-banner-new-06.jpg"
         class="w-full h-auto object-cover hover:transition-all hover:transform hover:ease-in-out hover:scale-[1.1] hover:duration-[600ms]"/>
    <div class="absolute bottom-0 left-0 p-4 md:p-6">
      <h1 class="text-xl md:text-2xl font-semibold text-gray-900">New Arrivals</h1>
      <router-link :to="{name:'left-sidebar'}" 
      class="text-base md:text-xl text-gray-900 hover:text-red-500 cursor-pointer mt-2">+ SHOP NOW</router-link>
    </div>
  </div>

  <div class="relative overflow-hidden rounded-lg">
    <img src="@/assets/images/creative-home/bg-banner-new-07.jpg"
         class="w-full h-[100%] object-cover hover:transition-all hover:transform hover:ease-in-out hover:scale-[1.1] hover:duration-[600ms]"/>
    <div class="absolute bottom-0 left-0 p-4 md:p-6">
      <h1 class="text-xl md:text-2xl font-semibold text-gray-900">New Arrivals</h1>
      <router-link :to="{name:'left-sidebar'}"
       class="text-base md:text-xl text-gray-900 hover:text-red-500 cursor-pointer mt-2">+ SHOP NOW</router-link>
    </div>
  </div>

  <div class="relative overflow-hidden rounded-lg">
    <img src="@/assets/images/creative-home/bg-banner-new-08.jpg"
         class="w-full h-auto object-cover hover:transition-all hover:transform hover:ease-in-out hover:scale-[1.1] hover:duration-[600ms]"/>
    <div class="absolute bottom-0 left-0 p-4 md:p-6">
      <h1 class="text-xl md:text-2xl font-semibold text-gray-900">New Arrivals</h1>
      <router-link :to="{name:'left-sidebar'}"
      class="text-base md:text-xl text-gray-900 hover:text-red-500 cursor-pointer mt-2">+ SHOP NOW</router-link>
    </div>
  </div>
</div>






<Footers/>
</template>