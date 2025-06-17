<script setup>
import { ref, onMounted } from 'vue';
import { useAuthStore } from '@/store/productStore';
import Grid_1 from '@/components/icons/Grid_1.vue';
import Grid_2 from '@/components/icons/Grid_2.vue';
import Grid_3 from '@/components/icons/Grid_3.vue';
import TopNavBar from '@/components/NavBar.vue';

import Footers from '@/components/Footers.vue';
import Search from '@/components/icons/Search.vue';
import bgImage from '@/assets/images/background-heading-page.png'

const active = ref(true);
const activeGrid = ref('grid_1');
const activeItem = ref('All Categories');
import { useRouter } from 'vue-router'
import { useCart } from '@/store/cart'; 
import { useWishlistStore } from '@/store/whishlistStore';
import Navbar_second from '@/components/navbar_second.vue';
import Filter from '@/components/icons/filter.vue';

const router = useRouter()



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


const goToProductDetail = (productId) => {
  router.push({ name: 'product-basic', params: { id: productId } })
}

const isOpen = ref(false);
const selectedOption = ref(null);

const productStore = useAuthStore();
productStore.login();


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
const Categories=['All Categories','Fashion','Home & Living','Electronics','Cosmetics','Furniture','Perfumes'];
const setActiveItem = (itemValue) => {
  activeItem.value = itemValue;
  if (itemValue === 'All Categories') {
    productStore.fetchProducts();
  } else {
    productStore.getProductsByCategory(itemValue.toLowerCase());
  }
};


const open = () => {
  isOpen.value = true;
};

const close = () => {
  isOpen.value = false;
};

const isModalOpen = ref(false)

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value
}
</script>

<template>
  <Navbar_second />

  <div class="bg-gray-200 mt-[90px] p-10" :style="{ backgroundImage: `url(${bgImage})` }">
    <h1 class="sm:text-3xl md:text-6xl lg:text-4xl p-4 text-black">Shop No Sidebar</h1>
    <div class="flex space-y-0">
      <p class="text-md p-4 text-gray-400 hover:text-black cursor-pointer">
        <RouterLink to="/" class="hover:text-black">Home /</RouterLink>
      </p>
      <p class="text-md p-4" :class="active ? 'text-black' : 'text-gray-400'">Shop Left Sidebar</p>
    </div>
  </div>

  <div class="bg-white p-4 border-b-2 border-gray-400  w-full flex justify-between">
    <h1>Showing page {{  productStore.currentPage}} of {{productStore.totalPages}}  pages </h1>

    <div class="flex space-x-5">
      <!-- Dropdown -->
      <div class="relative w-48">
        <button @click="toggleDropdown" class="w-full text-left text-gray-500 bg-white border-b border-gray-300 px-4 py-2 flex justify-between items-center focus:outline-none">
          {{ selectedOption || "Default" }}
          <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>

        <div v-if="isOpen" class="absolute w-full mt-1  bg-white border border-gray-300 shadow-lg rounded-md">
          <ul class="text-gray-700">
            <li v-for="option in options" :key="option" @click="selectOption(option)" class="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              {{ option }}
            </li>
          </ul>
        </div>
      </div>

      
      <div class="flex">
        <ul class="flex justify-between items-center space-x-5">
          <li v-for="item in items" :key="item.title">
            <component 
              :is="item.name" 
              :class="activeGrid === item.title ? 'text-gray-900' : 'text-gray-400'"
              @click="setActive(item.title)" 
              class="cursor-pointer m"
            />
          </li>
          <div class="flex relative group items-center cursor-pointer">
            <Filter  @click="toggleModal"/>Filter
            <span class="absolute left-0  bottom-0 top-5 w-0 h-[1px] bg-gray-900 transition-all  duration-300
            group-hover:w-full"></span>
          </div>
          
        </ul>
      
      
        <!--<div class="relative group">
        <button @click="open">hello</button>
        <div v-show="isOpen" class="w-full bg-red  opacity-0 hidden group-hover:visible group-hover:opacity-100"></div>
      </div>-->
        
      
      </div>
    </div>
  </div>

  
  <div class="bg-gray-100 py-8 transition-opacity duration-[3000ms] transform " v-if="isModalOpen">
  <div class="container mx-auto px-4" :class="isModalOpen? ' ease-in':' ease-out'">
    <div class="grid  -mx-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-full px-2 mb-8">
        <div class="mb-4">
          <h3 class="text-2xl font-medium mb-3">Categories</h3>
         
          <ul class="flex px-4 py-2 " v-for="item in Categories" :key="id" >
        <li class="text-md font-semibold" :class="activeItem==item? 'text-gray-800  cursor-pointer':'border-b-transparent text-gray-400 cursor-pointer'"
        @click="setActiveItem(item)">{{ item }}</li>
    </ul>
        </div>
      </div>





      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-full px-2 mb-8">
        <div class="mb-4">
          <h3 class="text-2xl font-medium mb-3">Colors</h3>
          <div class="flex flex-wrap gap-2">
            <a href="#" class="w-8 h-8 rounded-full bg-black border-2 border-gray-300 hover:border-gray-900 active-color" 
               title="Black"></a>
            <a href="#" class="w-8 h-8 rounded-full bg-blue-600 border-2 border-gray-300 hover:border-gray-900" 
               title="Blue"></a>
           
            <a href="#" class="w-8 h-8 rounded-full bg-yellow-500 border-2 border-gray-300 hover:border-gray-900" 
               title="Gold"></a>
           
            <a href="#" class="w-8 h-8 rounded-full bg-white border-2 border-gray-300 hover:border-gray-900" 
               title="White"></a>
          </div>
        </div>
      </div>

      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-8">
        <div class="mb-4">
          <h3 class="text-2xl font-medium mb-3">Sizes</h3>
          <ul class="space-y-2">
            <li class="flex justify-between items-center">
              <a href="#" class="text-gray-600 hover:text-gray-900">L</a>
            
            </li>
            <li class="flex justify-between items-center">
              <a href="#" class="text-gray-600 hover:text-gray-900">M</a>
            
            </li>
            <li class="flex justify-between items-center">
              <a href="#" class="text-gray-600 hover:text-gray-900">S</a>
                       </li>
            <li class="flex justify-between items-center">
              <a href="#" class="text-gray-600 hover:text-gray-900">XS</a>
           
            </li>
          </ul>
        </div>
      </div>

      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-full px-2 mb-8">
        <div class="mb-4">
          <h3 class="text-lg font-medium mb-3">Tags</h3>
          <div class="space-y-0 flex flex-col">
            <h1>decor/ fashion/ men/ women/</h1>
            <h1>decor/ fashion/ men/ women/</h1>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</div>





  <div class="w-full max-w-[1440px] mx-auto flex flex-col-reverse lg:flex-row gap-8 mt-[70px] px-4 sm:px-6 md:px-8 lg:px-10 py-10">
 
