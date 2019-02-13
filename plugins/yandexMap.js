import Vue from 'vue'
import YmapPlugin from 'vue-yandex-maps'

if (process.browser) {
  Vue.use(YmapPlugin)
}