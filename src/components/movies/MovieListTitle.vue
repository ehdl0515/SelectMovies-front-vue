<script>
export default {
  name: "MovieListTitleComponent",
}
</script>

<template>
    <div class="top">
      <div class="movieCd">영화코드</div>
      <div class="movieNm">영화명</div>
      <div class="prdtYear">제작연도</div>
      <div class="openDt">개봉일</div>
      <div class="typeNm">유형</div>
      <div class="prdtStatNm">제작상태</div>
      <div class="repNationNm">국가</div>
      <div class="repGenreNm">장르</div>
    </div>
</template>

<style scoped>
.top {
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

.board_list .movieCd {
  width: 10%;
}
.board_list .movieNm {
  width: 30%;
  text-align: left;
}
.board_list .prdtYear {
  width: 10%;
}
.board_list .openDt {
  width: 10%;
}
.board_list .typeNm {
  width: 10%;
}
.board_list .prdtStatNm {
  width: 10%;
}
.board_list .repNationNm {
  width: 10%;
}
.board_list .repGenreNm {
  width: 10%;
}
</style>