<template>
    <div v-for="movie in movies" :key="movie.movieCd" class="movie-row">
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

MakeMovieList(0)


async function MakeMovieList(index) {
  const response = await GetMoviesAllWithPage(index);
  console.log("반환된 데이터:", response);
  if (!response.ok) {
    throw new Error('Network Connect Fail!!: ' + response.status);
  }
  const data = await response.json();
  movies.value = data.content;
  console.log(movies)
}
</script>


<style scoped>
.movieCd {
  width: 10%;
}
.movieNm {
  width: 30%;
  text-align: left;
}
.prdtYear {
  width: 10%;
}
.openDt {
  width: 10%;
}
.typeNm {
  width: 10%;
}
.prdtStatNm {
  width: 10%;
}
.repNationNm {
  width: 10%;
}
.repGenreNm {
  width: 10%;
}
</style>