<script setup>
import { ref } from "vue";
import SearchOverlay from "./SearchOverlay.vue";
import Search from "./icons/Search.vue";
const isSearchOpen = ref(false);

const openSearch = () => {
  isSearchOpen.value = true;
};

const closeSearch = () => {
  isSearchOpen.value = false;
};
</script>

<template>
  <div>
    <!-- Search Icon -->
    <Search @click="openSearch"/>

    
    <!-- Search Overlay Component -->
    <SearchOverlay :isOpen="isSearchOpen" :closeSearch="closeSearch" />
  </div>
</template>
