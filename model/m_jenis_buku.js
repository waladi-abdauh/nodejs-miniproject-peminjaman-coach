const db    = require('../config/koneksi_sequelize').db
const table = 'm_jenis_buku'


module.exports =
{

    get_all:
    async function() {
        try {
            let sql = await db.query(
                `SELECT * FROM ${table} WHERE is_active = 1`
            )
            return sql[0]
        } catch (error) {
            return error
        }
    },


}