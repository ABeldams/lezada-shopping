<script setup>
import TopNavBar from '@/components/NavBar.vue';
import { RouterLink } from 'vue-router';
import { ref } from 'vue'
import { useAuthStore } from '@/store/authStore'
import Footers from '@/components/Footers.vue';
import Twitter from '@/components/icons/twitter.vue';
import Facebook from '@/components/icons/facebook.vue';
import Instagram from '@/components/instagram.vue';
import Youtube from '@/components/icons/youtube.vue';
import RightArrow from '@/components/icons/right-arrow.vue';
import bgImage from '@/assets/images/01.jpg'


const active=ref(true)
const auth = useAuthStore()
//auth.logout()
const loginEmail = ref('')
const loginPassword = ref('')
const registerEmail = ref('')
const registerPassword = ref('')
const registerName = ref('')
const handleLogin = async () => {
  await auth.login({
    email: loginEmail.value,
    password: loginPassword.value
  })
}
const handleRegister = async () => {
  await auth.register({
    name: registerName.value || 'Anonymous',
    email: registerEmail.value,
    password: registerPassword.value
  })
}
</script>


<template>

<TopNavBar/>

<div class=" bg-gray-100 mt-[90px] p-10" :style="{ backgroundImage: `url(${bgImage})` }">
    <h1 class="sm:text-3xl md:text-6xl lg:text-6xl p-4  text-black">Customer Login</h1>
    <div class="flex space-y-0">
       
    <p class="text-xl p-4 text-gray-400 hover:text-black cursor-pointer">
    <RouterLink to="/" class="hover:text-black">Home /</RouterLink>
       </p>

        
    <p class="text-xl p-4" :class="active?'text-black':'text-gray-400'">Customer Login</p>
    </div>
</div>

<div class="grid sm:grid-cols-1 lg:grid-cols-2  w-[90%] m-auto ">
<div class="bg-gray-100  mt-[100px] p-10 ">
    <h1 class="text-3xl text-black text-center">Login</h1>
    <p class="text-center p-4">Great to have you back!</p>
    <form class="flex flex-col space-y-10">
        <input type="text" v-model="loginEmail" class="bg-gray-100 border-b-2 border-t-0 border-l-0 border-r-0 focus:outline-none focus:ring-0 focus:border-black focus:placeholder-transparent" placeholder="username or email address"/>
        <input type="password" v-model="loginPassword" class="bg-gray-100 border-b-2 border-t-0 border-l-0 border-r-0 focus:outline-none focus:ring-0 focus:border-black focus:placeholder-transparent" placeholder="password"/>
        <button @click="handleLogin" class="bg-black text-white text-md p-3 w-[150px]">LOGIN</button>
        <div class="flex items-center space-x-2">
        <input type="checkbox"/>
        <h1 class="text-md">Remember me</h1>
        </div>
        <h1 class="text-md">Lost your password?</h1>
      </form>

</div>


<div class="bg-white mt-[100px] p-10">
  <h1 class="text-3xl text-black text-center">Register</h1>
  <p class="text-center p-4">If you don’t have an account, register now!</p>
  <form @submit.prevent="handleRegister"  class="flex flex-col space-y-10 items-center">
    <div class="relative w-full max-w-md">
        <label for="email" class="block mb-1 font-semibold">
        EMAIL ADDRESS <span class="text-red-500">*</span>
       </label>
      <input
        id="email"
        name="email"
        type="text"
        v-model="registerEmail"
        class="w-full bg-white border-t-0 border-l-0 border-r-0 border-b-2 border-gray-400  focus:outline-none focus:ring-0 focus:border-black focus:placeholder-transparent"
      />
    </div>
    <div class="relative w-full max-w-md">
        <label for="email" class="block mb-1 font-semibold">
         PASSWORD <span class="text-red-500">*</span>
        </label>
      <input
        id="password"
        name="password"
        type="password"
        v-model="registerPassword"
        class="w-full bg-white border-t-0 border-l-0 border-r-0 border-b-2 border-gray-400  focus:outline-none focus:ring-0 focus:border-black focus:placeholder-transparent"
      />
    </div>
    <button type="submit" class="bg-black text-white text-md p-3 w-[150px]">
      REGISTER
    </button>
  </form>
</div>

</div>

<Footers/>


</template>