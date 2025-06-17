import { defineStore } from 'pinia';
import { ref, computed, watchEffect } from 'vue';
import api from '@/api/api'; 
import { useAuthStore } from './productStore';
export const useCart = defineStore('cart', () => {
  const cartItems = ref([]);
  const isCartOpen = ref(false);
  const loading = ref(false);
  const error = ref(null);

  const auth = useAuthStore();

  const fetchCart = async () => {
    loading.value = true;
    error.value = null;

    try {
      const response = await api.get('/cart', {
        headers: { Authorization: `Bearer ${auth.token}` },
      });
      cartItems.value = response.data.data;
    } catch (err) {
      error.value = err.response?.data?.message || 'Failed to load cart';
    } finally {
      loading.value = false;
    }
  };

  const addToCart = async (productId, quantity = 1) => {
    loading.value = true;
    error.value = null;
  
    try {
      // Check if product already exists in cart
      const existingItem = cartItems.value.find(item => item.product_id === productId);
      const newQuantity = existingItem ? existingItem.quantity + quantity : quantity;
  
      const response = await api.post(
        '/cart/add',
        { product_id: productId, quantity: newQuantity },
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
  
      // Update cart items
      if (existingItem) {
        cartItems.value = cartItems.value.map(item =>
          item.product_id === productId
            ? { ...item, quantity: newQuantity }
            : item
        );
      } else {
        cartItems.value.push(response.data.data);
      }
  
      console.log('Cart updated:', cartItems.value);
  
    } catch (err) {
      error.value = err.response?.data?.message || 'Failed to add to cart';
      console.error('Add to cart error:', err);
    } finally {
      loading.value = false;
    }
  };
  
 
  const removeItem = async (cartItemId) => {
    loading.value = true;
    error.value = null;

    try {
      await api.delete(`/cart/${cartItemId}`, {
        headers: { Authorization: `Bearer ${auth.token}` },
      });

 
      cartItems.value = cartItems.value.filter(item => item.id !== cartItemId);
    } catch (err) {
      error.value = err.response?.data?.message || 'Failed to remove item';
    } finally {
      loading.value = false;
    }
  };

  const updateItemQuantity = async (cartItemId, newQuantity) => {
    loading.value = true;
    error.value = null;

    try {
      await api.put(`/cart/${cartItemId}`, { quantity: newQuantity }, {
        headers: { Authorization: `Bearer ${auth.token}` },
      });

      const updatedItemIndex = cartItems.value.findIndex(item => item.id === cartItemId);
      if (updatedItemIndex !== -1) {
        cartItems.value[updatedItemIndex].quantity = newQuantity; 
      }

      console.log('Updated quantity in cart:', cartItems.value[updatedItemIndex]);
    } catch (err) {
      error.value = err.response?.data?.message || 'Failed to update quantity';
    } finally {
      loading.value = false;
    }
  };

  // Clear the cart
  const clearCart = async () => {
    for (const item of cartItems.value) {
      await removeItem(item.id);
    }
  };

  
  const cartTotal = computed(() => 
    cartItems.value.reduce((total, item) => total + (item.product.price * item.quantity), 0)
  );

  
  const cartCount = computed(() => cartItems.value.length);

  
  const toggleCart = () => {
    isCartOpen.value = !isCartOpen.value;
  };

  
  watchEffect(() => {
    if (isCartOpen.value) {
      fetchCart();
    }
  });

  return {
    cartItems,
    isCartOpen,
    loading,
    error,
    cartTotal,
    cartCount,
    fetchCart,
    addToCart,
    removeItem,
    updateItemQuantity,
    toggleCart,
    clearCart,
  };
});
