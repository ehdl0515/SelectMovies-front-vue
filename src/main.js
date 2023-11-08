// import { createApp } from 'vue';
import { createApp } from 'vue/dist/vue.esm-bundler';
import MovieListTitleComponent from './components/movies/MovieListTitle.vue';

const app = createApp({

});

app.component('movie-list-title-component', MovieListTitleComponent);

app.mount('#board_list_main');
