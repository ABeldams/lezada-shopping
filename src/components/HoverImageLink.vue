<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  to: Object, 
  text: String, 
  imageSrc: String, 
  bottom: String,
  left: String,
  width: String,
  top:String
});

const isVisible = ref(false);

const images = import.meta.glob('@/assets/images/home-preview/*', { eager: true });


const imagePath = computed(() => {
  return images[`/src/assets/images/home-preview/${props.imageSrc}`]?.default || "";
});
</script>

<template>
  <li class="relative">
  <RouterLink :to="to" 
    class="text-[15px] font-medium text-[#7e7e7e]"
    @mouseover="isVisible = true" 
    @mouseleave="isVisible = false">
    {{ text }}
  </RouterLink>
  
  <img v-if="imagePath" :src="imagePath"
    class="absolute z-[99] rounded-md  shadow-lg transition-all duration-[3000ms] transform ease-in-out"
    :class="[ 
      `bottom-[${bottom}] left-[${left}] top-[${top}] w-[${width}] h-auto`,
      isVisible ? 'opacity-100 visible ' : 'opacity-0 hidden'
    ]"
    alt="Preview Image" />
</li>

</template>
