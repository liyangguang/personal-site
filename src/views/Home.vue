<template lang="pug">
main
  my-intro.my-intro
  //- .iframe-container: iframe(src="https://www.google.com/maps/d/embed?mid=19-2d1Lr-mtRtx325HmJgwxrFIrC69l6K")
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

.iframe-container {
  padding-bottom: 50%;
  position: relative;
  pointer-events: none;
  overflow: hidden;

  iframe {
    --map-header-height: 50px;
    position: absolute;
    top: calc(-1 * var(--map-header-height));
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: calc(100% + var(--map-header-height));
  }
}

.my-contact {
  margin: 5em auto;
}
</style>
