const express = require('express');
const app = express();

// mssql 연동
var sql = require('mssql');
var dbConfigMssql = {
    user: 'sa',
    password: 'N41@nouvolution',
    server: 'local',
    database: 'DoDo',
    stream: true,
    options: {
		encrypt: false,
		enableArithAbort: true
	},
}

async function connectTest(){
	try {
		let pool = await sql.connect(dbConfigMssql);
		let result1 = await pool.request().query('select * from nvlt_user')
		console.dir(result1)
	} catch (err) {
		console.log(err);
		// ... error checks
	}
}

sql.on('error', err => {
    // ... error handler
})