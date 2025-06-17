<script setup>
import bgImage from '@/assets/images/background-heading-page.png'
import Footers from '@/components/Footers.vue';
import Navbar_second from '@/components/navbar_second.vue';

</script>
<template>
<Navbar_second/>
<div class="bg-gray-200 mt-[90px] p-10" :style="{ backgroundImage: `url(${bgImage})` }">
    <h1 class="sm:text-3xl md:text-6xl lg:text-4xl p-4 text-black">Blog Grid Full Width</h1>
    <div class="flex space-y-0">
      <p class="text-md p-4 text-gray-400 hover:text-black cursor-pointer">
        <RouterLink to="/" class="hover:text-black">Home /</RouterLink>
      </p>
      <p class="text-md p-4" :class="active ? 'text-black' : 'text-gray-400'">Blog Grid Full Width</p>
    </div>
  </div>


<div class="mb-[100px] mt-[100px]">
      

      <!-- Main Content -->
      <div class="w-full  md:w-full lg:w-full px-4 order-1 lg:order-2 mb-14 sm:mb-14  m-auto ">
        <div class="  grid gap-5 sm:grid-cols-1   lg:grid-cols-3 ">
          <!-- Blog Post -->
          <div>
            <div class="mb-8">
              <a href="">
                <img src="@/assets/images/blog/post-thumbnail.png" class="w-[100%]   h-[250px]" alt="">
              </a>
            </div>
            <div>
              <div class="flex items-center text-gray-500 mb-2">
                <i class="far fa-calendar-alt mr-2"></i>
                <a href="">june 5, 2022</a>
              </div>
              <h2 class="text-2xl font-semibold mb-3 hover:text-gray-600">
                <a href="">Chic Fashion Phenomenon</a>
              </h2>
              <p class="text-gray-600 mb-4">Michele seemed to say, was the 21st-century Gucci girl, an eccentric, fresh-faced weirdo who wasn't afraid to wear backless fur-lined loafers, to personify the idea of "ugly pretty."</p>
              <a href="" class="inline-block border-b border-black hover:border-transparent">read more</a>
            </div>
          </div>

          <!-- Blog Post -->
          <div>
            <div class="mb-8">
              <a href="">
                <img src="@/assets/images/blog/post-thumbnail-6.png" class="w-[100%] h-[250px]" alt="">
              </a>
            </div>
            <div>
              <div class="flex items-center text-gray-500 mb-2">
                <i class="far fa-calendar-alt mr-2"></i>
                <a href="">june 6, 2022</a>
              </div>
              <h2 class="text-2xl font-semibold mb-3 hover:text-gray-600">
                <a href="">Shirt Color Picking Guide</a>
              </h2>
              <p class="text-gray-600 mb-4">Michele seemed to say, was the 21st-century Gucci girl, an eccentric, fresh-faced weirdo who wasn't afraid to wear backless fur-lined loafers, to personify the idea of "ugly pretty."</p>
              <a href="" class="inline-block border-b border-black hover:border-transparent">read more</a>
            </div>
          </div>

          <!-- Blog Post -->
          <div>
            <div class="mb-8">
              <a href="">
                <img src="@/assets/images/blog/post-thumbnail-2-1.png" class="w-full h-[250px]" alt="">
              </a>
            </div>
            <div>
              <div class="flex items-center text-gray-500 mb-2">
                <i class="far fa-calendar-alt mr-2"></i>
                <a href="">june 8, 2022</a>
              </div>
              <h2 class="text-2xl font-semibold mb-3 hover:text-gray-600">
                <a href="">Perfect Perfume & Cologne</a>
              </h2>
              <p class="text-gray-600 mb-4">Michele seemed to say, was the 21st-century Gucci girl, an eccentric, fresh-faced weirdo who wasn't afraid to wear backless fur-lined loafers, to personify the idea of "ugly pretty."</p>
              <a href="" class="inline-block border-b border-black hover:border-transparent">read more</a>
            </div>
          </div>

          <!-- Blog Post -->
          <div>
            <div class="mb-8">
              <a href="">
                <img src="@/assets/images/blog/post-thumbnail.png" class="w-full h-[250px]" alt="">
              </a>
            </div>
            <div>
              <div class="flex items-center text-gray-500 mb-2">
                <i class="far fa-calendar-alt mr-2"></i>
                <a href="">june 10, 2022</a>
              </div>
              <h2 class="text-2xl font-semibold mb-3 hover:text-gray-600">
                <a href="">T-Shirts as Minimalist Style</a>
              </h2>
              <p class="text-gray-600 mb-4">Michele seemed to say, was the 21st-century Gucci girl, an eccentric, fresh-faced weirdo who wasn't afraid to wear backless fur-lined loafers, to personify the idea of "ugly pretty."</p>
              <a href="" class="inline-block border-b border-black hover:border-transparent">read more</a>
            </div>
          </div>

          <!-- Blog Post -->
          <div>
            <div class="mb-8">
              <a href="">
                <img src="@/assets/images/blog/post-thumbnail-6.png" class="w-full h-[250px]" alt="">
              </a>
            </div>
            <div>
              <div class="flex items-center text-gray-500 mb-2">
                <i class="far fa-calendar-alt mr-2"></i>
                <a href="">june 5, 2022</a>
              </div>
              <h2 class="text-2xl font-semibold mb-3 hover:text-gray-600">
                <a href="">Chic Fashion Phenomenon</a>
              </h2>
              <p class="text-gray-600 mb-4">Michele seemed to say, was the 21st-century Gucci girl, an eccentric, fresh-faced weirdo who wasn't afraid to wear backless fur-lined loafers, to personify the idea of "ugly pretty."</p>
              <a href="" class="inline-block border-b border-black hover:border-transparent">read more</a>
            </div>
          </div>

          <!-- Blog Post -->
          <div>
            <div class="mb-8">
              <a href="">
                <img src="@/assets/images/blog/post-thumbnail-2-1.png" class="w-full h-[250px]" alt="">
              </a>
            </div>
            <div>
              <div class="flex items-center text-gray-500 mb-2">
                <i class="far fa-calendar-alt mr-2"></i>
                <a href="">june 6, 2022</a>
              </div>
              <h2 class="text-2xl font-semibold mb-3 hover:text-gray-600">
                <a href="">Shirt Color Picking Guide</a>
              </h2>
              <p class="text-gray-600 mb-4">Michele seemed to say, was the 21st-century Gucci girl, an eccentric, fresh-faced weirdo who wasn't afraid to wear backless fur-lined loafers, to personify the idea of "ugly pretty."</p>
              <a href="" class="inline-block border-b border-black hover:border-transparent">read more</a>
            </div>
          </div>

          <!-- Blog Post -->
          <div>
            <div class="mb-8">
              <a href="">
                <img src="@/assets/images/blog/post-thumbnail-6.png" class="w-full h-[250px]" alt="">
              </a>
            </div>
            <div>
              <div class="flex items-center text-gray-500 mb-2">
                <i class="far fa-calendar-alt mr-2"></i>
                <a href="">june 8, 2022</a>
              </div>
              <h2 class="text-2xl font-semibold mb-3 hover:text-gray-600">
                <a href="">Perfect Perfume & Cologne</a>
              </h2>
              <p class="text-gray-600 mb-4">Michele seemed to say, was the 21st-century Gucci girl, an eccentric, fresh-faced weirdo who wasn't afraid to wear backless fur-lined loafers, to personify the idea of "ugly pretty."</p>
              <a href="" class="inline-block border-b border-black hover:border-transparent">read more</a>
            </div>
          </div>

          <!-- Blog Post -->
          <div>
            <div class="mb-8">
              <a href="">
                <img src="@/assets/images/blog/post-thumbnail.png" class="w-full h-[250px]" alt="">
              </a>
            </div>
            <div>
              <div class="flex items-center text-gray-500 mb-2">
                <i class="far fa-calendar-alt mr-2"></i>
                <a href="\">june 10, 2022</a>
              </div>
              <h2 class="text-2xl font-semibold mb-3 hover:text-gray-600">
                <a href="">T-Shirts as Minimalist Style</a>
              </h2>
              <p class="text-gray-600 mb-4">Michele seemed to say, was the 21st-century Gucci girl, an eccentric, fresh-faced weirdo who wasn't afraid to wear backless fur-lined loafers, to personify the idea of "ugly pretty."</p>
              <a href="" class="inline-block border-b border-black hover:border-transparent">read more</a>
            </div>
          </div>
        </div>

        <!-- Pagination -->
        <div class="mt-14 text-center">
          <ul class="inline-flex space-x-2">
            <li><a href="#" class="px-3 py-1 bg-black text-white rounded">1</a></li>
            <li><a href="#" class="px-3 py-1 hover:bg-gray-100 rounded">2</a></li>
            <li><a href="#" class="px-3 py-1 hover:bg-gray-100 rounded">3</a></li>
            <li><a href="#" class="px-3 py-1 hover:bg-gray-100 rounded">4</a></li>
            <li><a href="#" class="px-3 py-1 hover:bg-gray-100 rounded">NEXT</a></li>
          </ul>
        </div>
      </div>
    
</div>
<Footers/>
</template>