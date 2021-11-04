import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import svgIcon from './components/svgIcon.vue';
import 'vite-plugin-svg-icons/register';
import './assets/scss/main.scss';

const app = createApp(App);
app.use(router);
app.use(store);
app.component('svg-icon', svgIcon);
app.mount('#app');
