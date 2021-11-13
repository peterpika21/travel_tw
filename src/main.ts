import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import svgIcon from './components/svgIcon.vue';
import vSelect from './components/vSelect.vue';
import ElementPlus from 'element-plus';

import 'element-plus/theme-chalk/index.css';
import 'vite-plugin-svg-icons/register';
import './assets/scss/main.scss';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(ElementPlus);
app.component('svg-icon', svgIcon);
app.component('v-select', vSelect);
app.mount('#app');
