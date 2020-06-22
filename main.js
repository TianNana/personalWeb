import Vue from 'vue'
import App from './App'
import {toast,modal,routerer} from './common/utils.js'
import {request} from './server/request.js'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$request = request
Vue.prototype.$store = store
Vue.prototype.$toast = toast
Vue.prototype.$modal = modal
Vue.prototype.$routerer = routerer

App.mpType = 'app'

const app = new Vue({
    store,
    ...App
})
app.$mount()
