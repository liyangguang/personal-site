<template lang="pug">
div
  h1 
    span.waving-hand(title="HIGH FIVE!", :class="{'-no-high-five': noHighFive}", @click="refreshHighFive")
    | Hey there! I'm Yangguang Li
  p I'm a <span data-emoji="👨‍💻">&lt;front-end /&gt; engineer</span> + <span data-emoji="💡">UX designer</span>
  p Currently Senior UX Engineer @ Google
  br
  p When I'm not coding/designing, I ...
  p
    template(v-for="(activity, index) in activities")
      template(v-if="index !== 0") , 
      template(v-if="index === activities.length - 1") and 
      span.hover-able(:data-emoji="activity.emoji") {{activity.text}}
        span.tooltip {{activity.detail}}
</template>

<script>
export default {
  data() {
    return {
      noHighFive: false,
      activities: [
        {emoji: '🏀', text: 'play basketball', detail: 'I play point gurad (too short...). And I like San Antonio Spurs (Big3 era), Iverson, The Professor (And1)'},
        {emoji: '🕹', text: 'play games', detail: 'GTA 5, NBA 2K, Pokemon, and casual Nintendo Switch games. Recently started retro PC gaming :P'},
        {emoji: '🛠', text: 'build stuff', detail: 'Many LEGOs, DIY toys (Labo, DIY Dollhouse, etc.), Raspberry Pi'},
        {emoji: '🚗', text: 'enjoy road trips', detail: 'I had quite a few road trips across US. From day-trip to week-long ones'},
      ],
    };
  },
  methods: {
    refreshHighFive() {
      this.noHighFive = true;
      setTimeout(() => {this.noHighFive = false;});
    },
  },
}
</script>

<style scoped lang="scss">
h1 {
  font-size: 2.5em;
  margin-bottom: 1em;
}

p {
  line-height: 1.8;
  font-size: 1.1em;
}

[data-emoji]::after {
  content: attr(data-emoji);
  padding: 0 4px;
}

.hover-able {
  text-decoration: dashed;
  border-bottom: 1px dashed;
  position: relative;
  cursor: help;

  .tooltip {
    position: absolute;
    font-size: .8rem;
    width: 26em;
    color: var(--bg-color);
    background: var(--text-color);
    text-align: left;
    bottom: 0;
    padding: 4px 12px;
    border-radius: 4px;
    left: 50%;
    transform: translate(-50%, 110%);
    opacity: 0;
    visibility: hidden;
    transition: opacity var(--transition);
  }

  &:hover .tooltip {
    opacity: 1;
    visibility: visible;
  }
}

.waving-hand {
  animation: wave-animation  2.5s infinite;
  transform-origin: 70% 70%;
  display: inline-block;
  width: 1.5em;
  position: relative;

  &::before {
    content: '👋';
  }

  &:hover {
    cursor: grab;
    animation: none;

    &::before {
      content: '✋';
    }

    &::after {
      content: '🙌';
      transform-origin: center center;
      animation: high-five-animation 1s forwards;
      position: absolute;
      top: 0;
      left: .2em;
    }
  }

  &.-no-high-five::after {
    animation: none;
  }
}

@keyframes wave-animation {
    0% { transform: rotate(  0.0deg) }
   10% { transform: rotate(-10.0deg) }
   20% { transform: rotate( 12.0deg) }
   30% { transform: rotate(-10.0deg) }
   40% { transform: rotate(  9.0deg) }
   50% { transform: rotate(  0.0deg) }
  100% { transform: rotate(  0.0deg) }
}

@keyframes high-five-animation {
    0% { transform: translateY(0%) scale(0);}
   80% { transform: translateY(-100%) scale(1); opacity: 1; }
  100% { transform: translateY(-100%) scale(1); opacity: 0; }
}

</style>
