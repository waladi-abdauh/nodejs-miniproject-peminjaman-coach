const moment = require('moment')
const m_jenis_buku  = require('../model/m_jenis_buku')




module.exports =
{

    index:
    function (req,res) {
        res.render('template/layout', {
            konten: 'master/index',
            uri_segment: req.path.split('/'),
            flash_message: req.flash(),
        })
    },



    jenis_buku:
    async function (req,res) {
        res.render('template/layout', {
            konten: 'master/index',
            subkonten: 'jenis-buku/main',
            uri_segment: req.path.split('/'),
            flash_message: req.flash(),
            jenis_buku: await m_jenis_buku.get_all(),
        })
    },



    jenis_buku_formTambah:
    async function (req,res) {
        res.render('template/layout', {
            konten      : 'master/index',
            subkonten   : 'jenis-buku/form-tambah',
            uri_segment : req.path.split('/'),
            flash_message: req.flash(),
        })
    },



    jenis_buku_prosesInsert:
    async function (req,res) {
        let dataform = {
            kode        : req.body.form_kode,
            nama        : req.body.form_nama,
            is_active   : 1,
            created_at  : moment().format('YYYY-MM-DD HH:mm:ss'),
            created_by  : req.session.user.id,
        }
        try {
            let insert = await m_jenis_buku.insert(dataform)
            if (insert) {
                console.log(insert)
                req.flash('success', 'berhasil tambah jenis buku baru')
                res.redirect('/master/jenis-buku')
            }
        } catch (error) {
            req.flash('error', error)
            res.redirect('/master/jenis-buku/tambah')
        }
    },



    genre:
    function (req,res) {
        res.render('template/layout', {
            konten: 'master/index',
            subkonten: 'genre/main',
            uri_segment: req.path.split('/'),
            flash_message: req.flash(),
        })
    },



    rak:
    function (req,res) {
        res.render('template/layout', {
            konten: 'master/index',
            subkonten: 'rak/main',
            uri_segment: req.path.split('/'),
            flash_message: req.flash(),
        })
    },



}