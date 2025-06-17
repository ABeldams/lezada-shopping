<script setup>
import bgImage from '@/assets/images/01.jpg'

import { ref, onMounted, onUnmounted } from 'vue';
import { useAuthStore } from '@/store/productStore';

const productStore=useAuthStore()

productStore.login()


import { useCart } from '@/store/cart'; 
import { useWishlistStore } from '@/store/whishlistStore';
import Footers from '@/components/Footers.vue';
import Navbar_second from '@/components/navbar_second.vue';


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
<Navbar_second/>
<div class=" bg-gray-100 mt-[90px] p-10" :style="{ backgroundImage: `url(${bgImage})` }">
    <h1 class="sm:text-3xl md:text-6xl lg:text-6xl p-4  text-black">Featured Product</h1>
    <div class="flex space-y-0">
       
    <p class="text-xl p-4 text-gray-400 hover:text-black cursor-pointer">
    <RouterLink to="/" class="hover:text-black">Home /</RouterLink>
       </p>

        
    <p class="text-xl p-4" :class="active?'text-black':'text-gray-400'">Featured Product</p>
    </div>
</div>

<div class="mb-20 md:mb-32 lg:mb-40 mt-[50px]">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap">
      <div class="w-full">
        <!-- Section Title -->
        <div class="text-center">
          <h1 class="text-3xl md:text-4xl lg:text-5xl  mb-4">Featured products</h1>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">Browse our featured products to catch up with the trend.</p>
        </div>
        <!-- End of Section Title -->
      </div>
    </div>
  </div>
</div>



<div class="grid lg:grid-cols-4 gap-5 m-auto w-[90%] mt-[100px]">


<div class="w-full  m-auto " v-for="product in productStore.products">
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
      <a href="" class="  w-8 h-8 bg-white  flex items-center justify-center shadow-md hover:bg-gray-100" 
         title="Quick View">
        <i class="ion-ios-search-strong text-gray-700"></i>
      </a>
    </div>
  </div>

  <!-- Product Content -->
  <div class="mt-4">
    <div class="flex flex-col justify-center items-center text-center">
      <div>
        <h3 class="text-xl font-medium text-gray-900 opacity-100  group-hover:opacity-0 hover:text-blue-600 mb-1">
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

<Footers/>
</template>