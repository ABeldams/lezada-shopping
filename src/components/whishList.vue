<script setup>
import { storeToRefs } from 'pinia';
import { useCart } from '@/store/cart';
import { useWishlistStore } from '@/store/whishlistStore';
import { useAuthStore } from '@/store/productStore';
import Shop from './icons/Shop.vue';
import Love from './icons/Love.vue';

const whishlistStore = useWishlistStore();
const auth = useAuthStore();
const { wishlistCount, isWishlistOpen } = storeToRefs(whishlistStore); // Added isCartOpen for managing cart visibility

const openCart = () => {
  if (!auth.token) {
    alert("You must be logged in to view the cart!");
    return;
  }
  // Toggle the cart visibility only if the user is logged in
  whishlistStore.toggleWishlist()
};
</script>

<template>
 
  <div class="relative cursor-pointer">
           <Love @click="openCart"/>
           <span class="absolute -top-2 -right-2 bg-amber-700 text-white text-xs rounded-full w-4 h-5 flex items-center justify-center"
           v-if="wishlistCount>0">{{ wishlistCount }}</span>
       
  </div>

</template>
