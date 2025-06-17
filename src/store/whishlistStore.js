import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import api from '@/api/api'; 
import { useAuthStore } from './productStore'; 
export const useWishlistStore = defineStore('wishlist', () => {
  const items = ref([]);
  const loading = ref(false);
  const error = ref(null);
  const isWishlistOpen = ref(false);
  const toggleWishlist = () => {
    isWishlistOpen.value = !isWishlistOpen.value;
  };
  const wishlistCount = computed(() => items.value.length);
  const auth = useAuthStore(); 
  const getWishlist = async () => {
    loading.value = true;
    error.value = null;
    try {
      const response = await api.get('/wishlist', {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      console.log('Wishlist API raw response:', response.data);
      items.value = response.data.data.map(item => ({
        ...item.product,
        wishlist_id: item.id,
      }));
    } catch (err) {
      console.error('Error fetching wishlist:', err);
      error.value = err.response?.data?.message || 'Failed ';
    } finally {
      loading.value = false;
    }
  };
  

  const addToWishlist = async (productId) => {
    if (!auth.token) {
      error.value = 'You must be logged in ';
      return;
    }

    loading.value = true;
    error.value = null;

    try {
      const response = await api.post(
        '/wishlist/add',
        { product_id: productId },
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );

      const newItem = response.data.data;

      const processedItem = {
        ...newItem.product,
        wishlist_id: newItem.id,
      };

      
      if (!items.value.some(item => item.wishlist_id === processedItem.wishlist_id)) {
        items.value.push(processedItem);
      }
    } catch (err) {
      error.value = err.response?.data?.message || 'Failed to add to wishlist';
    } finally {
      loading.value = false;
    }
  };

  
  const removeFromWishlist = async (wishlistItemId) => {
    if (!auth.token) {
      error.value = 'You must be logged in ';
      return;
    }

    try {
      await api.delete(`/wishlist/${wishlistItemId}`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      items.value = items.value.filter(item => item.wishlist_id !== wishlistItemId);
    } catch (err) {
      console.error('Remove failed:', err.response?.data || err.message);
      error.value = err.response?.data?.message || 'Failed to remove item ';
    }
  };

  const clearWishlist = async () => {
    if (!auth.token) {
      error.value = 'You must be logged in to clear your wishlist';
      return;
    }
  
    loading.value = true;
    error.value = null;
  
    try {
      // Create array of delete promises
      const deletePromises = items.value.map(item =>
        api.delete(`/wishlist/${item.wishlist_id}`, {
          headers: {
            Authorization: `Bearer ${auth.token}`
          }
        })
      );
  
      // Execute all delete requests in parallel
      await Promise.all(deletePromises);
      
      // Clear local state
      items.value = [];
      
    } catch (err) {
      error.value = err.response?.data?.message || 'Failed to clear wishlist';
      console.error('Clear wishlist error:', err);
    } finally {
      loading.value = false;
    }
  };

  return {
    items,
    loading,
    error,
    getWishlist,
    addToWishlist,
    removeFromWishlist,
    wishlistCount,
    isWishlistOpen,
    toggleWishlist,
    clearWishlist
  };
});
