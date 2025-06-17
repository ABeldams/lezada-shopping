<script setup>
import SingleCart from './SingleCart.vue';
import CartOverlay from './CartOverlay.vue';
import WhishList from './whishList.vue';
import WhishlistOverlay from './WhishlistOverlay.vue';
import Search from './Search.vue';
import { RouterLink } from 'vue-router';
import MobileNavbar from './MobileNavbar.vue';
import { ref } from 'vue';
import HoverImageLink from './HoverImageLink.vue';
const isOpen=ref(false);

</script>

<template>




<header class="header-without-topbar fixed top-0 left-0 w-full shadow-md animate-fadeInDown transition duration-300 z-[999] bg-white slider-bottom-header:static slider-bottom-header:z-[99]">
<div class="header-bottom md:pt-2 md:pb-5 sm:pt-5 sm:pb-5 lg:pb-0">
  <div class="container mx-auto">
    <div class="flex justify-between  items-center">
      <div class=" flex ">

        <div class="logo">
          <a href="index.html">
            <img src="@/assets/images/logo.png" class="img-fluid" alt="">
          </a>
        </div>

      </div>

      <div class="">
      <div class=" hidden lg:block">


          <nav class="site-nav center-menu ">
            <ul>

              <li class="menu-item-has-children"><a href="index.html">Home</a>
                    <ul class="sub-menu mega-menu mega-menu-column-5">
                      <li><a href="javascript:void(0)" class="mega-column-title">Home Group</a>
                        <ul class="mega-sub-menu">
                          <li><a href="index-trending.html">Trending</a><img src="@/assets/images/home-preview/01.jpg"
                              class="img-fluid" alt=""></li>
                          <li><a href="index-collection.html">My collection</a><img
                              src="@/assets/images/home-preview/02.jpg" class="img-fluid" alt=""></li>
                          <li><a href="index-special.html">Special</a><img src="@/assets/images/home-preview/03.jpg"
                              class="img-fluid" alt=""></li>
                          <li><a href="index-concept.html">concept</a><img src="@/assets/images/home-preview/04.jpg"
                              class="img-fluid" alt=""></li>
                          <li><a href="index-smart.html">smart design</a><img src="@/assets/images/home-preview/05.jpg"
                              class="img-fluid" alt=""></li>
                        </ul>
                      </li>
                      <li><a href="javascript:void(0)" class="mega-column-title">Home Group</a>
                        <ul class="mega-sub-menu">
                          <li><a href="index-furniture.html">Furniture </a><img src="@/assets/images/home-preview/06.jpg"
                              class="img-fluid" alt=""></li>
                          <li><a href="index-essentials.html">Essentials</a><img src="@/assets/images/home-preview/07.jpg"
                              class="img-fluid" alt=""></li>
                          <li><a href="index-lookbook.html">Lookbook</a><img src="@/assets/images/home-preview/08.jpg"
                              class="img-fluid" alt=""></li>
                          <li><a href="index-wearables.html">Wearables</a><img src="@/assets/images/home-preview/09.jpg"
                              class="img-fluid" alt=""></li>
                          <li><a href="index-accessories.html">Accessories</a><img
                              src="@/assets/images/home-preview/10.jpg" class="img-fluid" alt=""></li>
                        </ul>
                      </li>
                      <li><a href="javascript:void(0)" class="mega-column-title">Home Group</a>
                        <ul class="mega-sub-menu">
                          <li><a href="index-shoppable.html">Shoppable</a><img src="@/assets/images/home-preview/11.jpg"
                              class="img-fluid" alt=""></li>
                          <li><a href="index-fashion.html">Fashion</a><img src="@/assets/images/home-preview/13.jpg"
                              class="img-fluid" alt=""></li>
                          <li><a href="index-perfumes.html">Perfumes</a><img src="@/assets/images/home-preview/14.jpg"
                              class="img-fluid" alt=""></li>
                          <li><a href="index-cosmetics.html">Cosmetics</a><img src="@/assets/images/home-preview/15.jpg"
                              class="img-fluid" alt=""></li>
                          <li><a href="index-decor.html">Home Decor</a><img src="@/assets/images/home-preview/16.png"
                              class="img-fluid" alt=""></li>
                        </ul>
                      </li>
                      <li><a href="javascript:void(0)" class="mega-column-title">Home Group</a>
                        <ul class="mega-sub-menu">
                          <li><a href="index-creative.html">Creative</a><img src="@/assets/images/home-preview/17.png"
                              class="img-fluid" alt=""></li>
                        </ul>
                      </li>
                      <li>
                        <div class="menu-image">
                          <img src="@/assets/images/menu-image/menu-element.png" class="img-fluid" alt="">
                        </div>
                      </li>
                    </ul>
                  </li>



              <li class="menu-item-has-children"><a href="shop-left-sidebar.html">Shop</a>
                <ul class="sub-menu mega-menu mega-menu-column-4">
                  <li><a href="javascript:void(0)" class="mega-column-title">Shop Pages</a>
                    <ul class="mega-sub-menu">
                      <li>
                        <RouterLink :to="{ name: 'no-sidebar'}">
                          No Sidebar
                        </RouterLink>

                        </li>
                        <li>
                        <RouterLink :to="{ name: 'left-sidebar'}">
                          Left Sidebar
                        </RouterLink>

                        </li>
                      
                      <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                      <li><a href="shop-fullwidth-no-space.html">Shop Fullwidth No
                          Space</a></li>
                      <li><a href="shop-fullwidth-no-sidebar.html">Shop Fullwidth No
                          Sidebar</a></li>
                      <li><a href="shop-fullwidth-left-sidebar.html">Shop Fullwidth Left
                          Sidebar</a></li>
                      <li><a href="shop-fullwidth-right-sidebar.html">Shop Fullwidth Right
                          Sidebar</a></li>
                    </ul>
                  </li>
                  <li><a href="javascript:void(0)" class="mega-column-title">Shop Pages</a>
                    <ul class="mega-sub-menu">
                      <li><a href="shop-product-basic.html">Basic </a></li>
                      <li><a href="shop-product-fullwidth.html">Fullwidth</a></li>
                      <li><a href="shop-product-sticky-details.html">Sticky details</a>
                      </li>
                      <li><a href="shop-product-with-sidebar.html">With Sidebar</a></li>
                      <li><a href="shop-product-extra-content.html">Extra Content</a></li>
                      <li><a href="shop-product-variation-image.html">Variation Image</a>
                      </li>
                      <li><a href="shop-product-bought-together.html">Bought Together</a>
                      </li>
                    </ul>
                  </li>
                  <li><a href="javascript:void(0)" class="mega-column-title">Shop Pages</a>
                    <ul class="mega-sub-menu">
                      <li><a href="shop-product-with-background.html">Product with
                          background</a></li>
                      <li><a href="shop-cart.html">Shopping Cart</a></li>
                      <li><a href="shop-checkout.html">Checkout</a></li>
                      <li><a href="shop-order-tracking.html">Order Tracking</a></li>
                      <li><a href="shop-wishlist.html">Wishlist</a></li>
                      <li><a href="shop-customer-login.html">Customer Login</a></li>
                      <li><a href="shop-by-brand.html">Shop by Brand</a></li>
                    </ul>
                  </li>
                  <li>
                    <div class="menu-image">
                      <img src="@/assets/images/menu-image/megamenu-shop.png" class="img-fluid" alt="">
                    </div>
                  </li>
                </ul>
              </li>
              <li class="menu-item-has-children"><a href="javascript:void(0)">Elements</a>
                <ul class="sub-menu mega-menu mega-menu-column-5">
                  <li><a href="javascript:void(0)" class="mega-column-title">Shop /
                      Products</a>
                    <ul class="mega-sub-menu">
                      <li><a href="element-product-categories.html">Product Categories</a>
                      </li>
                      <li><a href="element-product-sliders.html">Product Sliders</a></li>
                      <li><a href="element-product-tabs.html">Product Tabs</a></li>
                      <li><a href="element-product-widget.html">Product Widget</a></li>
                      <li><a href="element-recent-products.html">Recent Products</a></li>
                    </ul>
                  </li>
                  <li><a href="javascript:void(0)" class="mega-column-title">Shop /
                      Products</a>
                    <ul class="mega-sub-menu">
                      <li><a href="element-sale-products.html">Sale Products </a></li>
                      <li><a href="element-featured-products.html">Featured products</a>
                      </li>
                      <li><a href="element-top-rated-products.html">Top Rated products</a>
                      </li>
                      <li><a href="element-bestselling-products.html">Best Selling
                          products</a></li>
                      <li><a href="element-product-attributes.html">Product Attributes</a>
                      </li>
                    </ul>
                  </li>
                  <li><a href="javascript:void(0)" class="mega-column-title">Theming</a>
                    <ul class="mega-sub-menu">
                      <li><a href="element-blog-posts.html">Blog Posts</a></li>
                      <li><a href="element-mailchimp-form.html">Mailchimp Form</a></li>
                      <li><a href="element-icon-box.html">Icon Box</a></li>
                      <li><a href="element-team-member.html">Team Member</a></li>
                      <li><a href="element-instagram.html">Instagram</a></li>
                    </ul>
                  </li>
                  <li><a href="javascript:void(0)" class="mega-column-title">Theming</a>
                    <ul class="mega-sub-menu">
                      <li><a href="element-faq.html">FAQs / Toggles</a></li>
                      <li><a href="element-countdown-timer.html">Countdown Timer</a></li>
                      <li><a href="element-button.html">Buttons</a></li>
                      <li><a href="element-testimonials.html">Testimonials</a></li>
                      <li><a href="element-google-maps.html">Google Maps</a></li>
                    </ul>
                  </li>
                  <li>
                    <div class="menu-image">
                      <img src="@/assets/images/menu-image/menu-element.png" class="img-fluid" alt="">
                    </div>
                  </li>
                </ul>
              </li>
              <li class="menu-item-has-children"><a href="javascript:void(0)">Pages</a>
                <ul class="sub-menu single-column-menu">
                  <li><a href="about-us.html">About Us</a></li>
                  <li><a href="about-us-2.html">About Us 2</a></li>
                  <li><a href="contact-us.html">Contact Us</a></li>
                  <li><a href="faq.html">F.A.Q</a></li>
                  <li><a href="coming-soon.html">Coming Soon</a></li>
                  <li><a href="404.html">404</a></li>
                  <li><a href="my-account.html">My account</a></li>
                  <li><a href="compare.html">Compare</a></li>
                </ul>
              </li>
              <li class="menu-item-has-children "><a href="javascript:void(0)">Blog</a>
                <ul class="sub-menu single-column-menu single-column-has-children">
                  <li><a href="blog-standard-right-sidebar.html">Standard Layout</a>
                    <ul class="multilevel-submenu">
                      <li><a href="blog-standard-right-sidebar.html">Right Sidebar</a>
                      </li>
                      <li><a href="blog-standard-left-sidebar.html">Left Sidebar</a></li>
                      <li><a href="blog-standard-full-width.html">Full Width</a></li>
                    </ul>
                  </li>
                  <li><a href="blog-grid-right-sidebar.html">Grid Layout</a>
                    <ul class="multilevel-submenu">
                      <li><a href="blog-grid-right-sidebar.html">Right Sidebar</a></li>
                      <li><a href="blog-grid-left-sidebar.html">Left Sidebar</a></li>
                      <li><a href="blog-grid-full-width.html">Full Width</a></li>
                    </ul>
                  </li>
                  <li><a href="blog-list-right-sidebar.html">List Layout</a>
                    <ul class="multilevel-submenu">
                      <li><a href="blog-list-right-sidebar.html">Right Sidebar</a></li>
                      <li><a href="blog-list-left-sidebar.html">Left Sidebar</a></li>
                      <li><a href="blog-list-full-width.html">Full Width</a></li>
                    </ul>
                  </li>
                  <li><a href="blog-masonry-right-sidebar.html">Masonry Layout</a>
                    <ul class="multilevel-submenu">
                      <li><a href="blog-masonry-right-sidebar.html">Right Sidebar</a></li>
                      <li><a href="blog-masonry-left-sidebar.html">Left Sidebar</a></li>
                      <li><a href="blog-masonry-full-width.html">Full Width</a></li>
                    </ul>
                  </li>
                  <li><a href="blog-full-then-grid-right-sidebar.html">1st Full Then Grid
                      Layout</a>
                    <ul class="multilevel-submenu">
                      <li><a href="blog-full-then-grid-right-sidebar.html">Right
                          Sidebar</a></li>
                      <li><a href="blog-full-then-grid-left-sidebar.html">Left Sidebar</a>
                      </li>
                      <li><a href="blog-full-then-grid-full-width.html">Full Width</a>
                      </li>
                    </ul>
                  </li>
                  <li><a href="blog-single-post-right-sidebar.html">Single Post Layout</a>
                    <ul class="multilevel-submenu">
                      <li><a href="blog-single-post-right-sidebar.html">Right Sidebar</a>
                      </li>
                      <li><a href="blog-single-post-left-sidebar.html">Left Sidebar</a>
                      </li>
                      <li><a href="blog-single-post-full-width.html">Full Width</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>

     

<div class="header-right-container">

<div class="header-right-icons d-flex justify-content-end align-items-center h-100">
 
  <div>
    <Search/>
    
  </div>

 
  <div class="single-icon user-login">
    <RouterLink :to="{ name: 'Login-register'}">
      <i class="ion-android-person"></i>
    </RouterLink>

  </div>

      <div>
        <WhishList/>
        <WhishlistOverlay/>
      </div>

      <div>
        <SingleCart/>
        <CartOverlay/>
      </div>
      
      
</div>

</div>

    </div>

    <!--Mobile navbar-->
    <MobileNavbar/>

  </div>
</div>

</header>




</template>