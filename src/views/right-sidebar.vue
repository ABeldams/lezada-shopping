<script setup>
import { ref, onMounted } from 'vue';
import { useAuthStore } from '@/store/productStore';
import Grid_1 from '@/components/icons/Grid_1.vue';
import Grid_2 from '@/components/icons/Grid_2.vue';
import Grid_3 from '@/components/icons/Grid_3.vue';
import TopNavBar from '@/components/NavBar.vue';
import bgImage from '@/assets/images/background-heading-page.png'

import Footers from '@/components/Footers.vue';
import Search from '@/components/icons/Search.vue';
const active = ref(true);
const activeGrid = ref('grid_1');
const activeItem = ref('All Categories');
import { useRouter } from 'vue-router'
import { useCart } from '@/store/cart'; 
import { useWishlistStore } from '@/store/whishlistStore';

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
const Categories=['All Categories','Fashion','Home & Living','Electronics','Cosmetics','Furniture','Perfumes'];
const setActiveItem = (itemValue) => {
  activeItem.value = itemValue;
  if (itemValue === 'All Categories') {
    productStore.fetchProducts();
  } else {
    productStore.getProductsByCategory(itemValue.toLowerCase());
  }
};

</script>

<template>
  <TopNavBar />

  <div class="bg-gray-200 mt-[90px] p-10" :style="{ backgroundImage: `url(${bgImage})` }">
    <h1 class="sm:text-3xl md:text-6xl lg:text-4xl p-4 text-black">Shop No Sidebar</h1>
    <div class="flex space-y-0">
      <p class="text-md p-4 text-gray-400 hover:text-black cursor-pointer">
        <RouterLink to="/" class="hover:text-black">Home /</RouterLink>
      </p>
      <p class="text-md p-4" :class="active ? 'text-black' : 'text-gray-400'">Shop Left Sidebar</p>
    </div>
  </div>

  <div class="bg-white sm:flex-col md:flex-row lg:flex-row p-4 border-b-2 border-gray-400  w-full flex justify-between ">
    <h1 class="">Showing page {{  productStore.currentPage}} of {{productStore.totalPages}}  pages </h1>

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

      
      <div class="flex">
        <ul class="flex">
          <li v-for="item in items" :key="item.title">
            <component 
              :is="item.name" 
              :class="activeGrid === item.title ? 'text-gray-900' : 'text-gray-400'"
              @click="setActive(item.title)" 
              class="cursor-pointer m"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="w-full max-w-[1440px] mx-auto flex flex-col-reverse lg:flex-row-reverse gap-8 mt-[70px] px-4 sm:px-6 md:px-8 lg:px-10 py-10">
 
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


<!--
  <div class="bg-white py-6">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap items-center">

      <div class="hidden md:block w-full md:w-7/12 lg:w-7/12">
        <div class="filter-titles">
          <ul class="flex space-x-6">
            <li class="cursor-pointer font-medium text-gray-900 active-filter" data-filter="*">All</li>
            <li class="cursor-pointer text-gray-600 hover:text-gray-900" data-filter=".hot">hot products</li>
            <li class="cursor-pointer text-gray-600 hover:text-gray-900" data-filter=".new">new products</li>
            <li class="cursor-pointer text-gray-600 hover:text-gray-900" data-filter=".sale">sale products</li>
          </ul>
        </div>
      </div>

      <div class="w-full md:w-5/12 lg:w-5/12 md:pl-4">
        <div class="flex items-center justify-end space-x-4">

          <div class="relative">
            <select class="appearance-none bg-white border border-gray-300 rounded px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm">
              <option value="0">Default sorting</option>
              <option value="1">Sort by popularity</option>
              <option value="0">Sort by average rating</option>
              <option value="0">Sort by latest</option>
              <option value="0">Sort by price: low to high</option>
              <option value="0">Sort by price: high to low</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>

          <div class="flex space-x-2">
            <a href="javascript:void(0)" data-target="five-column" class="p-2 text-gray-700 hover:text-blue-600 active-grid">
              <i class="ti-layout-grid4-alt"></i>
            </a>
            <a href="javascript:void(0)" data-target="four-column" class="p-2 text-gray-700 hover:text-blue-600">
              <i class="ti-layout-grid3-alt"></i>
            </a>
            <a href="javascript:void(0)" data-target="three-column" class="p-2 text-gray-700 hover:text-blue-600">
              <i class="ti-layout-grid2-alt"></i>
            </a>
            <a href="javascript:void(0)" data-target="list" class="p-2 text-gray-700 hover:text-blue-600">
              <i class="ti-view-list"></i>
            </a>
          </div>

          <div class="ml-2">
            <a href="javascript:void(0)" id="advance-filter-active-btn" class="flex items-center text-gray-700 hover:text-blue-600">
              <i class="ion-android-funnel mr-1"></i>
              <span class="text-sm">Filters</span>
            </a>
          </div>

        </div>
      </div>

    </div>
  </div>
