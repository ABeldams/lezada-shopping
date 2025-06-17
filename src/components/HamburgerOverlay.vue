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
    :class="['fixed inset-0 z-50 transition-opacity', { 'opacity-100 visible': isOpen, 'opacity-0 invisible': !isOpen }]"
    v-show="isOpen"
  >
    <!--<div class="fixed inset-0 bg-black bg-opacity-50" @click="cartStore.toggleCart"></div>-->
    
    <div 
      class="fixed top-0 right-0 w-80 h-full bg-white shadow-lg transform transition-transform duration-500 ease-in-out"
      :class="{ 'translate-x-0': isOpen, 'translate-x-full': !isOpen }"
    >
      <span 
        class="absolute text-center  top-0 right-[320px] bg-[#333;] w-[60px] h-[60px] z-50 cursor-pointer text-white text-2xl "
        @click="closeSearch">
        <div  class="ml-3 mt-[10px]">
            <close class=""/>
        </div>
        
      </span>

      <div class="relative p-5 bg-[#e7e7e7]">
        <input type="input" placeholder="Search here"
        class="bg-[#e7e7e7] text-[16px] font-[arial] font-normal"/>
         <Search class="absolute top-[20px] left-[270px]"/>
      </div>


<div class="mx-8 mt-2 space-y-2">

<!-- Home -->
<div>
  <div class="flex items-center font-[arial] text-[16px] font-bold cursor-pointer" @click="toggle('home')">
    Home
    <span class="ml-auto text-xl">
      {{ openItems.home ? '−' : '+' }}
    </span>
  </div>

  <!-- Home children -->
  <div v-if="openItems.home" class="pl-4 mt-2 space-y-2">
    
    <!-- Home Group One -->
    <div>
      <div class="flex items-center cursor-pointer text-[13px]" @click="toggle('groupOne')">
        Home Group One
        <span class="ml-auto text-xl">
          {{ openItems.groupOne ? '−' : '+' }}
        </span>
      </div>

      <!-- Grandchildren under Group One -->
      <div v-if="openItems.groupOne" class="pl-4 mt-2 space-y-1 text-sm text-gray-700">
        <div>Decor</div>
        <div>Creative</div>
        <div>Perfumes</div>
        <div>Trending</div>
      </div>

      <div class="flex items-center cursor-pointer text-[13px]" @click="toggle('groupTwo')">
        Home Group Two
        <span class="ml-auto text-xl">
          {{ openItems.groupTwo ? '−' : '+' }}
        </span>
      </div>

      <!-- Grandchildren under Group One -->
      <div v-if="openItems.groupTwo" class="pl-4 mt-2 space-y-1 text-sm text-gray-700">
        <div>Essentials</div>
        <div>Accessories
        </div>
        <div>Lookbook
        </div>
        <div>Furniture</div>
      </div>

      <div class="flex items-center cursor-pointer text-[13px]" @click="toggle('groupThree')">
        Home Group Three
        <span class="ml-auto text-xl">
          {{ openItems.groupThree ? '−' : '+' }}
        </span>
      </div>

      <!-- Grandchildren under Group One -->
      <div v-if="openItems.groupThree" class="pl-4 mt-2 space-y-1 text-sm text-gray-700">
        <div>Smart Design</div>
        <div>Collection</div>
        <div>Jewelry</div>
        <div>Cosmetics</div>
      </div>

      <div class="flex items-center cursor-pointer text-[13px]" @click="toggle('groupFour')">
        Home Group Four
        <span class="ml-auto text-xl">
          {{ openItems.groupFour ? '−' : '+' }}
        </span>
      </div>

      <!-- Grandchildren under Group One -->
      <div v-if="openItems.groupFour" class="pl-4 mt-2 space-y-1 text-sm text-gray-700">
       


        <div> Swimsuit</div>
        <div>Special</div>
        <div>Concept</div>
        
      </div>

    </div>



    






    
    



    

  
  </div>
</div>

