<template lang="pug">
div
  input(type="date", v-model="date")
  p Pick a date above, or
    button(@click="date = '2020-01-01'") Change to Jan 1st, 2020
    button(@click="date = '2020-12-31'") Change to Dec 31st, 2020
  ul
    li new Date(input.value).getFullYear(): 
      b {{year}}
    li new Date(input.value).getMonth(): 
      b {{month}}
    li new Date(input.value).getDate(): 
      b {{day}}
</template>

<script>
export default {
  data() {
    return {
      date: '',
    };
  },
  computed: {
    year() {
      if (!this.date) return '(Date not set)';
      return new Date(this.date).getFullYear();
    },
    month() {
      if (!this.date) return '(Date not set)';
      return new Date(this.date).getMonth();
    },
    day() {
      if (!this.date) return '(Date not set)';
      return new Date(this.date).getDate();
    },
  },
}
</script>

<style lang="scss" scoped>
div {
  padding: 1em;
}

button {
  margin: 1em;
}
</style>
