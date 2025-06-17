<script setup>
import { ref ,onMounted} from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useMotion } from "@vueuse/motion";
import TopNavBar from "@/components/NavBar.vue";

import image1 from "@/assets/images/revimages/smart/slider_1.jpg";
import image2 from "@/assets/images/revimages/smart/slider_2.png";
import image3 from "@/assets/images/revimages/smart/slider_3.png";
import bgImage from "@/assets/images/revimages/smart/banner-carousel-1.jpg"
import bgImage2 from "@/assets/images/revimages/smart/banner-carousel-2.jpg"
import ProductsList from "@/components/productsList.vue";
import Footers from "@/components/Footers.vue";



const slides = ref([
  {
    image: image1,
    bgImage:bgImage,
    
    title: "NEW ARRIVALS",
    subtitle: "Summer 2020.",
  },
  {

    image: image2,
    bgImage:bgImage2,
    title: "NEW ARRIVALS",
    subtitle: "Summer 2020.",
  },

  {
    image: image3,
    bgImage:bgImage2,
    title: "NEW ARRIVALS",
    subtitle: "Summer 2020.",
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
  <div class="w-full mt-10 h-[1000px]">
    <swiper
      :modules="[Pagination, Navigation, Autoplay]"
      :slides-per-view="1"
      :space-between="20"
      :loop="true"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      :pagination="{ clickable: true }"
      :navigation="true"
      class="w-full h-[500px] relative"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index" class="  relative"
      >
        <img :src="slide.bgImage"  class="w-full h-full bg-no-repeat object-cover z-50"/>

        <img :src="slide.image" class="absolute  top-10 left-[5%] bg-no-repeat z-100" />

        <!-- Text Overlay with Animation -->
        <div ref="textElement"
          class="absolute right-14 top-1/2 transform -translate-y-1/2 -translate-x-1/2   text-black     max-w-md"
        >
          <h2 class="text-xl transition-all ease-out duration-1000   font-sans">{{ slide.title }}</h2>
          <p class="text-[100px]  font-bold font-serif mt-4">{{ slide.subtitle }}</p>
          <button class="text-white bg-black font-semibold p-3 w-40">SHOP NOW</button>
        </div>
      </swiper-slide>
    </swiper>
  </div>
  <div class="">
    <h1 class="text-center text-5xl">Clever & unique ideas</h1>

    
</div>

<div class="flex justify-center items-center space-x-5 m-5 ">
        <div class="relative w-[350px] overflow-hidden">
            <img  src="@/assets/images/revimages/smart/category-smart-3.jpg"
            class="transition-all transform w-[100%] duration-[600ms] ease-in-out hover:scale-[1.1]"/>
            <h1 class="text-xl absolute bottom-[60px] left-5">tumbler alarm clock</h1>
            <h1 class="text-md font-semibold absolute left-5 bottom-5">$19.00</h1>

        </div>

        <div class="relative w-[700px] overflow-hidden">
            <img  src="@/assets/images/revimages/smart/category-smart-1.jpg"
            class="transition-all transform w-[100%]  duration-[600ms] ease-in-out hover:scale-[1.1]"
            />
            <h1 class="text-4xl absolute top-[60px] right-20">Prismatic<br> Table</h1>
            <h1 class="text-md font-semibold absolute right-[170px] top-40 underline">SHOP NOW</h1>

        </div>
 
  </div>

  <div class="flex justify-center items-center space-x-5 m-5 ">
        <div class="relative w-[700px] overflow-hidden">
            <img  src="@/assets/images/revimages/smart/category-smart-2.jpg"
            class="transition-all transform w-[100%] duration-[600ms] ease-in-out hover:scale-[1.1]"/>
            <h1 class="text-4xl absolute top-[60px] left-20">Wodden Birds<br> Decor</h1>
            <h1 class="text-md font-semibold absolute left-20 top-40 underline">SHOP NOW</h1>
        </div>

        <div class="relative overflow-hidden w-[350px]">
            <img  src="@/assets/images/revimages/smart/category-smart-4.jpg"
            class="transition-all transform w-[100%] duration-[600ms] ease-in-out hover:scale-[1.1]"/>
            <h1 class="text-xl absolute bottom-[60px] left-5">Rocking Chair</h1>
            <h1 class="text-md font-semibold absolute left-5 bottom-5">$19.00</h1>

        </div>
 
  </div>


  <div class="flex justify-center">
    <div class="grid grid-cols-2 gap-4 w-fit place-items-center">
        <div class="relative">
            <img src="@/assets/images/revimages/smart/countdown-3.jpg"/>
           
        </div>

        <div class="p-4">
            <h1 class="text-5xl text-center">Deal of the day</h1>
            <div class="flex justify-between items-start">
                <div class="relative mt-10 ">
                    <h1 class="text-5xl text-gray-400">0 :</h1>
                    <h3 class="text-gray-400">Days</h3>

                </div>
                <div class="relative mt-10">
                    <h1 class="text-5xl text-gray-400">0 :</h1>
                    <h3 class="text-gray-400">Hours</h3>

                </div>
                <div class="relative mt-10">
                    <h1 class="text-5xl text-gray-400">0 :</h1>
                    <h3 class="text-gray-400">Minutes</h3>

                </div>
                <div class="relative mt-10">
                    <h1 class="text-5xl text-gray-400">0 </h1>
                    <h3 class="text-gray-400">Seconds</h3>

                </div>

            </div>
        </div>
    </div>
</div>

<div class="mt-[100px]">
    <h1 class="text-5xl text-center">Popular this week</h1>
</div>


<ProductsList/>
  <!--<div class="flex justify-center items-center  space-x-2">
      <button
        v-for="page in productStore.totalPages"
        :key="page"
        @click="changePage(page)"
        class="px-2 font-semibold text-md w-5 h-5"
        :class="{ ' text-white  border-2 rounded-xl  border-gray-800': productStore.currentPage === page, 'w-[0px] h-[15px] text-white  bg-gray-400 rounded-[100%]': productStore.currentPage !== page }"
      >
        {{ }}
      </button>
    </div>-->
  <Footers/>
</template>
<style scoped>

/* Customize Swiper navigation buttons */
.swiper{
    height: 80%;
}
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: rgba(0, 0, 0, 0.5);
  background:white;
  padding: 10px;
  width:50px;
  height:50px;
  margin-top: 10px;
 
}
:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  font-size: 16px; /* Adjust arrow icon size */
}
:deep(.swiper-pagination-bullet)
 {
   width:10px;
   height:10px;
   border: 1px solid transparent;
}

:deep(.swiper-pagination-bullet-active)
 {
   width:15px;
   height:15px;
   background-color: rgb(241, 238, 238);
   border: 1px solid black;
}
</style>