<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
	export default {
		name: 'APP',
		created() {
			window.addEventListener('load', this.saveState());
		},

		methods: {
			saveState() {
				window.sessionStorage.setItem('state', JSON.stringify(this.$store.state));
			},
		},
	};
</script>
<style lang="scss">
	html,
	body,
	* {
		margin: 0;
		padding: 0;
	}

	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#nav {
		padding: 30px;

		a {
			font-weight: bold;
			color: #2c3e50;

			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}
</style>
