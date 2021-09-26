<template>
	<div class="wrapper">CatFoods</div>
</template>

<script>
	export default {
		name: 'CatFoods',
		data() {
			return {};
		},
		beforeRouteEnter: (to, from, next) => {
			console.log('enter');
			next((vm) => vm.getCatFoodsData());
		},

		beforeRouteLeave: (to, from, next) => {
			console.log('leave');
			next((vm) => {});
		},
		methods: {
			getCatFoodsData: function() {
				this.axios({
					method: 'get',
					url: 'https://jsonplaceholder.typicode.com/users',
				})
					.then((response) => {
						console.log(response.data);
					})
					.catch((err) => {
						throw new Error('err');
					});
			},
		},
	};
</script>

<style lang="scss" scoped></style>
