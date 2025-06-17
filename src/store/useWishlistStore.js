import { defineStore } from 'pinia';

export const useWishlistStore = defineStore('wishlist', {
  state: () => ({
    wishlistItems: [
      { id: 1, name: 'Dark Brown Leather Watch', price: 180, image: '@/assets/images/cart-product-image/01.jpg' },
      { id: 2, name: 'Dining Chair', price: 220, image: '@/assets/images/cart-product-image/02.jpg' },
      { id: 3, name: 'Creative Wooden Stand', price: 80, image: '@/assets/images/cart-product-image/03.jpg' },
    ],
    isWishlistOpen: false,
  }),
  getters: {
    wishlistCount: (state) => state.wishlistItems.length,
    wishlistTotal: (state) => state.wishlistItems.reduce((total, item) => total + item.price, 0),
  },
  actions: {
    toggleWishlist() {
      this.isWishlistOpen = !this.isWishlistOpen;
      console.log("Wishlist toggled. New state:", this.isWishlistOpen);  // Debugging log
    },
    addToWishlist(item) {
      if (!this.wishlistItems.some(wishItem => wishItem.id === item.id)) {
        this.wishlistItems.push(item);
      }
    },
    removeFromWishlist(id) {
      this.wishlistItems = this.wishlistItems.filter((item) => item.id !== id);
    },
    isInWishlist(id) {
      return this.wishlistItems.some((item) => item.id === id);
    }
  },
});
