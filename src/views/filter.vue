<template>
    <div class="shop-page-wrapper">
      <!-- Shop Page Header -->
      <div class="shop-page-header bg-gray-100 py-4">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap items-center">
            <!-- Filter Titles (hidden on mobile) -->
            <div class="hidden md:block w-full lg:w-7/12 md:w-10/12">
              <div class="filter-title">
                <ul class="flex space-x-6">
                  <li 
                    v-for="(filter, index) in filters" 
                    :key="index"
                    :class="{'text-black font-medium': activeFilter === filter.value, 'text-gray-600 hover:text-black': activeFilter !== filter.value}"
                    @click="activeFilter = filter.value"
                    class="cursor-pointer uppercase text-sm"
                  >
                    {{ filter.label }}
                  </li>
                </ul>
              </div>
            </div>
  
            <!-- Filter Icons -->
            <div class="w-full lg:w-5/12 md:w-2/12">
              <div class="flex justify-end items-center space-x-4">
                <!-- Filter Dropdown -->
                <div class="relative">
                  <select 
                    v-model="sortOption"
                    class="appearance-none bg-white border border-gray-300 rounded px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                  >
                    <option value="0">Default sorting</option>
                    <option value="1">Sort by popularity</option>
                    <option value="2">Sort by average rating</option>
                    <option value="3">Sort by latest</option>
                    <option value="4">Sort by price: low to high</option>
                    <option value="5">Sort by price: high to low</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                  </div>
                </div>
  
                <!-- Grid Icons -->
                <div class="flex space-x-2">
                  <a 
                    v-for="(layout, index) in layouts" 
                    :key="index"
                    href="#"
                    @click.prevent="activeLayout = layout.value"
                    :class="{'text-black': activeLayout === layout.value, 'text-gray-400 hover:text-black': activeLayout !== layout.value}"
                    class="p-1"
                  >
                    <i :class="layout.icon"></i>
                  </a>
                </div>
  
                <!-- Advance Filter Button -->
                <div>
                  <button 
                    @click="toggleAdvanceFilter"
                    class="flex items-center text-sm text-gray-600 hover:text-black"
                  >
                    <i class="fas fa-filter mr-1"></i>
                    Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Advance Filter Area -->
      <div 
        class="shop-advance-filter-area bg-white shadow-md transition-all duration-300 overflow-hidden"
        :class="{'max-h-0': !showAdvanceFilter, 'max-h-screen': showAdvanceFilter}"
      >
        <div class="shop-advance-filter-wrapper pt-12 pb-6">
          <div class="container mx-auto px-4">
            <div class="flex flex-wrap -mx-4">
              <!-- Sort By Filter -->
              <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-8">
                <div class="single-filter-widget">
                  <h2 class="text-lg font-semibold mb-4">Sort by</h2>
                  <ul class="space-y-2">
                    <li v-for="(sort, index) in sortOptions" :key="index">
                      <a href="#" class="text-gray-600 hover:text-black">{{ sort }}</a>
                    </li>
                  </ul>
                </div>
              </div>
  
              <!-- Categories Filter -->
              <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-8">
                <div class="single-filter-widget">
                  <h2 class="text-lg font-semibold mb-4">Categories</h2>
                  <ul class="space-y-3">
                    <li v-for="(category, index) in categories" :key="index" class="group">
                      <div class="flex justify-between">
                        <a href="#" class="text-gray-600 hover:text-black">{{ category.name }}</a>
                        <span class="text-gray-400">{{ category.count }}</span>
                      </div>
                      <ul v-if="category.subcategories" class="ml-4 mt-1 hidden group-hover:block space-y-1">
                        <li v-for="(subcat, subIndex) in category.subcategories" :key="subIndex">
                          <a href="#" class="text-gray-500 hover:text-black">{{ subcat }}</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
  
              <!-- Price Filter -->
              <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-8">
                <div class="single-filter-widget">
                  <h2 class="text-lg font-semibold mb-4">Price filter</h2>
                  <ul class="space-y-2">
                    <li v-for="(price, index) in priceRanges" :key="index">
                      <a href="#" class="text-gray-600 hover:text-black">{{ price }}</a>
                    </li>
                  </ul>
                </div>
              </div>
  
              <!-- Color Filter -->
              <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-8">
                <div class="single-filter-widget">
                  <h2 class="text-lg font-semibold mb-4">Color</h2>
                  <div class="flex flex-wrap gap-2">
                    <a 
                      v-for="(color, index) in colors" 
                      :key="index"
                      href="#"
                      :class="{'ring-2 ring-black': activeColor === color.value}"
                      @click.prevent="activeColor = color.value"
                      class="w-8 h-8 rounded-full flex items-center justify-center"
                      :style="`background-color: ${color.value}`"
                      :title="color.name"
                    ></a>
                  </div>
                </div>
              </div>
  
              <!-- Size Filter -->
              <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-8">
                <div class="single-filter-widget">
                  <h2 class="text-lg font-semibold mb-4">Size</h2>
                  <ul class="space-y-2">
                    <li v-for="(size, index) in sizes" :key="index" class="flex justify-between">
                      <a href="#" class="text-gray-600 hover:text-black">{{ size.name }}</a>
                      <span class="text-gray-400">{{ size.count }}</span>
                    </li>
                  </ul>
                </div>
              </div>
  
              <!-- Brands Filter -->
              <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-8">
                <div class="single-filter-widget">
                  <h2 class="text-lg font-semibold mb-4">Brands</h2>
                  <ul class="space-y-2">
                    <li v-for="(brand, index) in brands" :key="index" class="flex justify-between">
                      <a href="#" class="text-gray-600 hover:text-black">{{ brand.name }}</a>
                      <span class="text-gray-400">({{ brand.count }})</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Shop Page Content -->
      <div class="shop-page-content my-12">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap -mx-4">
            <!-- Sidebar -->
            <div class="w-full lg:w-1/4 px-4 order-2 lg:order-1">
              <div class="space-y-8">
                <!-- Search Widget -->
                <div class="search-widget mb-8">
                  <form class="relative">
                    <input 
                      type="search" 
                      placeholder="Search products ..." 
                      class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                    >
                    <button type="button" class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                      <i class="fas fa-search"></i>
                    </button>
                  </form>
                </div>
  
                <!-- Categories Widget -->
                <div class="mb-8">
                  <h2 class="text-lg font-semibold mb-4">Categories</h2>
                  <ul class="space-y-3">
                    <li v-for="(category, index) in sidebarCategories" :key="index" class="group">
                      <div class="flex justify-between">
                        <a href="#" class="text-gray-600 hover:text-black">{{ category.name }}</a>
                        <span class="text-gray-400">{{ category.count }}</span>
                      </div>
                      <ul v-if="category.subcategories" class="ml-4 mt-1 hidden group-hover:block space-y-1">
                        <li v-for="(subcat, subIndex) in category.subcategories" :key="subIndex">
                          <a href="#" class="text-gray-500 hover:text-black">{{ subcat }}</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
  
                <!-- Price Range Widget -->
                <div class="mb-8">
                  <h2 class="text-lg font-semibold mb-4">Filters</h2>
                  <div class="sidebar-price">
                    <input 
                      type="range" 
                      v-model="priceRange"
                      min="0" 
                      max="1000" 
                      step="10"
                      class="w-full mb-4"
                    >
                    <div class="flex justify-between items-center">
                      <input 
                        type="text" 
                        :value="`$${priceRange}`"
                        readonly
                        class="w-24 px-2 py-1 border border-gray-300 rounded text-sm"
                      >
                      <button class="flex items-center text-sm text-gray-600 hover:text-black">
                        <i class="fas fa-filter mr-1"></i>
                        Filter
                      </button>
                    </div>
                  </div>
                </div>
  
                <!-- Popular Products Widget -->
                <div class="mb-8">
                  <h2 class="text-lg font-semibold mb-4">Popular products</h2>
                  <div class="space-y-4">
                    <div 
                      v-for="(product, index) in popularProducts" 
                      :key="index"
                      class="flex gap-4"
                    >
                      <div class="w-20 flex-shrink-0">
                        <img :src="product.image" class="w-full h-auto" :alt="product.name">
                      </div>
                      <div>
                        <h3 class="font-medium hover:text-gray-600">
                          <a href="#">{{ product.name }}</a>
                        </h3>
                        <div class="flex items-center mt-1">
                          <span class="text-sm font-medium text-gray-900">${{ product.price }}</span>
                          <span v-if="product.oldPrice" class="text-sm text-gray-500 line-through ml-2">${{ product.oldPrice }}</span>
                        </div>
                        <div class="flex mt-1">
                          <i v-for="star in 5" :key="star" class="fas fa-star text-yellow-400 text-xs"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                <!-- Tags Widget -->
                <div>
                  <h2 class="text-lg font-semibold mb-4">Tags</h2>
                  <div class="flex flex-wrap gap-2">
                    <a 
                      v-for="(tag, index) in tags" 
                      :key="index"
                      href="#"
                      class="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm"
                    >
                      {{ tag }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- Main Content -->
            <div class="w-full lg:w-3/4 px-4 order-1 lg:order-2 mb-8 md:mb-0">
              <!-- Products Grid -->
              <div 
                class="grid gap-6"
                :class="{
                  'grid-cols-1': activeLayout === 'list',
                  'grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4': activeLayout === 'four-column',
                  'grid-cols-2 sm:grid-cols-3': activeLayout === 'three-column',
                  'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5': activeLayout === 'five-column'
                }"
              >
                <!-- Product Item -->
                <div 
                  v-for="(product, index) in filteredProducts" 
                  :key="index"
                  class="bg-white border border-gray-200 rounded overflow-hidden hover:shadow-md transition-shadow duration-300"
                  :class="{'flex flex-col md:flex-row': activeLayout === 'list'}"
                >
                  <!-- Product Image -->
                  <div 
                    class="relative overflow-hidden"
                    :class="{'w-full md:w-1/3': activeLayout === 'list', 'w-full': activeLayout !== 'list'}"
                  >
                    <a href="#" class="block">
                      <img 
                        :src="product.image" 
                        class="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                        :alt="product.name"
                      >
                    </a>
                    <!-- Badges -->
                    <div class="absolute top-2 left-2 flex flex-col space-y-1">
                      <span v-if="product.sale" class="bg-red-500 text-white text-xs px-2 py-1 rounded">-{{ product.discount }}%</span>
                      <span v-if="product.hot" class="bg-black text-white text-xs px-2 py-1 rounded">HOT</span>
                    </div>
                    <!-- Quick Actions -->
                    <div class="absolute top-2 right-2 flex flex-col space-y-2">
                      <button class="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-black">
                        <i class="far fa-heart"></i>
                      </button>
                      <button class="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-black">
                        <i class="fas fa-random"></i>
                      </button>
                      <button class="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-black">
                        <i class="fas fa-search"></i>
                      </button>
                    </div>
                  </div>
  
                  <!-- Product Content -->
                  <div 
                    class="p-4"
                    :class="{'w-full md:w-2/3': activeLayout === 'list'}"
                  >
                    <!-- Variations (Grid View) -->
                    <div v-if="activeLayout !== 'list'" class="mb-2">
                      <div class="flex space-x-2 mb-1">
                        <span v-for="(size, sizeIndex) in product.sizes" :key="sizeIndex" class="text-xs border border-gray-200 px-1">{{ size }}</span>
                      </div>
                      <div class="flex space-x-2">
                        <span v-for="(color, colorIndex) in product.colors" :key="colorIndex" class="w-4 h-4 rounded-full" :style="`background-color: ${color}`"></span>
                      </div>
                    </div>
  
                    <!-- Title -->
                    <h3 class="font-medium text-gray-900 hover:text-black mb-1">
                      <a href="#">{{ product.name }}</a>
                    </h3>
  
                    <!-- Price -->
                    <div class="flex items-center mb-2">
                      <span class="text-lg font-medium text-gray-900">${{ product.price }}</span>
                      <span v-if="product.oldPrice" class="text-sm text-gray-500 line-through ml-2">${{ product.oldPrice }}</span>
                    </div>
  
                    <!-- Description (List View) -->
                    <p v-if="activeLayout === 'list'" class="text-gray-600 text-sm mb-4">
                      {{ product.description }}
                    </p>
  
                    <!-- Add to Cart Button -->
                    <button class="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors duration-300">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
  
              <!-- Load More Button -->
              <div class="text-center mt-8">
                <button class="bg-black text-white py-3 px-6 rounded hover:bg-gray-800 transition-colors duration-300 inline-flex items-center">
                  <i class="fas fa-plus mr-2"></i>
                  MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  
  export default {
    setup() {
      // State
      const showAdvanceFilter = ref(false);
      const activeFilter = ref('*');
      const activeLayout = ref('four-column');
      const sortOption = ref('0');
      const activeColor = ref('#000000');
      const priceRange = ref(500);
      
      // Data
      const filters = [
        { label: 'All', value: '*' },
        { label: 'Hot products', value: 'hot' },
        { label: 'New products', value: 'new' },
        { label: 'Sale products', value: 'sale' }
      ];
      
      const layouts = [
        { icon: 'fas fa-th-large', value: 'five-column' },
        { icon: 'fas fa-th', value: 'four-column' },
        { icon: 'fas fa-th-list', value: 'three-column' },
        { icon: 'fas fa-list', value: 'list' }
      ];
      
      const sortOptions = [
        'Default',
        'Popularity',
        'Average rating',
        'Newness',
        'Price: low to high',
        'Price: high to low'
      ];
      
      const categories = [
        { 
          name: 'Cosmetic', 
          count: 5,
          subcategories: ['For body', 'Make up', 'New', 'Perfumes']
        },
        { 
          name: 'Furniture', 
          count: 23,
          subcategories: ['Sofas', 'Armchairs', 'Desk Chairs', 'Dining Chairs']
        },
        { name: 'Watches', count: 12 }
      ];
      
      const priceRanges = [
        'All',
        '$0.00 - $70.00',
        '$70.00 - $140.00',
        '$140.00 - $210.00',
        '$210.00 - $280.00',
        '$280.00 - $350.00'
      ];
      
      const colors = [
        { name: 'Black', value: '#000000' },
        { name: 'Blue', value: '#0000FF' },
        { name: 'Brown', value: '#A52A2A' },
        { name: 'Gold', value: '#FFD700' },
        { name: 'Green Coral', value: '#00FF7F' },
        { name: 'Grey', value: '#808080' },
        { name: 'Oak', value: '#CD853F' },
        { name: 'Pink', value: '#FFC0CB' },
        { name: 'Silver', value: '#C0C0C0' },
        { name: 'White', value: '#FFFFFF' }
      ];
      
      const sizes = [
        { name: 'L', count: 5 },
        { name: 'M', count: 5 },
        { name: 'S', count: 5 },
        { name: 'XS', count: 5 }
      ];
      
      const brands = [
        { name: 'Alliop', count: 12 },
        { name: 'Burberry', count: 15 },
        { name: 'Catmen', count: 13 },
        { name: 'Houdini', count: 10 },
        { name: 'Love', count: 70 },
        { name: 'Made', count: 15 }
      ];
      
      const sidebarCategories = [
        { 
          name: 'Cosmetic', 
          count: 5,
          subcategories: ['For body', 'Make up', 'New', 'Perfumes']
        },
        { 
          name: 'Furniture', 
          count: 23,
          subcategories: ['Sofas', 'Armchairs', 'Desk Chairs', 'Dining Chairs']
        },
        { name: 'Watches', count: 12 },
        { name: 'Bags', count: 22 },
        { name: 'Uncategorized', count: 14 }
      ];
      
      const popularProducts = [
        { 
          name: 'Wooden Table', 
          image: 'assets/images/products/product-furniture-2-100x100.jpg',
          price: '220.00',
          oldPrice: '270.00',
          rating: 2
        },
        { 
          name: 'Sofa with cushion', 
          image: 'assets/images/products/product-furniture-11-100x100.jpg',
          price: '600.00',
          oldPrice: '660.00',
          rating: 5
        },
        { 
          name: 'High waist trousers', 
          image: 'assets/images/products/soccer-4-100x100.jpg',
          price: '33.00',
          oldPrice: '36.00',
          rating: 4
        }
      ];
      
      const tags = [
        'bags', 'chair', 'clock', 'comestic', 'fashion', 
        'furniture', 'holder', 'mask', 'men', 'oil'
      ];
      
      const products = [
        {
          name: 'High-waist Trousers',
          image: 'assets/images/products/cloth-1-1-600x800.jpg',
          price: '180.00',
          oldPrice: '160.00',
          sale: true,
          discount: 10,
          hot: true,
          sizes: ['L', 'M', 'S', 'XS'],
          colors: ['#000000', '#0000FF', '#FFD700'],
          description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium consequuntur voluptatem ad molestiae.',
          tags: ['hot', 'sale']
        },
        {
          name: 'Light Brown Watch',
          image: 'assets/images/products/watch-1-1-600x800.jpg',
          price: '130.00',
          sale: true,
          discount: 10,
          sizes: ['One Size'],
          colors: ['#A52A2A', '#000000'],
          description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium consequuntur voluptatem ad molestiae.',
          tags: ['sale']
        },
        {
          name: 'Dark Gray Watch',
          image: 'assets/images/products/watch-2-1-600x800.jpg',
          price: '230.00',
          oldPrice: '260.00',
          hot: true,
          sizes: ['One Size'],
          colors: ['#808080', '#000000'],
          description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium consequuntur voluptatem ad molestiae.',
          tags: ['hot']
        },
        {
          name: 'Dark Brown Watch',
          image: 'assets/images/products/watch-3-1-600x800.jpg',
          price: '100.00',
          oldPrice: '120.00',
          sizes: ['One Size'],
          colors: ['#A52A2A', '#000000'],
          description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium consequuntur voluptatem ad molestiae.',
          tags: ['new']
        },
        {
          name: 'Pink Clay Mask',
          image: 'assets/images/products/cosmetics-1-1-600x800.jpg',
          price: '80.00',
          oldPrice: '100.00',
          sale: true,
          discount: 5,
          sizes: ['One Size'],
          colors: ['#FFC0CB', '#FFFFFF'],
          description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium consequuntur voluptatem ad molestiae.',
          tags: ['sale']
        },
        {
          name: 'Wooden Round Table',
          image: 'assets/images/products/furniture-1-1-600x800.jpg',
          price: '380.00',
          oldPrice: '400.00',
          sale: true,
          discount: 15,
          sizes: ['One Size'],
          colors: ['#CD853F', '#000000'],
          description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium consequuntur voluptatem ad molestiae.',
          tags: ['sale']
        },
        {
          name: 'Sofa with Cushion',
          image: 'assets/images/products/furniture-2-1-600x800.jpg',
          price: '85.00',
          sizes: ['One Size'],
          colors: ['#000000', '#FFFFFF'],
          description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium consequuntur voluptatem ad molestiae.',
          tags: ['new']
        },
        {
          name: 'Green Coutch',
          image: 'assets/images/products/furniture-3-1-600x800.jpg',
          price: '300.00',
          oldPrice: '360.00',
          sale: true,
          discount: 25,
          sizes: ['One Size'],
          colors: ['#00FF7F', '#000000'],
          description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium consequuntur voluptatem ad molestiae.',
          tags: ['sale']
        }
      ];
  
      // Computed
      const filteredProducts = computed(() => {
        if (activeFilter.value === '*') return products;
        return products.filter(product => product.tags.includes(activeFilter.value));
      });
  
      // Methods
      const toggleAdvanceFilter = () => {
        showAdvanceFilter.value = !showAdvanceFilter.value;
      };
  
      return {
        showAdvanceFilter,
        activeFilter,
        activeLayout,
        sortOption,
        activeColor,
        priceRange,
        filters,
        layouts,
        sortOptions,
        categories,
        priceRanges,
        colors,
        sizes,
        brands,
        sidebarCategories,
        popularProducts,
        tags,
        products,
        filteredProducts,
        toggleAdvanceFilter
      };
    }
  };
  </script>
  
  <style>
  /* Custom styles that can't be easily done with Tailwind */
  .shop-advance-filter-area {
    transition: max-height 0.3s ease-out;
  }
  </style>