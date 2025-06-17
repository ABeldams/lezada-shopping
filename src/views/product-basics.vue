<template>
  <TopNavBar/>
  
  <div class="bg-cover bg-center mt-[90px] p-10" :style="{ backgroundImage: `url(${bgImage})` }">
    <h1 class="sm:text-3xl md:text-6xl lg:text-4xl p-4 text-black">Product Detail</h1>
    <div class="flex">
      <p class="text-md p-4 text-gray-400 hover:text-black cursor-pointer">
        <RouterLink to="/" class="hover:text-black">Home /</RouterLink>
      </p>
      <p class="text-md p-4 text-black">Product Detail</p>
    </div>
  </div>

  <!-- Single Product Display -->
  <div v-if="currentProduct" class="flex w-[80%] flex-col md:flex-row gap-6 mb-8 m-auto mt-[100px]">
    <!-- Product Image Section -->
    <div class="w-[450px] relative group">
      <div class="relative overflow-hidden" style="height: 450px;">
        <img :src="currentProduct.image" 
             class="w-full h-full object-cover transition-opacity duration-300 absolute top-0 left-0"
             :alt="currentProduct.name">
        
        <button @click="prevProduct" 
                class="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-md hover:bg-white z-10">
          <i class="fas fa-chevron-left text-gray-700"></i>
        </button>
        <button @click="nextProduct" 
                class="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-md hover:bg-white z-10">
          <i class="fas fa-chevron-right text-gray-700"></i>
        </button>
      </div>

      <div class="absolute top-10 left-3">
        <span class="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">-10%</span>
      </div>

      <div class="absolute right-3 top-3 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button @click="addToWishlist(currentProduct.id)" 
                class="w-8 h-8 bg-white flex items-center justify-center shadow-md hover:bg-gray-100" 
                title="Add to wishlist">
          <i class="fas fa-heart text-gray-700"></i>
        </button>
        <button class="w-8 h-8 bg-white flex items-center justify-center shadow-md hover:bg-gray-100" 
                title="Compare">
          <i class="fas fa-random text-gray-700"></i>
        </button>
        <button class="w-8 h-8 bg-white flex items-center justify-center shadow-md hover:bg-gray-100" 
                title="Quick View">
          <i class="fas fa-search text-gray-700"></i>
        </button>
      </div>
    </div>

    <!-- Product Content -->
    <div class="md:w-2/3">
      <div class="flex justify-start items-center text-yellow-400 text-xl mt-1">
        <i v-for="star in 5" :key="star" 
           :class="star <= currentProduct.rating ? 'fas fa-star' : 'far fa-star'"></i>
        <span class="ml-5 text-gray-600 text-sm">({{ currentProduct.reviewCount }} customer reviews)</span>
      </div>

      <h3 class="text-2xl font-bold text-gray-900 mb-2">
        {{ currentProduct.name }}
      </h3>
      
      <div class="text-xl font-bold text-gray-900 mb-3">
        <span class="text-gray-400 line-through mr-2" v-if="currentProduct.originalPrice">${{ currentProduct.originalPrice }}</span>
        ${{ currentProduct.price }}
      </div>
      
      <p class="text-gray-600 mb-6">
        {{ currentProduct.description }}
      </p>
      
      <div class="space-y-6 max-w-xs">
        <!-- Size Selection -->
        <div>
          <label class="block font-medium text-gray-800 mb-2">Size</label>
          <div class="flex gap-3">
            <button v-for="size in currentProduct.sizes" :key="size"
                    @click="selectedSize = size"
                    class="px-3 py-1 border rounded-sm transition-colors"
                    :class="selectedSize === size ? 'border-black text-black' : 'border-gray-300 text-gray-400 hover:text-black hover:border-gray-400'">
              {{ size }}
            </button>
          </div>
        </div>

        <!-- Color Selection -->
        <div>
          <label class="block font-medium text-gray-800 mb-2">Color</label>
          <div class="flex gap-3">
            <button v-for="color in currentProduct.colors" :key="color"
                    @click="selectedColor = color"
                    class="w-6 h-6 rounded-full border-2 transition-all"
                    :class="selectedColor === color ? 'border-black' : 'border-transparent'"
                    :style="{backgroundColor: color}">
            </button>
          </div>
        </div>

        <!-- Quantity Selector -->
        <div>
          <label class="block font-medium text-gray-800 mb-2">Quantity</label>
          <div class="flex items-center border rounded w-32">
            <button @click="decrementQuantity" 
                    class="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200"
                    :disabled="quantity <= 1">
              <ButtonMinus class="w-4 h-4" :class="{'opacity-50': quantity <= 1}" />
            </button>
            <input type="text" 
                   v-model.number="quantity" 
                   class="w-12 text-center border-x border-gray-200 h-10"
                   readonly>
            <button @click="incrementQuantity" 
                    class="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200">
              <ButtonPlus class="w-4 h-4" />
            </button>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex items-center gap-3 pt-4">
          <button @click="addToCart"
                  class="bg-black text-white px-8 py-3 text-sm font-semibold tracking-wide hover:bg-gray-800 transition flex-1">
            ADD TO CART
          </button>
          <button @click="addToWishlist(currentProduct.id)"
                  class="w-12 h-12 border flex items-center justify-center hover:bg-gray-100 transition">
            <i class="far fa-heart text-gray-700"></i>
          </button>
        </div>
      </div>
    </div>
  </div>

  <Footers/>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import bgImage from '@/assets/images/background-heading-page.png'
