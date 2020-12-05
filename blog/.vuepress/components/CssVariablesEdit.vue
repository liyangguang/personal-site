<template lang="pug">
div(:style="myVars")
  .buttons
    button(v-for="(tab, index) in tabs", :class="{'-active': index === activeIndex}", @click="activeIndex = index") Tab {{index}}
  .content
    p.title {{tabs[activeIndex].text}}
    p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque iaculis odio et efficitur. Cras ac neque finibus, eleifend erat id, aliquam mi. Etiam iaculis egestas imperdiet. Maecenas tincidunt cursus ex, fermentum sodales ipsum faucibus at. Aliquam pulvinar tortor sit amet velit eleifend, at laoreet ipsum ullamcorper. 
    a Learn more
</template>

<script>
export default {
  name: 'css-variables-edit',
  data() {
    return {
      tabs: [
        {text: 'Hello', color: '#f36235'}, 
        {text: 'World', color: '#e8d44c'}, 
        {text: 'I\m Yangguang', color: '#1b998c'}, 
        {text: 'CSS variable...', color: '#e71d36'}, 
        {text: '... is awesome!', color: '#2f284f'},
      ],
      activeIndex: 0,
    };
  },
  computed: {
    myVars () {
      return {
        '--tab-color': this.tabs[this.activeIndex].color,
      };
    }
  }
}
</script>

<style lang="scss" scoped>
.buttons {
  display: flex;
}

button {
  padding: 4px 1em;
  border: 1px solid #aaa;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  outline: 0;
  flex: 1;

  &.-active {
    border-bottom-color: transparent;
  }
}

.content {
  border: 1px solid #aaa;
  border-top: 0;
  padding: 2em;

  .title {
    font-weight: 600;
  }

  .title, a {
    color: var(--tab-color);
  }
}
</style>
