<template lang="pug">
div
  .controls
    //- choose types here
  svg
    //- percentage chart of tech in each type
    //- evenly distributed projects on hover. shows the time range, and a card.
</template>

<script>
export default {
  data() {
    return {
      project: PROJECTS,
    };
  },
};

const TECHNOLOGIES = new Map([
  ['appscript', {type: 'js library', title: '', color: '', logo: ''}],
  ['angular', {type: 'ui framework', title: 'Angular', color: '#dd0031', logo: 'https://angular.io/assets/images/logos/angular/angular.svg'}],
  ['angularjs', {type: 'ui framework', title: '', color: '', logo: ''}],
  ['d3', {type: 'js library', title: '', color: '', logo: ''}],
  ['firebase', {type: 'backend', title: '', color: '', logo: ''}],
  ['google-cloud', {type: 'backend', title: '', color: '', logo: ''}],
  ['gulp', {type: 'tooling', title: '', color: '', logo: ''}],
  ['houdini', {type: 'web technology', title: '', color: '', logo: ''}],
  ['jquery', {type: 'js library', title: '', color: '', logo: ''}],
  ['lit-element', {type: 'ui framework', title: '', color: '', logo: ''}],
  ['pwa', {type: 'web technology', title: '', color: '', logo: ''}],
  ['python', {type: 'backend', title: '', color: '', logo: ''}],
  ['react', {type: 'ui framework', title: 'React', color: '#61dafb', logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'}],
  ['rollup', {type: 'tooling', title: '', color: '', logo: ''}],
  ['sketch', {type: 'design', title: '', color: '', logo: ''}],
  ['typescript', {type: 'tooling', title: '', color: '', logo: ''}],
  ['vue', {type: 'ui framework', title: 'Vue.js', color: '#3eaf7c', logo: 'https://vuejs.org/images/logo.png'}],
  ['webpack', {type: 'tooling', title: '', color: '', logo: ''}],
]);

const PROJECTS = [
  {
    title: 'chromestatus.com',
    technologies: ['lit-element', 'rollup', 'gulp'],
    start: new Date(2019, 8 - 1),
    end: new Date(2019, 10 - 1),
    description: '',
    links: [
      {label: 'Site', url: 'http://chromestatus.com/'},
      {label: 'GitHub', url: 'https://github.com/liyangguang/chromium-dashboard'},
    ],
    isConfidential: false,
  },
  {
    title: 'A project planning tool',
    technologies: ['angular', 'typescript', 'firebase', 'google-cloud'],
    start: new Date(2018, 12 - 1),
    end: null,
    description: '',
    links: [],
    isConfidential: true,
  },
  {
    title: 'Program CMS sites',
    technologies: ['vue', 'firebase'],
    start: new Date(2018, 12 - 1),
    end: new Date(2019, 10 - 1),
    description: '',
    links: [],
    isConfidential: true,
  },
  {
    title: 'Houdini experiments',
    technologies: ['houdini'],
    start: new Date(2018, 10 - 1),
    end: new Date(2019, 1 - 1),
    description: '',
    links: [
      {label: 'CSS tricks article', url: 'https://css-tricks.com/css-houdini-could-change-the-way-we-write-and-manage-css/'},
      {label: 'GitHub', url: 'https://github.com/liyangguang/css-houdini'},
    ],
    isConfidential: false,
  },
  {
    title: 'G+ prototyping',
    technologies: ['angularjs', 'gulp'],
    start: new Date(2018, 12),
    end: new Date(2018, 12),
    description: '',
    links: [],
    isConfidential: true,
  },
];
</script>

<style scoped>
</style>
