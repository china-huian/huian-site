
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: '',
    type: '',
    title: '',
    switch: false,
    screenWidth: ''
  },
  mutations: {

  }
})

export default store
