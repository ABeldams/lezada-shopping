
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import bgImage from '@/assets/images/background-heading-page.png'
import Navbar_second from '@/components/navbar_second.vue';
import Footers from '@/components/Footers.vue';


export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Navigation],
      blogPosts: [
        {
          image: 'https://lezada.jamstacktemplates.dev/assets/images/blog/post-thumbnail-1-370x200.png',
          link: '',
          categoryLink: 'blog-standard-left-sidebar.html',
          date: 'june 5, 2022',
          title: 'Chic Fashion Phenomenon',
          excerpt: 'Michele seemed to say, was the 21st-century Gucci girl, an eccentric, fresh-faced weirdo who wasn\'t afraid to wear backless fur-lined loafers, to personify the idea of "ugly pretty."'
        },
        {
          image: 'https://lezada.jamstacktemplates.dev/assets/images/blog/post-thumbnail-2-1-370x200.png',
          link: '',
          categoryLink: 'blog-standard-left-sidebar.html',
          date: 'june 6, 2022',
          title: 'Shirt Color Picking Guide',
          excerpt: 'Michele seemed to say, was the 21st-century Gucci girl, an eccentric, fresh-faced weirdo who wasn\'t afraid to wear backless fur-lined loafers, to personify the idea of "ugly pretty."'
        },
        {
          image: 'https://lezada.jamstacktemplates.dev/assets/images/blog/post-thumbnail-8-370x200.png',
          link: '',
          categoryLink: 'blog-standard-left-sidebar.html',
          date: 'june 8, 2022',
          title: 'Perfect Perfume & Cologne',
          excerpt: 'Michele seemed to say, was the 21st-century Gucci girl, an eccentric, fresh-faced weirdo who wasn\'t afraid to wear backless fur-lined loafers, to personify the idea of "ugly pretty."'
        },
        {
          image: 'https://lezada.jamstacktemplates.dev/assets/images/blog/post-thumbnail-370x200.png',
          link: '',
          categoryLink: 'blog-standard-left-sidebar.html',
          date: 'june 10, 2022',
          title: 'T-Shirts as Minimalist Style',
          excerpt: 'Michele seemed to say, was the 21st-century Gucci girl, an eccentric, fresh-faced weirdo who wasn\'t afraid to wear backless fur-lined loafers, to personify the idea of "ugly pretty."'
        }
      ]
    };
  }
};
</script>


  <template>
    <Navbar_second/>
