<script>
import Footers from '@/components/Footers.vue';
import TopNavBar from '@/components/NavBar.vue';
import { defineComponent, onMounted } from 'vue';
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import ProductsList from '@/components/productsList.vue';
import Shop from '@/components/icons/Shop.vue';

export default defineComponent({
  name: 'HomepageSlider',
  components: {
    Footers,
    TopNavBar
  },
  setup() {
    onMounted(() => {
      new Swiper('.homepage-slider', {
        modules: [Autoplay, Navigation, Pagination, EffectFade],
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
      });
    });

    return {};
  },
});
</script>

<template>
  <TopNavBar/>  
  
  <div class="mb-8 md:mb-12">
    <div class="container mx-auto px-4 xl:px-8">
      <div class="relative">
        <!-- Slider Container -->
        <div class="swiper homepage-slider aspect-[16/9] md:aspect-[21/9] w-full">
          <div class="swiper-wrapper">
            <!-- Slide 1 -->
            <div class="swiper-slide relative overflow-hidden">
              <img 
                src="@/assets/images/revimages/furniture/slider-homepage6-img1.png" 
                class="absolute inset-0 w-full h-full object-cover"
                alt="Innovative design"
              />
              <div class="absolute inset-0 bg-black bg-opacity-10"></div>
              <div class="container relative h-full flex items-center">
                <div class="max-w-2xl text-left space-y-4 px-4">
                  <div 
                    class="text-lg md:text-2xl font-medium text-gray-800 animate-fade-in-up"
                    style="animation-delay: 0.3s"
                  >
                    Free delivery from $30
                  </div>
                  <h2 
                    class="text-4xl md:text-6xl font-light text-gray-900 animate-fade-in-up"
                    style="animation-delay: 0.6s"
                  >
                    Innovative design
                  </h2>
                  <div 
                    class="animate-fade-in-up"
                    style="animation-delay: 0.9s"
                  >
                    <a 
                      href="shop-left-sidebar.html" 
                      class="inline-block px-8 py-3 border-2 border-black text-black font-medium hover:bg-black hover:text-white transition-colors duration-300"
                    >
                      SHOP NOW
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Slide 2 -->
            <div class="swiper-slide relative overflow-hidden">
              <img 
                src="@/assets/images/revimages/furniture/slider-homepage6-img2.png" 
                class="absolute inset-0 w-full h-full object-cover"
                alt="Beautiful interior"
              />
              <div class="absolute inset-0 bg-black bg-opacity-10"></div>
              <div class="container relative h-full flex items-center">
                <div class="max-w-2xl text-left space-y-4 px-4">
                  <div 
                    class="text-lg md:text-2xl font-medium text-gray-800 animate-fade-in-up"
                    style="animation-delay: 0.3s"
                  >
                    Free delivery from $30
                  </div>
                  <h2 
                    class="text-4xl md:text-6xl font-light text-gray-900 animate-fade-in-up"
                    style="animation-delay: 0.6s"
                  >
                    Beautiful interior
                  </h2>
                  <div 
                    class="animate-fade-in-up"
                    style="animation-delay: 0.9s"
                  >
                    <a 
                      href="shop-left-sidebar.html" 
                      class="inline-block px-8 py-3 border-2 border-black text-black font-medium hover:bg-black hover:text-white transition-colors duration-300"
                    >
                      SHOP NOW
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Slide 3 -->
            <div class="swiper-slide relative overflow-hidden">
              <img 
                src="@/assets/images/revimages/furniture/slider-homepage6-img3.png" 
                class="absolute inset-0 w-full h-full object-cover"
                alt="Summer sale"
              />
              <div class="absolute inset-0 bg-black bg-opacity-10"></div>
              <div class="container relative h-full flex items-center">
                <div class="max-w-2xl text-center space-y-4 px-4">
                  <div 
                    class="text-lg md:text-2xl font-medium text-gray-800 animate-fade-in-up"
                    style="animation-delay: 0.3s"
                  >
                    Summer sale up to 30%
                  </div>
                  <h2 
                    class="text-4xl md:text-6xl font-light text-gray-900 animate-fade-in-up"
                    style="animation-delay: 0.6s"
                  >
                    Beautiful interior
                  </h2>
                  <div 
                    class="animate-fade-in-up"
                    style="animation-delay: 0.9s"
                  >
                    <a 
                      href="shop-left-sidebar.html" 
                      class="inline-block px-8 py-3 border-2 border-black text-black font-medium hover:bg-black hover:text-white transition-colors duration-300"
                    >
                      SHOP NOW
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Navigation Buttons -->
          <div class="swiper-button-next hidden md:flex"></div>
          <div class="swiper-button-prev hidden md:flex"></div>
          
          <!-- Pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="mb-[65px] mb-md-[45px] mb-sm-[45px] p-5">
  <div class="container mx-auto max-w-full">
    <div class="flex flex-wrap -mx-4">
      <div class="w-full md:w-1/3 px-4 mb-[30px]">
        <!-- Single category -->
        <div class="relative group overflow-hidden">
          <!-- Single category image -->
          <div class="overflow-hidden">
            <img src="@/assets/images/banners/banner-1.jpg" class="w-full h-auto
            hover:transition-all hover:transform hover:ease-in-out hover:scale-[1.1] hover:duration-[600ms]" alt="">
            <p class="absolute text-3xl bottom-[100px] left-[30px]"><a href="">Wooden <span><br>Chair</span></a></p>
              <p class="absolute bottom-[50px] left-[30px] text-md">SHOP NOW</p>
            
        </div>

        
        </div>
      </div>

      <div class="w-full md:w-1/3 px-4 mb-[30px]">
        <!-- Single category -->
        <div class="relative group overflow-hidden">
          <!-- Single category image -->
          <div class="overflow-hidden">
            <img src="@/assets/images/banners/banner-2.jpg" class="w-full h-auto
             hover:transition-all hover:transform hover:ease-in-out hover:scale-[1.1] hover:duration-[600ms]" alt="">
           <!-- Single category content -->
           <p class="absolute text-3xl bottom-[100px] left-[30px]"><a href="">Thumbler <span><br>Alarm Clock</span></a></p>
              <p class="absolute bottom-[50px] left-[30px] text-md">SHOP NOW</p>
         
        </div>

       
        </div>
      </div>

      <div class="w-full md:w-1/3 px-4 mb-[30px]">
        <!-- Single category -->
        <div class="relative group overflow-hidden">
          <!-- Single category image -->
          <div class="overflow-hidden">
            <img src="@/assets/images/banners/banner-3.jpg" class="w-full h-auto
            hover:transition-all hover:transform hover:ease-in-out hover:scale-[1.1] hover:duration-[600ms]" alt="">
            <p class="absolute text-3xl bottom-[100px] left-[30px]"><a href="">Home <span>Decoration</span></a></p>
              <p class="absolute bottom-[50px] left-[30px] text-md">SHOP NOW</p>
         
        </div>

       
        </div>
      </div>
    </div>
  </div>
