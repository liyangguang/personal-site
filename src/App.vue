<template lang="pug">
#app: router-view
</template>

<style>
@import url('../shared/_variables.css');

*, *:after, *:before{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  font-size: 16px;
  font-size: calc(12px + .3vw);
}

@media screen and (max-width: 1000px) {
  html, body {
    font-size: 16px;
  }
}

body {
  font-family: 'Open Sans', sans-serif;
  background: var(--bg-color);
  color: var(--text-color);
}

a, a:visited {
  color: inherit;
}
</style>
