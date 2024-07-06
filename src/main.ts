import { createApp } from 'vue'
import './style.css'
import PrimeVue from 'primevue/config';
import App from './App.vue'

const app = createApp(App).mount('#app')

app.use(PrimeVue, {
    unstyled: true
});
