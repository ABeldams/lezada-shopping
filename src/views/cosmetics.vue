<template>
<TopNavBar/>
<div class="slider-area mb-12 md:mb-8">
      <div class="relative w-full h-screen overflow-hidden">
        <!-- Slider container -->
        <div class="relative w-full h-full">
          <!-- Slides -->
          <TransitionGroup name="slide-fade">
            <div 
              v-for="(slide, index) in slides" 
              :key="index"
              v-show="currentSlide === index"
              class="absolute inset-0 w-full h-full"
            >
              <!-- Slide background -->
              <div 
                class="absolute inset-0 transition-colors duration-1000"
                :style="{ backgroundColor: slide.bgColor }"
              ></div>
              
              <!-- Slide content -->
              <div class="relative h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Content container -->
                <div class="absolute inset-0 flex items-center left-[60%] w-full">
                  <div class="w-full md:w-1/2 lg:w-2/5 space-y-6 pl-8 md:pl-16">
                    <!-- Collection title -->
                    <div 
                      class="text-sm md:text-base font-semibold tracking-wider uppercase transition-all duration-500 delay-100"
                      :class="[
                        currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
                        index === 0 ? 'text-gray-800' : 'text-gray-700'
                      ]"
                    >
                      {{ slide.collection }}
                    </div>
                    
                    <!-- Main heading -->
                    <h2 
                      class="text-4xl md:text-2xl lg:text-6xl font-[Allura] font-semibold  leading-tight text-gray-900 transition-all duration-[600ms] delay-200"
                      :class="currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
                    >
                      <span v-html="slide.heading"></span>
                    </h2>
                    
                    <!-- Shop now button -->
                    <button 
                      class="px-8 py-3 border text-black border-black border-t-0 border-l-0 border-r-0 text-sm font-medium 
                        hover:text-red-500  cursor-pointer transition-all duration-300 delay-300"
                      :class="currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
                     
                    >
                      SHOP NOW
                    </button>
                  </div>
                </div>
                
                <!-- Slide images -->
                <div class="absolute inset-0  left-1/2 ">
                  <template v-for="(image, i) in slide.images" :key="i">
                    <img 
                      :src="image.src" 
                      :alt="image.alt" 
                      class="absolute object-contain w-[500px] transition-all duration-1000"
                      :class="[
                        image.classes,
                        currentSlide === index ? 'opacity-100' : 'opacity-0',
                        image.animation || ''
                      ]"
                      loading="lazy"
                    >
                  </template>
                </div>
                
               
              </div>
            </div>
          </TransitionGroup>
        </div>
        
        <!-- Navigation arrows -->
        <button 
          @click="prevSlide" 
          class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 p-2  shadow-md z-10 hover:bg-opacity-100 transition-all"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          @click="nextSlide" 
          class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 p-2  shadow-md z-10 hover:bg-opacity-100 transition-all"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
      </div>
    
    </div>
  
  
    <div class="grid sm:grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 p-5 w-[90%] m-auto mt-10">
    <div class="flex flex-col space-y-5">
        <h1 class="text-md font-semibold">NEW COLLECTION /</h1>
        <p class="text-5xl text-gray-900">Professional</p>
            <p class="text-5xl text-gray-900">skin care for you</p>
        <p class="text-[17px]">Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse suscipit sagittis leo sit 
            met condimentum estibulum issim Lorem ipsum dolor sit amet, consectetur cing elit.</p>
            <button class="bg-transparent p-2 w-[150px] font-semibold outline outline-1 outline-gray-900 hover:bg-gray-200">
                Learn More
            </button>

    </div>
     <div>
        <img src="@/assets/images/revimages/cosmetics/banner-cosmetic-5.jpg" class="w-[80%] " alt="Anais Coulon"/>
   
     </div>

</div>



<div class="mb-[70px] md:mb-[60px] sm:mb-[60px]">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap -mx-4">
      
      <!-- Women Category Card -->
      <div class="w-full px-4 md:w-1/2 lg:w-2/5 lg:ml-[8.333%]">
        <div class="relative group overflow-hidden">
          <!-- Image -->
          <div class="overflow-hidden">
            <img src="@/assets/images/category/img-comestic-2.jpg" class="w-full h-auto
            transition-all transform hover:scale-[1.1] hover:duration-[600ms]" alt="Women Cosmetics">
          </div>
          
          <!-- Content -->
          <div class="mt-[25px] mb-[25px]">
            <div class="flex justify-between items-center">
              <div>
                <p class="text-lg font-medium">Women</p>
                <a href="" class="text-sm hover:underline">+ Online store</a>
              </div>
              <p class="text-gray-500">999</p>
            </div>
          </div>
          
        </div>
      </div>


