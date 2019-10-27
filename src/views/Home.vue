<template lang="pug">
main
  my-intro
  my-contact
</template>

<script>
import MyIntro from '@/components/Intro.vue';
import MyContact from '@/components/Contact.vue';

export default {
  components: {MyIntro, MyContact},
};
</script>
