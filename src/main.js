// import { createApp } from 'vue';
import { createApp } from 'vue/dist/vue.esm-bundler';
import MovieListTitleComponent from './components/movies/MovieListTitle.vue';
import MovieItem from './components/movies/MovieItem.vue';
import router from './router.js';

const app = createApp({

});

const app2 = createApp({

});
// app.use(router);
// app.mount('#app');
app.component('movie-list-title-component', MovieListTitleComponent);

app.mount('#board_list_main');

app2.component('movie-item', MovieItem);

app2.mount('#board_list_content');
