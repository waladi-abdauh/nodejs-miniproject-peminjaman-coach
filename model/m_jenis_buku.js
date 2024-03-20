const db = require('../config/database').db
const table = 'm_jenis_buku'


module.exports =
{

    get_all:
    async function() {
        try {
            let sql = await db.query(`
                SELECT * FROM ${table} WHERE is_active = 1`
            )
            return sql.rows
        } catch (error) {
            return error
        }
    },


}