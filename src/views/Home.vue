<template lang="pug">
main
  my-intro
  br
  br
  p Checkout my&nbsp;
    a(href="/blog") UXE blog
    | !
  br
  my-contact.my-contact
</template>

<script>
import MyIntro from '@/components/Intro.vue';
import MyContact from '@/components/Contact.vue';

export default {
  components: {MyIntro, MyContact},
};
</script>

<style scoped>
main {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3em;
  min-height: 100vh;
}

h2 {
  font-size: 1.5em;
  margin: 2em 0 1em;
}

p {
  font-size: 1.2em;
}

.my-contact {
  margin: 2em auto;
}
</style>
