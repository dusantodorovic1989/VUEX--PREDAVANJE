<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    {{currentCount}}
    

    <button @click="handlerClick">Increment</button>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  async created(){
    await this.getTodos()
    // console.log(this.$store)
    // this.$store.commit('DEMO',{
    //   name:'Aleksandra',
    //   age:24
    // })
  },
  computed: {
    // brojcanik () {
    //   return this.$store.getters.currentCount
    // }

    
    // mapiramo 
    ...mapGetters([
      'currentCount' 
      ]),
    
  },
  methods: {
    handlerClick(){
      this.$store.dispatch('increment')
    },
    ...mapActions(['getTodos'])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
