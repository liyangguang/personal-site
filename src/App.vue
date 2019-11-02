<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
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
  background: #333538;
  color: #d4e5ec;
}
</style>
