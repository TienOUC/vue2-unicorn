import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';

Vue.use(ElementUI);

Vue.prototype.axios = axios;
Vue.config.productionTip = false;

//路由守卫
router.beforeEach((to, from, next) => {
	let userInfo = JSON.parse(sessionStorage.getItem('state'));
	if (to.meta.requireAuth) {
		if (userInfo.user.isLogin) {
			next();
		} else {
			next({ path: '/login' });
		}
	}
	next();
});

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
