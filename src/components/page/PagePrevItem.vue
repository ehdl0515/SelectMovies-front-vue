<script setup>

</script>

<template>
  <div class="bt prev" id="prev_page">이전</div>
</template>

<style scoped>
.bt {
  width: 50px;
  padding-top: 10px;
  font-size: 1.2rem;
  letter-spacing: -1px;
  cursor: pointer;
}
.bt.disabled-element {
  pointer-events: none;
  cursor: default;
}
</style>