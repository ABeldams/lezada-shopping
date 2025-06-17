import $ from 'jquery';
window.$ = $; 
console.log('jQuery Version:', $.fn.jquery); 
import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import { createPinia } from 'pinia';


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const app = createApp(App)
const pinia = createPinia();
app.use(pinia);

app.use(router)

app.mount('#app')
