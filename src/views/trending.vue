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
                <div class="absolute inset-0 flex items-center">
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
                      class="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-gray-800 transition-all duration-500 delay-200"
                      :class="currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
                    >
                      <span v-html="slide.heading"></span>
                    </h2>
                    
                    <!-- Shop now button -->
                    <button 
                      class="px-8 py-3 border bg-black text-white border-black text-sm font-medium tracking-wider hover:bg-black hover:text-white transition-all duration-300 delay-300"
                      :class="currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
                      @click="navigateToShop"
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
                
                <!-- Slide number indicators -->
                <div 
                  class="absolute right-0 top-2/3 transform -translate-y-1/2 hidden lg:flex items-center space-x-4 pl-16 transition-opacity duration-500"
                  :class="currentSlide === index ? 'opacity-100' : 'opacity-0'"
                >
                  <span class="text-5xl font-light text-gray-800">{{ index + 1 }}</span>
                  <div class="w-20 h-0.5 bg-gray-500 bg-opacity-50"></div>
                  <span class="text-5xl font-light text-gray-300">3</span>
                </div>
              </div>
            </div>
          </TransitionGroup>
        </div>
        
        <!-- Navigation arrows -->
        <button 
          @click="prevSlide" 
          class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full shadow-md z-10 hover:bg-opacity-100 transition-all"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          @click="nextSlide" 
          class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full shadow-md z-10 hover:bg-opacity-100 transition-all"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        <!-- Pagination dots -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          <button 
            v-for="(slide, index) in slides" 
            :key="index" 
            @click="goToSlide(index)"
            class="w-3 h-3 rounded-full transition-all duration-300 hover:scale-125"
            :class="{ 'bg-gray-800 w-6': currentSlide === index, 'bg-gray-300': currentSlide !== index }"
            :aria-label="`Go to slide ${index + 1}`"
          ></button>
        </div>
      </div>
    </div>
  

    <div class="items-center justify-center text-center space-y-5">
        <h1 class="text-5xl text-gray-900">Spring summer 2022</h1>
        <p class="text-gray-900 font-semibold">Find your style. Fall fashion 20xx</p>
    </div>

    <ProductsList/>
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
      bgColor: '#faf7ee',
      collection: 'WOMEN COLLECTION',
      heading: 'Behind the desert <br> Gifts for girls',
      images: [
        {
          src: 'https://htmldemo.net/lezada/lezada/assets/images/revimages/trending/hp1-element-2.png',
          alt: 'Element 2',
          classes: 'left-[25%] top-[25%] w-1/2',
          animation: 'animate-float-slow'
        },
        {
          src: 'https://htmldemo.net/lezada/lezada/assets/images/revimages/trending/hp1-element-3.png',
          alt: 'Element 3',
          classes: 'left-[30%] top-[20%] w-1/4',
          animation: 'animate-float-medium'
        },
        {
          src: 'https://htmldemo.net/lezada/lezada/assets/images/revimages/trending/hp1-element-4.png',
          alt: 'Element 4',
          classes: 'right-[25%] bottom-[25%] w-1/3',
          animation: 'animate-float-fast'
        },
        {
          src: 'https://htmldemo.net/lezada/lezada/assets/images/revimages/trending/hp1-element-1.png',
          alt: 'Main image',
          classes: 'left-0 bottom-0 w-1/2'
        }
      ]
    },
    {
      bgColor: '#ebf4f2',
      collection: 'MEN COLLECTION',
      heading: 'Feeling relax day, <br> enjoy weekend',
      images: [
        {
          src: 'https://htmldemo.net/lezada/lezada/assets/images/revimages/trending/hp1-element-6.png',
          alt: 'Element 6',
          classes: 'right-[25%] bottom-0 w-1/3',
          animation: 'animate-float-slow'
        },
        {
          src: 'https://htmldemo.net/lezada/lezada/assets/images/revimages/trending/hp1-element-5.png',
          alt: 'Element 5',
          classes: 'left-[25%] top-[20%] w-1/4',
          animation: 'animate-float-medium'
        },
        {
          src: 'https://htmldemo.net/lezada/lezada/assets/images/revimages/trending/hp1-element-7.png',
          alt: 'Element 7',
          classes: 'left-[25%] bottom-0 w-2/5'
        }
      ]
    },
    {
      bgColor: '#f4ede7',
      collection: 'NEW ARRIVALS',
      heading: 'Shoes collection <br> ss-2022',
      images: [
        {
          src: 'https://htmldemo.net/lezada/lezada/assets/images/revimages/trending/hp1-element-8.png',
          alt: 'Element 8',
          classes: 'left-[25%] bottom-[25%] w-2/5',
          animation: 'animate-float-slow'
        }
      ]
    }
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