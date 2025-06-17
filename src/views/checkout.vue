<script setup>
import Footers from '@/components/Footers.vue';
import TopNavBar from '@/components/NavBar.vue';
import { ref, computed, onMounted } from 'vue';
import { useOrdersStore } from '@/store/orders';
import { useCart } from '@/store/cart';

const ordersStore = useOrdersStore();
const cartStore=useCart()
const active = ref(true);
const cartItems = computed(() => cartStore.cartItems || []);
const hasCartItems = computed(() => cartItems.value.length > 0);
const hasOrders = computed(() => ordersStore.orders.length > 0);


// Form Data
const formData = ref({
  payment_method: 'card',
  shipping_address: '',
  billing_address: '',
});

const sameAsShipping = ref(true);

// Safe computed properties

const total = computed(() => {
  return cartItems.value.reduce(
    (sum, item) => sum + (item.price * item.quantity),
    0
  );
});
// Fetch orders on component mount
onMounted(async () => {
  try {
    await ordersStore.fetchOrders();
  } catch (error) {
    console.error('Failed to fetch orders:', error);
  }
});

const handleSubmit = async () => {
  if (sameAsShipping.value) {
    formData.value.billing_address = formData.value.shipping_address;
  }

  try {
    await ordersStore.placeOrder({
      payment_method: formData.value.payment_method,
      shipping_address: formData.value.shipping_address,
      billing_address: formData.value.billing_address
    });
    
    // Refresh orders after successful placement
    await ordersStore.fetchOrders();
    
    // Clear form after successful submission
    formData.value = {
      payment_method: 'card',
      shipping_address: '',
      billing_address: ''
    };
    
  } catch (error) {
    console.error('Order placement failed:', error);
  }
};
</script>

<template>
  <TopNavBar/>
  
  <div class="bg-gray-100 mt-[90px] p-10">
    <h1 class="sm:text-3xl md:text-6xl lg:text-6xl p-4 text-black">Checkout</h1>
    <div class="flex space-y-0">
      <p class="text-xl p-4 text-gray-400 hover:text-black cursor-pointer">
        <RouterLink to="/" class="hover:text-black">Home /</RouterLink>
      </p>
      <p class="text-xl p-4" :class="active?'text-black':'text-gray-400'">Checkout</p>
    </div>
  </div>

  <div class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Left Column: Checkout Form -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold mb-6">Checkout Details</h2>
        
        <!-- Error Message -->
        <div v-if="ordersStore.error" class="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {{ ordersStore.error }}
        </div>
        
        <!-- Success Message -->
        <div v-if="ordersStore.success" class="mb-4 p-3 bg-green-100 text-green-700 rounded">
          Order placed successfully!
        </div>
        
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <!-- Payment Method -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
            <select
              v-model="formData.payment_method"
              class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="card">Credit Card</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>

          <!-- Shipping Address -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Shipping Address</label>
            <input
              v-model="formData.shipping_address"
              type="text"
              class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="123 Main St"
              required
            />
          </div>

          <!-- Billing Address -->
          <div>
            <label class="flex items-center space-x-2">
              <input
                type="checkbox"
                v-model="sameAsShipping"
                class="rounded text-blue-500"
              />
              <span class="text-sm text-gray-700">Billing address same as shipping</span>
            </label>
          </div>

          <div v-if="!sameAsShipping">
            <label class="block text-sm font-medium text-gray-700 mb-1">Billing Address</label>
            <input
              v-model="formData.billing_address"
              type="text"
              class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="456 Billing Ave"
              required
            />
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            :disabled="ordersStore.loading"
          >
            {{ ordersStore.loading ? 'Processing...' : 'Place Order' }}
          </button>
        </form>
      </div>

<!-- Right Column: Order Summary -->
<div class="bg-white p-6 rounded-lg shadow-md">
  <h2 class="text-2xl font-bold mb-6">Order Summary</h2>
  
  <div v-if="hasOrders" class="mt-4 space-y-6">
    <h3 class="font-medium text-lg">Your Recent Orders</h3>
    
    <div class="space-y-4 max-h-[500px] overflow-y-auto pr-2">
      <div v-for="order in ordersStore.orders" :key="order.id" 
           class="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
        
        <!-- Order Header -->
        <div class="flex justify-between items-center">
          <div>
            <p class="font-medium">Order #{{ order.id }}</p>
            <p class="text-sm text-gray-500">
              {{ new Date(order.created_at).toLocaleDateString() }}
            </p>
          </div>
          <div class="text-right">
            <span class="block font-semibold">${{ order.total_amount }}</span>
            <span class="text-xs px-2 py-1 rounded-full" 
                  :class="{
                    'bg-green-100 text-green-800': order.status === 'completed',
                    'bg-blue-100 text-blue-800': order.status === 'processing',
                    'bg-yellow-100 text-yellow-800': order.status === 'pending'
                  }">
              {{ order.status }}
            </span>
          </div>
        </div>
        
        <!-- Collapsible Order Details -->
        <details class="mt-3 group">
          <summary class="flex justify-between items-center cursor-pointer text-sm font-medium text-gray-600">
            <span>Order details</span>
            <svg class="w-4 h-4 transform group-open:rotate-180 transition-transform" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </summary>
          
          <div class="mt-2 pl-2 space-y-3 text-sm">
            <!-- Products -->
            <div class="space-y-1">
              <p class="font-medium text-gray-700">Items:</p>
              <div v-for="item in order.items" :key="item.id" 
                   class="flex justify-between pl-2">
                <span>{{ item.product.name }} × {{ item.quantity }}</span>
                <span>${{ item.subtotal }}</span>
              </div>
            </div>
            
            <!-- Shipping -->
            <div>
              <p class="font-medium text-gray-700">Shipping:</p>
              <p class="pl-2">{{ order.shipping_address }}</p>
              <p v-if="order.tracking_number" class="pl-2">
                <a :href="getTrackingLink(order.tracking_number)" 
                   target="_blank"
                   class="text-blue-500 hover:underline">
                  Track package #{{ order.tracking_number }}
                </a>
              </p>
            </div>
            
            <!-- Payment Status -->
            <div>
              <p class="font-medium text-gray-700">Payment:</p>
              <p class="pl-2 capitalize">{{ order.payment_status }}</p>
            </div>
          </div>
        </details>
      </div>
    </div>
  </div>
</div>
    </div>
  </div>


  

  <Footers/>
</template>