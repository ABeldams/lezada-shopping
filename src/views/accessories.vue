<script setup>
import Footers from '@/components/Footers.vue';
import TopNavBar from '@/components/NavBar.vue';
import image1 from "@/assets/images/instagram/1.jpg";
import image2 from "@/assets/images/instagram/2.jpg";
import image3 from "@/assets/images/instagram/3.jpg";
import image4 from "@/assets/images/instagram/4.jpg";
import image5 from "@/assets/images/instagram/5.jpg";
import image6 from "@/assets/images/instagram/6.jpg";
import image7 from "@/assets/images/instagram/7.jpg";
import image8 from "@/assets/images/instagram/8.jpg";
import { ref,onMounted } from 'vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = ref([
  {
    image: image1,
  },
  {

    image: image2,
  
  },

  {
    image: image3,
  
  },
  {
    image: image4,
  
  },
  {
    image: image5,
  
  },
  {
    image: image6,
  
  },
  {
    image: image7,
  
  },
  {
    image: image8,
  
  },
  
]);
const textElement=ref(null)
onMounted(() => {
  if (textElement.value) {
    useMotion(textElement.value, {
      initial: { opacity: 0, x: -50 },
      enter: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    });
  }
});

</script>




<template>
<TopNavBar/>
<div class="mt-[200px]">
<h1 class="text-5xl text-gray-800 text-center ">Best selling products</h1>
<p class="text-center mt-10">Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse suscipit 
    sagittis leo<br> estibulum issim Lorem ipsum dolor sit amet, consectetur cing elit.</p>

</div>


<div class="flex mx-auto justify-center items-center p-5 space-x-[150px]">
    <div class="relative w-[400px] overflow-hidden">
        <h1 class="absolute z-50 top-5 left-2 text-2xl text-black font-semibold ">01/</h1>
        <img src="@/assets/images/category/banner-best-seller-1.jpg"
        class=" w-[100%] transition-all   duration-[600ms] ease-in-out transform hover:scale-[1.1]"/>

        <div class="flex-col ">
         <h1 class="absolute text-xl bottom-10 m-4 ">Minimal Leather Watch</h1>
         <h1 class="absolute bottom-2 font-bold m-4">$80.00</h1>
        </div>

    </div>

    <div class="relative w-[300px] overflow-hidden">
        <h1 class="absolute  z-50 text-xl font-semibold m-10">02/</h1>
        <img src="@/assets/images/category/banner-bestseller-2.jpg"
        class=" w-[100%] transition-all   duration-[600ms] ease-in-out transform hover:scale-[1.1]"/>

        <div class="flex-col space-y-3 ">
         <h1 class="absolute text-xl bottom-10 m-4 ">Hoho Bag</h1>
         <h1 class="absolute bottom-2 font-bold m-4">$100.00</h1>
        </div>
    </div>

</div>



<div class="flex mx-auto justify-center items-center p-5 space-x-[150px]">
    <div class="relative w-[300px] overflow-hidden">
        <h1 class="absolute top-5 z-50 text-2xl text-gray-950 font-semibold ">03/</h1>
        <img src="@/assets/images/category/banner-bestseller-3.jpg"
        class=" w-[100%] transition-all   duration-[600ms] ease-in-out transform hover:scale-[1.1]"/>

        <div class="flex-col ">
         <h1 class="absolute text-xl bottom-10 m-4 ">Minimal Leather Watch</h1>
         <h1 class="absolute bottom-2 font-bold m-4">$80.00</h1>
        </div>

    </div>

    <div class="relative w-[400px] overflow-hidden">
        <h1 class="absolute text-xl z-50 font-semibold m-10">04/</h1>
        <img src="@/assets/images/category/banner-bestseller-4.jpg"
        class=" w-[100%] transition-all   duration-[600ms] ease-in-out transform hover:scale-[1.1]"/>

        <div class="flex-col space-y-3 ">
         <h1 class="absolute text-xl bottom-10 m-4 ">Hoho Bag</h1>
         <h1 class="absolute bottom-2 font-bold m-4">$100.00</h1>
        </div>
    </div>

</div>




<div class="flex mx-auto justify-start items-center p-5 space-x-[150px]">
    <div class="relative w-[1000px] overflow-hidden">
        <h1 class="absolute top-5 left-2 z-50 text-2xl text-gray-950 font-semibold ">05/</h1>
        <img src="@/assets/images/category/banner-best-seller-5.jpg"
        class=" w-[100%] transition-all   duration-[600ms] ease-in-out transform hover:scale-[1.1]"/>

        <div class="flex-col ">
         <h1 class="absolute text-xl bottom-10 m-4 ">Minimal Leather Watch</h1>
         <h1 class="absolute bottom-2 font-bold m-4">$80.00</h1>
        </div>

    </div>


