<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useCart } from '@/store/cart'
import bgImage from '@/assets/images/01.jpg'
import { useAuthStore } from '@/store/productStore';

 
import { useWishlistStore } from '@/store/whishlistStore'
import TopNavBar from '@/components/NavBar.vue'
import Footers from '@/components/Footers.vue'

const cartStore = useCart()
const whishList = useWishlistStore()
const auth = useAuthStore();

const { items: wishlistItems } = storeToRefs(whishList);

const { cartItems, cartTotal } = storeToRefs(cartStore)

onMounted(async () => {
  if (!wishlistItems.value.length) {
    await whishList.getWishlist()
  }
})

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



</script>

<template>
  <TopNavBar />

  
  <div 
      class="relative bg-cover bg-center pt-12 pb-16 md:pt-14 md:pb-20 mt-[70px] h-[200px]" 
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


 
  <div class="mt-10 mb-32 ">
  <div class="container mx-auto px-4 ">
    <div class="w-full mb-8  sm:invisible  lg:visible  m">
      <div class="overflow-x-auto bg-white ">
        <table class="w-full text-left border ">
          <thead>
            <tr class=" text-black font-semibold uppercase text-sm">
              <th class="py-3 px-6" colspan="2">Product</th>
              <th class="py-3 px-6">Price</th>
              <th class="py-3 px-6">&nbsp;</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(item,index) in wishlistItems" :key="index" class="border border-separate">
              <td class="py-4 px-6">
                <a href="#"><img :src="item.image" class="w-16 h-16 object-cover rounded" alt="Product Image" /></a>
              </td>
              <td class="py-4 px-6">
                <a href="#" class="font-semibold text-gray-900">{{ item.name }}</a>
              
              </td>
              <td class="py-4 px-6 text-gray-700 font-semibold">${{ item.price }}</td>
              <td class="py-4 px-6">
                <button @click="handleAddToCart(item.id)" class="bg-black text-gray-100  px-3 py-2">
                  Add to cart
                </button>
              </td>

              <td class="py-4 px-6">
                <button @click="whishList.removeFromWishlist(item.whishlist_id)" class="bg-white text-gray-500 border px-3 py-2">
                    
                    <i class="ion-android-close text-lg"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>


   


    <div class=" grid  md:grid-cols-1 border border-gray-400 w-[80%] h-auto m-auto  lg:hidden 
" v-for="item in wishlistItems" :key="item.id">
    <div class="relative w-full flex flex-col justify-center items-center space-y-2">
      <h1 class="absolute top-5 right-5 font-semibold text-gray-400 cursor-pointer "
      @click="removeItem(item.id)">X</h1>
      <img 
      :src="item.image"
      class=" w-[80%] h-[70%] "/>
      <p class="text-sm font-semibold">{{ item.name }}</p>
      <p class="text-sm font-semibold text-gray-900">${{ item.price }}</p> 
      
    </div>
    
   </div>

   <div class="flex justify-end items-end">
   <button @click="whishList.clearWishlist" class="bg-black text-gray-100 w-[200px]  px-3 py-3">
                  CLEAR WHISHLIST
   </button>
   </div>

  
  </div>
</div>

<Footers/>
</template>

<style scoped>
@media screen and (max-width:640px) {
 .m{
  visibility: hidden;
  
 } 
}
</style>
