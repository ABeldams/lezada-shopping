<script setup>
import Footers from '@/components/Footers.vue';
import TopNavBar from '@/components/NavBar.vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ProductsList from '@/components/productsList.vue';
import { ref } from 'vue';

const slides = [
  {
    title: "Spring Collection",
    subtitle: "New Arrivals",
    image: "/images/revimages/perfumes/slider-homepage13-img2.png",
    link: "",
  },
  {
    title: "New Products",
    subtitle: "Skin Care",
    image: "/images/revimages/perfumes/slider-homepage13-img2.png",
    link: "",
  },
];

const active=ref('Popular /')

const setActive =(item)=>{
    active.value=item
}
const items=['Popular /','New /','Sale']

</script>

<template>
<TopNavBar/>
<div class="mb-20 md:mb-[90px]">
  <div class="container mx-auto px-4 xl:px-8"> <!-- wide container -->
    <div class="flex flex-wrap -mx-2"> <!-- row with negative margin -->
      <!-- Slider Column -->
      <div class="w-full lg:w-6/12 px-2 mb-6 md:mb-[40px] sm:mb-[40px]">
        <div class="relative w-full">
          <Swiper
            :modules="[Autoplay, Pagination, Navigation]"
            :slides-per-view="1"
            :loop="true"
            :autoplay="{ delay: 5000 }"
            :pagination="{ clickable: true }"
            class="w-full"
          >
            <SwiperSlide v-for="(slide, index) in slides" :key="index">
              <div class="relative w-full h-[400px] md:h-[500px] flex items-center justify-center bg-gray-100">
                <img
                  :src="slide.image"
                  alt="slide image"
                  class="absolute inset-0 w-full h-full object-cover"
                />
                <div class="relative z-10 text-center text-gray-900 px-4">
                  <h3 class="text-sm md:text-lg font-semibold tracking-widest">{{ slide.subtitle }}</h3>
                  <h2 class="text-2xl md:text-4xl font-light mt-2">{{ slide.title }}</h2>
                  <a
                    :href="slide.link"
                    class="mt-4 inline-block border-b-2 border-red-500 text-red-500 font-medium hover:border-red-600 hover:text-red-600 transition-colors"
                  >
                    SHOP COLLECTION
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <!-- Banners Column -->
      <div class="w-full lg:w-6/12 px-2">
        <div class="flex flex-wrap -mx-2">
          <!-- Top Banner -->
          <div class="w-full px-2 mb-6 md:mb-[40px]">
            <div class="group relative overflow-hidden rounded-lg">
              <a href="shop-left-sidebar.html" class="block">
                <img 
                  src="/images/banners/banner-comestic-1.jpg" 
                  class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" 
                  alt="Perfumes for women"
                />
                <div class="absolute bottom-4 left-4 text-black">
                  <span class="block text-xl md:text-2xl font-medium">
                    Perfumes <span class="block">for women</span>
                  </span>
                  <span class="block text-lg md:text-xl font-light mt-1">$19.00</span>
                </div>
              </a>
            </div>
          </div>

          <!-- Bottom Banner -->
          <div class="w-full px-2">
            <div class="group relative overflow-hidden rounded-lg">
              <a href="" class="block">
                <img 
                  src="/images/banners/banner-comestic-2.jpg" 
                  class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" 
                  alt="Rose Hibiscus Hydrating Face Mist"
                />
                <div class="absolute bottom-4 left-4 text-black">
                  <span class="block text-xl md:text-2xl font-medium">
                    Rose Hibiscus <span class="block">Hydrating Face Mist</span>
                  </span>
                  <span class="block text-lg md:text-xl font-light mt-1">$49.00</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
	<!--=====  End of slider area  ======-->


	<!--=============================================
	=            section title  container      =
	=============================================-->

	<div class="mb-10 md:mb-[40px]">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap">
      <!-- Left Column -->
      <div class="w-6/12">
        <div class="text-left font-medium uppercase tracking-wider">
          <p class="inline-flex items-center">
            SS-2022 
            <span class="ml-2 h-[1px] w-8 bg-current"></span>
            <span class="ml-2">84</span>
          </p>
        </div>
      </div>

      <!-- Right Column -->
      <div class="w-6/12 text-right">
        <div class="font-medium uppercase tracking-wider">
          <p>INNOVATIVE <br> DESIGN</p>
        </div>
      </div>
    </div>
  </div>
</div>
	<!--=====  End of section title container ======-->

	<!--=============================================
    =            countdowntimer area         =
    =============================================-->

	<div class="mb-[100px] md:mb-[60px] sm:mb-[60px]">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap">
      <div class="w-full">
        <div class="bg-gray-100 pt-[30px] pb-[30px]">
          <div class="flex flex-wrap items-center">
            <div class="w-full lg:w-3/12 xl:w-5/12">
              <div class="text-center">
                <img src="/images/banners/deal-of-the-day.jpg" class="max-w-full h-auto" alt="">
              </div>
            </div>

            <div class="w-full lg:w-9/12 xl:w-7/12">
              <div class="text-center">
                <h3 class="text-2xl font-bold mb-4">Deal of the day</h3>
                <div class="mb-4" data-countdown="2023/01/01"></div>
                <a href="shop-left-sidebar.html"
                  class="inline-flex items-center px-6 py-3 bg-black text-white font-medium rounded hover:bg-gray-800 transition-colors">
                  <i class="mr-2 ion-ios-cart"></i> Only $39
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



<div class="flex justify-start items-start text-5xl p-5 space-x-4 cursor-pointer">
	<ul v-for="item in items" :key="id">
		<li :class="active===item? 'text-gray-900':'text-gray-400'"
		@click="setActive(item)" class="hover:text-gray-900">{{ item }}</li>
	</ul>
	
</div>

	<ProductsList/>

	<div class="mb-16 md:mb-[60px] lg:mb-[70px]">
  <div class="container mx-auto px-4 xl:px-8">
    <div class="flex flex-wrap -mx-3">
      <!-- First Banner -->
      <div class="w-full md:w-6/12 px-3 mb-6 md:mb-[30px]">
        <div class="group relative overflow-hidden border border-transparent hover:border-gray-300 transition-all duration-300">
          <a href="" class="absolute inset-0 z-10"></a>
          <img 
            src="/images/banners/banner-comestic-3.jpg" 
            class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" 
            alt="10% off your next purchase"
          />
          <div class="absolute inset-0 flex items-center justify-center text-center p-6">
            <p class="text-black font-medium text-lg md:text-xl">
              <span class="font-bold text-2xl md:text-3xl">10%</span> off your <span class="block">next purchase</span>
            </p>
          </div>
        </div>
      </div>

      <!-- Second Banner -->
      <div class="w-full md:w-6/12 px-3 mb-6 md:mb-[30px]">
        <div class="group relative overflow-hidden border border-transparent hover:border-gray-300 transition-all duration-300">
          <a href="shop-left-sidebar.html" class="absolute inset-0 z-10"></a>
          <img 
            src="/images/banners/banner-comestic-4.jpg" 
            class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" 
            alt="Free shipping offer"
          />
          <div class="absolute left-6 top-1/2 transform -translate-y-1/2 text-left max-w-[80%]">
            <p class="text-gray-900">
              <span class="block text-xl md:text-2xl font-bold mb-1">Free shipping</span>
              <span class="block text-sm md:text-base">Free shipping on domestic orders</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

 <Footers/>   
</template>

<style scoped>

</style>