<div class="bg-gray-200 mt-[90px] p-10" :style="{ backgroundImage: `url(${bgImage})` }">
    <h1 class="sm:text-3xl md:text-6xl lg:text-4xl p-4 text-black">Shop No Sidebar</h1>
    <div class="flex space-y-0">
      <p class="text-md p-4 text-gray-400 hover:text-black cursor-pointer">
        <RouterLink to="/" class="hover:text-black">Home /</RouterLink>
      </p>
      <p class="text-md p-4" :class="active ? 'text-black' : 'text-gray-400'">Shop No Sidebar</p>
    </div>
  </div>

    <div class="blog-post-area mb-[100px] mt-[50px]">
    <div class="container mx-auto px-4">
      <div class="flex flex-col lg:flex-row items-center">
        <!-- Blog Intro -->
        <div class="w-full lg:w-1/3 mb-[50px] lg:mb-0">
          <div class="blog-intro">
            <h2 class="text-2xl font-bold mb-4">From our blog</h2>
            <p class="mb-6">
              Lorem ipsum dolor sit amet, consecte tur cing elit. Suspe ndisse suscipit sagittis leo sit met condim entum.
            </p>
            <a href="blog-standard-left-sidebar.html" class="inline-block px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition">
              view all
            </a>
          </div>
        </div>

        <!-- Blog Slider -->
        <div class="w-full lg:w-2/3">
          <swiper
            :modules="modules"
            :slides-per-view="2"
            :space-between="30"
            :navigation="{
              prevEl: '.blog-slider-prev',
              nextEl: '.blog-slider-next',
            }"
            :breakpoints="{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              992: { slidesPerView: 2, navigation: false },
              1200: { slidesPerView: 2 },
              1500: { slidesPerView: 2 }
            }"
            class="blog-slider"
          >
            <swiper-slide v-for="(post, index) in blogPosts" :key="index" class="px-3">
              <div class="single-slider-post">
                <!-- Image -->
                <div class="mb-[30px]">
                  <a :href="post.link">
                    <img :src="post.image" class="w-full" :alt="post.title">
                  </a>
                </div>

                <!-- Content -->
                <div class="single-slider-post__content">
                  <div class="post-date flex items-center text-sm mb-2">
                    <i class="ion-android-calendar mr-2"></i>
                    <a :href="post.categoryLink">{{ post.date }}</a>
                  </div>
                  <h2 class="post-title text-xl font-bold mb-3">
                    <a :href="post.link">{{ post.title }}</a>
                  </h2>
                  <p class="post-excerpt mb-4">{{ post.excerpt }}</p>
                  <a :href="post.link" class="underline hover:no-underline">read more</a>
                </div>
              </div>
            </swiper-slide>

            <!-- Navigation Buttons -->
            <div class="blog-slider-navigation hidden lg:block">
              <button class="blog-slider-prev absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                <i class="ti-angle-left"></i>
              </button>
              <button class="blog-slider-next absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                <i class="ti-angle-right"></i>
              </button>
            </div>
          </swiper>
        </div>
      </div>
    </div>
  </div>



  <!-- Section Title Container -->
<div class="mb-[80px]">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap">
      <div class="w-full">
        <!-- Section Title -->
        <div class="text-center">
          <h1 class="text-3xl font-bold mb-4">From our blog</h1>
          <p class="max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consecte tur cing elit. Suspe ndisse suscipit sagittis leo sit met condim entum.
          </p>
        </div>
        <!-- End of Section Title -->
      </div>
    </div>
  </div>
</div>