<!-- Women Category Card -->
<div class="w-full px-4 md:w-1/2 lg:w-2/5 lg:ml-[8.333%]">
        <div class="relative group overflow-hidden">
          <!-- Image -->
          <div class="overflow-hidden">
            <img src="@/assets/images/revimages/cosmetics/organic.png" class="w-full h-auto
            transition-all transform hover:scale-[1.1] hover:duration-[600ms]" alt="Women Cosmetics">
          </div>
          
          
          
        </div>
      </div>

      <!-- Perfumes Category Card -->
      <div class="w-full px-4 md:w-1/2 lg:w-2/5 lg:ml-[8.333%] mt-[180px] sm:mt-[100px]">
        <div class="relative group overflow-hidden">
          <!-- Image -->
          <div class="overflow-hidden">
            <img src="@/assets/images/category/img-comestic-4.jpg" class="w-full h-auto
            transition-all transform hover:scale-[1.1] hover:duration-[600ms]" alt="Perfumes">
          </div>
          
          <!-- Content -->
          <div class="mt-[25px] mb-[25px]">
            <div class="flex justify-between items-center">
              <div>
                <p class="text-lg font-medium">Perfumes</p>
                <a href="" class="text-sm hover:underline">+ Online store</a>
              </div>
              <p class="text-gray-500">13</p>
            </div>
          </div>
          
        </div>
      </div>

      <!-- For Body Category Card -->
      <div class="w-full px-4 md:w-1/2 lg:w-1/3 lg:ml-[16.666%] mt-[360px] sm:mt-[100px]">
        <div class="relative group overflow-hidden">
          <!-- Image -->
          <div class="overflow-hidden">
            <img src="@/assets/images/category/img-comestic-5.jpg" class="w-full h-auto
            transition-all transform hover:scale-[1.1] hover:duration-[600ms]" alt="For Body">
          </div>
          
          <!-- Content -->
          <div class="mt-[25px] mb-[25px]">
            <div class="flex justify-between items-center">
              <div>
                <p class="text-lg font-medium">For body</p>
                <a href="" class="text-sm hover:underline">+ Online store</a>
              </div>
              <p class="text-gray-500">13</p>
            </div>
          </div>
          
        </div>
      </div>

    </div>
  </div>
</div>


<div class="grid sm:grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 p-5  m-auto mt-10">
    <div>
        <img src="@/assets/images/testimonial/testimonial-1.png" class="w-[80%] " alt="Anais Coulon"/>
   
     </div>


    <div class="flex flex-col space-y-5">
        <h1 class="text-md font-semibold">NEW COLLECTION /</h1>
        <p class="text-5xl text-gray-900">Professional</p>
            <p class="text-5xl text-gray-900">skin care for you</p>
        <p class="text-[17px]">Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse suscipit sagittis leo sit 
            met condimentum estibulum issim Lorem ipsum dolor sit amet, consectetur cing elit.</p>
            <button class="bg-transparent p-2 w-[150px] font-semibold outline outline-1 outline-gray-900 hover:bg-gray-200">
                Learn More
            </button>

    </div>

</div>

    <Footers/>
  </template>
  
  <script lang="ts" setup>
  import Footers from '@/components/Footers.vue'
import ProductsList from '@/components/productsList.vue'
import TopNavBar from '@/components/NavBar.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  interface SlideImage {
    src: string
    alt: string
    classes: string
    animation?: string
  }
  
  interface Slide {
    bgColor: string
    collection: string
    heading: string
    images: SlideImage[]
  }
  
  const currentSlide = ref(0)
  const autoPlayInterval = ref<NodeJS.Timeout | null>(null)
  
  const slides = ref<Slide[]>([
    {
      bgColor: '#ebf4f2',
      collection: 'Free delivery from $30',
      heading: 'Nature Cosmetics',
      images: [
      {
          src: 'https://lezada.jamstacktemplates.dev/assets/images/hero-slider/hero-slider-nine/1.png',
          alt: 'Element 7',
          classes: 'right-[100%]  bottom-[150px] w-2/5',
          animation: 'animate-float-slow'
        }
       
      ]
    },
    {
      bgColor: '#ebf4f2',
      collection: 'Free delivery from $40',
      heading: 'Perfumes for Women',
      images: [
        
        {
          src: 'https://lezada.jamstacktemplates.dev/assets/images/hero-slider/hero-slider-nine/1.png',
          alt: 'Element 7',
          classes: 'right-[100%] bottom-[150px] w-2/5',
          animation: 'animate-float-slow'
        }
      ]
    },
    
  ])
  
  const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % slides.value.length
  }
  
  const prevSlide = () => {
    currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length
  }
  
  const goToSlide = (index: number) => {
    currentSlide.value = index
  }
  
  const navigateToShop = () => {
    router.push('/shop')
  }
  
  const startAutoPlay = () => {
    stopAutoPlay()
    autoPlayInterval.value = setInterval(nextSlide, 5000)
  }
  
  const stopAutoPlay = () => {
    if (autoPlayInterval.value) {
      clearInterval(autoPlayInterval.value)
      autoPlayInterval.value = null
    }
  }
  
  onMounted(() => {
    startAutoPlay()
  })
  
  onBeforeUnmount(() => {
    stopAutoPlay()
  })
  </script>
  
  <style scoped>
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  
  .slide-fade-enter-from,
  .slide-fade-leave-to {
    opacity: 0;
    transform: translateX(20px);
  }
  
  @keyframes float-slow {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
  
  @keyframes float-medium {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
  }
  
  @keyframes float-fast {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  
  .animate-float-slow {
    animation: float-slow 6s ease-in-out infinite;
  }
  
  .animate-float-medium {
    animation: float-medium 4s ease-in-out infinite;
  }
  
  .animate-float-fast {
    animation: float-fast 3s ease-in-out infinite;
  }
  </style>