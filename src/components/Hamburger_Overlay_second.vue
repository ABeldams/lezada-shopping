<script setup>
import close from './icons/close.vue'
import Search from './icons/Search.vue'
import User from './icons/mini_user.vue'
import Phone from './icons/phone.vue'
import Mail from './icons/mail.vue'
import Facebook from './icons/facebook.vue'
import Twitter from './icons/twitter.vue'
import Instagram from './icons/instagram.vue'
import pinterest from './icons/pinterest.vue'
defineProps(["isOpen", "closeSearch"]);
import { ref } from 'vue'



import { reactive } from 'vue'

const openItems = reactive({
  home: false,
  groupOne: false,
})

function toggle(item) {
  openItems[item] = !openItems[item]
}
</script>

<template>
 

 <div 
    :class="['fixed inset-0 z-50 transition-opacity', { 'opacity-100 visible transition-all duration-1000': isOpen, 'opacity-0 invisible': !isOpen }]"
    v-show="isOpen"
  >
    <div class="fixed inset-0 bg-black bg-opacity-50" @click="cartStore.toggleCart"></div>
    
    <div 
      class="fixed top-0 left-0 w-80 h-full bg-white shadow-lg transform transition-transform duration-500 ease-in-out"
      :class="{ 'translate-x-0': isOpen, 'translate-x-full': !isOpen }"
    >
      <span 
        class="absolute text-center  top-0 left-[260px]  w-[60px] h-[60px] z-50 cursor-pointer text-black text-2xl "
        @click="closeSearch">
        <div  class="ml-3 mt-[10px]">
            <close class=""/>
        </div>
        
      </span>


<div class="mx-8 mt-2 space-y-2">
<h1 class="mt-[50px]  text-2xl text-start">About Us</h1>
<p class="mt-[90px] text-start text-md">
    At Lezada, we put a strong emphasis on simplicity, quality and usefulness of fashion products over other factors. Our fashion items never get outdated. 
    They are not short-lived as normal fashion clothes.
</p>

<div class=" flex flex-col mt-[100px] ">
       
          
        <h1 class="flex  items-start">contact@lezada.com</h1>
        <h1 class="flex  items-start text-3xl">(+00) 123 567990
</h1>
        
      
  </div>

  <div class="flex space-x-7 items-center p-5">
       <twitter class="w-5 h-5 text-gray-500 hover:text-gray-900" />
       <Instagram class="w-5 h-5 text-gray-500 hover:text-gray-900"/>
       <Facebook class="w-5 h-5 text-gray-500 hover:text-gray-900"/>
       <pinterest class="w-5 h-5 text-gray-500 hover:text-gray-900"/> 
        
  </div>

</div> 

</div>    


</div>
</template>
