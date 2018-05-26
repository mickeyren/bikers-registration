<template>
  <div id="app">
    <top></top>
    <notifications classes="global-notification" width="500" />
    <breadcrumb></breadcrumb>
    <categories></categories>
    <help></help>
    <router-view></router-view>
    <bottom></bottom>
  </div>
</template>

<script>
import Header from './components/shared/Header.vue'
import Categories from './components/shared/Categories.vue'
import Breadcrumb from './components/shared/Breadcrumb.vue'
import Help from './components/shared/Help.vue'
import Footer from './components/shared/Footer.vue'

export default {
  name: 'app',
  components: {
    top: Header,
    breadcrumb: Breadcrumb,
    categories: Categories,
    help: Help,
    bottom: Footer,  
  },
  mounted() {
  },
  computed: {
  }
}
</script>

<style lang='less'>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #575757;
}
</style>
