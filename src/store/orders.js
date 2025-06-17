import { defineStore } from 'pinia';
import { ref } from 'vue';
import api from '@/api/api';
import { useAuthStore } from './authStore';
import { useCart } from './cart'; // Import cart store

export const useOrdersStore = defineStore('orders', () => {
  // State
  const orders = ref([]);
  const loading = ref(false);
  const error = ref(null);
  const success = ref(false);

  // Stores
  const auth = useAuthStore();
  const cartStore = useCart(); // Use cart store

  // Actions
  const fetchOrders = async () => {
    loading.value = true;
    error.value = null;
    
    try {
      const response = await api.get('/orders', {
        headers: { 
          Authorization: `Bearer ${auth.token}`,
          'Content-Type': 'application/json'
        }
      });
      
      orders.value = response.data?.data.data || response.data || [];
      return orders.value;
    } catch (err) {
      error.value = err.response?.data?.message || 'Failed to load orders';
      console.error('Fetch error:', err.response?.data);
      throw err;
    } finally {
      loading.value = false;
    }
  };

  const placeOrder = async (orderData) => {
    loading.value = true;
    error.value = null;
    success.value = false;

    try {
      const response = await api.post('/orders/checkout', {
        payment_method: orderData.payment_method,
        shipping_address: orderData.shipping_address,
        billing_address: orderData.billing_address,
        items: cartStore.cartItems // Get items from cart store
      }, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
          'Content-Type': 'application/json'
        }
      });

      // Clear cart through cart store after successful order
      cartStore.clearCart();
      
      // Refresh orders
      await fetchOrders();
      
      success.value = true;
      return response.data;
    } catch (err) {
      error.value = err.response?.data?.message || 'Checkout failed';
      console.error('Checkout error:', err.response?.data);
      throw err;
    } finally {
      loading.value = false;
    }
  };

  return {
    // State
    orders,
    loading,
    error,
    success,

    // Actions
    fetchOrders,
    placeOrder
  };
});