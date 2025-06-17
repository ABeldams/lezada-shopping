<template>
    <TopNavBar/>
    <div 
      class="relative bg-cover bg-center pt-12 pb-16 md:pt-14 md:pb-20" 
      :style="{ backgroundImage: `url(${bgImage})` }"
    >
      <!-- Background overlay -->
      <div class="absolute inset-0 bg-white bg-opacity-50"></div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="flex flex-col">
          <h1 class="text-3xl md:text-4xl text-black mb-4">
            {{ title }}
          </h1>
          
          <!-- Breadcrumb list -->
          <ul class="flex flex-wrap items-center space-x-2 text-sm md:text-base">
            <li 
              v-for="(crumb, index) in crumbs" 
              :key="index" 
              class="flex items-center"
            >
              <RouterLink
                v-if="index < crumbs.length - 1"
                :to="crumb.path"
                class="text-gray-500 hover:text-gray-300 transition-colors"
              >
                {{ crumb.label }}
              </RouterLink>
              <span v-else class="text-gray-300">
                {{ crumb.label }}
              </span>
              <span 
                v-if="index < crumbs.length - 1"
                class="mx-2 text-gray-300"
              >
                /
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div v-if="productStore.product" class="flex w-[80%] flex-col md:flex-row gap-6 mb-8 m-auto mt-[100px]">
      <!-- Product Image -->
      <div class="w-[450px] relative group">
        <a href="shop-product-basic.html" class="block relative">
          <!-- Main Image -->
          <img :src="productStore.product.image" 
               class="w-[100%] h-[450px] transition-opacity duration-300 group-hover:opacity-0" 
               :alt="productStore.product.name">
          <!-- Hover Image -->
          <img :src="productStore.product.hover_image" 
               class="w-full h-[450px] absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
               :alt="`${productStore.product.name} - Alternate View`">
        </a>

        <!-- Sale Badge -->
        <div class="absolute top-10 left-3">
          <span class="bg-blue-500 text-white text-xs font-bold px-2 py-4 rounded-full">-10%</span>
        </div>

        <!-- Product Actions -->
        <div class="absolute right-3 top-3 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <!-- Wishlist -->
          <a href="#" class="w-8 h-8 bg-white flex items-center justify-center shadow-md hover:bg-gray-100" 
             title="Add to wishlist">
            <i class="ion-android-favorite-outline text-gray-700"></i>
          </a>
          <!-- Compare -->
          <a href="#" class="w-8 h-8 bg-white flex items-center justify-center shadow-md hover:bg-gray-100" 
             title="Compare">
            <i class="ion-ios-shuffle-strong text-gray-700"></i>
          </a>
          <!-- Quick View -->
          <a href="#qv-1" class="w-8 h-8 bg-white flex items-center justify-center shadow-md hover:bg-gray-100" 
             title="Quick View">
            <i class="ion-ios-search-strong text-gray-700"></i>
          </a>
        </div>
      </div>

      <!-- Product Content -->
      <div class="md:w-2/3">
        <div class="flex  justify-start items-center text-yellow-400 text-1xl mt-1">
            <i class="ion-android-star"></i>
            <i class="ion-android-star"></i>
            <i class="ion-android-star-outline"></i>
            <i class="ion-android-star-outline"></i>
            <i class="ion-android-star-outline"></i>
            <h1 class="ml-5">( 5 customer reviews )</h1>
          </div>


        <h3 class="text-lg font-medium text-gray-900 hover:text-blue-600 mb-2">
          <a href="">{{ productStore.product.name }}</a>
        </h3>
        
        <div class="text-lg font-medium text-gray-900 mb-3">${{ productStore.product.price }}</div>
        
        <p class="text-gray-600 mb-4">
          {{ productStore.product.description }}
        </p>
        
        <div class="space-y-6 max-w-xs">
  <!-- Size Selection -->
  <div>
    <div class="flex gap-4">
        <label class="block font-medium text-gray-800 mb-2">Size</label>
   
        <button class="text-black font-semibold border-b-2 border-black">X</button>
      <button class="text-gray-400 hover:text-black">M</button>
      <button class="text-gray-400 hover:text-black">XL</button>
    </div>
  </div>

  <!-- Color Selection -->
  <div>
    <div class="flex gap-4">
        <label class="block font-medium text-gray-800 mb-2">Color</label>
    
        <button class="w-6 h-6 rounded-full border-2 border-black bg-gray-800"></button>
      <button class="w-6 h-6 rounded-full bg-blue-500"></button>
      <button class="w-6 h-6 rounded-full bg-yellow-500"></button>
    </div>
  </div>

  <!-- Quantity Selector -->
  <div>
   
    
    <div>
    <div class="flex justify-between items-center space-x-4 pb-1 max-w-[100px]">
      <label class="block font-medium text-gray-800 mb-2">Quantity</label>
      
      <div class="flex justify-between items-center space-x-5 border-b-2">
        <button 
          @click="decrementQuantity" 
          type="button" 
          class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border  bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
        >
          <ButtonMinus />
        </button>
        
        <input 
          type="text" 
          class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0" 
          v-model="quantity" 
          readonly
        />
        
        <button 
          @click="incrementQuantity" 
          type="button" 
          class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
        >
          <ButtonPlus />
        </button>
      </div>
    </div>
  </div>

  </div>

  <!-- Action Buttons -->
  <div class="flex items-center gap-2">
    <button class="bg-black text-white px-6 py-2 text-sm font-semibold tracking-wide hover:bg-gray-800 transition"
    @click="handleAddToCart">
      ADD TO CART
    </button>
    <button class="w-10 h-10 border flex items-center justify-center hover:bg-gray-100 transition"
    @click="addToWishlist">
      <i class="ion-android-favorite-outline text-gray-700"></i>
    </button>
    <button class="w-10 h-10 border flex items-center justify-center hover:bg-gray-100 transition">
      <i class="ion-ios-shuffle-strong text-gray-700"></i>
    </button>
  </div>
