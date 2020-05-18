<template lang="pug">
router-link(to="./post") Blog list
</template>

<style lang="scss" scoped>
@import url('../../../shared/_variables.css');

a {
  text-decoration: none !important;
  position: relative;
  transition: color var(--transition);
  font-size: 1.2em;
  display: inline-block;
  margin-top: 1em;

  &::before {
    content: '';
    position: absolute;
    background: var(--highlight-color);
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: -1;
    transition: transform var(--transition);
    transform-origin: 30% 120%;
    transform: scale(.95, .2);
  }

  &:hover {
    color: var(--bg-color);

    &::before {
      transform: scale(1.1, 1);
    }
  }
}
</style>
