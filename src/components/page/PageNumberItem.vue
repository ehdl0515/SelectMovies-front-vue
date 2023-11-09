<script setup>

import {GetTotalDataCnt, getTotalPageCount, setPaging} from '@/page.js';


let currentPage;
currentPage = 0;
const DataCntPerPage = 10;
const showPageCnt = 5;
const totalPage = getTotalPageCount(await GetTotalDataCnt(), DataCntPerPage);
let prevPage = document.getElementById("prev_page");
let nextPage = document.getElementById("next_page");

let newHtml;
let last;
[newHtml, last] = setPaging(currentPage, showPageCnt, totalPage)

if (currentPage <= showPageCnt) {
  prevPage.classList.add("disabled-element")
}

if ((totalPage <= showPageCnt || last === totalPage))  {
  nextPage.classList.add("disabled-element")

}

</script>

<template>
  this.newHtml
</template>

<style scoped>

</style>