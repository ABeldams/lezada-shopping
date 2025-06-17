import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginRegister from '@/views/Login-register.vue';
import Creative from '@/views/creative.vue';
import Perfumes from '@/views/perfumes.vue';
import Essentials from '@/views/essentials.vue';
import Cart from '@/views/cart.vue';
import NoSidebar from '@/views/no-sidebar.vue';
import LeftSidebar from '@/views/left-sidebar.vue';
import SmartDesign from '@/views/smart-design.vue';
import Trending from '@/views/trending.vue';
import Checkout from '@/views/checkout.vue';
import Accessories from '@/views/accessories.vue';
import Lookbook from '@/views/lookbook.vue';
import Jewelry from '@/views/jewelry.vue';
import Furniture from '@/views/furniture.vue';
import Cosmetics from '@/views/cosmetics.vue';
import ProductBasic from '@/views/product-basic.vue';
import Whishlist from '@/views/whishlist.vue';
import RightSidebar from '@/views/right-sidebar.vue';
import ProductSliders from '@/views/product-sliders.vue';
import ProductCategories from '@/views/product-categories.vue';
import BlogPost from '@/views/blog-post.vue';
import CountdownTimers from '@/views/countdown-timers.vue';
import FullwidthNoSpace from '@/views/fullwidth-no-space.vue';
import FeaturedProduct from '@/views/featured-product.vue';
import SaleProduct from '@/views/sale-product.vue';
import AboutUs from '@/views/about-us.vue';
import AboutUsTwo from '@/views/about-us-two.vue';
import ProductBasics from '@/views/product-basics.vue';
import Testimonials from '@/views/testimonials.vue';
import BlogStandardLeftSidebar from '@/views/blog-standard-left-sidebar.vue';
import BlogStandardRightSidebar from '@/views/blog-standard-right-sidebar.vue';
import BlogStandardFullWidth from '@/views/blog-standard-full-width.vue';
import Filter from '@/views/filter.vue';
import BlogGridLeftSidebar from '@/views/blog-grid-left-sidebar.vue';
import BlogGridRightSidebar from '@/views/blog-grid-right-sidebar.vue';
import BlogGridFullWidth from '@/views/blog-grid-full-width.vue';
import BlogListLeftSidebar from '@/views/blog-list-left-sidebar.vue';
import BlogListRightSidebar from '@/views/blog-list-right-sidebar.vue';
import BlogListFullWidth from '@/views/blog-list-full-width.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/Login-register',
      name: 'Login-register',
      component: LoginRegister,
    },

    {
      path: '/creative',
      name: 'creative',
      component: Creative,
    },

    {
      path: '/perfumes',
      name: 'perfumes',
      component: Perfumes,
    },
    {
      path: '/essentails',
      name: 'essentials',
      component: Essentials,
    },

    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },
    {
      path: '/no-sidebar',
      name: 'no-sidebar',
      component: NoSidebar,
    },
    {
      path: '/left-sidebar',
      name: 'left-sidebar',
      component: LeftSidebar,
    },
    {
      path: '/smart-design',
      name: 'smart-design',
      component: SmartDesign,
    },
    {
      path: '/trending',
      name: 'trending',
      component: Trending,
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout,
    },
    {
      path: '/accessories',
      name: 'accessories',
      component: Accessories,
    },
    {
      path: '/lookbook',
      name: 'lookbook',
      component: Lookbook,
    },
    {
      path: '/jewelry',
      name: 'jewelry',
      component: Jewelry,
    },
    {
      path: '/furniture',
      name: 'furniture',
      component: Furniture,
    },
    {
      path: '/cosmetics',
      name: 'cosmetics',
      component: Cosmetics,
    },
    {
      path: '/shop/product-basic/product/:id',
      name: 'product-basic',
      component: ProductBasic,
      props:true
    },
    {
      path: '/whishlist',
      name: 'whishlist',
      component: Whishlist,
     
    },

    {
      path: '/right-sidebar',
      name: 'right-sidebar',
      component: RightSidebar,
     
    },
    {
      path: '/product-sliders',
      name: 'product-sliders',
      component: ProductSliders,
     
    },
    
    {
      path: '/product-categories',
      name: 'product-categories',
      component: ProductCategories,
     
    },

    {
      path: '/blog-post',
      name: 'blog-post',
      component: BlogPost,
     
    },

    {
      path: '/countdown-timers',
      name: 'countdown-timers',
      component: CountdownTimers,
     
    },

    {
      path: '/fullwidth-no-space',
      name: 'fullwidth-no-space',
      component: FullwidthNoSpace,
     
    },
    {
      path: '/featured-product',
      name: 'featured-product',
      component: FeaturedProduct,
     
    },
    {
      path: '/sale-product',
      name: 'sale-product',
      component: SaleProduct,
     
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutUs,
     
    },
    {
      path: '/about-us-two',
      name: 'about-us-two',
      component: AboutUsTwo,
     
    },
    {
      path: '/product-basic//lorem-ipsum-decor-one',
      name: 'product-basics',
      component: ProductBasics,
     
    },
    
    {
      path: '/testimonials',
      name: 'testimonials',
      component: Testimonials,
     
    },

    {
      path: '/blog-standard-left-sidebar',
      name: 'blog-standard-left-sidebar',
      component: BlogStandardLeftSidebar,
     
    },

    {
      path: '/blog-standard-right-sidebar',
      name: 'blog-standard-right-sidebar',
      component: BlogStandardRightSidebar,
     
    },
    {
      path: '/blog-standard-full-width',
      name: 'blog-standard-full-width',
      component: BlogStandardFullWidth,
     
    },
    {
      path: '/blog-list-left-sidebar',
      name: 'blog-list-left-sidebar',
      component: BlogListLeftSidebar,
     
    },
    {
      path: '/blog-list-right-sidebar',
      name: 'blog-list-right-sidebar',
      component: BlogListRightSidebar,
     
    },

    {
      path: '/blog-list-full-width',
      name: 'blog-list-full-width',
      component: BlogListFullWidth,
     
    },
    {
      path: '/filter',
      name: 'filter',
      component: Filter,
     
    },

    {
      path: '/blog-grid-left-sidebar',
      name: 'blog-grid-left-sidebar',
      component: BlogGridLeftSidebar,
     
    },

    {
      path: '/blog-grid-right-sidebar',
      name: 'blog-grid-right-sidebar',
      component: BlogGridRightSidebar,
     
    },
    {
      path: '/blog-grid-full-width',
      name: 'blog-grid-full-width',
      component: BlogGridFullWidth,
     
    },
    {
      path: '/about',
      name: 'about',
      
      component: () => import('../views/AboutView.vue'),
    },
  ],
});

// Navigation guard for authentication
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated'); // Check login status
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'auth' });
    console.log(isAuthenticated);
  } else {
    next();
  }
}); 

export default router
