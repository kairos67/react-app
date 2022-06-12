const sql = require('mssql'); //use mssql module

const config = { //mssql 객체의 createConnection 메소드 호출
    server: 'localhost',
    host: 'localhost', //호스트 설정
   // port: 3000,
    options: { encrypt: false, database: 'DoDo' },
    authentication: {
        type: "default",
        options: {
            userName: 'sa', //mssql에서 설정한 유저이름
            password: 'N41@nouvolution' //mssql에서 설정한 유저 패스워드
        }
    }
};

const pool = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Conneted to MSSQL Server')
        return pool
    })
    .catch(err => console.log('Database Connetion Failed: Bad Connetion: ', err))

module.exports = { sql, pool }


