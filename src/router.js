import { createRouter, createWebHistory } from 'vue-router';
import MovieListTitle from './components/movies/MovieListTitle.vue';
import MovieItem from './components/movies/MovieItem.vue';

const routes = [
    { path: '/movie-list-title', component: MovieListTitle },
    { path: '/movie-item', component: MovieItem },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;