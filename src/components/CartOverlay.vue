<script setup>
import { storeToRefs } from 'pinia';
import { useCart } from '@/store/cart'; 
import { onMounted, watchEffect } from 'vue';

const cartStore = useCart();
const { isCartOpen, cartItems, cartTotal } = storeToRefs(cartStore);



onMounted(() => {
  cartStore.fetchCart();
});


</script>

<template>
  <div 
    :class="['fixed inset-0 z-50 transition-opacity', { 'opacity-100 visible': isCartOpen, 'opacity-0 invisible': !isCartOpen }]"
    v-show="isCartOpen"
  >
    <div class="fixed inset-0 bg-black bg-opacity-50" @click="cartStore.toggleCart"></div>
    
    <div 
      class="fixed top-0 right-0 w-96 h-full bg-white shadow-lg transform transition-transform duration-500 ease-in-out"
      :class="{ 'translate-x-0': isCartOpen, 'translate-x-full': !isCartOpen }"
    >
      <span 
        class="absolute top-5 right-5 cursor-pointer text-gray-700 text-2xl hover:rotate-90 transition-transform"
        @click="cartStore.toggleCart">
        <i class="ion-android-close"></i>
      </span>

      <div class="p-5">
        <h3 class="text-lg font-semibold border-b pb-3 mb-4">Shopping Cart</h3>
        
        <div class="max-h-80 overflow-auto space-y-4">
          <template v-if="cartItems?.length > 0">
            <div v-for="(item, index) in cartItems" :key="`${item.id}-${index}`" class="flex items-center border-b pb-4 relative">
              <span 
                class="absolute top-2 right-2 text-gray-600 text-sm cursor-pointer hover:text-red-500"
                @click="cartStore.removeItem(item.id)">
                <i class="ti-close"></i>
              </span>
              
              <img :src="item.product.image" alt="Product Image" class="w-20 h-20 object-cover rounded-md mr-4">

              <div class="flex flex-col">
                <h5 class="text-sm font-medium">{{ item.product.name }}</h5>
                <p class="text-sm text-gray-700">{{ item.quantity }} x <span class="font-semibold">${{ item.product.price }}</span></p>
               
              </div>
            </div>
          
            <p class="flex justify-between border-t border-b py-3 mt-5 text-lg font-semibold">
              <span>Subtotal:</span>
              <span>${{ cartTotal?.toFixed(2) || '0.00' }}</span>
            </p>

            <div class="mt-6 space-y-3">
              <RouterLink to="/cart">
                <button class="block w-[300px] text-center py-2 px-4 text-white bg-gray-800 hover:bg-red-600 transition-all rounded">View Cart</button>
              </RouterLink>
              <button class="block w-[300px] text-center py-2 px-4 text-white bg-green-600 hover:bg-green-500 transition-all rounded">Checkout</button>
            </div>
          </template>
          
          <!-- Empty Cart Message -->
          <p v-else class="text-center text-gray-500">Your cart is empty.</p>
        </div>
      </div>
    </div>
  </div>
</template>