</div>


        
        
      </div>
    </div>

    <Footers/>
</template>
  
  <script setup>
  import { computed, onMounted, watch,ref } from 'vue'
  import { useRoute } from 'vue-router'
  import bgImage from '@/assets/images/background-heading-page.png'
  import { useAuthStore } from '@/store/productStore'
  import { useCart } from '@/store/cart'
  import { useWishlistStore } from '@/store/useWishlistStore'
import TopNavBar from '@/components/NavBar.vue'
import ButtonMinus from '@/components/icons/buttonMinus.vue'
import ButtonPlus from '@/components/icons/buttonPlus.vue'
import Footers from '@/components/Footers.vue'

  
  const route = useRoute()
  const productStore = useAuthStore()
  const cartStore = useCart()
  const wishlist = useWishlistStore()
  const auth = useAuthStore()
  
  // Get the ID from route params
  const productId = computed(() => route.params.id)

  // Quantity state
const quantity = ref(1)

// Quantity methods
const incrementQuantity = () => {
  quantity.value += 1
}

const decrementQuantity = () => {
  if (quantity.value > 1) {
    quantity.value -= 1
  }
}

// Update the cart store when quantity changes
const updateQuantity = (id, newQuantity) => {
  if (newQuantity > 0) {
    cartStore.updateItemQuantity(id, newQuantity)
  }
}

  
  // Fetch product when component mounts or ID changes
  onMounted(() => {
    if (productId.value) {
      productStore.fetchSingleProduct(productId.value)
    }
  })
  
  // Watch for changes in route params
  watch(productId, (newId) => {
    if (newId) {
      productStore.fetchSingleProduct(newId)
    }
  })
  
  const handleAddToCart = async () => {
    if (!auth.token) {
      console.warn("You must be logged in to add to cart.")
      return
    }
  
    try {
      await cartStore.addToCart(productStore.product.id)
      console.log('Product added to cart:', productStore.product.id)
    } catch (err) {
      console.error('Error adding to cart:', err)
    }
  }
  
  const addToWishlist = async () => {
    if (!auth.token) {
      console.warn("You must be logged in to add to wishlist.")
      return
    }
  
    try {
      await wishlist.addToWishlist(productStore.product.id)
      console.log(`Product ${productStore.product.id} added to wishlist`)
    } catch (err) {
      console.error('Error adding to wishlist:', err)
    }
  }
  
  // Rest of your component logic...
  </script>