<script>
import { ref } from 'vue';
import { useCart } from '@/store/cart'; 

export default {
  props: {
    product: Object, 
  },
  setup(props) {
    const cartStore = useCart();
    const isHovered = ref(false); 

    const handleAddToCart = () => {
      if (!props.product || !props.product.id) {
        console.error('Product is missing an ID:', props.product);
        return;
      }

      const productForCart = {
        id: props.product.id,
        name: props.product.name,
        description: props.product.description,
        price: props.product.price,
        
        image: props.product.image || props.product.image1 || props.product.image2, 
        quantity: 1,
      };

      cartStore.addToCart(productForCart);
      console.log('Added to cart:', productForCart);
    };

    return { handleAddToCart, isHovered }; 
  },
};
</script>

<template>
  <div class="flex  space-x-[-200px] w-full sm:w-1/2 md:w-1/2  m-auto lg:w-[80%] mb-[45px] p-4  ">
    <div 
      class="relative"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
    >
      
      <div class="relative ">
        <img 
          :src="product.image1" 
          class="transition duration-900 relative z-20 w-[50%] h-auto aspect-[4/5] object-cover "
          :class="{ 'opacity-0': isHovered, 'opacity-100': !isHovered }"
          alt="Product Image"
        />
        <img 
          :src="product.image2" 
          class="absolute top-0 left-0  transition duration-900 w-[50%] h-auto aspect-[4/5] object-cover"
          :class="{ 'opacity-100 visible': isHovered, 'opacity-0 invisible': !isHovered }"
          alt="Fallback Image"
        />
      </div>

      
      <div class="absolute top-5 left-5 z-30 flex flex-col space-y-2">
        <span v-if="product.sale" class="h-12 w-12 leading-[48px] font-medium text-white text-center text-sm rounded-full bg-[#98d8ca]">
          -25%
        </span>
        <span v-if="product.hot" class="h-12 w-12 leading-[48px] font-medium text-white text-center text-sm rounded-full bg-red-500">
          New
        </span>
      </div>

             
          <div class="absolute top-5 left-[220px] z-30 flex flex-col space-y-2">
          <span :class="{ 'visible opacity-100': isHovered, 'invisible opacity-0': !isHovered }" class="transition duration-300 mt-1">
            <a href="#" class="w-10 h-10 leading-10 bg-white text-center text-gray-500 block rounded-full hover:text-gray-800 shadow">
              <i class="ion-android-favorite-outline"></i>
            </a>
          </span>
          <span :class="{ 'visible opacity-100': isHovered, 'invisible opacity-0': !isHovered }" class="transition duration-600 mt-1">
            <a href="#" class="w-10 h-10 leading-10 bg-white text-center text-gray-500 block rounded-full hover:text-gray-800 shadow">
              <i class="text-xl fas fa-sync-alt"></i>
            </a>
          </span>
          <span :class="{ 'visible opacity-100': isHovered, 'invisible opacity-0': !isHovered }" class="transition duration-900 mt-1">
            <div class="w-10 h-10 leading-10 bg-white text-center text-gray-500 block rounded-full hover:text-gray-800 shadow"
            @click="handleAddToCart">
              <i class="text-xl fas fa-shopping-cart" ></i>
            </div>
          </span>
        </div>
      </div>

      <!-- Product Content -->
      <div class="pt-6 ">
        <h3 class="mb-0">
          <a href="#" class="block text-[17px] leading-[1.6] font-normal text-gray-800 transition duration-600">
            {{ product.name }}
          </a>
        </h3>
        
        <div class="flex justify-start space-x-3 mt-2">
          <span class="text-sm font-semibold text-gray-800">${{ product.price }}</span>
          <span v-if="product.discountedPrice" class="text-sm font-semibold text-gray-400 line-through">${{ product.discountedPrice }}</span>
        </div>
        <div class="flex justify-center space-x-3 mt-2">
          <p class="text-gray-500 text-md font-semibold">{{ product.description }}</p>
        </div>

        <button class="relative bg-black text-white p-3 mt-4 w-[200px] font-semibold cursor-pointer hover:bg-white hover:text-black border border-black transition">
  SELECT OPTION
</button>

      </div>
   
  </div>
</template>
