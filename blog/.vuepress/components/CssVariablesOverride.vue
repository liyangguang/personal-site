<template lang="pug">
.css-variables
  main
    section I'm a container
      .card I'm a card
    section(:class="{'narrow-container': override}") I'm a narrow container, and I overrode `--card-width`
      .card I'm a narrow card
  pre
    | .main {
    |   --card-width: 200px;
    | }
    |
    | .card {
    |   width: var(--card-width);
    | }
    |
    | .narrow-container {
    |
    label(:class="{'-strikethrough': !override}")
      input(type="checkbox", v-model="override")
      | --card-width: 150px;
    |
    | }

</template>

<script>
export default {
  name: 'css-variables-override',
  data() {
    return {
      override: true,
    };
  },
}
</script>

<style lang="scss" scoped>
.css-variables {
  display: flex;
}

main {
  --card-width: 200px;
  flex: 1;
}

pre {
  color: #fafafa;
}

.card {
  width: var(--card-width);
  height: 4em;
  padding: 1em;
  background: lightblue;
}

section {
  padding: 1em;
  margin: 1em;
  border: 1px solid #aaa;
}

.narrow-container {
  --card-width: 150px;
}

.-strikethrough {
  text-decoration: line-through;
}
</style>
