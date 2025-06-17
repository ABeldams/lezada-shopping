<script setup>
import { ref } from 'vue';
import { useCart } from '@/store/cart'; 
import { useWishlistStore } from '@/store/whishlistStore';
import { useAuthStore } from '@/store/productStore';
import Search from './icons/Search.vue';
import Share from './icons/Share.vue';
import Love from './icons/Love.vue';

const props = defineProps({
  product: Object,
});

const isHovered = ref(false);
const cartStore = useCart();
const wishlist = useWishlistStore();
const auth = useAuthStore();

const handleAddToCart = async () => {
  if (!auth.token) {
    console.warn("You must be logged in to add to cart.");
    return;
  }

  try {
    await cartStore.addToCart(props.product.id); // API-based add using product ID
    console.log('Product added to cart:', props.product.id);
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
</script>

<template>
  <div class="w-full sm:w-1/2 md:w-1/2 mx-auto lg:w-[80%] mb-11 p-4">
  <div class="relative group">
    <!-- Product Images -->
    <div class="relative overflow-hidden">
      <!-- Main Image -->
      <img 
        :src="product.image1" 
        class="transition-opacity duration-500 z-20 w-full h-auto aspect-[4/5] object-cover"
        :class="{ 'opacity-0': isHovered, 'opacity-100': !isHovered }"
        :alt="product.name"
      />
      <!-- Hover Image -->
      <img 
        :src="product.image2" 
        class="absolute inset-0 transition-opacity duration-500 w-full h-auto aspect-[4/5] object-cover"
        :class="{ 'opacity-100': isHovered, 'opacity-0': !isHovered }"
        :alt="product.name + ' alternate view'"
      />
      
      <!-- Add to Cart Label (Shows on hover) -->
      <div class="absolute bottom-4 left-0 right-0 flex justify-center">
        <button 
          class="bg-red-500 text-white px-6 py-2 rounded-full font-medium text-sm transform translate-y-4 opacity-0 
                 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-600 shadow-md"
          @click="handleAddToCart(product.id)"
        >
          Add to Cart
        </button>
      </div>
    </div>

    <!-- Badges -->
    <div class="absolute top-4 left-4 z-30 flex flex-col gap-2">
      <span v-if="product.sale" class="flex items-center justify-center h-12 w-12 font-medium text-white text-sm rounded-full bg-teal-400">
        -25%
      </span>
      <span v-if="product.hot" class="flex items-center justify-center h-12 w-12 font-medium text-white text-sm rounded-full bg-red-500">
        New
      </span>
    </div>

    <!-- Action Buttons -->
    <div class="absolute top-4 right-4 z-30 flex flex-col gap-2 transition-all duration-300 opacity-0 group-hover:opacity-100">
      <button 
        class="w-10 h-10 flex items-center justify-center bg-white text-gray-500  hover:text-red-500 shadow hover:shadow-md transition-all"
        @click="addToWishlist(product.id)"
        aria-label="Add to wishlist"
      >
        <Love class="text-gray-900"/>
      </button>
      <button 
        class="w-10 h-10 flex items-center justify-center bg-white text-gray-500  hover:text-gray-800 shadow hover:shadow-md transition-all"
        aria-label="Quick view"
      >
        <Share class="text-gray-900"/>
      </button>
      <button 
        class="w-10 h-10 flex items-center justify-center bg-white text-gray-500  hover:text-gray-800 shadow hover:shadow-md transition-all"
        aria-label="Add to cart"  
      >
        <Search class="text-gray-900"/>
      </button>
    </div>

    <!-- Product Content -->
    <div class="pt-5 text-center">
      <h3 class="mb-0">
        <a 
          href="#" 
          class="block text-lg font-normal text-gray-800 hover:text-primary transition-colors duration-300"
          :title="product.name"
        >
          {{ product.name }}
        </a>
      </h3>
      <div class="flex justify-center gap-3 mt-2">
        <span class="text-sm font-semibold text-gray-800">${{ product.price }}</span>
        <span 
          v-if="product.discountedPrice" 
          class="text-sm font-semibold text-gray-400 line-through"
        >
          ${{ product.discountedPrice }}
        </span>
      </div>
    </div>
  </div>
</div>
</template>
