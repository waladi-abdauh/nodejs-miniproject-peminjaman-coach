const db = require('../config/database').db


module.exports =
{

    get_one:
    async function(username) {
        try {
            let sql = await db.query(`
                SELECT * FROM users WHERE username = $1`,
                [username]
            )
            return sql.rows
        } catch (error) {
            return error
        }
    },


}