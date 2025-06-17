<script setup>
import Footers from '@/components/Footers.vue';

import bgImage from '@/assets/images/background-heading-page.png'
import Navbar_second from '@/components/navbar_second.vue';

</script>

<template>
<Navbar_second/>
<div class="bg-gray-200 mt-[90px] p-10" :style="{ backgroundImage: `url(${bgImage})` }">
    <h1 class="sm:text-3xl md:text-6xl lg:text-4xl p-4 text-black">About us two</h1>
    <div class="flex space-y-0">
      <p class="text-md p-4 text-gray-400 hover:text-black cursor-pointer">
        <RouterLink to="/" class="hover:text-black">Home /</RouterLink>
      </p>
      <p class="text-md p-4" :class="active ? 'text-black' : 'text-gray-400'">About us two</p>
    </div>
  </div>


	
	<div class="section-title-container mb-40">
		<div class="container">
			<div class="row">
				<div class="col-lg-8 offset-lg-2">
					<!--=======  section title  =======-->

					<div class="section-title section-title--one text-center">

						<p class="subtitle subtitle--deep">SIMPLY OR WHITE</p>
						<h1>Clever & unique ideas</h1>
						<p class="subtitle">Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse suscipit sagittis leo
							sit met condimentum estibulum is Suspe ndisse suscipit sagittis leo sit met condimentum estibulorem ipsum
							dolor sit amet, consectetur cing elit.</p>
					</div>

					<!--=======  End of section title  =======-->
				</div>
			</div>
		</div>
	</div>

<Footers/>
</template>