</div>
<div class="bg-white py-8" id="shop-advance-filter-area">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap -mx-2">
      
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-8">
        <div class="mb-4">
          <h3 class="text-lg font-medium mb-3">Sort by</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-600 hover:text-gray-900">Default</a></li>
            <li><a href="#" class="text-gray-600 hover:text-gray-900">Popularity</a></li>
            <li><a href="#" class="text-gray-600 hover:text-gray-900">Average rating</a></li>
            <li><a href="#" class="text-gray-600 hover:text-gray-900">Newness</a></li>
            <li><a href="#" class="text-gray-600 hover:text-gray-900">Price: low to high</a></li>
            <li><a href="#" class="text-gray-600 hover:text-gray-900">Price: high to low</a></li>
          </ul>
        </div>
      </div>

      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-8">
        <div class="mb-4">
          <h3 class="text-lg font-medium mb-3">Categories</h3>
          <ul class="space-y-2">
            <li class="group relative">
              <div class="flex justify-between items-center">
                <a href="shop-left-sidebar.html" class="text-gray-600 hover:text-gray-900">Cosmetic</a>
                <span class="text-xs text-gray-500">5</span>
              </div>
              <ul class="ml-4 mt-1 hidden group-hover:block">
                <li><a href="shop-left-sidebar.html" class="text-gray-500 hover:text-gray-900 text-sm">For body</a></li>
                <li><a href="shop-left-sidebar.html" class="text-gray-500 hover:text-gray-900 text-sm">Make up</a></li>
                <li><a href="shop-left-sidebar.html" class="text-gray-500 hover:text-gray-900 text-sm">New</a></li>
                <li><a href="shop-left-sidebar.html" class="text-gray-500 hover:text-gray-900 text-sm">Perfumes</a></li>
              </ul>
            </li>
            <li class="group relative">
              <div class="flex justify-between items-center">
                <a href="shop-left-sidebar.html" class="text-gray-600 hover:text-gray-900">Furniture</a>
                <span class="text-xs text-gray-500">23</span>
              </div>
              <ul class="ml-4 mt-1 hidden group-hover:block">
                <li><a href="shop-left-sidebar.html" class="text-gray-500 hover:text-gray-900 text-sm">Sofas</a></li>
                <li><a href="shop-left-sidebar.html" class="text-gray-500 hover:text-gray-900 text-sm">Armchairs</a></li>
                <li><a href="shop-left-sidebar.html" class="text-gray-500 hover:text-gray-900 text-sm">Desk Chairs</a></li>
                <li><a href="shop-left-sidebar.html" class="text-gray-500 hover:text-gray-900 text-sm">Dining Chairs</a></li>
              </ul>
            </li>
            <li class="flex justify-between items-center">
              <a href="shop-left-sidebar.html" class="text-gray-600 hover:text-gray-900">Watches</a>
              <span class="text-xs text-gray-500">12</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-8">
        <div class="mb-4">
          <h3 class="text-lg font-medium mb-3">Price filter</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-600 hover:text-gray-900">All</a></li>
            <li><a href="#" class="text-gray-600 hover:text-gray-900">$0.00 - $70.00</a></li>
            <li><a href="#" class="text-gray-600 hover:text-gray-900">$70.00 - $140.00</a></li>
            <li><a href="#" class="text-gray-600 hover:text-gray-900">$140.00 - $210.00</a></li>
            <li><a href="#" class="text-gray-600 hover:text-gray-900">$210.00 - $280.00</a></li>
            <li><a href="#" class="text-gray-600 hover:text-gray-900">$280.00 - $350.00</a></li>
          </ul>
        </div>
      </div>

      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-8">
        <div class="mb-4">
          <h3 class="text-lg font-medium mb-3">Color</h3>
          <div class="flex flex-wrap gap-2">
            <a href="#" class="w-8 h-8 rounded-full bg-black border-2 border-gray-300 hover:border-gray-900 active-color" 
               title="Black"></a>
            <a href="#" class="w-8 h-8 rounded-full bg-blue-600 border-2 border-gray-300 hover:border-gray-900" 
               title="Blue"></a>
            <a href="#" class="w-8 h-8 rounded-full bg-amber-800 border-2 border-gray-300 hover:border-gray-900" 
               title="Brown"></a>
            <a href="#" class="w-8 h-8 rounded-full bg-yellow-500 border-2 border-gray-300 hover:border-gray-900" 
               title="Gold"></a>
            <a href="#" class="w-8 h-8 rounded-full bg-green-400 border-2 border-gray-300 hover:border-gray-900" 
               title="Green Coral"></a>
            <a href="#" class="w-8 h-8 rounded-full bg-gray-500 border-2 border-gray-300 hover:border-gray-900" 
               title="Grey"></a>
            <a href="#" class="w-8 h-8 rounded-full bg-amber-700 border-2 border-gray-300 hover:border-gray-900" 
               title="Oak"></a>
            <a href="#" class="w-8 h-8 rounded-full bg-pink-400 border-2 border-gray-300 hover:border-gray-900" 
               title="Pink"></a>
            <a href="#" class="w-8 h-8 rounded-full bg-gray-300 border-2 border-gray-300 hover:border-gray-900" 
               title="Silver"></a>
            <a href="#" class="w-8 h-8 rounded-full bg-white border-2 border-gray-300 hover:border-gray-900" 
               title="White"></a>
          </div>
        </div>
      </div>

      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-8">
        <div class="mb-4">
          <h3 class="text-lg font-medium mb-3">Size</h3>
          <ul class="space-y-2">
            <li class="flex justify-between items-center">
              <a href="#" class="text-gray-600 hover:text-gray-900">L</a>
              <span class="text-xs text-gray-500">5</span>
            </li>
            <li class="flex justify-between items-center">
              <a href="#" class="text-gray-600 hover:text-gray-900">M</a>
              <span class="text-xs text-gray-500">5</span>
            </li>
            <li class="flex justify-between items-center">
              <a href="#" class="text-gray-600 hover:text-gray-900">S</a>
              <span class="text-xs text-gray-500">5</span>
            </li>
            <li class="flex justify-between items-center">
              <a href="#" class="text-gray-600 hover:text-gray-900">XS</a>
              <span class="text-xs text-gray-500">5</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-8">
        <div class="mb-4">
          <h3 class="text-lg font-medium mb-3">Brands</h3>
          <ul class="space-y-2">
            <li class="flex justify-between items-center">
              <a href="#" class="text-gray-600 hover:text-gray-900">Alliop</a>
              <span class="text-xs text-gray-500">(12)</span>
            </li>
            <li class="flex justify-between items-center">
              <a href="#" class="text-gray-600 hover:text-gray-900">Burberry</a>
              <span class="text-xs text-gray-500">(15)</span>
            </li>
            <li class="flex justify-between items-center">
              <a href="#" class="text-gray-600 hover:text-gray-900">Catmen</a>
              <span class="text-xs text-gray-500">(13)</span>
            </li>
            <li class="flex justify-between items-center">
              <a href="#" class="text-gray-600 hover:text-gray-900">Houdini</a>
              <span class="text-xs text-gray-500">(10)</span>
            </li>
            <li class="flex justify-between items-center">
              <a href="#" class="text-gray-600 hover:text-gray-900">Love</a>
              <span class="text-xs text-gray-500">(70)</span>
            </li>
            <li class="flex justify-between items-center">
              <a href="#" class="text-gray-600 hover:text-gray-900">Made</a>
              <span class="text-xs text-gray-500">(15)</span>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  </div>
</div>
-->




    <Footers/>
   
</template>

<style scoped>
@media screen and (max-width:991px) {
.m{
  visibility: hidden;
}  
}
</style>
