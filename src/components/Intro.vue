<template lang="pug">
div
  h1 
    span.waving-hand(title="HIGH FIVE!", :class="{'-no-high-five': noHighFive}", @click="refreshHighFive")
    | Hey there! I'm Yangguang Li
  p
    span.no-wrap 80% front-end engineer
    | &nbsp;+&nbsp;
    span.no-wrap 20% UX designer
    |  located in the San Francisco Bay Area.
  br
  p Currently incubating ML focused startup ideas @ Sutter Hill Venture.
  p Ex - tech lead and manager @ Google.
  .blog-line
    a(href="/blog") Checkout my blog
  p When I'm not coding/designing, I ...
  p
    template(v-for="(activity, index) in activities")
      template(v-if="index !== 0") , 
      template(v-if="index === activities.length - 1") and 
      span.hover-able.no-wrap(:data-emoji="activity.emoji", :data-animation="activity.animationAttr") {{activity.text}}
        span.tooltip {{activity.detail}}
</template>

<script>
export default {
  data() {
    return {
      noHighFive: false,
      activities: [
        {emoji: '🏀', text: 'play basketball', detail: 'Point gurad. Fan of San Antonio Spurs (GDP era) and Iverson', animationAttr: 'ball'},
        {emoji: '🕹', text: 'play video games', detail: 'Strategy games, NBA 2K, Tetris, old games.', animationAttr: 'shake'},
        {emoji: '🔨', text: 'build stuff', detail: 'DIY home improvement, fun gadgets', animationAttr: 'hammer'},
        {emoji: '🚗', text: 'enjoy road trips', detail: 'Across US east-west, along the coast. Many national parks.', animationAttr: 'car'},
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

.no-wrap {
  white-space: nowrap;
}

.hover-able {
  background: linear-gradient(90deg, #fff6 50%, transparent 50%);
  background-repeat: repeat-x;
  background-size: 6px 1px;
  background-position: 0 100%;
  position: relative;
  cursor: help;
  transition: background-size var(--transition);

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
    z-index: var(--z-above-content);
    white-space: normal;
  }

  &:hover {
    animation: dash-animation 15s infinite linear;
    background-size: 6px 2px;

    .tooltip {
      opacity: 1;
      visibility: visible;
    }

    &::after {
      display: inline-block;
      animation-duration: 1s;
      animation-iteration-count: infinite;
    }

    &[data-animation=ball]::after {animation-name: ball-animation;}
    &[data-animation=shake]::after {animation-name: shake-animation;}
    &[data-animation=hammer]::after {animation-name: hammer-animation;}
    &[data-animation=car]::after {animation-name: car-animation;}
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

.blog-line {
  margin: 1em 0 5em;

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

@keyframes dash-animation {
  0% {background-position: 0 100%;}
  100% {background-position: 100% 100%;}
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

@keyframes shake-animation {
    0% { transform: rotate(20deg); }
   50% { transform: rotate(-20deg); }
  100% { transform: rotate(20deg); }
}

@keyframes ball-animation {
    0% { transform: translateY(0); }
   50% { transform: translateY(-.5em); }
  100% { transform: translateY(0); }
}

@keyframes hammer-animation {
    0% { transform-origin: 80% 50%; transform: rotate(-25deg); }
  100% { transform-origin: 80% 50%; transform: rotate(0deg); }
}

@keyframes car-animation {
    0% { transform: translateY(0); }
   25% { transform: rotate(5deg);}
   50% { transform: translateY(-.1em);}
   75% { transform: rotate(-5deg);}
  100% { transform: translateY(0); }
}
</style>
