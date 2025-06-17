<script setup>
import Footers from '@/components/Footers.vue';
import Lookbooknav from '@/components/lookbooknav.vue';
import TopNavBar from '@/components/NavBar.vue';
import Navbar_second from '@/components/navbar_second.vue';


</script>

<template>

<Navbar_second class="bg-transparent"/>
    <div class="sticky top-0">
        <h1 class="absolute text-md font-semibold left-[200px] top-[150px]  text-white">#NEW #COLLECTION #MEN</h1>
        <img src="@/assets/images/parallax-bg/bg-parallax-1.jpg" 
        
        class=" object-cover"/>
        <h1 class="text-7xl text-white absolute top-[300px] left-[100px]">Spring Favorites</h1>
    </div>

    <div class="sticky top-0">
        <h1 class="absolute text-md font-semibold  right-[300px] top-[150px]  text-gray-900">#BEACHWEAR #SUMMER</h1>
        <img src="@/assets/images/parallax-bg/bg-parallax-2.jpg" 
        
        class=" object-cover h-[100%]"/>
        <h1 class="text-7xl text-gray-900 absolute top-[200px] right-[100px]">Spring Favorites</h1>
    </div>

    <div class="sticky top-0">
        <h1 class="absolute text-xl font-semibold   right-[500px] top-[250px]  text-white">#NEW #COLLECTION #WOMEN</h1>
        <img src="@/assets/images/parallax-bg/bg-parallax-3.jpg" 
        
        class="object-cover"/>
        <h1 class="text-7xl text-white absolute top-[300px] right-[300px]">Women's new arrivals</h1>
    </div>

    <div class="sticky top-0 ">
        <h1 class="absolute text-xl font-semibold left-[200px] top-[200px]  text-black">#ACCESSORIES</h1>
        <img src="@/assets/images/parallax-bg/bg-parallax-4.jpg" 
        
        class=" "/>
        <h1 class="text-7xl text-black absolute top-[300px] left-[100px]">Find your style</h1>
    </div>



<div class="sticky top-0">
    <div class="flex bg-white justify-between p-5 ">
    <div class="flex-col    border-r-2 border-l-0 border-t-0 border-b-0 p-5 ">
        <h1 class="text-center text-gray-700 text-md font-semibold">FREE SHIPPING</h1>
        <p class="text-center font-sans font-semibold text-gray-500"> On all orders over $75.00</p>

    </div>

    <div class="flex-col  border-r-2 border-l-0 border-t-0 border-b-0 p-5">
        <h1 class="text-center text-gray-700 text-md font-semibold">FREE  RETURNS</h1>
        <p class="text-center font-sans font-semibold text-gray-500"> 30 days money back guarantee</p>

    </div>

    <div class="flex-col   p-5">
        <h1 class="text-center text-gray-700 text-md font-semibold">FREE SHIPPING</h1>
        <img src="@/assets/images/icons/pay.png" 
        class="text-center font-sans font-semibold text-gray-500"/> 

    </div>
</div>
<Footers/>
</div>
</template>