</div>


<div class="mb-[70px] md:mb-[50px] sm:mb-[50px]">
  <div class="container mx-auto">
    <!-- First row with labels -->
    <div class="flex flex-wrap mb-[75px]">
      <div class="w-1/2">
        <div class="text-left">
          <p class="inline-block">SS-2022 <span class="border-l border-black pl-2 ml-2">84</span></p>
        </div>
      </div>
      
      <div class="w-1/2 text-right">
        <div>
          <p class="inline-block text-right uppercase">INNOVATIVE <br> DESIGN</p>
        </div>
      </div>
    </div>
    
    <!-- Main title row -->
    <div class="flex flex-wrap">
      <div class="w-full">
        <div class="text-center">
          <h1 class="text-4xl font-bold">Clever & unique ideas</h1>
        </div>
      </div>
    </div>
  </div>
</div>

<ProductsList/>

<div class="mb-[100px] md:mb-[80px] sm:mb-[80px] bg-cover bg-center bg-no-repeat pt-[30px] pb-[30px]">
  <div class="container mx-auto">
    <div class="flex flex-wrap">
      <div class="w-full">
        <div class="flex flex-wrap items-center">
          <!-- Image Column -->
          <div class="w-full lg:w-4/12 xl:w-5/12">
            <div class="text-center">
              <img src="@/assets/images/countdown/countdown-4.png" class="w-full h-auto max-w-full" alt="">
            </div>
          </div>
          
          <!-- Countdown Column -->
          <div class="w-full lg:w-8/12 xl:w-7/12">
            <div class="text-center">
              <h3 class="text-2xl font-semibold mb-4">Deal of the day</h3>
              
              <!-- Countdown Timer -->
              <div class="mb-6" data-countdown="2023/01/01"></div>
              
              <!-- Button -->
              <a href="" class="inline-flex items-center px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Only $39
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>




<div class="mb-[50px] md:mb-[30px] sm:mb-[30px]">
  <div class="container mx-auto">
    <div class="flex flex-wrap">
      <div class="w-full">
        <div class="text-center">
          <h1 class="text-4xl font-bold">Testimonial</h1>
        </div>
      </div>
    </div>
  </div>
