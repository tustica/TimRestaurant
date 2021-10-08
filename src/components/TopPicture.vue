<template>
  <div class="hello">
    <div @click="takedown()" class="sibling"></div>
    <button @click="popup()" id="menu_button">Make a Reservation</button>
    <transition name="fade"><Reservation v-if="reserving"/></transition>
    <img id= "arrowDown" src="../assets/arrowDown.png">
    <h3 id="scrollDown" style="display:none">Scroll Down</h3>
  </div>
</template>

<script>
import Reservation from './Reservation.vue'
import store from '@/store.js'
export default {
  
  name: 'TopPicture',
  props: {
    msg: String,
  },
  data(){
    return store.state
  },
  methods: {
    popup(){
      this.reserving = true
    },
    takedown(){
      var pic = document.querySelector('.sibling')
      pic.setAttribute("style", "filter:brightness(100%)")
      this.reserving = false
    }
  },
  components:{Reservation},
  mounted(){
    var button = document.querySelector('#menu_button')
    var picture = document.querySelector('.sibling')
    var arrow = document.querySelector('#arrowDown')
    var scrollDown = document.querySelector('#scrollDown')
    arrow.addEventListener("mouseover", scroll, false)
    scrollDown.addEventListener("mouseout", scrollOut, false)
    scrollDown.addEventListener("click", scrollClick, false)
    button.addEventListener("mouseover", mOver, false)
    button.addEventListener("mouseout", mOut, false)

    function mOver(){
      picture.setAttribute("style", "filter:brightness(50%);")
      button.setAttribute("style", "padding: 14px 24px; cursor: pointer;")
    }
    function mOut(){
      picture.setAttribute("style", "filter:brightness(100%);")
      button.setAttribute("style", "padding: 10px 20px;")
    }
    function scroll(){
      arrow.setAttribute("style", "display:none")
      scrollDown.setAttribute("style", "display:block; cursor: pointer;")
    }
    function scrollOut(){
      scrollDown.setAttribute("style", "display:none")
      arrow.setAttribute("style", "display:block")
    }
    function scrollClick(){
      window.scrollTo({top: document.querySelector('#about').scrollHeight, behavior: 'smooth'});
    }
    
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
$tablet: 768px;
.hello{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 514px;
}
.sibling{
  width: 100%;
  height: 514px;
  background-image: url('../assets/mainpic.png');
  transition: all 0.5s ease 0s ;
}
#menu_button {
  position: absolute;
  color: white;
  font-size: 22px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #ff8914;
  padding: 15px 30px;
  border: none;
  border-radius: 100px;
  transition: all 0.5s ease 0s ;
  }
#arrowDown{
  margin-top: 220px;
  position: absolute;
  width: 6%;
}
#scrollDown{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 10px;
  color: black;
  margin-top: 450px;
  position: absolute;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
@media screen and (max-width:$tablet) {
  .sibling{
    width: $tablet;
    overflow: hidden;
  }
  #menu_button{
    left: 100px;
  }


}
</style>
