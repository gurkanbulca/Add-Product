import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  data: {
    productList: [],
    selectedImage: null,
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
