<script setup>
import { ref } from "vue";
import HamburgerOverlay from "./HamburgerOverlay.vue";
import Hamburger from "./icons/hamburger.vue";
const isOpen = ref(false);

const open = () => {
  isOpen.value = true;
};

const close = () => {
  isOpen.value = false;
};
</script>

<template>
  <div>
    <!-- Search Icon -->
    <Hamburger @click="open"/>

    
    <!-- Search Overlay Component -->
    <HamburgerOverlay :isOpen="isOpen" :closeSearch="close" />
  </div>
</template>
