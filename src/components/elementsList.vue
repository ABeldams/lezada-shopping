<script setup>
</script>
<template>
    <div class="px-[50px] py-5 grid h-[250px] grid-cols-5 gap-10 relative overflow-hidden">
        <div class="border-r  flex flex-col">
         <h3 class="font-semibold mb-2">
          Group One
         </h3>
         <ul class="space-y-3">
          <li>
            <li>
            <RouterLink :to="{name:'product-categories'}" class="text-gray-600 hover:text-black" >
                Product Categories

           </RouterLink>
          </li>
            
         
         
          </li>
          <li>
            <RouterLink :to="{name:'product-sliders'}" class="text-gray-600 hover:text-black" >
                Product SLiders

           </RouterLink>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Product Tabs
           
           </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Product Widget
            
           </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Recent Products
           </a>
          </li>
         </ul>
        </div>
        <div class="border-r">
         <h3 class="font-semibold mb-2">
          Group Two
         </h3>
         <ul class="space-y-3">
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
           
          Sale Products

           </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Featured products

           </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Top Rated products

           </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Best Selling
            
           </a>
          </li>

          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Product Attributes
           </a>
          </li>
         </ul>
        </div>
        <div class="border-r">
         <h3 class="font-semibold mb-2">
          Group Three
         </h3>
         <ul class="space-y-3">
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Blog Posts

           </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Mailchimp Form

           </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Icon Box

           </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Team Member
            
           </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            FAQs / Toggles
           </a>
          </li>
         </ul>
        </div>
        <div class="border-r">
         <h3 class="font-semibold mb-2">
          Group Four
         </h3>
         <ul class="space-y-3">
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Countdown Timer

           </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Buttons

           </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Testimonials
                      
          </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            
            Google Maps
           </a>
          </li>
         </ul>
        </div>
        <div>
            <img src="@/components/icons/menu-element.png"/>
        </div>
       </div>
  
</template>