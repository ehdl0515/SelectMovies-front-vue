<script setup>
import GetMoviesApi from "GetMoviesApi.vue";

new Vue({
  el:"#board_list_content",
  methods: {
    async MakeMovieList(index) {
      const response = await GetMoviesApi.methods.GetMoviesAllWithPage(index);
      console.log("반환된 데이터:", response);
      if (!response.ok) {
        throw new Error('Network Connect Fail!!: ' + response.status);
      }
      let data = await response.json();
      let movies;
      let movieCds = [];
      let movieNms = [];
      let prdtYears = [];
      let openDts = [];
      let typeNms = [];
      let prdtStatNms = [];
      let repNationNms = [];
      let repGenreNms = [];
      movies = data.content;

      movies.map(function (movie) {
        movieCds.push(movie.movieCd)
        movieNms.push(movie.movieNm)
        prdtYears.push(movie.prdtYear)
        openDts.push(movie.openDt)
        typeNms.push(movie.typeNm)
        prdtStatNms.push(movie.prdtStatNm)
        repNationNms.push(movie.repNationNm)
        repGenreNms.push(movie.repGenreNm)
      });




    }
  }


})
</script>

<template>
  <div v-for="movieCd in movieCds" :key="movieCd">{{ movieCds }}</div>
  <div v-for="movieNm in movieNms" :key="movieNm">{{ movieNms }}</div>
  <div v-for="prdtYear in prdtYears" :key="prdtYear">{{ prdtYears }}</div>
  <div v-for="openDt in openDts" :key="openDt">{{ openDts }}</div>
  <div v-for="typeNm in typeNms" :key="typeNm">{{ typeNms }}</div>
  <div v-for="prdtStatNm in prdtStatNms" :key="prdtStatNm">{{ prdtStatNms }}</div>
  <div v-for="repNationNm in repNationNms" :key="repNationNm">{{ repNationNms }}</div>
  <div v-for="repGenreNm in repGenreNms" :key="repGenreNm">{{ repGenreNms }}</div>
</template>

<style scoped>

.board_list {
  width: 100%;
  border-top: 2px solid #000000;
}

.board_list > div {
  border-bottom: 1px solid #dddddd;
  font-size: 0;
}

.board_list >div.top {
  border-bottom: 1px solid #999999;
}
.board_list > div:last-child {
  border-bottom: 1px solid #000000;
}

.board_list > div > div {
  /*가로배치*/
  display: inline-block;
  /*모든 픽셀 여백*/
  padding: 15px 0;
  text-align: center;
  font-size: 1.4rem;
}
.board_list > div.top > div {
  font-weight: 600;
}

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