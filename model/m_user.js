const db = require('../config/database').db
const moment = require('moment')


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

    get_profil:
    async function(id_user) {
        try {
            let sql = await db.query(`
                SELECT * FROM users WHERE id = $1`,
                [id_user]
            )
            // if tanggal_lahir is not empty
            if (sql.rows[0].tanggal_lahir) {
                sql.rows[0].tanggal_lahir = moment(sql.rows[0].tanggal_lahir).format('YYYY-MM-DD')
            } else {
                sql.rows[0].tanggal_lahir = ''
            }
            
            return sql.rows
        } catch (error) {
            return error
        }
    },

    

    update:
    async function(dataform, id_user) {
        try {
            // check if password is not empty otherwise use the old password
            if (dataform.password) {
                let sql = await db.query(
                    'UPDATE users SET nama = $1, alamat = $2, tanggal_lahir = $3, password = $4 WHERE id = $5', 
                    [dataform.nama, dataform.alamat, dataform.tanggal_lahir, dataform.password, id_user]
                )
                return sql
            } else {
                let sql = await db.query(
                    'UPDATE users SET nama = $1, alamat = $2, tanggal_lahir = $3 WHERE id = $4', 
                    [dataform.nama, dataform.alamat, dataform.tanggal_lahir, id_user]
                )
                return sql
            }
        } catch (error) {
            return error
        }
    },


}