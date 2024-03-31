const moment        = require('moment')
const m_stok_buku   = require('../model/m_stok_buku')

moment.locale('id')



module.exports =
{
    index:
    function(req,res) {
        res.render('template/layout', {
            konten          : 'laporan/index',
            uri_segment     : req.path.split('/'),
            flash_message   : req.flash(),
        })
    },



    bukuMasuk:
    async function (req,res) {
        res.render('template/layout', {
            konten          : 'laporan/index',
            subkonten       : 'buku-masuk/main',
            stok_masuk      : await m_stok_buku.get_stokMasuk(),
            uri_segment     : req.path.split('/'),
            flash_message   : req.flash(),
            moment          : moment
        })
    },

    bukuKeluar:
    async function (req,res) {
        res.render('template/layout', {
            konten          : 'laporan/index',
            subkonten       : 'buku-keluar/main',
            stok_keluar      : await m_stok_buku.get_stokKeluar(),
            uri_segment     : req.path.split('/'),
            flash_message   : req.flash(),
            moment          : moment
        })
    },
}