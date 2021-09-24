import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/views/Login/Login.vue';

Vue.use(VueRouter);

const routes = [
	// {
	// 	path: '/:catchAll(.*)',
	// 	name: '/404',
	// 	component: () => import('@/views/404.vue'),
	// },
	{
		path: '/',
		name: 'Login',
		component: Login,
	},
	{
		path: '/home',
		name: 'Home',
		component: () => import('@/views/Home/Home.vue'),
		children: [
			{
				path: '/goods/cat-foods',
				name: 'CatFoods',
				component: () => import('@/views/Goods/CatFoods.vue'),
			},
			{
				path: '/goods/cat-litter',
				name: 'CatLitter',
				component: () => import('@/views/Goods/CatLitter.vue'),
			},
			{
				path: '/goods/cat-snacks',
				name: 'CatSnacks',
				component: () => import('@/views/Goods/CatSnacks.vue'),
			},
			{
				path: '/goods/cat-toys',
				name: 'Toys',
				component: () => import('@/views/Goods/CatToys.vue'),
			},
			{
				path: '/goods/cleaning-products',
				name: 'CleaningProducts',
				component: () => import('@/views/Goods/CleaningProducts.vue'),
			},
		],
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('@/views/About/About.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
