import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia';

import "./assets/styles/reset.css";
import "./assets/styles/normalize.css";

const app = createApp(App);

app.use(createPinia())

app.mount("#app");
