import Vue from 'vue'
import Lazyload from 'vue-lazyload'

Vue.use(Lazyload, {
  preLoad: 1.3,
  error: '/img/loading.png',
  loading: '/img/loading.png',
  attempt: 3
})
