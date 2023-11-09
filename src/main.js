// import { createApp } from 'vue';
import { createApp } from 'vue/dist/vue.esm-bundler';
import MovieListTitle from './components/movies/MovieListTitle.vue';
import MovieItem from './components/movies/MovieItem.vue';
import PagePrevItem from './components/page/PagePrevItem.vue';
import PageNextItem from './components/page/PageNextItem.vue';
import router from './router.js';
import PageNumberItem from "@/components/page/PageNumberItem.vue";


// app.use(router);
// app.mount('#app');

const app = createApp({
});
app.component('MovieListTitle', MovieListTitle);
app.mount('#board_list_main');


const app2 = createApp({
});
app2.component('MovieItem', MovieItem);
app2.mount('#board_list_content');

const app3 = createApp({
});
app3.component('PagePrevItem', PagePrevItem);
app3.component('PageNextItem', PageNextItem);
app3.mount('#board_page_main');

const app4 = createApp({
});
app4.component('PageNumberItem', PageNumberItem);
app4.mount('#number-button-wrapper');