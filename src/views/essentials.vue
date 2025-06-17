<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useMotion } from "@vueuse/motion";
import TopNavBar from "@/components/NavBar.vue";
// Sample slides data (each slide has an image, title, and subtitle)
import image1 from "@/assets/images/revimages/essentials/1.png";
import image2 from "@/assets/images/revimages/essentials/2.png";
import bgImage1 from "@/assets/images/revimages/essentials/bg3.png";
import bgImage2 from "@/assets/images/revimages/essentials/bg2.png";
import ProductsList from "@/components/productsList.vue";
import Footers from "@/components/Footers.vue";

const slides = ref([
  {
    image: image1,
    bgImage:bgImage1,
    title: "NEW ARRIVALS",
    subtitle: "Summer 2020.",
  },
  {
    image: image2,
    bgImage:bgImage2,
    title: "NEW ARRIVALS",
    subtitle: "Summer 2020.",
  },
  
]);
// Animation function for text
const animateText = (el) => {
  useMotion(el, {
    initial: { opacity: 0, x: -50 },
    enter: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  });
};

const active=ref('Popular /')

const setActive =(item)=>{
    active.value=item
}
const items=['All /','New /','Popular /','Sale']

</script>

<template>
    <TopNavBar/>
  <div class="w-full mt-10">
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
      <swiper-slide v-for="(slide, index) in slides" :key="index" class=" h-[500px] relative"
      >
        <img :src="slide.bgImage" class="w-full h-full bg-no-repeat object-cover z-100 " />

        <img :src="slide.image" class="absolute  top-10 right-[100%] bg-no-repeat z-100" />

        <!-- Text Overlay with Animation -->
        <div ref="animateText"
          class="absolute left-14 top-1/2 transform -translate-y-1/2 text-black p-6   max-w-md"
        >
          <h2 class="text-xl font-bold font-sans">{{ slide.title }}</h2>
          <p class="text-5xl mt-4">{{ slide.subtitle }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>

  
  
  <div class="p-5 md:p-10 lg:p-20">
  <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
    <!-- Left Column -->
    <div class="flex flex-col space-y-4 lg:space-y-6">
      <!-- Top Full Width Image -->
      <div class="relative overflow-hidden rounded-lg aspect-[4/3]">
        <img 
          src="@/assets/images/category/banner-women.jpg"
          class="object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
          alt="Women's fashion"
        />
      </div>
      
      <!-- Bottom Two Column Grid -->
      <div class="grid grid-cols-2 gap-4 lg:gap-6">
        <div class="relative overflow-hidden rounded-lg aspect-square">
          <img 
            src="@/assets/images/category/banner-shoes.jpg"
            class="object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
            alt="Shoes collection"
          />
        </div>
        <div class="relative overflow-hidden rounded-lg aspect-square">
          <img 
            src="@/assets/images/category/banner-sunglass.jpg"
            class="object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
            alt="Sunglasses collection"
          />
        </div>
      </div>
    </div>

    <!-- Right Column -->
    <div class="flex flex-col space-y-4 lg:space-y-6">
      <div class="relative overflow-hidden rounded-lg aspect-[4/3]">
        <img 
          src="@/assets/images/category/banner-accessories.jpg"
          class="object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
          alt="Fashion accessories"
        />
      </div>
      <div class="relative overflow-hidden rounded-lg aspect-[4/3]">
        <img 
          src="@/assets/images/category/banner-men.jpg"
          class="object-cover w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
          alt="Men's fashion"
        />
      </div>
    </div>
  </div>
</div>
  
  <div class="countdown-timer-area mb-90 mb-md-70 mb-sm-70 countdown-background countdown-bg-2 pt-100 pb-100">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="row">
						<div class=" col-12 col-xl-7 offset-xl-5 col-lg-8 offset-lg-4">
							<div class="countdown-wrapper text-center">
								<h3>Deal of the day</h3>
								<div class="deal-countdown" data-countdown="2023/01/01"></div>
								<a href="shop-left-sidebar.html" class="lezada-button lezada-button--medium lezada-button--icon--left">
									<i class="icon-left ion-ios-cart"></i> Only $39</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

		
  <div class="flex justify-start items-start sm:text-md sm:text-center md:text-3xl lg:text-5xl p-5 space-x-4 cursor-pointer">
	<ul v-for="item in items" :key="id">
		<li :class="active===item? 'text-gray-900':'text-gray-400'"
		@click="setActive(item)" class="hover:text-gray-900">{{ item }}</li>
	</ul>
	
</div>
 

        <ProductsList/>

        <Footers/>
</template>
<style scoped>
/* Customize Swiper navigation buttons */
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