<div class="px-4">
     <div class="relative flex m-4 ">
    <input type="search" class="border-b-2 w-[250px] justify-start items-start border-gray-400 border-t-0 border-l-0 border-r-0 p-2 mt-10" placeholder="Search products..."/>
    <Search class="absolute left-[230px] top-6"/>
    </div>
    <h1 class="text-xl p-4">Categories</h1>
    <ul class="flex px-4 py-2 " v-for="item in Categories" :key="id" >
        <li class="text-md font-semibold" :class="activeItem==item? 'text-gray-800 border-b-2 border-gray-800 cursor-pointer':'border-b-transparent text-gray-400 cursor-pointer'"
        @click="setActiveItem(item)">{{ item }}</li>
    </ul>


    <!-- Color Filter -->
    <div class="w-full mt-[70px]">
        <div class="">
          <h3 class="text-lg font-medium mb-3">Color</h3>
          <div class="flex  space-x-5">
            <a href="#" class="w-7 h-7 rounded-full bg-black   hover:border-gray-900 active-color" 
               title="Black"></a>
            <a href="#" class="w-7 h-7 rounded-full bg-blue-600   hover:border-gray-900" 
               title="Blue"></a>
            <a href="#" class="w-7 h-7 rounded-full bg-amber-800   hover:border-gray-900" 
               title="Brown"></a>

               <a href="" class="w-7 h-7 rounded-full bg-gray-200 text-center " 
               title="Brown">X</a>
            
          </div>
        </div>
      </div>


  <!-- Popular Products Widget -->
  <div class="mt-[100px]">
    <h3 class="text-lg font-medium mb-3">Popular products</h3>
    <div class="space-y-4">
      <!-- Product 1 -->
      <div class="flex space-x-3">
        <div class="flex-shrink-0">
          <a href="shop-product-basic.html">
            <img src="@/assets/images/products/product-furniture-2-100x100.jpg" class="w-16 h-16 object-cover rounded" alt="Wooden Table">
          </a>
        </div>
        <div>
          <h4 class="text-sm font-medium"><a href="shop-product-basic.html" class="text-gray-800 hover:text-blue-600">Wooden Table</a></h4>
          <div class="flex items-center space-x-2">
            <span class="text-sm text-gray-500 line-through">$270.00</span>
            <span class="text-sm font-medium text-blue-600">$220.00</span>
          </div>
          <div class="flex text-yellow-400 text-xs mt-1">
            <i class="ion-android-star"></i>
            <i class="ion-android-star"></i>
            <i class="ion-android-star-outline"></i>
            <i class="ion-android-star-outline"></i>
            <i class="ion-android-star-outline"></i>
          </div>
        </div>
      </div>
      
      <!-- Product 2 -->
      <div class="flex space-x-3">
        <div class="flex-shrink-0">
          <a href="shop-product-basic.html">
            <img src="@/assets/images/products/product-furniture-11-100x100.jpg" class="w-16 h-16 object-cover rounded" alt="Sofa with cushion">
          </a>
        </div>
        <div>
          <h4 class="text-sm font-medium"><a href="shop-product-basic.html" class="text-gray-800 hover:text-blue-600">Sofa with cushion</a></h4>
          <div class="flex items-center space-x-2">
            <span class="text-sm text-gray-500 line-through">$660.00</span>
            <span class="text-sm font-medium text-blue-600">$600.00</span>
          </div>
          <div class="flex text-yellow-400 text-xs mt-1">
            <i class="ion-android-star"></i>
            <i class="ion-android-star"></i>
            <i class="ion-android-star"></i>
            <i class="ion-android-star"></i>
            <i class="ion-android-star"></i>
          </div>
        </div>
      </div>
      
      <!-- Product 3 -->
      <div class="flex space-x-3">
        <div class="flex-shrink-0">
          <a href="shop-product-basic.html">
            <img src="@/assets/images/products/soccer-4-100x100.jpg" class="w-16 h-16 object-cover rounded" alt="High waist trousers">
          </a>
        </div>
        <div>
          <h4 class="text-sm font-medium"><a href="shop-product-basic.html" class="text-gray-800 hover:text-blue-600">High waist trousers</a></h4>
          <div class="flex items-center space-x-2">
            <span class="text-sm text-gray-500 line-through">$36.00</span>
            <span class="text-sm font-medium text-blue-600">$33.00</span>
          </div>
          <div class="flex text-yellow-400 text-xs mt-1">
            <i class="ion-android-star"></i>
            <i class="ion-android-star"></i>
            <i class="ion-android-star"></i>
            <i class="ion-android-star"></i>
            <i class="ion-android-star-outline"></i>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>      
