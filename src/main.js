import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counter: 0
  },
  actions: {
    increment({commit}) {
      commit('INCREMENT')
    }
  },

  mutations: {
    INCREMENT (state){
      state.counter ++
    },
    DEMO (state, payload){
      console.log(payload)
    }
  },
  getters:{
    currentCount: state => state.counter
    }
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