</div>







<div class="flex mx-auto justify-center items-center p-5 space-x-[150px]">
    <div class="relative w-[400px] overflow-hidden">
        <h1 class="absolute top-5 z-50 left-2 text-2xl text-gray-950 font-semibold ">06/</h1>
        <img src="@/assets/images/category/banner-bestseller-6.jpg"
        class=" w-[100%] transition-all   duration-[600ms] ease-in-out transform hover:scale-[1.1]"/>

        <div class="flex-col ">
         <h1 class="absolute text-xl bottom-10 m-4 ">Frame Sunglass</h1>
         <h1 class="absolute bottom-2 font-bold m-4">$90.00</h1>
        </div>

    </div>

    <div class="relative w-[400px] overflow-hidden">
        <h1 class="absolute text-xl z-50 font-semibold m-10">07/</h1>
        <img src="@/assets/images/category/banner-bestseller-7.jpg"
        class=" w-[100%] transition-all   duration-[600ms] ease-in-out transform hover:scale-[1.1]"/>

        <div class="flex-col space-y-3 ">
         <h1 class="absolute text-xl bottom-10 m-4 ">Pastel Bag</h1>
         <h1 class="absolute bottom-2 font-bold m-4">$90.00</h1>
        </div>
    </div>

</div>


<div class="flex mx-auto justify-end items-center p-5 space-x-[150px]">
    <div class="relative w-[1000px] overflow-hidden">
        <h1 class="absolute top-5 z-50 left-2 text-2xl text-gray-950 font-semibold ">08/</h1>
        <img src="@/assets/images/category/banner-bestseller-8.jpg"
        class=" w-[100%] transition-all   duration-[600ms] ease-in-out transform hover:scale-[1.1]"/>

        <div class="flex-col ">
         <h1 class="absolute text-xl bottom-10 m-4 ">Minimal Leather Watch</h1>
         <h1 class="absolute bottom-2 font-bold m-4">$80.00</h1>
        </div>

    </div>


</div>



<div class="flex mx-auto justify-center items-center p-5 space-x-[150px]">
    <div class="relative w-[400px] overflow-hidden">
        <h1 class="absolute top-5 z-50 text-2xl left-5 text-gray-950 font-semibold ">09/</h1>
        <img src="@/assets/images/category/banner-bestseller-9.jpg"
        class=" w-[100%] transition-all   duration-[600ms] ease-in-out transform hover:scale-[1.1]"/>

        <div class="flex-col ">
         <h1 class="absolute text-xl bottom-10 m-4 ">Frame Sunglass</h1>
         <h1 class="absolute bottom-2  font-bold m-4">$90.00</h1>
        </div>

    </div>

    <div class="relative w-[400px] overflow-hidden">
        <h1 class="absolute text-xl z-50 font-semibold m-10">10/</h1>
        <img src="@/assets/images/category/banner-bestseller-10.jpg"
        class=" w-[100%] transition-all   duration-[600ms] ease-in-out transform hover:scale-[1.1]"/>

        <div class="flex-col space-y-3 ">
         <h1 class="absolute text-xl bottom-10 m-4 ">Pastel Bag</h1>
         <h1 class="absolute bottom-2 font-bold m-4">$90.00</h1>
        </div>
    </div>

</div>


<div class="m-auto w-[300px] justify-center items-center">
<button class="bg-black text-white p-2 w-[200px] h-[50px] font-semibold">+ ONLINE STORE</button>
</div>


<div class="flex mt-10 w-[100%] p-5 items-center ">
    <swiper
      :modules="[Pagination, Navigation, Autoplay]"
      :slides-per-view="4"
      :space-between="20"
      :loop="true"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      :pagination="false"
      :navigation="true"
      class="w-full h-[300px] relative "
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index" class="  relative"
      >
       
        <img :src="slide.image" class=" w-[95%]  bg-no-repeat z-100" />

       
      </swiper-slide>
    </swiper>

    <div class="space-x-10 justify-center text-center items-center">
        <h1 class="font-semibold">@lezada_shop</h1>
        <h1 class="text-3xl">Follow us on Instagram</h1>
    </div>
  </div>
<Footers/>
</template>