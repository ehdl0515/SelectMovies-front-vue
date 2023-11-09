<script setup>

</script>

<template>
  <div class="bt next" id="next_page">다음</div>
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