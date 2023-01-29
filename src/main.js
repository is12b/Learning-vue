import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css  ';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './styles/site.css';

const { createApp } = require('vue');
import PrimeVue from 'primevue/config';
import App from './App.vue';
import router from './router.js';
import PanelMenu from 'primevue/panelmenu';
import Card from 'primevue/card';

const app = createApp(App);
app.use(PrimeVue, { ripple: true, inputStyle: 'outlined' });
app.use(router);

app.component('PanelMenu', PanelMenu);
app.component('Card', Card);

app.mount('#app');
