<script setup>
import { onMounted } from 'vue'
import { useAuthStore } from '@/store/productStore'
import ProductCard from '@/components/pCard.vue'



const productStore = useAuthStore()
  productStore.login()
onMounted(() => {
  productStore.fetchProducts()
})
</script>

<template>
  <div class="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
  <ProductCard 
    v-for="(product, index) in productStore.products" 
    :key="product.id"
    :product="{ 
      id: product.id,
      name: product.name, 
      price: product.price,
      discountedPrice: product.discounted_price || null,
      image1: product.image, 
      image2: product.hover_image || product.image,
      sale: product.on_sale || false,
      hot: product.is_new || false
    }"
    class="w-full"
  />
</div>
</template>
