const moment = require('moment')
moment.locale('id')

module.exports =
{


    index:
    function(req,res) {
        res.render('template/layout', {
            konten          : 'buku-masuk/index',
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
            jumlah_masuk    : req.body.form_jumlah_masuk,
            jumlah_keluar   : 0,
            jumlah_sisa     : 0,
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
            req.flash('danger', JSON.stringify(error))
            res.redirect('/buku-masuk')
        }
    }



}