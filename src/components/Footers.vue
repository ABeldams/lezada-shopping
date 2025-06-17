<script setup>
import Facebook from './icons/facebook.vue';
import RightArrow from './icons/right-arrow.vue';
import Twitter from './icons/twitter.vue';
import Youtube from './icons/youtube.vue';
import Instagram from './instagram.vue';


</script>
<template>


<div class="grid grid-cols-1 gap-0 p-[100px] bg-gray-100 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
  <div class="flex flex-col space-y-5">
    <img src="@/components/icons/lezada_logo.png" class="h-[20px] w-[150px]"/>
    <p class="text-md">© 2025 lezada.<br>
      All Rights Reserved</p>
  </div>

  <div class="flex flex-col space-y-5">
        <p class="text-md text-black font-semibold">ABOUT</p>
        <ul class="flex flex-col text-gray-600 space-y-5">
        <li>About us</li>
        <li>Store location</li>
        <li>Contact</li>
        <li>Orders tracking</li>
        </ul>
  </div>

  <div class="flex flex-col space-y-5">
        <p class="text-md text-black font-semibold">USEFUL LINKS</p>
        <ul class="flex flex-col text-gray-600 space-y-5">
        <li>Returns</li>
        <li>Support Policy</li>
        <li>Size guide</li>
        <li>FAQs</li>
        </ul>
  </div>

  <div class="flex flex-col space-y-5 ">
        <p class="text-md text-black font-semibold">FOLLOW US ON</p>
        <ul class="flex flex-col text-gray-600 space-y-5 ">
        <li class="flex   items-center">
          <Twitter/> Twitter</li>
        <li class="flex  items-center"><Facebook/> Facebook</li>
        <li class="flex  items-center"><Instagram/> Instagram</li>
        <li class="flex  items-center"><Youtube/> Youtube</li>
        </ul>
  </div>

  <div class="flex flex-col space-y-5   w-[100%]">
        <p class="text-4xl text-gray-900 font-[arial]">Subscribe.</p>
        <p>Subscribe to our newsletter to receive news on <br>update.</p>
        <div class="relative">
        <input type="text" placeholder="Your email address" 
        class="w-[250px] bg-gray-100 border-t-0 border-l-0 border-r-0 border-b-2 justify-start items-start" />
        <RightArrow class="absolute left-[230px] top-2 hover:text-black hover:cursor-pointer"/>
        </div>
        
  </div>
</div>

</template>