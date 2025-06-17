<script setup>
import { ref, onMounted } from 'vue';
import { useAuthStore } from '@/store/productStore';
import Grid_1 from '@/components/icons/Grid_1.vue';
import Grid_2 from '@/components/icons/Grid_2.vue';
import Grid_3 from '@/components/icons/Grid_3.vue';
import ProductCard from '@/components/pCard.vue';
import TopNavBar from '@/components/NavBar.vue';
import bgImage from '@/assets/images/background-heading-page.png'

import fallbackImages from '@/api/fallbackImages';
import ProductCardList from '@/components/ProductCardList.vue';
import Footers from '@/components/Footers.vue';
import { useRouter } from 'vue-router';
import { useCart } from '@/store/cart'; 
import { useWishlistStore } from '@/store/whishlistStore';
import Navbar_second from '@/components/navbar_second.vue';

const router = useRouter()

const active = ref(true);
const activeGrid = ref('grid_1');

const isOpen = ref(false);
const selectedOption = ref(null);

const productStore = useAuthStore();





const cartStore = useCart();
const wishlist = useWishlistStore();
const auth = useAuthStore();

onMounted(() => {
  productStore.fetchProducts();
});

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

const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

const items = ref([
  { title: 'grid_1', name: Grid_1 },
  { title: 'grid_2', name: Grid_2 },
  { title: 'grid_3', name: Grid_3 }
]);

const setActive = (itemValue) => {
  activeGrid.value = itemValue;
};

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option) => {
  selectedOption.value = option;
  isOpen.value = false;
};

const changePage = (page) => {
  if (page >= 1 && page <= productStore.totalPages) {
    productStore.fetchProducts(page)
  }
}

const goToProductDetail = (productId) => {
  router.push({ name: 'product-basic', params: { id: productId } })
}

</script>

<template>
  <Navbar_second/>

  <div class="bg-gray-200 mt-[90px] p-10" :style="{ backgroundImage: `url(${bgImage})` }">
    <h1 class="sm:text-3xl md:text-6xl lg:text-4xl p-4 text-black">Full width No Space</h1>
    <div class="flex space-y-0">
      <p class="text-md p-4 text-gray-400 hover:text-black cursor-pointer">
        <RouterLink to="/" class="hover:text-black">Home /</RouterLink>
      </p>
      <p class="text-md p-4" :class="active ? 'text-black' : 'text-gray-400'">Full width No Space</p>
    </div>
  </div>


  

  <div class="bg-white p-4 border-b-2 border-gray-400  w-full flex justify-between">
    <h1>Showing page {{  productStore.currentPage}} of {{productStore.totalPages}}  pages </h1>

    <div class="flex">
      <!-- Dropdown -->
      <div class="relative w-48">
        <button @click="toggleDropdown" class="w-full text-left text-gray-500 bg-white border-b border-gray-300 px-4 py-2 flex justify-between items-center focus:outline-none">
          {{ selectedOption || "Default" }}
          <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>

        <div v-if="isOpen" class="absolute w-full mt-1 bg-white border border-gray-300 shadow-lg rounded-md">
          <ul class="text-gray-700">
            <li v-for="option in options" :key="option" @click="selectOption(option)" class="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              {{ option }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Grid Mode Selector -->
      <div class="flex">
        <ul class="flex">
          <li v-for="item in items" :key="item.title">
            <component 
              :is="item.name" 
              :class="activeGrid === item.title ? 'text-gray-900' : 'text-gray-400'"
              @click="setActive(item.title)" 
              class="cursor-pointer "
            />
          </li>
        </ul>
      </div>
    </div>
  </div>

 
  



  <div v-if="activeGrid=='grid_1'" :class="activeGrid=='grid_1'?'grid  lg:grid-cols-3  w-full m mt-[100px]':''">
   
   <div class="w-[100%] m-auto   " v-for="product in productStore.products">
   <div class="relative group">
     <!-- Product Image -->
     <div class="relative overflow-hidden">
       <a href="" class="block">
         <!-- Main Image (hover will be handled with JS) -->
         <img :src="product.image" 
              class="w-full h-[400px] transition-opacity duration-300 group-hover:opacity-0" 
              alt="Light Brown Watch">
         <!-- Hover Image -->
         <img :src="product.hover_image" 
              class="w-full h-[400px] absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
              alt="Light Brown Watch - Alternate View">
       </a>
 
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
   <div v-else-if="activeGrid=='grid_2'" :class="activeGrid=='grid_2'?'grid lg:grid-cols-4  w-full  mt-[100px]':''">
     
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
