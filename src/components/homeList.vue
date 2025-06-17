<script setup>
import { RouterLink } from 'vue-router';
import HoverImageLink from './HoverImageLink.vue';


</script>
<template>
  
   <div class="px-[40px] py-5 h-[250px]   grid grid-cols-5 gap-5 
        relative overflow-hidden">
        <div class=" h-full border-r flex flex-col border-gray-200">
         <h3 class="font-semibold mb-2">
          Home Group
         </h3>
         <ul class="space-y-5">
          <li>
            <HoverImageLink 
        :to="{ name: 'home' }"
        text="Decor"
        imageSrc="16.png"
        bottom="5"
        left="100px"
        width="50%"  
        top="5"
       />
          </li>
          <li>
            <HoverImageLink 
        :to="{ name: 'creative' }"
        text="Creative"
        imageSrc="17.png"
        bottom="0px"
        left="100px"
        width="50%" 
        top="-0px" 
      />
          </li>
          <li>
            <HoverImageLink 
        :to="{ name: 'perfumes' }"
        text="Perfumes"
        imageSrc="14.jpg"
        bottom="0px"
        left="100px"
        width="50%" 
        top="0px" 
      />
          </li>
          <li>
            <HoverImageLink 
        :to="{ name: 'trending' }"
        text="Trending"
        imageSrc="trending.png"
        bottom="0px"
        left="100px"
        width="50%" 
        top="0px" 
      />
          </li>
         </ul>
        </div>
        <div class="border-r">
         <h3 class="font-semibold mb-2">
          Home Group
         </h3>
         <ul class="space-y-5">
          <li>
            <HoverImageLink 
        :to="{ name: 'essentials' }"
        text="Essentials"
        imageSrc="trending.png"
        bottom="0px"
        left="100px"
        width="50%" 
        top="0px" 
      />
          </li>
          <li>
            <HoverImageLink
        :to="{ name: 'accessories' }"
        text="Accessories"
        imageSrc="10.jpg"
        bottom="0px"
        left="100px"
        width="50%" 
        top="0px" 
      />
          </li>
          <li>
            <HoverImageLink 
        :to="{ name: 'lookbook' }"
        text="lookbook"
        imageSrc="10.jpg"
        bottom="0px"
        left="100px"
        width="50%" 
        top="0px" 
      />
          </li>
          <li>
            <HoverImageLink 
        :to="{ name: 'furniture' }"
        text="furniture"
        imageSrc="06.jpg"
        bottom="0px"
        left="100px"
        width="50%" 
        top="0px" 
      />
          </li>
         </ul>
        </div>
        <div class="border-r">
         <h3 class="font-semibold mb-2">
          Home Group
         </h3>
         <ul class="space-y-5">
          <li>
            <HoverImageLink 
        :to="{ name: 'smart-design' }"
        text="Smart design"
        imageSrc="trending.png"
        bottom="0px"
        left="100px"
        width="50%" 
        top="0px" 
      />
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Collection
           </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Jewelry
           </a>
          </li>
          <li>
           <RouterLink :to="{name:'cosmetics'}" class="text-gray-600 hover:text-black" href="#">
            Cosmetics
           </RouterLink>
          </li>
         </ul>
        </div>
        <div class="border-r">
         <h3 class="font-semibold mb-2">
          Home Group
         </h3>
         <ul class="space-y-5">
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Swimsuit
           </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Special
           </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Concept
           </a>
          </li>
         </ul>
        </div>
        <div>
            <img src="@/components/icons/menu-element.png" class="h-[90%]"/>
        </div>
       </div>
  
</template>