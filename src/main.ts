import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCompositionAPI from '@vue/composition-api'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch,faFileVideo } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'
library.add(faSearch, faFileVideo, faStar)

Vue.config.productionTip = false
Vue.use(VueCompositionAPI)
Vue.use(Vuetify)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  store,
  vuetify: new Vuetify({
    icons: {
      iconfont: 'mdi',
    }
  }),
  render: h => h(App)
}).$mount('#app')
