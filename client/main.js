const { sql,pool } = require('../db');

const newLocal = 'SELECT * FROM nvlt_user WHERE nvltuser = @user';
module.exports = function(app)
{
    app.get('/', async (req,res) => {
        try{
        const appPool = await pool;
    
        const result = await appPool.request()
            .input('user', sql.VarChar, 'administrator')
            .query(newLocal);
        res.send(result);
        } catch(err) {
            res.status(500);
            res.send(err.message);
        }
    });

    app.get('/about', async(req,res) => {
        console.log('about.html request');
        res.send('about.html');
    });
}
