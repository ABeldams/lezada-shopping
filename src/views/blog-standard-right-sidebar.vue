<script setup>
import bgImage from '@/assets/images/background-heading-page.png'
import Footers from '@/components/Footers.vue';
import Navbar_second from '@/components/navbar_second.vue';

</script>
<template>
<Navbar_second/>
<div class="bg-gray-200 mt-[90px] p-10" :style="{ backgroundImage: `url(${bgImage})` }">
    <h1 class="sm:text-3xl md:text-6xl lg:text-4xl p-4 text-black">Blog Standard Right Sidebar</h1>
    <div class="flex space-y-0">
      <p class="text-md p-4 text-gray-400 hover:text-black cursor-pointer">
        <RouterLink to="/" class="hover:text-black">Home /</RouterLink>
      </p>
      <p class="text-md p-4" :class="active ? 'text-black' : 'text-gray-400'">Blog Standard Right Sidebar</p>
    </div>
  </div>


<div class="mb-[100px] mt-[100px]">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap flex-row-reverse -mx-4">
      <div class="w-full lg:w-1/4 px-4 order-2 lg:order-1">
        <!-- Sidebar -->
        <div class="space-y-10">
          <!-- Search Widget -->
          <div class="mb-10">
            <div class="relative">
              <form action="#">
                <input type="search" placeholder="Search products ..." class="w-full px-4 py-2
                border-t-0 border-l-0 border-r-0 border-b-2 border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400">
                <button type="button" class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                  <i class="fas fa-search"></i>
                </button>
              </form>
            </div>
          </div>

          <!-- Categories Widget -->
          <div class="mb-10">
            <h2 class="text-xl font-semibold mb-4">Categories</h2>
            <ul class="space-y-3">
              <li class="group">
                <div class="flex justify-between items-center">
                  <a href="shop-left-sidebar.html" class="hover:text-gray-600">Cosmetic</a>
                  <span class="text-gray-500">5</span>
                </div>
                <ul class="ml-4 mt-2 hidden group-hover:block space-y-2">
                  <li><a href="shop-left-sidebar.html" class="text-gray-600 hover:text-black">For body</a></li>
                  <li><a href="shop-left-sidebar.html" class="text-gray-600 hover:text-black">Make up</a></li>
                  <li><a href="shop-left-sidebar.html" class="text-gray-600 hover:text-black">New</a></li>
                  <li><a href="shop-left-sidebar.html" class="text-gray-600 hover:text-black">Perfumes</a></li>
                </ul>
              </li>
              <li class="group">
                <div class="flex justify-between items-center">
                  <a href="shop-left-sidebar.html" class="hover:text-gray-600">Furniture</a>
                  <span class="text-gray-500">23</span>
                </div>
                <ul class="ml-4 mt-2 hidden group-hover:block space-y-2">
                  <li><a href="shop-left-sidebar.html" class="text-gray-600 hover:text-black">Sofas</a></li>
                  <li><a href="shop-left-sidebar.html" class="text-gray-600 hover:text-black">Armchairs</a></li>
                  <li><a href="shop-left-sidebar.html" class="text-gray-600 hover:text-black">Desk Chairs</a></li>
                  <li><a href="shop-left-sidebar.html" class="text-gray-600 hover:text-black">Dining Chairs</a></li>
                </ul>
              </li>
              <li class="flex justify-between items-center">
                <a href="shop-left-sidebar.html" class="hover:text-gray-600">Watches</a>
                <span class="text-gray-500">12</span>
              </li>
              <li class="flex justify-between items-center">
                <a href="shop-left-sidebar.html" class="hover:text-gray-600">Bags</a>
                <span class="text-gray-500">22</span>
              </li>
              <li class="flex justify-between items-center">
                <a href="shop-left-sidebar.html" class="hover:text-gray-600">Uncategorized</a>
                <span class="text-gray-500">14</span>
              </li>
            </ul>
          </div>

          <!-- Recent Posts Widget -->
          <div class="mb-10">
            <div class="space-y-6">
              <!-- Single Post -->
              <div class="flex gap-4">
                <div class="w-20 flex-shrink-0">
                  <img src="@/assets/images/blog/post-thumbnail-100x120.png" class="w-full h-auto" alt="">
                </div>
                <div>
                  <h3 class="font-medium hover:text-gray-600"><a href="#">Chic Fashion Phenomenon</a></h3>
                  <p class="text-sm text-gray-500">June 5, 2022</p>
                </div>
              </div>
              
              <!-- Single Post -->
              <div class="flex gap-4">
                <div class="w-20 flex-shrink-0">
                  <img src="@/assets/images/blog/post-thumbnail-6-100x120.png" class="w-full h-auto" alt="">
                </div>
                <div>
                  <h3 class="font-medium hover:text-gray-600"><a href="#">Go Your Own Way</a></h3>
                  <p class="text-sm text-gray-500">June 5, 2022</p>
                </div>
              </div>
              
              <!-- Single Post -->
              <div class="flex gap-4">
                <div class="w-20 flex-shrink-0">
                  <img src="@/assets/images/blog/post-thumbnail-9-100x120.png" class="w-full h-auto" alt="">
                </div>
                <div>
                  <h3 class="font-medium hover:text-gray-600"><a href="#">Home-made Body Lotion</a></h3>
                  <p class="text-sm text-gray-500">June 5, 2022</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Banner Widget -->
          <div class="mb-10">
            <img src="@/assets/images/banners/ADS-blog.png" class="w-full h-auto" alt="">
          </div>

          <!-- Tags Widget -->
          <div>
            <h2 class="text-xl font-semibold mb-4">Popular Tags</h2>
            <div class="flex flex-wrap gap-2">
              <a href="#" class="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm">bags</a>
              <a href="#" class="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm">chair</a>
              <a href="#" class="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm">clock</a>
              <a href="#" class="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm">comestic</a>
              <a href="#" class="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm">fashion</a>
              <a href="#" class="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm">furniture</a>
              <a href="#" class="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm">holder</a>
              <a href="#" class="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm">mask</a>
              <a href="#" class="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm">men</a>
              <a href="#" class="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm">oil</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="w-full lg:w-3/4 px-4 order-1 lg:order-2 mb-14 sm:mb-14">
        <div class="space-y-14">
          <!-- Blog Post -->
          <div>
            <div class="mb-8">
              <a href="">
                <img src="@/assets/images/blog/post-thumbnail.png" class="w-full h-auto" alt="">
              </a>
            </div>
            <div>
              <div class="flex items-center text-gray-500 mb-2">
                <i class="far fa-calendar-alt mr-2"></i>
                <a href="blog-standard-left-sidebar.html">june 5, 2022</a>
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
                <img src="@/assets/images/blog/post-thumbnail-6.png" class="w-full h-auto" alt="">
              </a>
            </div>
            <div>
              <div class="flex items-center text-gray-500 mb-2">
                <i class="far fa-calendar-alt mr-2"></i>
                <a href="blog-standard-left-sidebar.html">june 6, 2022</a>
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
                <img src="@/assets/images/blog/post-thumbnail-2-1.png" class="w-full h-auto" alt="">
              </a>
            </div>
            <div>
              <div class="flex items-center text-gray-500 mb-2">
                <i class="far fa-calendar-alt mr-2"></i>
                <a href="blog-standard-left-sidebar.html">june 8, 2022</a>
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
                <img src="@/assets/images/blog/post-thumbnail.png" class="w-full h-auto" alt="">
              </a>
            </div>
            <div>
              <div class="flex items-center text-gray-500 mb-2">
                <i class="far fa-calendar-alt mr-2"></i>
                <a href="blog-standard-left-sidebar.html">june 10, 2022</a>
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
                <img src="@/assets/images/blog/post-thumbnail-6.png" class="w-full h-auto" alt="">
              </a>
            </div>
            <div>
              <div class="flex items-center text-gray-500 mb-2">
                <i class="far fa-calendar-alt mr-2"></i>
                <a href="blog-standard-left-sidebar.html">june 5, 2022</a>
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
                <img src="@/assets/images/blog/post-thumbnail-2-1.png" class="w-full h-auto" alt="">
              </a>
            </div>
            <div>
              <div class="flex items-center text-gray-500 mb-2">
                <i class="far fa-calendar-alt mr-2"></i>
                <a href="blog-standard-left-sidebar.html">june 6, 2022</a>
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
                <img src="@/assets/images/blog/post-thumbnail-6.png" class="w-full h-auto" alt="">
              </a>
            </div>
            <div>
              <div class="flex items-center text-gray-500 mb-2">
                <i class="far fa-calendar-alt mr-2"></i>
                <a href="blog-standard-left-sidebar.html">june 8, 2022</a>
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
                <img src="@/assets/images/blog/post-thumbnail.png" class="w-full h-auto" alt="">
              </a>
            </div>
            <div>
              <div class="flex items-center text-gray-500 mb-2">
                <i class="far fa-calendar-alt mr-2"></i>
                <a href="blog-standard-left-sidebar.html">june 10, 2022</a>
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
  </div>
</div>
<Footers/>
</template>