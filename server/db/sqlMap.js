let sqlMap = {
	user: {
		// register: 'insert into user (username, email, password) values (?,?,?)',
		register: 'insert into user (username, password) values (?,?)',
		select: 'select * from user',
	},
};

module.exports = sqlMap;
