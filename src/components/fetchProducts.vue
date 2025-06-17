<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const baseURL = 'http://134.209.223.106/api';
const email = 'test@example.com';
const password = 'password123';

const token = ref(localStorage.getItem('token') || '');
const products = ref([]);
const error = ref(null);

// Function to login and get token
const login = async () => {
  try {
    const response = await axios.post(`${baseURL}/login`, { email, password }, {
      headers: { 'Accept': 'application/json' }
    });

    console.log('Login response:', response.data);
    token.value = response.data?.data?.token;

    if (!token.value) {
      console.error('No token received! API response:', response.data);
      return;
    }

    localStorage.setItem('token', token.value);
    console.log('Token stored:', token.value);
  } catch (err) {
    console.error('Login failed:', err.response?.data || err.message);
  }
};

// Function to fetch products
const fetchProducts = async () => {
  if (!token.value) {
    console.error('No token found. Please log in first.');
    return;
  }

  try {
    const response = await axios.get(`${baseURL}/products`, {
      headers: { 
        'Authorization': `Bearer ${token.value}`,
        'Accept': 'application/json'
      }
    });

    console.log('Products:', response.data);
    products.value = response.data.data.data; // Correct extraction of products list
  } catch (err) {
    console.error('API Error:', err.response?.data || err.message);
  }
};

// Auto-login and fetch products on component mount
onMounted(async () => {
  if (!token.value) {
    await login();
  }
  await fetchProducts();
});
</script>

<template>
  <div>
    <h2>Products</h2>
    <p v-if="error" style="color: red">{{ error }}</p>
    <div class="grid gap-5">
    <ul v-if="products.length">
      <li v-for="product in products" :key="product.id">
        <img :src="product.image" alt="Product Image" width="100">
        <strong>{{ product.name }}</strong> - ${{ product.price }}
        <p>{{ product.description }}</p>
      </li>
    </ul>
    <p v-else>No products available.</p>
</div>
  </div>
</template>