import { useAuthStore } from '@/store/productStore'
import { useCart } from '@/store/cart'
import { useWishlistStore } from '@/store/whishlistStore'
import TopNavBar from '@/components/NavBar.vue'
import ButtonMinus from '@/components/icons/buttonMinus.vue'
import ButtonPlus from '@/components/icons/buttonPlus.vue'
import Footers from '@/components/Footers.vue'

const productStore = useAuthStore()
const cartStore = useCart()
const wishlistStore = useWishlistStore()

// Initialize auth
productStore.login()

// Product data
const products = computed(() => productStore.products)
const currentProductIndex = ref(0)
const currentProduct = computed(() => {
  return products.value?.length > 0 ? products.value[currentProductIndex.value] : null
})

// Product options
const selectedSize = ref(null)
const selectedColor = ref(null)
const quantity = ref(1)

// Product navigation
const nextProduct = () => {
  if (products.value?.length > 0) {
    currentProductIndex.value = (currentProductIndex.value + 1) % products.value.length
    resetSelections()
  }
}

const prevProduct = () => {
  if (products.value?.length > 0) {
    currentProductIndex.value = (currentProductIndex.value - 1 + products.value.length) % products.value.length
    resetSelections()
  }
}

const resetSelections = () => {
  selectedSize.value = null
  selectedColor.value = null
  quantity.value = 1
}

// Quantity handlers
const incrementQuantity = () => {
  quantity.value += 1
}

const decrementQuantity = () => {
  if (quantity.value > 1) {
    quantity.value -= 1
  }
}


// Cart actions
const addToCart = async () => {
  if (!productStore.token) {
    console.warn("You must be logged in to add to cart.")
    return
  }

  if (!currentProduct.value) return

  try {
    await cartStore.addToCart(
      currentProduct.value.id,
      quantity.value
    
    )
    console.log('Product added to cart:', currentProduct.value.id)
  } catch (err) {
    console.error('Error adding to cart:', err)
  }
}

// Wishlist actions
const addToWishlist = async (productId) => {
  if (!productStore.token) {
    console.warn("You must be logged in to add to wishlist.")
    return
  }

  try {
    await wishlistStore.addToWishlist(productId)
    console.log(`Product ${productId} added to wishlist`)
  } catch (err) {
    console.error('Error adding to wishlist:', err)
  }
}

// Initialize
onMounted(() => {
  productStore.fetchProducts()
})

</script>

<style scoped>
button {
  transition: all 0.3s ease;
}

img {
  object-fit: cover;
}
</style>