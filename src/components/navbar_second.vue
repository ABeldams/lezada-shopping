<script setup>
import CartOverlay from './CartOverlay.vue';
import ElementsList from './elementsList.vue';
import Hamburger from './hamburger.vue';
import Hamurger_second from './Hamurger_second.vue';
import HomeList from './homeList.vue';
import DownArrow from './icons/DownArrow.vue';
import ForwardArrow from './icons/forwardArrow.vue';
import User from './icons/User.vue';
import Search from './Search.vue';
import ShopList from './shopList.vue';
import SingleCart from './SingleCart.vue';
import WhishList from './whishList.vue';
import WhishlistOverlay from './WhishlistOverlay.vue';


</script>

<template>
<header class="bg-white shadow-sm fixed top-0 z-50 w-full">
 
 <!-- Main Header -->
 <div class="py-5">
    
   <div class="container mx-auto px-4 flex items-center justify-between">
     <!-- Logo -->
      <!-- Mobile Menu Button -->
      <button class=" ">
         <Hamurger_second class=""/>
       </button>

     <a href="/" class="flex-shrink-0 sm:justify-start md:justify-start" >
       <img src="./icons/lezada_logo.png" alt="Lezada Logo" class="h-5" width="142" height="30">
     </a>
     
     <nav class="hidden md:flex space-x-8 nav">
       <div class="relative group">
         <button class="text-gray-800 hover:text-gray-900 flex items-center">
           Home
           <span class="absolute bottom-0 left-0 w-0 h-[1px] bg-gray-900 
              transition-all duration-300 group-hover:w-[40px]"></span>
           <DownArrow class="group-hover:text-gray-900"/>
         </button>
         <div class="absolute transition-all duration-[700ms] transform translate-y-[80px] ease-in-out mt-5  md:w-[900px] md:left-[-230px] lg:w-[1180px] lg:left-[-450px] 
           bg-white shadow-lg  py-1 z-50 opacity-0 invisible 
            
             group-hover:opacity-100 group-hover:visible group-hover:translate-y-4 n">
  
         <HomeList/>
  
