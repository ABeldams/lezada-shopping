<script setup>
import ProductCard from '@/components/ProductCard.vue';
import img1 from '@/assets/images/products/furniture-4-1-600x800.jpg';
import img2 from '@/assets/images/products/furniture-4-2-600x800.jpg';
import img3 from '@/assets/images/products/furniture-5-1-600x800.jpg';
import img4 from '@/assets/images/products/furniture-5-2-600x800.jpg';
import img5 from '@/assets/images/products/furniture-6-1-600x800.jpg';
import img61 from '@/assets/images/products/furniture-7-1-600x800.jpg';
import img62 from '@/assets/images/products/furniture-7-2-600x800.jpg';
import img91 from '@/assets/images/products/furniture-9-1-600x800.jpg';
import Dining_1 from '@/assets/images/products/furniture-1-1-600x800.jpg';
import Dining_2 from '@/assets/images/products/furniture-1-2-600x800.jpg';
import sofa1 from '@/assets/images/products/furniture-3-1-600x800.jpg';
import sofa2 from '@/assets/images/products/furniture-3-2-600x800.jpg';
import coutch1 from '@/assets/images/products/furniture-2-1-600x800.jpg';
import coutch2 from '@/assets/images/products/furniture-2-2-600x800.jpg';
import d1 from '@/assets/images/products/furniture-8-1-600x800.jpg';
import d2 from '@/assets/images/products/furniture-8-1-600x800.jpg';


const products = [
  {
    name: "Dining Chair",
    image1: Dining_1,
    image2: Dining_2,
    price: 49.99,
    discountedPrice: 59.99,
    sale: true,
    hot: true
  },
  {
    name: "Hanged Candle Holder",
    image1: img3,
    image2: img4,
    price: 79.99,
    discountedPrice: 99.99,
    sale: true,
    hot: false
  },
  {
    name: "Wodden Candle Holder",
    image1: img5,
    image2: img5,
    price: 79.99,
    discountedPrice: 99.99,
    sale: true,
    hot: false
  },
  {
    name: "Candle Inside Glass",
    image1: img61,
    image2: img62,
    price: 79.99,
    discountedPrice: 99.99,
    sale: true,
    hot: false
  },
  {
    name: "Wooden Round Table",
    image1: img91,
    image2: img91,
    price: 79.99,
    discountedPrice: 99.99,
    sale: true,
    hot: false
  },
  {
    name: "Grey tool",
    image1: img1,
    image2: img2,
    price: 79.99,
    discountedPrice: 99.99,
    sale: true,
    hot: false
  },
  {
    name: "Sofa with Cushion",
    image1: sofa1,
    image2: sofa2,
    price: 79.99,
    discountedPrice: 99.99,
    sale: true,
    hot: false
  },
  {
    name: "Green Coutch",
    image1: coutch1,
    image2: coutch2,
    price: 79.99,
    discountedPrice: 99.99,
    sale: true,
    hot: false
    
  },
  {
    name: "Green Coutch",
    image1: d1,
    image2: d2,
    price: 79.99,
    discountedPrice: 99.99,
    sale: true,
    hot: false
    
  }


  

];
</script>

<template>
<div class="grid gap-2 sm:grid-cols-2 md:grid-cols-3 auto-rows-fr">
  <ProductCard v-for="(product, index) in products" :key="index" :product="product" class="w-full" />
</div>

</template>
