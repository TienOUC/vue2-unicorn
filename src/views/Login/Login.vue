<template>
	<div class="login-box">
		<h2>登录</h2>
		<el-form ref="form-login" :model="form" :rules="rules">
			<el-form-item class="user" label="账号" prop="userName">
				<el-input v-model="form.userName" placeholder="请输入账号..."></el-input>
			</el-form-item>
			<el-form-item class="password" label="密码" prop="userPassword">
				<el-input v-model="form.userPassword" placeholder="请输入密码..."></el-input>
			</el-form-item>
			<el-form-item class="btn">
				<el-button class="submit-btn" type="primary" round @click="userLogin('form-login')">登录</el-button>
				<el-button class="register-btn" type="primary" round plain @click="userRegister('form-register')"
					>注册</el-button
				>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	import axios from 'axios';

	export default {
		name: 'Login',
		data() {
			return {
				// isLogin: false,
				form: {
					userName: '',
					userPassword: '',
				},
				//登录校验规则
				rules: {
					userName: [
						{ required: true, message: '请输入用户名', trigger: 'blur' },
						{ min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur' },
					],
					userPassword: [
						{ required: true, message: '请输入密码', trigger: 'blur' },
						{ min: 6, max: 30, message: '长度在 6 到 30 个字符', trigger: 'blur' },
					],
				},
			};
		},

		methods: {
			// 用户登录
			userLogin(formName) {
				this.$refs[formName].validate((valid) => {
					// if (valid) {
					// 	//更改 $store.state 状态
					// 	this.$store.dispatch('asyncUpdateUserInfo', { name: this.form.userName, isLogin: true });
					// 	//存储 $store.state 到 sessionStorage
					// 	sessionStorage.setItem('state', JSON.stringify(this.$store.state.user));
					// 	//跳转到 /home 路由
					// 	this.$router.push({ name: 'Home', params: { name: this.form.userName } });
					// } else {
					// 	this.$message({
					// 		message: '用户名或密码错误！',
					// 		center: true,
					// 	});
					// 	return false;
					// }

					if (valid) {
						axios({
							method: 'post',
							url: 'http://127.0.0.1:3000/api/user/login',
							data: {
								user: this.form.userName,
								password: this.form.userPassword,
							},
						})
							.then((res) => {
								switch (res.data) {
									case -1:
										this.msgInfo('用户不存在！', 'warning');
										break;
									case 0:
										this.msgInfo('登录成功！', 'success');
										break;
									case 1:
										this.msgInfo('密码不正确！', 'error');
										break;
								}
							})
							.catch((err) => {
								throw new Error(err);
							});
					} else {
						this.msgInfo('用户名或密码填写错误！', 'warning');
						return false;
					}
				});
			},

			//新用户注册
			userRegister() {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						axios({
							method: 'post',
							url: 'http://127.0.0.1:7000/api/user/register',
							data: {
								username: this.form.userName,
								password: this.form.userPassword,
							},
						})
							.then((res) => {
								console.log('注册成功！', res.data);
							})
							.catch((err) => {
								throw new Error(err);
							});
					} else {
						this.$message({
							message: '用户名或密码格式错误!',
							center: true,
						});
						return false;
					}
				});
			},

			//登录提示信息
			msgInfo(msg, type) {
				return this.$message({
					message: msg,
					center: true,
					type: type,
				});
			},
		},
	};
</script>

<style lang="scss" scoped>
	.login-box {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		padding: 50px;
		width: 350px;
		height: auto;
		background-color: #f1f3f4;
		border-radius: 12px;

		.user,
		.password {
			margin-bottom: 20px;
		}
		.btn {
			margin-top: 40px;
			.submit-btn {
				margin: 0;
				width: 170px;
			}
			.register-btn {
				margin-left: 10px;
				width: 170px;
			}
		}
	}
</style>