</div>

       </div>

       <div class="relative group">
         <button class="text-gray-800 flex items-center">
           Shop
           <span class="absolute bottom-0 left-0 w-0 h-[1px] bg-gray-900 
              transition-all duration-300 group-hover:w-[40px]"></span>
           <DownArrow class="group-hover:text-gray-900"/>
         </button>
         <div class="absolute duration-[800ms] transform translate-y-[80px] ease-in-out m lg:w-[1150px] lg:left-[-540px] mt-2   bg-white 
         shadow-lg   z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-4 ">
           <ShopList/>
      
         </div>
       </div>


       <div class="relative group">
         <button class="text-gray-500 hover:text-gray-900   flex items-center">
           Element
           <span class="absolute bottom-0 left-0 w-0 h-[1px] bg-gray-900 
              transition-all duration-300 group-hover:w-[60px]"></span>
           <DownArrow class="group-hover:text-gray-900"/>
         </button>
         <div class="absolute duration-[800ms] transform translate-y-[80px] ease-in-out  l w-[1200px] left-[-650px] mt-2  bg-white shadow-lg  z-50 opacity-0 invisible
          group-hover:opacity-100 group-hover:visible group-hover:translate-y-4">
           <ElementsList/>
      
         </div>
       </div>
       <div class="relative group">
         <button class="text-gray-500 hover:text-gray-900   flex items-center">
           Pages
           <span class="absolute bottom-0 left-0 w-0 h-[1px] bg-gray-900 
              transition-all duration-300 group-hover:w-[40px]"></span>
           <DownArrow class="group-hover:text-gray-900"/>
         </button>
         <div class="absolute  transition-all duration-[800ms] ease-in-out translate-y-[80px] w-[250px] left-[-100px] mt-2 h-[270px]  bg-white shadow-lg  py-1 z-50 opacity-0 invisible 
         group-hover:opacity-100 group-hover:visible group-hover:translate-y-4">
           <div class="flex-col  space-y-[-5px] p-5 text-gray-500 cursor-pointer">
             <h1 class=""><RouterLink :to="{name:'about-us'}">About us</RouterLink></h1>
             <h1><RouterLink :to="{name:'about-us-two'}"> About us two</RouterLink></h1>
             <h1>Contact Us</h1>
             <h1>FAQS</h1>
             <h1>Coming Soon</h1>
             <h1>Not Found</h1>

           </div>
      
         </div>
       </div>


       

       <div class="relative group">
         <button class="text-[#7e7e7e]   flex items-center hover:text-gray-900">
           Blog
           <span class="absolute bottom-0 left-0 w-0 h-[1px] bg-gray-900 
              transition-all duration-300 group-hover:w-[40px]"></span>
           <DownArrow />
         </button>
         <div class="absolute transition-all duration-[800ms] ease-in-out translate-y-[80px] w-[250px] left-[-100px] mt-2 h-[200px]  bg-white shadow-lg  py-1 z-50 opacity-0 invisible 
         group-hover:opacity-100 group-hover:visible group-hover:translate-y-4">
         
           <div class="flex-col  space-y-0 p-5 text-gray-500 cursor-pointer">
            
             <h1 class="flex  relative group/inner ">Standard Layout
              <span class="absolute bottom-2 left-0 w-0 h-[1px] bg-gray-200 
              transition-all duration-300 group-hover/inner:w-[130px]"></span>
              <ForwardArrow class="absolute left-[150px] top-4"/>
               <div class="absolute transition-all duration-[800ms] ease-in-out translate-y-[50px] 
               w-[200px] top-0  space-y-0 shadow-md bg-white left-[170px] h-[150px] p-5 z-50 opacity-0 invisible 
               group-hover/inner:opacity-100 group-hover/inner:visible group-hover/inner:translate-y-1
               ">
                 <h1><RouterLink :to="{name:'blog-standard-left-sidebar'}">Left Sidebar </RouterLink></h1>
                 <h1><RouterLink :to="{name:'blog-standard-right-sidebar'}">Right Sidebar</RouterLink></h1>
                 <h1><RouterLink :to="{name:'blog-standard-full-width'}">Full Width</RouterLink></h1>
               </div>
             </h1>
             
             
             <h1 class="flex  relative group/inner">Grid Layout
              <span class="absolute bottom-2 left-0 w-0 h-[1px] bg-gray-200 
              transition-all duration-300 group-hover/inner:w-[130px]"></span>
              <ForwardArrow class="absolute left-[150px] top-4"/>
               <div class="absolute transition-all duration-[800ms] ease-in-out translate-y-[50px] w-[200px] top-1 space-y-0 shadow-md bg-white left-[170px]  p-5 z-50 opacity-0 
               invisible group-hover/inner:opacity-100 group-hover/inner:visible group-hover/inner:translate-y-[-20px]">
                 <h1><RouterLink :to="{name:'blog-grid-left-sidebar'}">Left Sidebar</RouterLink></h1>
                 <h1><RouterLink :to="{name:'blog-grid-right-sidebar'}">Right Sidebar</RouterLink></h1>
                 <h1><RouterLink :to="{name:'blog-grid-full-width'}">Full Width</RouterLink></h1>
               </div>
             </h1>
             
             <h1 class="flex relative group/inner">List Layout
              <span class="absolute bottom-2 left-0 w-0 h-[1px] bg-gray-200 
              transition-all duration-300 group-hover/inner:w-[130px]"></span>
              <ForwardArrow class="absolute left-[150px] top-4"/>
              <div class="absolute transition-all duration-[800ms] ease-in-out translate-y-[50px] w-[200px] top-1 space-y-0 shadow-md bg-white left-[170px]  p-5 z-50 opacity-0 
               invisible group-hover/inner:opacity-100 group-hover/inner:visible group-hover/inner:translate-y-[-10px]">
                 <h1><RouterLink :to="{name:'blog-list-left-sidebar'}">Left Sidebar</RouterLink></h1>
                 <h1><RouterLink :to="{name:'blog-list-right-sidebar'}">Right Sidebar</RouterLink></h1>
                 <h1><RouterLink :to="{name:'blog-list-full-width'}">Full Width</RouterLink></h1>
               </div>
             </h1>
             
             
           </div>
      
         </div>
       </div>
     </nav>
     
     <!-- Right Icons -->
     <div class="flex items-center space-x-6">
       <!-- Search (hidden on mobile) -->
       <button class="hidden nav md:block text-gray-800 hover:text-amber-700">
         <Search/>
       </button>
       <div>
    <RouterLink :to="{ name: 'Login-register'}">
      <User class="nav"/>
    </RouterLink>
       </div>

         <div>
            <WhishList/>
            <WhishlistOverlay/>
         </div> 
         
         <div>
            <SingleCart/>
            <CartOverlay/>
         </div>

       
       <!-- Mobile Menu Button -->
       <button class="md:hidden  na">
         <Hamburger/>
       </button>
     </div>
   </div>
 </div>
</header>

</template>
<style scoped>
.nav{
  @media screen  and (max-width:990px){
    visibility: hidden;
  }
}
.na{
  @media screen  and (max-width:990px){
    display: block;
  }
}

.n{
  @media screen  and (max-width:1115px){
    max-width:1000px;
   left: -330px;

  }

  @media screen  and (max-width:1010px){
    max-width:900px;
   left: -250px;
   

  }
}

.m{
  @media screen  and (max-width:1115px){
    max-width:1000px;
   left: -420px;

  }

  @media screen  and (max-width:1021px){
    width:900px;
   left: -340px;
   

  }
}

.l{
  @media screen  and (max-width:1115px){
    max-width:1000px;
   left: -510px;

  }

  @media screen  and (max-width:1010px){
    max-width:900px;
   left: -430px;
   

  }
}

</style>