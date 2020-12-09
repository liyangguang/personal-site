<template lang="pug">
.container
  .grid
    template(v-for="(row, index) in rows")
      span(:style="{'grid-column': 1, 'grid-row': index + 1}") {{index + 1}}. {{row.code}}
      span(:style="{'grid-column': 2, 'grid-row': index + 1}") {{row.value}}
    button(v-if="!showAnswer", :style="{'grid-column': 2, 'grid-row': `1 / ${rows.length + 1}`}", @click="showAnswer = true") Show me the answers
</template>

<script>
export default {
  props: ['rows'],
  data() {
    return {
      showAnswer: false,
    };
  },
}
</script>

<style lang="scss" scoped>
.container {
  padding: 1em;
  background: rgba(0,0,0,.5);
}

.grid {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 1em;
}

button {
  grid-column: 2;
  width: 100%;
  height: 100%;
  border: 0;
  font-size: 1.1em;
  font-weight: 600;
  color: #67c8ff;
  cursor: pointer;
  background: #444;
  position: relative;
  z-index: 1;

  &:hover {
    background: #666;
  }
}
</style>
