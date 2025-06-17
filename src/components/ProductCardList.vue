<script setup>
import { onMounted } from 'vue'
import { useAuthStore } from '@/store/productStore'
import ProductCard from '@/components/PCardLIST.vue'
import fallbackImages from '@/api/fallbackImages'

const productStore = useAuthStore()

onMounted(() => {
  productStore.fetchProducts() // ✅ Fetch products when component mounts
})
</script>

<template>
  <div class="">
    <ProductCard 
      v-for="(product) in productStore.products" 
      :key="product.id"
      :product="{ 
        id: product.id,
        name: product.name,
        description:product.description,
        price: product.price,
        image1: product.image, 
        //image2: fallbackImages[index % fallbackImages.length], 
        image2:product.hover_image,
        sale: Math.random() > 0.5, 
        hot: Math.random() > 0.5  
      }" 
    />
  </div>
</template>
