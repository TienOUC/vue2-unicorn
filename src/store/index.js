import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = sessionStorage.getItem('state')
	? JSON.parse(sessionStorage.getItem('state'))
	: {
			user: {
				name: '游客',
				isLogin: false,
			},
	  };

const getters = {
	getUserInfo(state) {
		return state.user;
	},
};

const mutations = {
	updateUserInfo(state, user) {
		state.user = user;
	},
};

const actions = {
	asyncUpdateUserInfo(context, user) {
		context.commit('updateUserInfo', user);
	},
};

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions,
});
