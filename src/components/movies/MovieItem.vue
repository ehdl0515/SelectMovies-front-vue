<template>
    <div v-for="movie in movies" :key="movie.movieCd">
      <div class="movieCd">{{ movie.movieCd }}</div>
      <div class="movieNm">{{ movie.movieNm }}</div>
      <div class="prdtYear">{{ movie.prdtYear }}</div>
      <div class="openDt">{{ movie.openDt }}</div>
      <div class="typeNm">{{ movie.typeNm }}</div>
      <div class="prdtStatNm">{{ movie.prdtStatNm }}</div>
      <div class="repNationNm">{{ movie.repNationNm }}</div>
      <div class="repGenreNm">{{ movie.repGenreNm }}</div>
    </div>
</template>

<script setup>
import {ref} from "vue";
import {GetMoviesAllWithPage} from "@/movie_api";

const movies = ref([]);



function setMovies(index) {
  MakeMovieList(index)
}

async function MakeMovieList(index) {
  const response = await GetMoviesAllWithPage(index);
  console.log("MovieItem, 반환된 데이터:", response);
  if (!response.ok) {
    throw new Error('Network Connect Fail!!: ' + response.status);
  }
  const data = await response.json();
  console.log("MovieItem, data: ", data)
  movies.value = data.content;
  console.log("MovieItem, movies: ", movies)
}

setMovies(0)

defineExpose({setMovies})

</script>


<style scoped>
.movieNm {
  width: 30%;
  text-align: left;
}
</style>