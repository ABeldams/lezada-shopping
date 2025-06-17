<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useCart } from '@/store/cart'
import TopNavBar from '@/components/NavBar.vue'
import ButtonMinus from '@/components/icons/buttonMinus.vue'
import ButtonPlus from '@/components/icons/buttonPlus.vue'

const cartStore = useCart()
const { cartItems, cartTotal } = storeToRefs(cartStore)

onMounted(async () => {
  if (!cartItems.value.length) {
    await cartStore.fetchCart()
  }
})

const updateQuantity = (id, quantity) => {
  if (quantity > 0) {
    cartStore.updateItemQuantity(id, quantity)
  }
}

const removeItem = (id) => {
  cartStore.removeItem(id)
}
</script>

<template>
  <TopNavBar />

  
  <div class=" bg-gray-100 mt-[90px] p-10">
    <h1 class="sm:text-3xl md:text-6xl lg:text-6xl p-4  text-black">Shopping Cart</h1>
    <div class="flex space-y-0">
       
    <p class="text-xl p-4 text-gray-400 hover:text-black cursor-pointer">
    <RouterLink to="/" class="hover:text-black">Home /</RouterLink>
       </p>

        
    <p class="text-xl p-4" :class="active?'text-black':'text-gray-400'">Shopping Cart</p>
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
              <th class="py-3 px-6">Quantity</th>
              <th class="py-3 px-6">Total</th>
              <th class="py-3 px-6">&nbsp;</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="item in cartItems" :key="item.id" class="border border-separate">
              <td class="py-4 px-6">
                <a href="#"><img :src="item.product.image" class="w-16 h-16 object-cover rounded" alt="Product Image" /></a>
              </td>
              <td class="py-4 px-6">
                <a href="#" class="font-semibold text-gray-900">{{ item.product.name }}</a>
              
              </td>
              <td class="py-4 px-6 text-gray-700 font-semibold">${{ item.product.price }}</td>
              <td class="py-4 px-6">
                <div class="pro-qty d-inline-block mx-0">
                    <button @click="updateQuantity(item.id,item.quantity-1)" type="button" id="decrement-button" data-input-counter-decrement="counter-input" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                    <ButtonMinus />
                  </button>
                    <input type="text" id="counter-input" data-input-counter class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" :value="item.quantity" required />
                  <button @click="updateQuantity(item.id,item.quantity+1)" type="button" id="increment-button" data-input-counter-increment="counter-input" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                   <ButtonPlus/>
                  </button>
                </div>
              </td>
              <td class="py-4 px-6 font-semibold">${{ (item.product.price * item.quantity).toFixed(2) }}</td>
              <td class="py-4 px-6">
                <button @click.prevent="removeItem(item.id)" class="bg-white text-gray-500 border px-3 py-2">
                  <i class="ion-android-close text-lg"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>


   


    <div class=" grid  md:grid-cols-1 border border-gray-400 w-[80%] h-auto m-auto  lg:hidden 
" v-for="item in cartItems" :key="item.id">
    <div class="relative w-full flex flex-col justify-center items-center space-y-2">
      <h1 class="absolute top-5 right-5 font-semibold text-gray-400 ">X</h1>
      <img 
      :src="item.product.image"
      class=" w-[80%] h-[70%] "/>
      <p class="text-sm font-semibold">{{ item.product.name }}</p>
      <p class="text-sm font-semibold text-gray-900">${{ item.product.price }}</p> 
      <div class="flex items-center border-t-0 border-l-0 border-r-0 border-b-2 border-gray-500">
                    <button @click="updateQuantity(item.id,item.quantity-1)" type="button" id="decrement-button" data-input-counter-decrement="counter-input" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                    <ButtonMinus />
                  </button>
                    <input type="text" id="counter-input" data-input-counter class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" :value="item.quantity" required />
                  <button @click="updateQuantity(item.id,item.quantity+1)" type="button" id="increment-button" data-input-counter-increment="counter-input" class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                   <ButtonPlus/>
                  </button>
                </div>
                <p class="text-sm font-semibold text-gray-900">${{ item.product.price*item.quantity }}</p>

              </div>
    
   </div>





    <!-- Cart Totals Section -->
    <div class="w-full max-w-md ml-auto bg-gray-100 p-6 sm:m-auto  md:m-auto md:mt-5 lg:mr-10">
      <h2 class="text-4xl  mb-4 text-center">Cart Totals</h2>
      <table class="w-full text-gray-700">
        <tr class="border-b">
          <th class="py-2 text-left">SUBTOTAL</th>
          <td class="py-2 text-right font-semibold">${{ cartTotal?.toFixed(2) || '0.00' }}</td>
        </tr>
        <tr>
          <th class="py-2 text-left font-semibold text-black">TOTAL</th>
          <td class="py-2 text-right font-semibold text-xl text-black">${{ cartTotal?.toFixed(2) || '0.00' }}</td>
        </tr>
      </table>
      <div class="text-center mt-6">
        <RouterLink :to="{name:'checkout'}" class="w-[50%] py-2 px-4 bg-black text-white p-4  hover:bg-red-700 transition">
          Proceed to Checkout
        </RouterLink>
      </div>
    </div>
  </div>
</div>


</template>

<style scoped>
@media screen and (max-width:640px) {
 .m{
  visibility: hidden;
  
 } 
}
</style>
