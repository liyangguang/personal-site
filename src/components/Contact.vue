<template lang="pug">
ul.links
  li.link(v-for="item in content")
    a(:href="item.url", target="_blank", rel="noopener")
      img(:src="item.icon", :alt="item.name + 'icon'")
      span {{item.name}}
</template>

<script>
export default {
  data() {
    return {
      content: CONTENT,
    };
  },
};

const CONTENT = [
  {name: 'LinkedIn', url: 'https://www.linkedin.com/in/yangguangli/', icon: require('@/assets/linkedin.svg')},
  {name: 'GitHub', url: 'https://github.com/liyangguang', icon: require('@/assets/github.svg')},
  {name: 'Twitter', url: 'https://twitter.com/LYangguang', icon: require('@/assets/twitter.svg')},
  {name: 'Email', url: 'mailto:liyangguangcn@gmail.com', icon: require('@/assets/email.svg')},
];
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

ul.links {
  display: flex;
  justify-content: center;
  list-style: none;
}

li.link {
  flex: 0 1 3rem;
  margin: 0 1em;
}

li.link a {
  display: inline-block;
  position: relative;
}

li.link img {
  width: 2.2rem;
  opacity: 1;
  transition: opacity .5s ease-in-out;
}

li.link span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity .5s ease-in-out;
}

li.link:hover img {
  opacity: 0;
}

li.link:hover span {
  opacity: 1;
}
</style>