<!-- Blog Post Area -->
<div class="mb-[100px]">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap">
      <div class="w-full">
        <!-- Blog Post Wrapper -->
        <div class="blog-post-wrapper">
          <div class="flex flex-wrap -mx-3">
            <!-- Single Blog Post -->
            <div class="w-full sm:w-1/2 lg:w-1/4 px-3 mb-6 sm:mb-[50px]">
              <div class="single-slider-post">
                <!-- Image -->
                <div class="mb-[30px]">
                  <a href="">
                    <img src="@/assets/images/blog/post-thumbnail-1-370x200.png" class="w-full" alt="">
                  </a>
                </div>
                <!-- End of Image -->

                <!-- Content -->
                <div class="single-slider-post__content">
                  <div class="post-date flex items-center text-sm mb-2">
                    <i class="ion-android-calendar mr-2"></i>
                    <a href="blog-standard-left-sidebar.html"> june 5, 2022</a>
                  </div>
                  <h2 class="post-title text-xl font-bold mb-3">
                    <a href="">Chic Fashion Phenomenon</a>
                  </h2>
                  <p class="post-excerpt mb-4">
                    Michele seemed to say, was the 21st-century Gucci girl, an eccentric,
                    fresh-faced weirdo who wasn't afraid to wear backless fur-lined loafers, to personify the idea of
                    "ugly pretty."
                  </p>
                  <a href="" class="underline hover:no-underline">read more</a>
                </div>
                <!-- End of Content -->
              </div>
            </div>
            <!-- End of Single Blog Post -->

            <!-- Single Blog Post -->
            <div class="w-full sm:w-1/2 lg:w-1/4 px-3 mb-6 sm:mb-[50px]">
              <div class="single-slider-post">
                <!-- Image -->
                <div class="mb-[30px]">
                  <a href="">
                    <img src="@/assets/images/blog/post-thumbnail-2-1-370x200.png" class="w-full" alt="">
                  </a>
                </div>
                <!-- End of Image -->

                <!-- Content -->
                <div class="single-slider-post__content">
                  <div class="post-date flex items-center text-sm mb-2">
                    <i class="ion-android-calendar mr-2"></i>
                    <a href="blog-standard-left-sidebar.html"> june 6, 2022</a>
                  </div>
                  <h2 class="post-title text-xl font-bold mb-3">
                    <a href="">Shirt Color Picking Guide</a>
                  </h2>
                  <p class="post-excerpt mb-4">
                    Michele seemed to say, was the 21st-century Gucci girl, an eccentric,
                    fresh-faced weirdo who wasn't afraid to wear backless fur-lined loafers, to personify the idea of
                    "ugly pretty." Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, animi numquam
                    dignissimos obcaecati eius unde!
                  </p>
                  <a href="" class="underline hover:no-underline">read more</a>
                </div>
                <!-- End of Content -->
              </div>
            </div>
            <!-- End of Single Blog Post -->

            <!-- Single Blog Post -->
            <div class="w-full sm:w-1/2 lg:w-1/4 px-3 mb-6 sm:mb-[50px]">
              <div class="single-slider-post">
                <!-- Image -->
                <div class="mb-[30px]">
                  <a href="">
                    <img src="@/assets/images/blog/post-thumbnail-8-370x200.png" class="w-full" alt="">
                  </a>
                </div>
                <!-- End of Image -->

                <!-- Content -->
                <div class="single-slider-post__content">
                  <div class="post-date flex items-center text-sm mb-2">
                    <i class="ion-android-calendar mr-2"></i>
                    <a href="blog-standard-left-sidebar.html"> june 8, 2022</a>
                  </div>
                  <h2 class="post-title text-xl font-bold mb-3">
                    <a href="">Perfect Perfume & Cologne</a>
                  </h2>
                  <p class="post-excerpt mb-4">
                    Michele seemed to say, was the 21st-century Gucci girl, an eccentric,
                    fresh-faced weirdo who wasn't afraid to wear backless fur-lined loafers, to personify the idea of
                    "ugly pretty."
                  </p>
                  <a href="" class="underline hover:no-underline">read more</a>
                </div>
                <!-- End of Content -->
              </div>
            </div>
            <!-- End of Single Blog Post -->

            <!-- Single Blog Post -->
            <div class="w-full sm:w-1/2 lg:w-1/4 px-3 mb-6 sm:mb-[50px]">
              <div class="single-slider-post">
                <!-- Image -->
                <div class="mb-[30px]">
                  <a href="">
                    <img src="@/assets/images/blog/post-thumbnail-370x200.png" class="w-full" alt="">
                  </a>
                </div>
                <!-- End of Image -->

                <!-- Content -->
                <div class="single-slider-post__content">
                  <div class="post-date flex items-center text-sm mb-2">
                    <i class="ion-android-calendar mr-2"></i>
                    <a href=""> june 10, 2022</a>
                  </div>
                  <h2 class="post-title text-xl font-bold mb-3">
                    <a href="">T-Shirts as Minimalist Style</a>
                  </h2>
                  <p class="post-excerpt mb-4">
                    Michele seemed to say, was the 21st-century Gucci girl, an eccentric,
                    fresh-faced weirdo who wasn't afraid to wear backless fur-lined loafers, to personify the idea of
                    "ugly pretty." Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, rem!
                  </p>
                  <a href="" class="underline hover:no-underline">read more</a>
                </div>
                <!-- End of Content -->
              </div>
            </div>
            <!-- End of Single Blog Post -->
          </div>
        </div>
        <!-- End of Blog Post Wrapper -->
      </div>
    </div>
  </div>
</div>

<Footers/>
</template>



<style scoped>
/* You can add custom styles here if needed */
.blog-slider {
  position: relative;
  padding: 0 40px;
}

.blog-slider-navigation button {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* If you need to style the navigation icons */
.ti-angle-left,
.ti-angle-right {
  font-size: 20px;
}
</style>