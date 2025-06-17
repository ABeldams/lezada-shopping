<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import 'slick-carousel'; 

import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Twitter from './icons/twitter.vue';
import Facebook from './icons/facebook.vue';
import Instagram from './instagram.vue';
import Youtube from './icons/youtube.vue';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel";
import TopNavBar from './TopNavBar.vue';
import Navbar from './NavBar.vue';
import { useAuthStore } from '@/store/productStore';

const productStore=useAuthStore()
const slider = ref(null);

productStore.login()
const changePage = (page,itemname) => {
  active.value=itemname
  if (page >= 1 && page <= productStore.totalPages) {
    productStore.fetchProducts(page)
  }
}


const slides = [
  {
    image: new URL("@/assets/images/slider/banner-carousel-1.jpg", import.meta.url).href,
    category: "Accessories",
    title: "Bottle Grinder",
    subTitle:"Small, 2-Piece",
    colorClass: "blue"
  },
  {
    image: new URL("@/assets/images/slider/banner-carousel-2.jpg", import.meta.url).href,
    category: "Handmade",
    title: "Large Food Board",
    colorClass: "brown"
  },
  {
    image: new URL("@/assets/images/slider/banner-carousel-3.jpg", import.meta.url).href,
    category: "Decor",
    title: "Tribeca Hubert Pendant",
    colorClass: "green"
  }
];

const active=ref('New')
 const items=[
  {
  id:1,
  name:'New'
  },
  {
  id:2,
  name:'Popular'
  },
  {
  id:3,
  name:'Sale'
  }
]


import { useCart } from '@/store/cart'; 
import { useWishlistStore } from '@/store/whishlistStore';


const cartStore = useCart();
const wishlist = useWishlistStore();

onMounted(() => {
  productStore.fetchProducts();
});

const handleAddToCart = async (productId) => {
  if (!productStore.token) {
    console.warn("You must be logged in to add to cart.");
    return;
  }

  try {
    await cartStore.addToCart(productId); // API-based add using product ID
    console.log('Product added to cart:', productId);
  } catch (err) {
    console.error('Error adding to cart:', err);
  }
};

const addToWishlist = async (productId) => {
  if (!productStore.token) {
    console.warn("You must be logged in to add to wishlist.");
    return;
  }

  try {
    await wishlist.addToWishlist(productId);
    console.log(`Product ${productId} added to wishlist`);
  } catch (err) {
    console.error('Error adding to wishlist:', err);
  }
};

</script>

<template>  
<Navbar/>



<Swiper
  :modules="[Pagination, Navigation, Autoplay]"
  :slides-per-view="1"
  :space-between="20"
  :loop="true"
  :autoplay="{ delay: 3000, disableOnInteraction: false }"
  :pagination="false"
  :navigation="true"
  class="w-full h-[500px] sm:h-[400px] md:h-[500px] lg:h-[600px] relative"
>
  <SwiperSlide
    v-for="(slide, index) in slides"
    :key="index"
    class="relative w-full h-full flex items-center justify-center"
  >
    <!-- Background Image -->
    <img
      :src="slide.image"
      class="w-[90%] m-auto h-full object-cover"
      :alt="slide.title"
    />

    <!-- Overlay Content -->
    <div class="absolute left-10 inset-0 flex flex-col justify-center px-6 sm:px-10 md:px-20 text-left space-y-4">
      <h1 class="text-xl sm:text-2xl md:text-2xl font-semibold" :style="`color:${slide.colorClass}`">
        {{ slide.category }}
      </h1>
      <h2 class="text-2xl sm:text-2xl md:text-4xl font-semibold text-black">
        {{ slide.title }}
      </h2>
      <button
        class="bg-black text-white w-fit px-6 py-2 mt-4 text-sm sm:text-base hover:bg-gray-800 transition"
      >
        SHOP NOW
      </button>
    </div>
  </SwiperSlide>
