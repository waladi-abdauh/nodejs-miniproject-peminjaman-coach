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


    insert:
    async function(data) {
        try {
            let sql = await db.query(
                `INSERT INTO ${table} (kode, nama, is_active, created_at, created_by)
                VALUES ($1, $2, $3, $4, $5);`,
                {bind: [data.kode, data.nama, data.is_active, data.created_at, data.created_by]}
            )
            return sql[0]
        } catch (error) {
            return error
        }
    },



    hapus:
    async function(id_jenis) {
        try {
            let sql = await db.query(
                `UPDATE ${table} SET is_active = 0
                WHERE id = $1;`,
                {bind: [id_jenis]}
            )
            return sql[0]
        } catch (error) {
            return error
        }
    },


}