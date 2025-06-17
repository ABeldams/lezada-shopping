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
      <p class="text-md p-4" :class="active ? 'text-black' : 'text-gray-400'">Blog List Left Sidebar </p>
    </div>
  </div>



  <div class="mb-[100px] mt-[100px]">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap -mx-4">
      <div class="w-full lg:w-3/12 px-4 order-2 lg:order-1">
        <!-- Sidebar -->
        <div class="space-y-10">
          <!-- Search Widget -->
          <div class="mb-10">
            <div class="relative">
              <form action="#">
                <input type="search" placeholder="Search products ..." class="w-full px-4 py-2 border border-t-0
                 border-l-0  border-r-0 ">
                <button type="button" class="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <i class="ion-android-search"></i>
                </button>
              </form>
            </div>
          </div>

          <!-- Categories Widget -->
          <div class="mb-10">
            <h2 class="text-xl font-bold mb-4">Categories</h2>
            <ul class="space-y-2">
              <li class="group">
                <div class="flex justify-between items-center">
                  <a href="shop-left-sidebar.html" class="hover:text-gray-600">Cosmetic</a>
                  <span class="text-sm">5</span>
                </div>
                <ul class="ml-4 mt-1 hidden group-hover:block space-y-1">
                  <li><a href="shop-left-sidebar.html" class="text-sm hover:text-gray-600">For body</a></li>
                  <li><a href="shop-left-sidebar.html" class="text-sm hover:text-gray-600">Make up</a></li>
                  <li><a href="shop-left-sidebar.html" class="text-sm hover:text-gray-600">New</a></li>
                  <li><a href="shop-left-sidebar.html" class="text-sm hover:text-gray-600">Perfumes</a></li>
                </ul>
              </li>
              <li class="group">
                <div class="flex justify-between items-center">
                  <a href="shop-left-sidebar.html" class="hover:text-gray-600">Furniture</a>
                  <span class="text-sm">23</span>
                </div>
                <ul class="ml-4 mt-1 hidden group-hover:block space-y-1">
                  <li><a href="shop-left-sidebar.html" class="text-sm hover:text-gray-600">Sofas</a></li>
                  <li><a href="shop-left-sidebar.html" class="text-sm hover:text-gray-600">Armchairs</a></li>
                  <li><a href="shop-left-sidebar.html" class="text-sm hover:text-gray-600">Desk Chairs</a></li>
                  <li><a href="shop-left-sidebar.html" class="text-sm hover:text-gray-600">Dining Chairs</a></li>
                </ul>
              </li>
              <li class="flex justify-between items-center">
                <a href="shop-left-sidebar.html" class="hover:text-gray-600">Watches</a>
                <span class="text-sm">12</span>
              </li>
              <li class="flex justify-between items-center">
                <a href="shop-left-sidebar.html" class="hover:text-gray-600">Bags</a>
                <span class="text-sm">22</span>
              </li>
              <li class="flex justify-between items-center">
                <a href="shop-left-sidebar.html" class="hover:text-gray-600">Uncategorized</a>
                <span class="text-sm">14</span>
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
            <h2 class="text-xl font-bold mb-4">Popular Tags</h2>
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

      <div class="w-full lg:w-9/12 px-4 order-1 lg:order-2 mb-14 sm:mb-14 md:mb-14">
        <div class="space-y-14">
          <!-- Blog Post -->
          <div class="flex flex-col md:flex-row gap-6 border-b pb-14">
            <div class="md:w-5/12">
              <a href="">
                <img src="@/assets/images/blog/post-thumbnail-370x200.png" class="w-full h-auto" alt="">
              </a>
            </div>
            <div class="md:w-7/12">
              <div class="flex items-center text-gray-500 mb-2">
                <i class="ion-android-calendar mr-2"></i>
                <a href="" class="hover:text-gray-600">june 5, 2022</a>
              </div>
              <h2 class="text-xl font-bold mb-3 hover:text-gray-600">
                <a href="">Chic Fashion Phenomenon</a>
              </h2>
              <p class="text-gray-600 mb-4">Michele seemed to say, was the 21st-century Gucci girl, an eccentric, fresh-faced weirdo who wasn't afraid to wear backless fur-lined loafers, to personify the idea of "ugly pretty."</p>
              <a href="" class="inline-block text-sm font-medium underline hover:text-gray-600">READ MORE</a>
            </div>
          </div>

          <!-- Repeat for other blog posts -->
          <div class="flex flex-col md:flex-row gap-6 border-b pb-14">
            <div class="md:w-5/12">
              <a href="">
                <img src="@/assets/images/blog/post-thumbnail-6.png" class="w-full h-auto" alt="">
              </a>
            </div>
            <div class="md:w-7/12">
              <div class="flex items-center text-gray-500 mb-2">
                <i class="ion-android-calendar mr-2"></i>
                <a href="" class="hover:text-gray-600">june 6, 2022</a>
              </div>
              <h2 class="text-xl font-bold mb-3 hover:text-gray-600">
                <a href="">Shirt Color Picking Guide</a>
              </h2>
              <p class="text-gray-600 mb-4">Michele seemed to say, was the 21st-century Gucci girl, an eccentric, fresh-faced weirdo who wasn't afraid to wear backless fur-lined loafers, to personify the idea of "ugly pretty."</p>
              <a href="" class="inline-block text-sm font-medium underline hover:text-gray-600">READ MORE</a>
            </div>
          </div>

          <!-- Repeat for other blog posts -->
          <div class="flex flex-col md:flex-row gap-6 border-b pb-14">
            <div class="md:w-5/12">
              <a href="">
                <img src="@/assets/images/blog/post-thumbnail-2-1-370x200.png" class="w-full h-auto" alt="">
              </a>
            </div>
            <div class="md:w-7/12">
              <div class="flex items-center text-gray-500 mb-2">
                <i class="ion-android-calendar mr-2"></i>
                <a href="" class="hover:text-gray-600">june 6, 2022</a>
              </div>
              <h2 class="text-xl font-bold mb-3 hover:text-gray-600">
                <a href="">Shirt Color Picking Guide</a>
              </h2>
              <p class="text-gray-600 mb-4">Michele seemed to say, was the 21st-century Gucci girl, an eccentric, fresh-faced weirdo who wasn't afraid to wear backless fur-lined loafers, to personify the idea of "ugly pretty."</p>
              <a href="" class="inline-block text-sm font-medium underline hover:text-gray-600">READ MORE</a>
            </div>
          </div>

          <!-- Blog Post -->
          <div class="flex flex-col md:flex-row gap-6 border-b pb-14">
            <div class="md:w-5/12">
              <a href="">
                <img src="@/assets/images/blog/post-thumbnail-370x200.png" class="w-full h-auto" alt="">
              </a>
            </div>
            <div class="md:w-7/12">
              <div class="flex items-center text-gray-500 mb-2">
                <i class="ion-android-calendar mr-2"></i>
                <a href="" class="hover:text-gray-600">june 5, 2022</a>
              </div>
              <h2 class="text-xl font-bold mb-3 hover:text-gray-600">
                <a href="">Chic Fashion Phenomenon</a>
              </h2>
              <p class="text-gray-600 mb-4">Michele seemed to say, was the 21st-century Gucci girl, an eccentric, fresh-faced weirdo who wasn't afraid to wear backless fur-lined loafers, to personify the idea of "ugly pretty."</p>
              <a href="" class="inline-block text-sm font-medium underline hover:text-gray-600">READ MORE</a>
            </div>
          </div>



                    <!-- Repeat for other blog posts -->
                    <div class="flex flex-col md:flex-row gap-6 border-b pb-14">
            <div class="md:w-5/12">
              <a href="">
                <img src="@/assets/images/blog/post-thumbnail-6.png" class="w-full h-auto" alt="">
              </a>
            </div>
            <div class="md:w-7/12">
              <div class="flex items-center text-gray-500 mb-2">
                <i class="ion-android-calendar mr-2"></i>
                <a href="" class="hover:text-gray-600">june 6, 2022</a>
              </div>
              <h2 class="text-xl font-bold mb-3 hover:text-gray-600">
                <a href="">Shirt Color Picking Guide</a>
              </h2>
              <p class="text-gray-600 mb-4">Michele seemed to say, was the 21st-century Gucci girl, an eccentric, fresh-faced weirdo who wasn't afraid to wear backless fur-lined loafers, to personify the idea of "ugly pretty."</p>
              <a href="" class="inline-block text-sm font-medium underline hover:text-gray-600">READ MORE</a>
            </div>
          </div>

          <!-- Repeat for other blog posts -->
          <div class="flex flex-col md:flex-row gap-6 border-b pb-14">
            <div class="md:w-5/12">
              <a href="">
                <img src="@/assets/images/blog/post-thumbnail-2-1-370x200.png" class="w-full h-auto" alt="">
              </a>
            </div>
            <div class="md:w-7/12">
              <div class="flex items-center text-gray-500 mb-2">
                <i class="ion-android-calendar mr-2"></i>
                <a href="" class="hover:text-gray-600">june 6, 2022</a>
              </div>
              <h2 class="text-xl font-bold mb-3 hover:text-gray-600">
                <a href="">Shirt Color Picking Guide</a>
              </h2>
              <p class="text-gray-600 mb-4">Michele seemed to say, was the 21st-century Gucci girl, an eccentric, fresh-faced weirdo who wasn't afraid to wear backless fur-lined loafers, to personify the idea of "ugly pretty."</p>
              <a href="" class="inline-block text-sm font-medium underline hover:text-gray-600">READ MORE</a>
            </div>
          </div>
          <!-- More posts would follow the same pattern -->

          <!-- Pagination -->
          <div class="text-center mt-10">
            <ul class="inline-flex space-x-2">
              <li><a href="#" class="px-3 py-1 bg-gray-800 text-white rounded">1</a></li>
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
</div>

<Footers/>
</template>