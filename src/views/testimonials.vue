<script setup>
import bgImage from '@/assets/images/01.jpg'
import Footers from '@/components/Footers.vue';
import Navbar_second from '@/components/navbar_second.vue';

</script>
<template>
    <Navbar_second/>
<div class=" bg-gray-100 mt-[90px] p-10" :style="{ backgroundImage: `url(${bgImage})` }">
    <h1 class="sm:text-3xl md:text-6xl lg:text-6xl p-4  text-black">Testimonials</h1>
    <div class="flex space-y-0">
       
    <p class="text-xl p-4 text-gray-400 hover:text-black cursor-pointer">
    <RouterLink to="/" class="hover:text-black">Home /</RouterLink>
       </p>

        
    <p class="text-xl p-4" :class="active?'text-black':'text-gray-400'">Testimonials</p>
    </div>
</div>


<div class="mb-[50px] md:mb-[30px] sm:mb-[30px]">
  <div class="container mx-auto">
    <div class="flex flex-wrap">
      <div class="w-full">
        <div class="text-center">
          <h1 class="text-4xl ">Testimonials</h1>
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


<Footers/>
</template>

