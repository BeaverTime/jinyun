<template>
  <div class="container">
    <nav class="navbar">
      <div class="banner">
        <img src="../../assets/logo.png" class="logo">
      </div>
      <div class="navbar-collapse">
        <ul>
          <li :class="{'active': router.currentRoute.value.name === 'home'}" @click="router.push('/')">时间轴</li>
          <li :class="{'active': router.currentRoute.value.name === 'blog'}" @click="router.push('/blog')">记录</li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
</script>

<style scoped lang="less">

.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  height: 60px;
  display: flex;
  align-items: center;
  box-shadow: 0 10px 20px 0 rgba(138, 135, 165, 0.15);
  transition: all 200ms linear;
  background-color: white;
}
.container:hover {
  box-shadow: 0 20px 30px 0 rgba(138, 135, 165, 0.15);
}

.navbar {
  display: flex;
  box-sizing: border-box;
  align-items: center;
  padding: 0;
  flex-grow: 1;
  margin: auto;
}
.banner {
  height: 40px;
  cursor: pointer;
}
.logo {
  height: 100%;
  border-radius: 5px;
}

.navbar-collapse {
  display: flex;
  justify-content: end;
  flex-grow: 1;
  
  ul {
    list-style: none;
    display: flex;
    gap: 30px;
    li {
      cursor: pointer;
      font-family: ZcoolSimplify;
      font-size: 1.3rem;
      color: #5e5e5e;
      position: relative;
      line-height: 60px;

      &.active {
        color: #92C7CF;
        &::after {
          bottom: 0;
          opacity: 1;
        }
      }

      &:hover {
        color: #92C7CF;

        &::after {
          bottom: 0;
          opacity: 1;
        }
      }

      &::after {
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 2px;
        content: ' ';
        background-color: #92C7CF;
        opacity: 0;
        transition: all 200ms linear;
      }
    }
  }
}

@media screen and (min-width: 576px) {
  .navbar {
  max-width: 540px;
}
}
@media screen and (min-width: 768px) {
  .navbar {
    max-width: 720px;
  }
  .navbar-collapse {
    display: flex;
  }
}
@media screen and (min-width: 992px) {
  .navbar {
    max-width: 960px;
  }
}
@media screen and (min-width: 1200px) {
  .navbar {
    max-width: 1140px;
  }
}
</style>