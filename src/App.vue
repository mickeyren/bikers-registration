<template>
  <div id="app" class="container">
    <top></top>
    <notifications classes="global-notification" width="500" />
    <breadcrumbs></breadcrumbs>
    <categories></categories>
    <help></help>
    <router-view></router-view>
    <bottom></bottom>
  </div>
</template>

<script>
import Header from './components/shared/Header.vue'
import Categories from './components/shared/Categories.vue'
import Breadcrumbs from './components/shared/Breadcrumbs.vue'
import Help from './components/shared/Help.vue'
import Footer from './components/shared/Footer.vue'

export default {
  name: 'app',
  components: {
    top: Header,
    breadcrumbs: Breadcrumbs,
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
