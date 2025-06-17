<script setup>
import { storeToRefs } from 'pinia';
import { useCart } from '@/store/cart';
import { useAuthStore } from '@/store/productStore';
import Shop from './icons/Shop.vue';

const cartStore = useCart();
const auth = useAuthStore();
const { cartCount, isCartOpen } = storeToRefs(cartStore); // Added isCartOpen for managing cart visibility

const openCart = () => {
  if (!auth.token) {
    alert("You must be logged in to view the cart!");
    return;
  }
  // Toggle the cart visibility only if the user is logged in
  cartStore.toggleCart();
};
</script>

<template>
 
  <div class="relative cursor-pointer">
           <Shop @click="openCart"/>
           <span class="absolute -top-2 -right-2 bg-amber-700 text-white text-xs rounded-full w-4 h-5 flex items-center justify-center"
           v-if="cartCount>0">{{ cartCount }}</span>
       
  </div>

</template>
