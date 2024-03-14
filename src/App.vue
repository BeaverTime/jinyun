<template>
  <Nav v-if="router.currentRoute.value.name!=='login'" />
  <router-view/>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Nav from './views/Nav/Nav.vue';
const router = useRouter()
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
@font-face {
  font-family: Fruit-IceCream;
  src: url('./assets/fonts/fruit-icrecream.ttf');
}
@font-face {
  font-family: HanyiHalloween;
  src: url('./assets/fonts/Hanyi Halloween Body Slips.ttf');
}
@font-face {
  font-family: HanyiSentyDiary;
  src: url('./assets/fonts/Hanyi Senty Diary.ttf');
}
@font-face {
  font-family: HanyiSentyLingfeiScroll;
  src: url('./assets/fonts/Hanyi Senty Lingfei Scroll.ttf');
}
@font-face {
  font-family: 'MiniJaneCartoon';
  src: url('./assets/fonts/Mini Jane Cartoon.ttf');
}
@font-face {
  font-family: ZcoolSimplify;
  src: url('./assets/fonts/zcool simplify style.ttf');
}
</style>
<style scoped>
</style>
<style>
body {
  background-color: #f5f7f8;
}
.full {
  height: calc(100vh - 60px);
}
</style>