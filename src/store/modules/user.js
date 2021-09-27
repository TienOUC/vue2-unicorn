const user = {
	state: sessionStorage.getItem('state')
		? JSON.parse(sessionStorage.getItem('state'))
		: {
				user: {
					name: '游客',
					isLogin: false,
				},
		  },

	getters: {
		getUserInfo(state) {
			return state.user;
		},
	},

	mutations: {
		updateUserInfo(state, user) {
			state.user = user;
		},
	},

	actions: {
		asyncUpdateUserInfo(context, user) {
			context.commit('updateUserInfo', user);
		},
	},
};

export default user;
