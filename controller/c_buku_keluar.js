const moment        = require('moment')
const m_stok_buku   = require('../model/m_stok_buku')

moment.locale('id')



module.exports =
{


    index:
    async function(req,res) {
        res.render('template/layout', {
            konten          : 'buku-keluar/index',
            list_buku       : await m_stok_buku.get_listBuku(),
            uri_segment     : req.path.split('/'),
            flash_message   : req.flash(),
        })
    },



    prosesInsert:
    async function(req,res) {
        // convert ke number
        let form_jumlah_masuk = Number(req.body.form_jumlah_masuk)
        // ambil stok terakhir dulu
        let stokakhir = await m_stok_buku.get_sisaStok_by_namaBuku(req.body.form_nama)
        let sisa = 0
        // cek apakah ada buku dengan judul yg diinput
        if (stokakhir.length > 0) {
            sisa = Number(stokakhir[0].jumlah_sisa)
        }

        let dataform = {
            nama            : req.body.form_nama,
            penerbit        : req.body.form_penerbit,
            jenis           : req.body.form_jenis,
            genre           : req.body.form_genre,
            pengarang       : req.body.form_pengarang,
            ilustrator      : req.body.form_ilustrator,
            kategori        : req.body.form_kategori,
            jumlah_masuk    : form_jumlah_masuk,
            jumlah_keluar   : 0,
            jumlah_sisa     : form_jumlah_masuk + sisa,
            created_at      : moment().format('YYYY-MM-DD HH:mm:ss'),
            created_by      : req.session.user.id,
        }
        // console.log(dataform)
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