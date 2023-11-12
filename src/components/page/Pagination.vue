<template>
  <div style="display: flex; align-items: center">
		<span v-if="leftmostPage > PAGE_PER_SECTION">
			<a class="prev-next-button"
          @click="
					() => {
						leftmostPage -= PAGE_PER_SECTION;
						onChangeCurPage(leftmostPage);
					}
				"
      >&lt;</a
      >
		</span>
    <span class="page" v-for="page in getPaginationArray(leftmostPage)" :key="page">
			<a
          :class="{ on: page === curPage }"
          @click="
					() => {
						onChangeCurPage(page);
					}
				"
      >
				{{ page }}</a
      >
		</span>
    <span v-if="leftmostPage + PAGE_PER_SECTION <= totalPage">
			<a class="prev-next-button"
          @click="
					() => {
						leftmostPage += PAGE_PER_SECTION;
						onChangeCurPage(leftmostPage);
					}
				"
      >&gt;</a
      >
		</span>
  </div>
</template>

<script>
import {ref, watchEffect} from 'vue';

export default {



  props: {
    list: Array,
    ITEM_PER_PAGE: Number,
    PAGE_PER_SECTION: Number,
  },
  emits: ['change-page'],
  setup(props, { emit }) {
    return {
      ...usePagination(props, emit),
    };
  },
};

const usePagination = (props, emit) => {
  const curPage = ref(1);
  const leftmostPage = ref(1);
  console.log("Pagination, props.list.length: ", props.list.length)
  const totalPage = ref(Math.ceil(props.list.length / (props.ITEM_PER_PAGE || 10)));
  console.log("Pagination, totalPage: ", totalPage)
  console.log("totalPage:", typeof(totalPage))


  const getPaginationArray = (left) => {
    // [left,left+1,left+2...] 로 원소의 개수를 PAGE_PER_SECTION 개 만드는 함수
    const res = [];
    for (let i = left; i < Math.min(totalPage.value + 1, left + props.PAGE_PER_SECTION); i++) {
      res.push(i);
    }
    console.log("RES:", res)
    return res;
  };

  const onChangeCurPage = (page) => {
    curPage.value = page;
    console.log("curPage:", curPage.value)
    emit('change-page', page);
  };

  // watchEffect를 사용하여 props.list가 변경될 때마다 totalPage 업데이트
  watchEffect(() => {
    totalPage.value = Math.ceil(props.list.length / (props.ITEM_PER_PAGE || 10));
  });

  return {
    leftmostPage,
    curPage,
    totalPage,
    getPaginationArray,
    onChangeCurPage,
  };
};
</script>

<style>



.page {
  font-size: 15px;
  text-align: center;
  padding: 1rem;
  cursor: pointer;
  display: inline-block;
  width: 40px;
  height: 30px;
  box-sizing: border-box;
  vertical-align: middle;
  border: 1px solid #dddddd;
  line-height: 50%;
}
.page a.on {
  font-weight: 900;
  color: red;
}

.prev-next-button {
  width: 10px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  letter-spacing: -1px;
  cursor: pointer;
}

</style>