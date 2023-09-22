<template>
  <div id="app">
    <HeaderComponent />
    <router-view />
    <FooterComponent />
  </div>
</template>

<script>

import store from '@/store'
import HeaderComponent from '@/components/header/HeaderComponent.vue'
import FooterComponent from '@/components/footer/FooterComponent.vue'

export default {
  name: 'App',
  components: { FooterComponent, HeaderComponent },
  store,
  data () {
    return {
      imgBanner: 'img/banner-blog.jpg',
      activeElem: 'TopComponent'
    }
  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Jost:ital,wght@0,100;0,400;0,600;0,800;1,200;1,400;1,600;1,800&family=Roboto+Mono:wght@100;300;600&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  transition: all .3s ease;
}

.center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}

.wrapper-art {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  //gap: 10px;
  margin: 50px 0;
}
</style>
