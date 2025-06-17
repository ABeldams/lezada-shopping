<script setup>
import Footers from '@/components/Footers.vue';
import Navbar_second from '@/components/navbar_second.vue';


</script>

<template>
<Navbar_second/>
<div class="breadcrumb-area breadcrumb-bg-1 pt-50 pb-70 mb-100">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<h1 class="breadcrumb-title">Product categories</h1>

					<!--=======  breadcrumb list  =======-->

					<ul class="breadcrumb-list">
						<li class="breadcrumb-list__item"><a href="index.html">HOME</a></li>
						<li class="breadcrumb-list__item"><a href="#">ELEMENTS</a></li>
						<li class="breadcrumb-list__item breadcrumb-list__item--active">PRODUCT CATEGORIES</li>
					</ul>

					<!--=======  End of breadcrumb list  =======-->

				</div>
			</div>
		</div>
	</div>

    <div class="mb-80">
  <div class="container mx-auto">
    <div class="flex flex-wrap">
      <div class="w-full">
        <!-- Section Title -->
        <div class="text-center">
          <h1 class="text-4xl font-bold mb-4">Style 01</h1>
          <p class="text-lg">This is where to find your satisfactory products</p>
        </div>
        <!-- End of Section Title -->
      </div>
    </div>
  </div>
</div>

<div class="mb-24 md:mb-22 sm:mb-22">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap -mx-4">
      <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
        <!-- Single Category -->
        <div class="relative wow zoomIn group">
          <!-- Category Image -->
          <div class="overflow-hidden">
            <img src="@/assets/images/category/category-women.jpg" class="w-full h-auto" alt="">
          </div>
          <!-- End of Category Image -->

          <!-- Category Content -->
          <div class="mt-6 mb-6">
            <div class="flex justify-between items-center mb-2">
              <p class="font-medium">Women</p>
              <a href="shop-left-sidebar.html" class="text-sm hover:underline">+ Online store</a>
            </div>
            <p class="text-sm">999</p>
          </div>
          <!-- End of Category Content -->

          <a href="shop-left-sidebar.html" class="absolute inset-0"></a>
        </div>
        <!-- End of Single Category -->
      </div>

      <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
        <!-- Single Category -->
        <div class="relative wow zoomIn group">
          <!-- Category Content -->
          <div class="mt-6 mb-6">
            <div class="flex justify-between items-center mb-2">
              <p class="font-medium">Shoes</p>
              <a href="shop-left-sidebar.html" class="text-sm hover:underline">+ Online store</a>
            </div>
            <p class="text-sm">2</p>
          </div>
          <!-- End of Category Content -->

          <!-- Category Image -->
          <div class="overflow-hidden">
            <img src="@/assets/images/category/category-shoes.jpg" class="w-full h-auto" alt="">
          </div>
          <!-- End of Category Image -->

          <a href="shop-left-sidebar.html" class="absolute inset-0"></a>
        </div>
        <!-- End of Single Category -->
      </div>

      <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
        <!-- Single Category -->
        <div class="relative wow zoomIn group">
          <!-- Category Image -->
          <div class="overflow-hidden">
            <img src="@/assets/images/category/category-bags.jpg" class="w-full h-auto" alt="">
          </div>
          <!-- End of Category Image -->

          <!-- Category Content -->
          <div class="mt-6 mb-6">
            <div class="flex justify-between items-center mb-2">
              <p class="font-medium">Bags</p>
              <a href="shop-left-sidebar.html" class="text-sm hover:underline">+ Online store</a>
            </div>
            <p class="text-sm">6</p>
          </div>
          <!-- End of Category Content -->

          <a href="shop-left-sidebar.html" class="absolute inset-0"></a>
        </div>
        <!-- End of Single Category -->
      </div>

      <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
        <!-- Single Category -->
        <div class="relative wow zoomIn group">
          <!-- Category Content -->
          <div class="mt-6 mb-6">
            <div class="flex justify-between items-center mb-2">
              <p class="font-medium">Men</p>
              <a href="shop-left-sidebar.html" class="text-sm hover:underline">+ Online store</a>
            </div>
            <p class="text-sm">8</p>
          </div>
          <!-- End of Category Content -->

          <!-- Category Image -->
          <div class="overflow-hidden">
            <img src="@/assets/images/category/category-men.jpg" class="w-full h-auto" alt="">
          </div>
          <!-- End of Category Image -->

          <RouterLink :to="{name:'left-sidebar'}" class="absolute inset-0"></RouterLink>
        </div>
        <!-- End of Single Category -->
      </div>
    </div>
  </div>
</div>



  

<div class="mb-80">
  <div class="container mx-auto">
    <div class="flex flex-wrap">
      <div class="w-full">
        <!-- Section Title -->
        <div class="text-center">
          <h1 class="text-4xl font-bold mb-4">Style 03</h1>
          <p class="text-lg">This is where to find your satisfactory products</p>
        </div>
        <!-- End of Section Title -->
      </div>
    </div>
  </div>
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

<Footers/>
</template>