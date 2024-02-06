import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSplide from "@splidejs/vue-splide";
import {createVuetify} from "vuetify";
import * as components from 'vuetify/lib/components';
import * as directives from 'vuetify/lib/directives';

const vuetify = createVuetify({
    components,
    directives
})

const app = createApp(App)
app.use(router)
app.use(VueSplide)
app.use(vuetify)

app.mount('#app')