<!-- Shop -->
<div>
  <div class="flex items-center font-[arial] text-[16px] font-bold cursor-pointer" @click="toggle('shop')">
    Shop
    <span class="ml-auto text-xl">
      {{ openItems.shop ? '−' : '+' }}
    </span>
  </div>

  <!-- Home children -->
  <div v-if="openItems.shop" class="pl-4 mt-2 space-y-2">
    
    <!-- Home Group One -->
    <div>
      <div class="flex items-center cursor-pointer text-[13px]" @click="toggle('groupOne')">
        Group One
        <span class="ml-auto text-xl">
          {{ openItems.groupOne ? '−' : '+' }}
        </span>
      </div>

      <!-- Grandchildren under Group One -->
      <div v-if="openItems.groupOne" class="pl-4 mt-2 space-y-1 text-sm text-gray-700">
        




        <div class="flex flex-col justify-start items-start  space-y-4">   
     
        <div>Left Sidebar</div>
        <div>Right Sidebar</div>
        <div>No Sidebar</div>
        <div>Full Width No Space</div>
        <div>Full Width No Sidebar</div>
        <div>Full Width Left Sidebar</div>
        <div>Full Width Right Sidebar</div>
        </div>
      </div>

      <div class="flex items-center cursor-pointer text-[13px]" @click="toggle('groupTwo')">
         Group Two
        <span class="ml-auto text-xl">
          {{ openItems.groupTwo ? '−' : '+' }}
        </span>
      </div>

      <!-- Grandchildren under Group One -->
      <div v-if="openItems.groupTwo" class="pl-4 flex flex-col justify-start items-start mt-2 space-y-1 text-sm text-gray-700">
       
        <div>Basic</div>
        <div>Full Width</div>
        <div>Full Width Right Thumb</div>
        <div>Sticky Details</div>
        <div>Shopping Cart</div>
        <div>Wishlist</div>
        <div>Compare</div>
        
      </div>

      <div class="flex items-center cursor-pointer text-[13px]" @click="toggle('groupThree')">
         Group Three
        <span class="ml-auto text-xl">
          {{ openItems.groupThree ? '−' : '+' }}
        </span>
      </div>

      <!-- Grandchildren under Group One -->
      <div v-if="openItems.groupThree" class="pl-4 flex flex-col justify-start items-start mt-2 space-y-1 text-sm text-gray-700">
    
        <div>Checkout</div>
        <div>Order Tracking</div>
        <div>My Account</div>
        <div>Login Register</div>
      </div>
  
    </div>
  </div>
</div>
<!--end shop-->



<!-- Element -->
<div>
  <div class="flex items-center font-bold font-[arial] text-[16px] cursor-pointer" @click="toggle('element')">
    Elements
    <span class="ml-auto text-xl">
      {{ openItems.element ? '−' : '+' }}
    </span>
  </div>
  <!-- Home children -->
  <div v-if="openItems.element" class="pl-4 mt-2 space-y-2">
    
    <!-- Home Group One -->
    <div>
      <div class="flex items-center cursor-pointer text-[13px]" @click="toggle('groupOne')">
        Group One
        <span class="ml-auto text-xl">
          {{ openItems.groupOne ? '−' : '+' }}
        </span>
      </div>

      <!-- Grandchildren under Group One -->
      <div v-if="openItems.groupOne" class="pl-4 mt-2 space-y-1 text-sm text-gray-700">
        
        <div class="flex flex-col justify-start items-start  space-y-4">   
     
        <div>Product Categories</div>
        <div>Product Sliders </div>
        <div>Product Tabs</div>
        <div>Product Widget</div>
        <div>Recent Products</div>
        </div>
      </div>

      <div class="flex items-center cursor-pointer text-[13px]" @click="toggle('groupTwo')">
         Group Two
        <span class="ml-auto text-xl">
          {{ openItems.groupTwo ? '−' : '+' }}
        </span>
      </div>

      <!-- Grandchildren under Group One -->
      <div v-if="openItems.groupTwo" class="pl-4 flex flex-col justify-start items-start mt-2 space-y-1 text-sm text-gray-700">

        <div>Sale Products</div>
        <div>Featured products</div>
        <div>Best Selling</div>
        <div>Product Attributes </div>

      </div>

      <div class="flex items-center cursor-pointer text-[13px]" @click="toggle('groupThree')">
         Group Three
        <span class="ml-auto text-xl">
          {{ openItems.groupThree ? '−' : '+' }}
        </span>
      </div>

      <!-- Grandchildren under Group One -->
      <div v-if="openItems.groupThree" class="pl-4 flex flex-col justify-start items-start mt-2 space-y-1 text-sm text-gray-700">
    
        <div> Blog Posts</div>
        <div>Mailchimp Form</div>
        <div>Icon Box</div>
        <div>Team Member</div>
        <div>FAQs / Toggles</div>
      </div>


      <div class="flex items-center cursor-pointer text-[13px]" @click="toggle('groupFour')">
         Group Four
        <span class="ml-auto text-xl">
          {{ openItems.groupFour ? '−' : '+' }}
        </span>
      </div>

      <!-- Grandchildren under Group One -->
      <div v-if="openItems.groupFour" class="pl-4 flex flex-col justify-start items-start mt-2 space-y-1 text-sm text-gray-700">

        <div> Countdown Timer</div>
        <div>Buttons</div>
        <div>Testimonials</div>
        <div>Google Maps</div>
       
      </div>
  
    </div>
  </div>
