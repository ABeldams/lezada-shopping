<script >
import bgImage from '@/assets/images/background-heading-page.png'
import Navbar_second from '@/components/navbar_second.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  setup() {
    const days = ref('00');
    const hours = ref('00');
    const minutes = ref('00');
    const seconds = ref('00');
    let countdownInterval = null;

    const updateCountdown = () => {
      const now = new Date();
      const targetDate = new Date('2023/01/01');
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(countdownInterval);
        return;
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      days.value = d.toString().padStart(2, '0');
      hours.value = h.toString().padStart(2, '0');
      minutes.value = m.toString().padStart(2, '0');
      seconds.value = s.toString().padStart(2, '0');
    };

    onMounted(() => {
      updateCountdown();
      countdownInterval = setInterval(updateCountdown, 1000);
    });

    onBeforeUnmount(() => {
      if (countdownInterval) {
        clearInterval(countdownInterval);
      }
    });

    return {
      days,
      hours,
      minutes,
      seconds
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



  <div class="mb-[100px]">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="w-full">
          <div class="countdown-background bg-cover bg-center pt-[100px] pb-[100px]"  >
            <div class="flex flex-wrap">
              <div class="w-full lg:w-9/12 lg:ml-[25%] xl:w-7/12 xl:ml-[41.666667%]">
                <div class="countdown-wrapper text-center">
                  <h3 class="text-2xl font-bold mb-6">Deal of the day</h3>
                  
                  <!-- Countdown Timer -->
                  <div class="flex justify-center gap-4 mb-8">
                    <div class="text-center">
                      <div class="text-4xl font-bold bg-white text-gray-900 rounded-lg py-4 px-6">{{ days }}</div>
                      <span class="text-sm mt-2 block">Days</span>
                    </div>
                    <div class="text-center">
                      <div class="text-4xl font-bold bg-white text-gray-900 rounded-lg py-4 px-6">{{ hours }}</div>
                      <span class="text-sm mt-2 block">Hours</span>
                    </div>
                    <div class="text-center">
                      <div class="text-4xl font-bold bg-white text-gray-900 rounded-lg py-4 px-6">{{ minutes }}</div>
                      <span class="text-sm mt-2 block">Minutes</span>
                    </div>
                    <div class="text-center">
                      <div class="text-4xl font-bold bg-white text-gray-900 rounded-lg py-4 px-6">{{ seconds }}</div>
                      <span class="text-sm mt-2 block">Seconds</span>
                    </div>
                  </div>

                  <a href="" class="inline-flex items-center px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition">
                    <i class="mr-2">🛒</i> Only $39
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<style scoped>
.countdown-background {
  background-image: url('path/to/your/background-image.jpg');
  background-size: cover;
  background-position: center;
}

/* If you need to use the exact same icon as before */
.icon-left {
  margin-right: 8px;
}
</style>