</div>




<!-- Testimonial Grid Container -->
<div class="flex flex-wrap -mx-3">
  <!-- Single Testimonial -->
  <div class="w-full sm:w-1/2 lg:w-1/4 px-3 mb-6">
    <div class="bg-white p-6  h-full flex flex-col">
      <div class="text-gray-600 mb-6 italic flex-grow">
        "I can say your dedication is second to none. I like the fact that you are strongly proud of your work in every way."
      </div>
      <div class="flex items-center mt-auto">
        <div class="mr-4">
          <img src="@/assets/images/testimonial/testimonial-1-80x80.png" class="w-20 h-20 rounded-full object-cover" alt="Sally Ramsey">
        </div>
        <div>
          <p class="font-semibold text-gray-800">Sally Ramsey</p>
          <span class="text-gray-500 text-sm">/ Reporter</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Single Testimonial -->
  <div class="w-full sm:w-1/2 lg:w-1/4 px-3 mb-6">
    <div class="bg-white p-6  h-full flex flex-col">
      <div class="text-gray-600 mb-6 italic flex-grow">
        "This has already been my fifth-time purchasing their theme. I have been highly satisfied with their work."
      </div>
      <div class="flex items-center mt-auto">
        <div class="mr-4">
          <img src="@/assets/images/testimonial/testimonial-2-80x80.jpg" class="w-20 h-20 rounded-full object-cover" alt="Lois Thompson">
        </div>
        <div>
          <p class="font-semibold text-gray-800">Lois Thompson</p>
          <span class="text-gray-500 text-sm">/ Actor</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Single Testimonial -->
  <div class="w-full sm:w-1/2 lg:w-1/4 px-3 mb-6">
    <div class="bg-white p-6  h-full flex flex-col">
      <div class="text-gray-600 mb-6 italic flex-grow">
        "There's nothing would satisfy me much more than a worry-free clean and responsive theme for my high-traffic site."
      </div>
      <div class="flex items-center mt-auto">
        <div class="mr-4">
          <img src="@/assets/images/testimonial/testimonial-3-80x80.jpg" class="w-20 h-20 rounded-full object-cover" alt="Florence Pittman">
        </div>
        <div>
          <p class="font-semibold text-gray-800">Florence Pittman</p>
          <span class="text-gray-500 text-sm">/ Model</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Single Testimonial -->
  <div class="w-full sm:w-1/2 lg:w-1/4 px-3 mb-6">
    <div class="bg-white p-6  h-full flex flex-col">
      <div class="text-gray-600 mb-6 italic flex-grow">
        "Five-star for good customer support. They have the ability to resolve any issue in less than the time for a coffee cup."
      </div>
      <div class="flex items-center mt-auto">
        <div class="mr-4">
          <img src="@/assets/images/testimonial/testimonial-4-80x80.jpg" class="w-20 h-20 rounded-full object-cover" alt="Anais Coulon">
        </div>
        <div>
          <p class="font-semibold text-gray-800">Anais Coulon</p>
          <span class="text-gray-500 text-sm">/ Model</span>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="grid sm:grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 p-5 w-[90%] m-auto mt-10">
    <div class="flex flex-col space-y-5">
        <h1 class="text-md font-semibold">FEATURED PRODUCT</h1>
        <p class="text-5xl text-gray-900">Montana shelf <br>collection</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Repudiandae reprehenderit excepturi 
            laboriosam sapiente ipsam delectus doloremque vel alias eveniet facere!</p>
            <button class="bg-black p-2 w-[150px] font-semibold outline outline-1 outline-gray-900 hover:bg-gray-200">
                <Shop class="text-gray-200"/> ONLY $39
            </button>

    </div>
     <div>
        <img src="@/assets/images/revimages/furniture/cabinet.png" class="w-full object-cover" alt="Anais Coulon"/>
   
     </div>

</div>
  <Footers/>
</template>

<style scoped>
/* Animation styles */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-up {
  animation: fade-in-up 1s ease forwards;
  opacity: 0;
}

/* Swiper customization */
.swiper-button-next, .swiper-button-prev {
  color: #333;
  background: rgba(255,255,255,0.7);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  backdrop-filter: blur(5px);
}
.swiper-button-next:after, .swiper-button-prev:after {
  font-size: 1.5rem;
}
.swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  background: #fff;
  opacity: 0.5;
}
.swiper-pagination-bullet-active {
  opacity: 1;
  background: #333;
}
</style>