import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [
      { id: 1, name: 'Dark Brown Leather Watch', price: 180, quantity: 2, image: '@/assets/images/cart-product-image/01.jpg' },
      { id: 2, name: 'Dining Chair', price: 220, quantity: 2, image: '@/assets/images/cart-product-image/02.jpg' },
      { id: 3, name: 'Creative Wooden Stand', price: 80, quantity: 2, image: '@/assets/images/cart-product-image/03.jpg' },
    ],
    isCartOpen: false,
  }),
  getters: {
    cartCount: (state) => state.cartItems.reduce((total, item) => total + item.quantity, 0),
    cartTotal: (state) => state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
  },
  actions: {
    toggleCart() {
      this.isCartOpen = !this.isCartOpen;
      console.log("Cart toggled. New state:", this.isCartOpen);  // Debugging log
    },
    removeItem(id) {
      this.cartItems = this.cartItems.filter((item) => item.id !== id);
    },
  },
});
