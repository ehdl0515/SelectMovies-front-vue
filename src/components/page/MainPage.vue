<template>
  <div class="page_number">
    <!-- articles 배열이 비어있지 않은 경우에만 Pagination 컴포넌트를 렌더링 -->
    <Pagination v-if="articles.length > 0" :list="articles" v-bind="{ ITEM_PER_PAGE, PAGE_PER_SECTION }" @change-page="onChangePage" />
  </div>
</template>

<script>
import Pagination from '@/components/page/Pagination.vue';
import {ref, onMounted} from 'vue';
import { GetMoviesAll } from '@/movie_api';

export default {
  components: { Pagination },
  setup() {

    const articles = ref([]);
    const ITEM_PER_PAGE = ref(10);
    const PAGE_PER_SECTION = ref(5);
    let curPage = ref(1);

    const fetchData = async () => {
      try {
        const response = await GetMoviesAll();
        if (!response.ok) {
          throw new Error('Network Connect Fail!!: ' + response.status);
        }
        articles.value = await response.json();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // 컴포넌트가 마운트된 후에 데이터를 가져오고 Pagination 렌더링
    onMounted(() => {
      fetchData();
    });

    const onChangePage = (data) => {
      curPage.value = data;
    };

    return { articles, ITEM_PER_PAGE, PAGE_PER_SECTION, curPage, onChangePage };
  },
};
</script>


<style>

.page_number {
  font-size: 20px;
}

.page_number > div {
  justify-content: center;
}

</style>