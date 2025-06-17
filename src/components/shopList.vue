<script>
import { RouterLink } from 'vue-router';

export default{
    name:'shopList'
}
</script>
<template>
  
    <div class="py-[40px] px-[70px]  h-[350px] grid grid-cols-4 gap-10 relative overflow-hidden">
        <div class="border-r flex flex-col">
         <h3 class="font-semibold mb-2">
          Group One
         </h3>
         <ul class="space-y-3">
          <li>
           <RouterLink :to="{name:'left-sidebar'}" class="text-gray-600 hover:text-black" href="#">
            Left Sidebar
           </RouterLink>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Right Sidebar
           </a>
          </li>
          <li>
            <RouterLink :to="{name:'no-sidebar'}" class="text-gray-600 hover:text-black" href="#">
            No Sidebar
           </RouterLink>
          </li>
          <li>
            <RouterLink :to="{name:'fullwidth-no-space'}" class="text-gray-600 hover:text-black" href="#">
              Full Width No Space
           </RouterLink>
           
          
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            
           Full Width No Sidebar
           </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            
           Full Width Left Sidebar
           </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            
           Full Width Right Sidebar
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
            <RouterLink :to="{name:'product-basics'}" class="text-gray-600 hover:text-black" href="#">
              Full Width No Space
           </RouterLink>
           
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Full Width
           

           </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Full Width Right Thumb
           </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Sticky Details
           </a>
          </li>
          <li>
            <RouterLink :to="{name:'cart'}" class="text-gray-600 hover:text-black" href="#">
            Shopping Cart
           </RouterLink>
          </li>
          <li>
            <RouterLink :to="{name:'whishlist'}" class="text-gray-600 hover:text-black" href="#">
            Wishlist
           </RouterLink>
          </li>
          <li>
            <RouterLink :to="{name:'product-basics'}" class="text-gray-600 hover:text-black" href="#">
            basics
           </RouterLink>
          </li>
          
         </ul>
        </div>
        <div class="border-r">
         <h3 class="font-semibold mb-2">
          Shop Pages
         </h3>
         <ul class="space-y-3">
          <li>
            <RouterLink :to="{name:'checkout'}" class="text-gray-600 hover:text-black" >
            Checkout
           </RouterLink>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            Order Tracking

           </a>
          </li>
          <li>
           <a class="text-gray-600 hover:text-black" href="#">
            My Account

           </a>
          </li>
          <li>
           <RouterLink :to="{name:'Login-register'}" class="text-gray-600 hover:text-black" href="#">
            Login Register

           </RouterLink>
          </li>
         </ul>
        </div>
        
        <div>
            <img src="@/components/icons/megamenu-shop.png"/>
        </div>
       </div>
  
</template>