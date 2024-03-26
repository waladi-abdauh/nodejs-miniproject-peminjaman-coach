const moment        = require('moment')
const m_jenis_buku  = require('../model/m_jenis_buku')
const m_genre       = require('../model/m_genre')
const m_stok_buku   = require('../model/m_stok_buku')

moment.locale('id')



module.exports =
{


    index:
    async function(req,res) {
        res.render('template/layout', {
            konten          : 'buku-masuk/index',
            jenis_buku      : await m_jenis_buku.get_all(),
            genre           : await m_genre.get_all(),
            uri_segment     : req.path.split('/'),
            flash_message   : req.flash(),
        })
    },



    prosesInsert:
    async function(req,res) {
        let dataform = {
            nama            : req.body.form_nama,
            penerbit        : req.body.form_penerbit,
            jenis           : req.body.form_jenis,
            genre           : req.body.form_genre,
            pengarang       : req.body.form_pengarang,
            ilustrator      : req.body.form_ilustrator,
            kategori        : req.body.form_kategori,
            jumlah_masuk    : req.body.form_jumlah_masuk,
            jumlah_keluar   : 0,
            jumlah_sisa     : req.body.form_jumlah_masuk,
            created_at      : moment().format('YYYY-MM-DD HH:mm:ss'),
            created_by      : req.session.user.id,
        }
        try {
            let insert = await m_stok_buku.insert(dataform)
            if (insert) {
                req.flash('success', 'berhasil input stok buku')
                res.redirect('/buku-masuk')
            }
        } catch (error) {
            throw error
        }
    },



}