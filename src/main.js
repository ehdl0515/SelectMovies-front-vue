// import { createApp } from 'vue';
import { createApp } from 'vue/dist/vue.esm-bundler';
import MovieListTitle from './components/movies/MovieListTitle.vue';
import MovieItem from './components/movies/MovieItem.vue';
import router from './router.js';
import MainPage from "@/components/page/MainPage.vue";

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
app3.component('MainPage', MainPage);
app3.mount('#board_page_main');