</Swiper>


  <div class="">
    <ul class="flex flex-row justify-center text-center space-x-5 mt-[100px]">
      <li  v-for="item in items" :class="active==item.name?'text-5xl text-black cursor-pointer':'text-5xl text-gray-400 cursor-pointer'" 
      @click="changePage(item.id,item.name)">{{ item.name }}</li>   
      
    </ul>
   
     <!-- <ProductsList/>-->
      
      
      <!--<ProductList/>-->

     
  </div>


  <div class="grid lg:grid-cols-3 gap-0 m-auto w-[90%] mt-[100px]">


  <div class="w-[90%]  m-auto " v-for="product in productStore.products">
  <div class="relative group">
    <!-- Product Image -->
    <div class="relative overflow-hidden">
      <div class="block">
        <!-- Main Image (hover will be handled with JS) -->
        <img :src="product.image" 
             class="w-full h-[400px] transition-opacity duration-300 group-hover:opacity-0" 
             alt="Light Brown Watch">
        <!-- Hover Image -->
        <img :src="product.hover_image" 
             class="w-full h-[400px] absolute top-0 left-0 opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300" 
             alt="Light Brown Watch - Alternate View">
      </div>

      <!-- Sale Badge -->
      <div class="absolute top-10 left-3 ">
        <span class="bg-blue-500 text-white   text-xs font-bold px-3 py-5 rounded-full">-10%</span>
      </div>

      <!-- Product Actions -->
      <div class="absolute right-3 top-3 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <!-- Wishlist -->
        <button @click="addToWishlist(product.id)" class=" w-8 h-8 bg-white  flex items-center justify-center shadow-md hover:bg-gray-100" 
           title="Add to wishlist">
          <i class="ion-android-favorite-outline text-gray-700"></i>
        </button>
        <!-- Compare -->
        <a href="#" class="w-8 h-8 bg-white  flex items-center justify-center shadow-md hover:bg-gray-100" 
           title="Compare">
          <i class="ion-ios-shuffle-strong text-gray-700"></i>
        </a>
        <!-- Quick View -->
        <a href="#qv-1" class="  w-8 h-8 bg-white  flex items-center justify-center shadow-md hover:bg-gray-100" 
           title="Quick View">
          <i class="ion-ios-search-strong text-gray-700"></i>
        </a>
      </div>
    </div>

    <!-- Product Content -->
    <div class="mt-4">
      <div class="flex flex-col justify-center items-center text-center">
        <div>
          <h3 class="text-sm font-medium text-gray-900 opacity-100  group-hover:opacity-0 hover:text-blue-600 mb-1">
            <a href="">{{ product.name }}</a>
            
          </h3>
          <button @click="handleAddToCart(product.id)" class="mt-0 inline-block font-semibold text-md opacity-0 text-red-600  group-hover:opacity-100 
            group-hover:visible group-hover:transition-all group-duration-[600ms]">
           Add to cart
          </button>
        </div>
        <div class="text-right">
          <span class="text-sm font-medium text-gray-900">${{ product.price }}</span>
        </div>
      </div>
      
    </div>
  </div>
</div>



  </div>

<div class="flex flex-col justify-center items-center space-y-5 mt-[50px]">
  <div>
    <img src="@/components/icons/cabinet.jpg" class="" >
    
  </div>
  <ul class="flex space-x-5  text-xl text-gray-500">
    <li>#summer</li>
    <li>#shelf</li>
    <li>#sale</li>
  </ul>
 <p class="text-4xl text-gray-900 text-center   ">Up To 40% Off Final Sale Items. Caught in</p>
 <p class="text-4xl text-gray-900 "> the moment!</p>
 <button class="bg-gray-900 text-white font-semibold text-center p-2 w-[170px] h-10 ">SHOP NOW</button>
</div>



<div class="w-full mt-[100px] h-auto bg-[#f8f8f8] p-10">
<div class="flex flex-col md:space-y-5 md:flex-row lg:flex-row  justify-between p-5 m  ">
<div class="flex flex-col space-y-5">  
  <ul class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-8 text-sm text-gray-500">
  <li>ABOUT US</li>
  <li>STORE LOCATION</li>
  <li>CONTACT</li>
  <li>SUPPORT</li>
  <li>POLICY</li>
  <li>FAQS</li>
</ul>
<p>lezada. All Rights Reserved | (+00) 123 567990 | contact@lezada.com</p>
</div>


<div class="flex flex-col space-y-5">  
<ul  class="flex space-x-10 text-md text-gray-500">
  <li><Twitter/></li>
  <li><Facebook/></li>
  <li><Instagram/></li>
  <li><Youtube/></li>
  

</ul>
<img src="./icons/visa.png" class="w-[200px]"/>
</div>
</div>
</div>
</template>
<style scoped>
.m{
  @media screen and (max-width:950px) {
    display: flex;
    flex-direction: column;
    
    
  }

 
}
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: rgba(0, 0, 0, 0.5);
 margin-left: 70px;
 margin-right: 70px;
 opacity: 0;
}


:deep(.swiper-button-prev):hover {
 opacity: 1;
}
:deep(.swiper-button-next):hover {
 opacity: 1;
}
</style>