<template lang="pug">
#app: router-view
</template>

<style>
:root {
  --bg-color: #333538;
  --text-color: #d4e5ec;
  --transition: .5s ease;
}

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
  font-family: 'Roboto Slab', serif;
  background: var(--bg-color);
  color: var(--text-color);
}

a, a:visited {
  color: inherit;
}
</style>
