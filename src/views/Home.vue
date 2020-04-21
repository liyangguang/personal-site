<template lang="pug">
main
  my-intro.my-intro
  p.blog-line Checkout&nbsp;
    a(href="/blog") my blog
    |  on UX engineering and more!
  .iframe-container: iframe(src="https://www.google.com/maps/d/embed?mid=19-2d1Lr-mtRtx325HmJgwxrFIrC69l6K")
  my-contact.my-contact
</template>

<script>
import MyIntro from '@/components/Intro.vue';
import MyContact from '@/components/Contact.vue';

export default {
  components: {MyIntro, MyContact},
};
</script>

<style scoped lang="scss">
main {
  text-align: center;
  padding: 3em;
  max-width: 1000px;
  margin: 0 auto;
}

.my-intro {
  margin-top: 5em;
}

h2 {
  font-size: 1.5em;
  margin: 2em 0 1em;
}

.blog-line {
  font-size: 1.2em;
  margin: 3em 0;

  a {
    text-decoration: none;
    position: relative;
    transition: color var(--transition);

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
}

.iframe-container {
  padding-bottom: 66%;
  position: relative;

  iframe {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
}

.my-contact {
  margin: 2em auto;
}
</style>
