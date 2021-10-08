<template>
  <div id="app">
    <Loader class="loadComponenet" v-if="isLoading" :isLoading="isLoading" />
      <Header v-if="!isLoading"/>
      <TopPicture v-if="!isLoading" msg="Welcome to Your Vue.js App"/>
      <About id="about" v-if="!isLoading"/>
      <Hours v-if="!isLoading"/>
      <Directions v-if="!isLoading"/>
  </div>
</template>

<script>
import Hours from './components/Hours.vue'
import About from './components/About.vue'
import TopPicture from './components/TopPicture.vue'
import Loader from './components/Loading.vue'
import Header from './components/Header.vue'
import Directions from './components/Directions.vue'

export default {
  name: 'App',
  components: {
    TopPicture,
    Loader,
    Header,
    About,
    Hours,
    Directions
  },
  data(){
    return{
      isLoading: true,
      reservation: true
    }
  },
  mounted() {
    
    var self = this
    setTimeout(function(){
          self.$nextTick(function(){
            this.isLoading = false
          })
    }, 2500)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
body, html {
  margin: 0px;
  overflow-x: hidden;
}

.slide-fade-enter-active {
  transition: all 1.0s ease-in;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(30px);
  opacity: 0;
}
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@1&display=swap');

</style>
