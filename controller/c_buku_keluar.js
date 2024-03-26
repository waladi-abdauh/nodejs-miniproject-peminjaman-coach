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
        let form_jumlah_keluar = Number(req.body.form_jumlah_keluar)
        // ambil stok terakhir dulu
        let stokakhir = await m_stok_buku.get_sisaStok_by_namaBuku(req.body.form_nama)
        let sisa = Number(stokakhir[0].jumlah_sisa)

        let dataform = {
            nama            : req.body.form_nama,
            penerbit        : stokakhir[0].penerbit,
            jenis           : stokakhir[0].jenis,
            genre           : stokakhir[0].genre,
            pengarang       : stokakhir[0].pengarang,
            ilustrator      : stokakhir[0].ilustrator,
            kategori        : req.body.form_kategori,
            jumlah_masuk    : 0,
            jumlah_keluar   : -form_jumlah_keluar,
            jumlah_sisa     : sisa - form_jumlah_keluar,
            created_at      : moment().format('YYYY-MM-DD HH:mm:ss'),
            created_by      : req.session.user.id,
        }
        // console.log(dataform)

        // jika hasil pengeluaran buku adalah minus
        if (dataform.jumlah_sisa < 0) {
            req.flash('danger', `<b>Buku ${dataform.nama}</b>: Jumlah keluar (${dataform.jumlah_keluar}) melebihi stok yang ada (${sisa})`)
            res.redirect('/buku-keluar')
        }
        // jika hasil pengeluaran buku adalah positif
        else {
            try {
                let insert = await m_stok_buku.insert(dataform)
                if (insert) {
                    req.flash('success', `berhasil mengeluarkan Buku ${dataform.nama} untuk ${dataform.kategori} sejumlah ${dataform.jumlah_keluar}`)
                    res.redirect('/buku-keluar')
                }
            } catch (error) {
                throw error
            }
        }
    },



}