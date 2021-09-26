<template>
	<div class="home">
		<button @click="onLogout">退出</button>
		<el-container>
			<!-- 左侧侧边栏 -->
			<el-aside>
				<el-menu :default-openeds="['1']">
					<!-- 商品管理 -->
					<el-submenu index="1">
						<template slot="title"><i class="el-icon-menu"></i>商品管理</template>
						<el-menu-item-group>
							<!-- <el-menu-item index="1-1"><router-link to="/goods/cat-foods">主粮</router-link></el-menu-item> -->
							<el-menu-item index="1-1">
								<router-link :to="{ name: 'CatFoods' }">主粮</router-link>
							</el-menu-item>
							<el-menu-item index="1-2">
								<router-link :to="{ name: 'CatSnacks' }">零食</router-link>
							</el-menu-item>
							<el-menu-item index="1-3">
								<router-link :to="{ name: 'CatToys' }">玩具</router-link>
							</el-menu-item>
							<el-menu-item index="1-4">
								<router-link :to="{ name: 'CatLitter' }">猫砂</router-link>
							</el-menu-item>
							<el-menu-item index="1-5">
								<router-link :to="{ name: 'CleaningProducts' }">清洁</router-link>
							</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<!-- 数据统计 -->
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-s-data"></i>数据统计</template>
						<el-menu-item-group>
							<el-menu-item index="1-1">数据1</el-menu-item>
							<el-menu-item index="1-2">数据2</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<!-- 系统设置 -->
					<el-submenu index="3">
						<template slot="title"><i class="el-icon-s-tools"></i>系统设置</template>
						<el-menu-item-group>
							<el-menu-item index="1-1">主题</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
				</el-menu>
			</el-aside>

			<!-- 右侧内容 -->
			<el-container>
				<el-header style="text-align: right; font-size: 12px">
					<el-dropdown>
						<i class="el-icon-user-solid" style="margin-right: 10px; cursor: pointer;"></i>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>用户信息</el-dropdown-item>
							<el-dropdown-item>修改资料</el-dropdown-item>
							<el-dropdown-item>退出</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
					<span>{{ $store.getters.getUserInfo.name }}</span>
				</el-header>

				<el-main>
					<router-view />
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		components: {},
		methods: {
			onLogout() {
				// sessionStorage.removeItem('state')
				// sessionStorage.removeItem('isLogin')
				sessionStorage.clear();
				this.$router.push({ name: 'Login' });
			},
		},
	};
</script>

<style lang="scss" scoped>
	.el-header {
		background-color: #b3c0d1;
		color: #333;
		line-height: 60px;
	}

	.el-aside {
		width: 150px;
		color: #333;
		background-color: #eef1f6;

		// .el-menu-item {
		// 	margin-left: 10px;
		// }
		a {
			text-decoration: none;
			color: #333;
		}
	}
</style>
