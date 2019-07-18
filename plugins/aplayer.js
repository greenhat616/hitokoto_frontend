import Vue from 'vue'
import APlayer from '@moefe/vue-aplayer'
if (window !== undefined) {
  Vue.use(APlayer, {
    defaultCover: 'https://github.com/a632079.png',
    productionTip: true
  })
}
