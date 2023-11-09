// import { createApp } from 'vue';
import { createApp } from 'vue/dist/vue.esm-bundler';
import MovieListTitleComponent from './components/movies/MovieListTitle.vue';
import MovieItem from './components/movies/MovieItem.vue';
import PagePrevItem from './components/page/PagePrevItem.vue';
import PageNextItem from './components/page/PageNextItem.vue';
import router from './router.js';


// app.use(router);
// app.mount('#app');

const app = createApp({
});
app.component('movie-list-title-component', MovieListTitleComponent);
app.mount('#board_list_main');


const app2 = createApp({
});
app2.component('movie-item', MovieItem);
app2.mount('#board_list_content');

const app3 = createApp({
});
app3.component('page-prev-item', PagePrevItem);
app3.component('page-next-item', PageNextItem);
app3.mount('#board_page_main');
