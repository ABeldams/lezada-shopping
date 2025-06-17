<script setup>
import bgImage from '@/assets/images/01.jpg'



import { ref, onMounted } from 'vue';
import { useAuthStore } from '@/store/productStore';
import { useCart } from '@/store/cart'; 
import { useWishlistStore } from '@/store/whishlistStore';
import Footers from '@/components/Footers.vue';



const productStore = useAuthStore();





const cartStore = useCart();
const wishlist = useWishlistStore();
const auth = useAuthStore();


const handleAddToCart = async (productId) => {
  if (!auth.token) {
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
  if (!auth.token) {
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


productStore.login();

onMounted(() => {
  productStore.fetchProducts();
});

const changePage = (page) => {
  if (page >= 1 && page <= productStore.totalPages) {
    productStore.fetchProducts(page)
  }
}


</script>

<template>

<div class=" bg-gray-100 mt-[90px] p-10" :style="{ backgroundImage: `url(${bgImage})` }">
    <h1 class="sm:text-3xl md:text-6xl lg:text-6xl p-4  text-black">Product Sliders</h1>
    <div class="flex space-y-0">
       
    <p class="text-xl p-4 text-gray-400 hover:text-black cursor-pointer">
    <RouterLink to="/" class="hover:text-black">Home /</RouterLink>
       </p>

        
    <p class="text-xl p-4" :class="active?'text-black':'text-gray-400'">Product Sliders</p>
    </div>
</div>

<div class="text-center mt-[100px]">
    <h1 class="text-5xl">Carousel of products</h1>
    <p class="text-md">This is where to find your satisfactory products</p>
</div>


<div class="grid lg:grid-cols-4 gap-4 w-[90%] m-auto mt-[100px]">
     
     <div class="w-[100%]   " v-for="product in productStore.products">
   <div class="relative group">
     <!-- Product Image -->
     <div class="relative overflow-hidden">
       <a href="" class="block">
         <!-- Main Image (hover will be handled with JS) -->
         <img :src="product.image" 
              class="w-full h-[350px] transition-opacity duration-300 group-hover:opacity-0" 
              alt="Light Brown Watch">
         <!-- Hover Image -->
         <img :src="product.hover_image" 
              class="w-full h-[350px] absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
              alt="Light Brown Watch - Alternate View">
       </a>
 
       <!-- Sale Badge -->
       <div class="absolute top-7 left-3 ">
         <span class="bg-blue-500 text-white   text-xs font-bold px-2 py-4 rounded-full">-10%</span>
       </div>
 
       <!-- Product Actions -->
       <div class="absolute right-3 top-3 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
         <!-- Wishlist -->
         <button @click="addToWishlist(product.id)" class=" w-8 h-8 bg-white  flex items-center justify-center shadow-md hover:bg-gray-100" 
            title="Add to wishlist">
           <i class="ion-android-favorite-outline text-gray-700"></i>
         </button>
         <!-- Compare -->
         <button class="w-8 h-8 bg-white  flex items-center justify-center shadow-md hover:bg-gray-100" 
            title="Compare">
           <i class="ion-ios-shuffle-strong text-gray-700"></i>
         </button>
         <!-- Quick View -->
         <button class="  w-8 h-8 bg-white  flex items-center justify-center shadow-md hover:bg-gray-100" 
            title="Quick View">
           <i class="ion-ios-search-strong text-gray-700"></i>
         </button>
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

   <div class="flex justify-center  space-x-2">
      <button
        v-for="page in productStore.totalPages"
        :key="page"
        @click="changePage(page)"
        class="px-2 font-semibold text-md"
        :class="{ ' text-gray-800  border-b-2 border-gray-800': productStore.currentPage === page, 'text-gray-400 border-b-2 border-transparent': productStore.currentPage !== page }"
      >
        {{ page }}
      </button>
    </div>

    <Footers/>
</template>