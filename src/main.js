import {createApp} from 'vue';
import '@/assets/style/main.scss';
import App from './App.vue';
import router from '@/router/router.js';
import {createPinia} from 'pinia';
import Vue3Lottie from 'vue3-lottie'
const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia)
app.use(Vue3Lottie)
app.mount('#app');
