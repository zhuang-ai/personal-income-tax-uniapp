import Vue from 'vue'
import App from './App'

import home from './pages/home/index.vue'
Vue.component('home',home)
import my from './pages/my/index.vue'
Vue.component('my',my)
import handle from './pages/handle/index.vue'
Vue.component('handle',handle)
import serve from './pages/serve/index.vue'
Vue.component('serve',serve)
import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)
import api from "./utils/api";
Vue.prototype.$api = api;
import Fly from './utils/fly'
Vue.prototype.$req = new Fly;
Vue.config.productionTip = false
Vue.prototype.$remove = function(arr,val) { 
		var index = arr.indexOf(val); 
		if (index > -1) { 
		arr.splice(index, 1); 
		} 
		};

		
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

 



