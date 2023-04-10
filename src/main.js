import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import App from './App.vue';
import router from './router';
import axiox from 'axios';

// Ajout d'element ui afin de ne pas avoir bespoin de gérer le design.
import 'element-plus/dist/index.css';
import './style.css';

// Utilisation d'axios afin de pouvoir effectuer des requettes vers l'API.
axiox.defaults.baseURL = 'https://mmi.unilim.fr/~morap01/L250/public/index.php/';

const app = createApp(App)

app.use(ElementPlus);
app.use(router);


app.mount('#app')
