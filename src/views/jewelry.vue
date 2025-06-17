<script setup>
import { onMounted } from 'vue'
import { useAuthStore } from '@/store/productStore'

const productStore = useAuthStore()

onMounted(() => {
  productStore.getProductsByCategory('Home & Living')
})
</script>

<template>
  <div>
    <div v-if="productStore.loading">Loading...</div>
    <div v-else-if="productStore.error">{{ productStore.error }}</div>
    <div v-else>
      <div v-for="product in productStore.products" :key="product.id">
        <h3>{{ product.name }}</h3>
        <img :src="product.image" alt="" width="200" />
        <p>{{ product.description }}</p>
        <p>${{ product.price }}</p>
      </div>
    </div>
  </div>
</template>
