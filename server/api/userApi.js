const models = require('../db/db');
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const sql = require('../db/sqlMap');

const connection = mysql.createConnection(models.mysql);
connection.connect();

// 登录接口
router.post('/login', (req, res) => {
	console.log('开始向服务器发送数据');
	const request_info = req.body;
	const sel_username = `${sql.user.select} where username = '${request_info.user}'`;
	console.log(sel_username);
	connection.query(sel_username, request_info.user, (error, results) => {
		if (error) {
			throw error;
		}
		console.log(results);
		if (results[0] === undefined) {
			res.send('-1'); // -1 用户不存在
		} else {
			if (results[0].username == request_info.user && results[0].password == request_info.password) {
				res.send('0'); // 0 表示用户存在且密码正确
			} else {
				res.send('1'); // 1 表示用户存在，但密码不正确
			}
		}
	});
});

// 注册接口
router.post('/register', (req, res) => {
	const params = req.body;
	const sel_sql = `${sql.user.select} where username = '${params.username}'`;
	const add_sql = sql.user.register;
	console.log(sel_sql);

	connection.query(sel_sql, params.username, (error, results) => {
		console.log(`数据请求: ${results}`);
		if (error) {
			console.log(error);
		}
		if (results.length != 0 && params.username == results[0].username) {
			res.send('-1'); // -1 表示用户名已经存在
		} else {
			connection.query(add_sql, [params.username, params.password], (err, rst) => {
				if (err) {
					console.log(err);
				} else {
					console.log(rst);
					res.send('0'); // 0 表示用户创建成功
				}
			});
		}
	});
});

module.exports = router;
