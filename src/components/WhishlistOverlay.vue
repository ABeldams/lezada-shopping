<script setup>
import { onMounted, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useWishlistStore } from '@/store/whishlistStore'
import { RouterLink } from 'vue-router';

const wishlistStore = useWishlistStore();
const { isWishlistOpen, items: wishlistItems } = storeToRefs(wishlistStore);
const { toggleWishlist, removeFromWishlist, } = wishlistStore;



onMounted(() => {
wishlistStore.getWishlist();
});

</script>

<template>
  <div :class="['fixed inset-0 z-50 transition-opacity', { 'opacity-100 visible': isWishlistOpen, 'opacity-0 invisible': !isWishlistOpen }]">
    <div class="fixed inset-0 bg-black bg-opacity-50" @click="toggleWishlist"></div>

    <div class="fixed top-0 right-0 w-96 h-full bg-white shadow-lg transform transition-transform duration-500 ease-in-out"
         :class="{ 'translate-x-0': isWishlistOpen, 'translate-x-full': !isWishlistOpen }">

      <span class="absolute top-5 right-5 cursor-pointer text-gray-700 text-2xl hover:rotate-90"
            @click="wishlistStore.toggleWishlist">
        <i class="ion-android-close"></i>
      </span>

      <div class="p-5">
        <h3 class="text-lg font-semibold border-b pb-3 mb-4">Wishlist</h3>

        <div class="max-h-80 overflow-auto space-y-4">
          <div v-if="wishlistItems?.length > 0">
            <div v-for="(item,index) in wishlistItems" :key="index" class="relative flex items-center border-b pb-4">
              <span class="absolute top-2 right-2 text-gray-600 text-sm cursor-pointer hover:text-red-500"
                    @click="removeFromWishlist(item.wishlist_id)">
                <i class="ti-close"></i>
              </span>

              <img :src="item.image" alt="Product Image" class="w-20 h-20 object-cover rounded-md mr-4" />

              <div class="flex flex-col">
                <h5 class="text-sm font-medium">{{ item.name }}</h5>
                <p class="text-sm text-gray-700 font-semibold">${{ item.price }}</p>
              </div>
            </div>
          </div>

          <p v-else class="text-center text-gray-500">Your wishlist is empty.</p>
        </div>

        <div class="mt-6">
          <RouterLink :to="{name:'whishlist'}" class="block text-center py-2 px-4 text-white bg-gray-800 hover:bg-red-600 transition-all rounded">
            View Full Wishlist
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
