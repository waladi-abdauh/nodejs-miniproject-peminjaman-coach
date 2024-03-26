const db    = require('../config/koneksi_sequelize').db
const table = 'stok_buku'


module.exports =
{


    get_sisaStok_by_namaBuku:
    async function(nama_buku) {
        try {
            let sql = await db.query(
                `select * from ${table}
                where nama = $1
                order by id desc
                limit 1;`,
                {bind: [nama_buku]}
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
                `INSERT INTO ${table}
                (nama, penerbit, jenis, genre, pengarang, ilustrator, kategori, jumlah_masuk, jumlah_keluar, jumlah_sisa, created_at, created_by)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12);`,
                {bind: [data.nama, data.penerbit, data.jenis, data.genre, data.pengarang, data.ilustrator, data.kategori, data.jumlah_masuk, data.jumlah_keluar, data.jumlah_sisa, data.created_at, data.created_by]}
            )
            return sql[0]
        } catch (error) {
            return error
        }
    },



}