</div>
<!--end Element-->


<!-- Element -->
<div>
  <div class="flex items-center font-bold font-[arial] text-[16px] cursor-pointer" @click="toggle('pages')">
    Pages
    <span class="ml-auto text-xl">
      {{ openItems.pages ? '−' : '+' }}
    </span>
  </div>

  <!-- Home children -->
  <div v-if="openItems.pages" class="pl-4 mt-2 space-y-2">
    
    <div class="pl-4 mt-2 flex flex-col justify-start space-y-5 items-start  text-sm text-gray-700">
        <div>About Us</div>
        <div>About Us Two</div>
        <div>Contact Us</div>
        <div>F.A.Q</div>
        <div>Coming Soon</div>
        <div>Not Found</div>
       
      </div>

     
    <div>

      <!-- Grandchildren under Group One -->
      
    </div>
  </div>
</div>
<!--end pages-->

<!-- blog -->
<div>
  <div class="flex items-center font-[arial] text-[16px] font-bold cursor-pointer" @click="toggle('blog')">
    Blog
    <span class="ml-auto text-xl">
      {{ openItems.blog ? '−' : '+' }}
    </span>
  </div>

  <!-- Home children -->
  <div v-if="openItems.blog" class="pl-4 mt-2 space-y-2">
    
    <!-- Home Group One -->
    <div>
      <div class="flex items-center cursor-pointer text-[13px]" @click="toggle('groupOne')">
        Standard Layout
        <span class="ml-auto text-xl">
          {{ openItems.groupOne ? '−' : '+' }}
        </span>
      </div>

      <!-- Grandchildren under Group One -->
      <div v-if="openItems.groupOne" class="pl-4 mt-2 space-y-1 text-sm text-gray-700">
        




        <div class="flex flex-col justify-start items-start  space-y-4">   
                 
        <div>Left Sidebar</div>
        <div>Right Sidebar</div>
        <div>Full Width </div>
        
        </div>
      </div>

      <div class="flex items-center cursor-pointer text-[13px]" @click="toggle('groupTwo')">
        Grid Layout
        <span class="ml-auto text-xl">
          {{ openItems.groupTwo ? '−' : '+' }}
        </span>
      </div>

      <!-- Grandchildren under Group One -->
      <div v-if="openItems.groupTwo" class="pl-4 flex flex-col justify-start items-start mt-2 space-y-1 text-sm text-gray-700">
       
        <div>Left Sidebar</div>
        <div>Right Sidebar</div>
        <div>Full Width </div>
        
      </div>

      <div class="flex items-center cursor-pointer text-[13px]" @click="toggle('groupThree')">
         List Layout
        <span class="ml-auto text-xl">
          {{ openItems.groupThree ? '−' : '+' }}
        </span>
      </div>

      <!-- Grandchildren under Group One -->
      <div v-if="openItems.groupThree" class="pl-4 flex flex-col justify-start items-start mt-2 space-y-1 text-sm text-gray-700">
    
        <div>Left Sidebar</div>
        <div>Right Sidebar</div>
        <div>Full Width </div>
        
      </div>
  
    </div>
  </div>
</div>
<!--end blog-->


<div class=" flex flex-col  justify-start items-start space-y-2">
  <label for="language" class="text-xl font-[Serif]">Choose language</label>
  <select id="language" name="language"
    class="font-semibold font-[Arial] text-sm outline-2 outline-gray-900 w-[250px] h-[40px] rounded px-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
    <option value="en">English</option>
    
  </select>
</div>

<div class=" flex flex-col justify-start items-start space-y-2">
  <label for="language" class="text-xl font-[Serif]">Choose Currency</label>
  <select id="language" name="language"
    class="font-semibold font-[Arial] text-sm outline-2 outline-gray-900 w-[250px] h-[40px] rounded px-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
    <option value="en">USD</option>
    
  </select>
</div>


<div class=" flex flex-col  ">
       
        <ul class="flex flex-col p-5 justify-start font-[Aptos] text-[17px]  items-start text-gray-600 space-y-0 ">
        <li class="flex   items-center">
          <User/>&nbsp Login / Register</li>
        <li class="flex  items-center"><Phone/>&nbsp(1245) 2456 012</li>
        <li class="flex  items-center"><Mail/>&nbspinfo@yourdomain.com</li>
        
        </ul>
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