<div>
  <div v-if="activeGrid=='grid_1'" :class="activeGrid=='grid_1'?'grid  lg:grid-cols-3 gap-4':''">
   
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
             class="w-full h-[370px] absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
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
  <div v-else-if="activeGrid=='grid_2'" :class="activeGrid=='grid_2'?'grid lg:grid-cols-4 gap-4':''">
    
    <div class="w-[100%]   " v-for="product in productStore.products">
  <div class="relative group">
    <!-- Product Image -->
    <div class="relative overflow-hidden">
      <a href="" class="block">
        <!-- Main Image (hover will be handled with JS) -->
        <img :src="product.image" 
             class="w-full h-[250px] transition-opacity duration-300 group-hover:opacity-0" 
             alt="Light Brown Watch">
        <!-- Hover Image -->
        <img :src="product.hover_image" 
             class="w-full h-[250px] absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
             alt="Light Brown Watch - Alternate View">
      </a>

      <!-- Sale Badge -->
      <div class="absolute top-7 left-3 ">
        <span class="bg-blue-500 text-white   text-xs font-bold px-2 py-4 rounded-full">-10%</span>
      </div>

      <!-- Product Actions -->
      <div class="absolute right-3 top-3 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <!-- Wishlist -->
        <button @click="addToWishlist(product.id)"  class=" w-8 h-8 bg-white  flex items-center justify-center shadow-md hover:bg-gray-100" 
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
  <div v-else-if="activeGrid=='grid_3'" :class="activeGrid=='grid_3'?'grid grid-cols-1':''">
   
  <div class="flex flex-col md:flex-row gap-6 mb-8" v-for="product in productStore.products">
    <RouterLink 
      :to="{ name: 'product-basic', params: { id: product.id } }"
      class="product-link"
    />
  <!-- Product Image -->
  <div class="w-[450px] relative group">
    <a href="shop-product-basic.html" class="block relative">
      <!-- Main Image -->
      <img :src="product.image" 
           class="w-full h-[450px] transition-opacity duration-300 group-hover:opacity-0" 
           alt="Light Brown Watch">
      <!-- Hover Image -->
      <img :src="product.hover_image" 
           class="w-full h-[450px] absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
           alt="Light Brown Watch - Alternate View">
    </a>

    <!-- Sale Badge -->
    <div class="absolute top-10 left-3">
      <span class="bg-blue-500 text-white text-xs font-bold px-2 py-4 rounded-full">-10%</span>
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
  <div class="md:w-2/3">
    <h3 class="text-lg font-medium text-gray-900 hover:text-blue-600 mb-2">
      <a href="">{{product.name}}</a>
    </h3>
    
    <div class="text-lg font-medium text-gray-900 mb-3">${{ product.price }}</div>
    
    <p class="text-gray-600 mb-4">
      {{ product.description }}
    </p>
    
    <button class="inline-block bg-gray-700 hover:bg-white text-white hover:text-gray-800 border hover:border-gray-800 font-medium py-2 px-6  transition-colors duration-300"
    @click="goToProductDetail(product.id)">
      SELECT OPTION
    </button>
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

<style scoped>
@media screen and (max-width:991px) {
.m{
  visibility: hidden;
}  
}
</style>
