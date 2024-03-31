const moment = require('moment')
moment.locale('id')
const m_jenis_buku  = require('../model/m_jenis_buku')
const m_genre = require('../model/m_genre')




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



    jenis_buku_prosesDelete:
    async function (req,res) {
        let id_jenis = req.params.id
        
        try {
            let hapus = await m_jenis_buku.hapus(id_jenis)
            if (hapus) {
                console.log(hapus)
                req.flash('success', 'berhasil hapus')
                res.redirect('/master/jenis-buku')
            }
        } catch (error) {
            req.flash('error', error)
            res.redirect('/master/jenis-buku')
        }
    },



    jenis_buku_detail:
    async function (req,res) {
        let id_jenis = req.params.id
        res.render('template/layout', {
            konten          : 'master/index',
            subkonten       : 'jenis-buku/detail',
            uri_segment     : req.path.split('/'),
            flash_message   : req.flash(),
            jenis_buku      : await m_jenis_buku.get_one(id_jenis),
            moment          : moment,
        })
    },



    jenis_buku_formEdit:
    async function (req,res) {
        let id_jenis = req.params.id
        res.render('template/layout', {
            konten          : 'master/index',
            subkonten       : 'jenis-buku/form-edit',
            uri_segment     : req.path.split('/'),
            flash_message   : req.flash(),
            jenis_buku      : await m_jenis_buku.get_one(id_jenis),
        })
    },



    jenis_buku_prosesUpdate:
    async function (req,res) {
        let id_jenis = req.params.id
        let dataform = {
            kode        : req.body.form_kode,
            nama        : req.body.form_nama,
            updated_at  : moment().format('YYYY-MM-DD HH:mm:ss'),
            updated_by  : req.session.user.id,
        }
        try {
            let update = await m_jenis_buku.update(dataform, id_jenis)
            if (typeof update[1].rowCount !== undefined && update[1].rowCount > 0) {
                req.flash('success', `berhasil perbarui jenis buku ${dataform.nama}`)
                res.redirect('/master/jenis-buku')
            }
        } catch (error) {
            console.log(error)
            req.flash('danger', JSON.stringify(error))
            res.redirect(`/master/jenis-buku/edit/${id_jenis}`)
        }
    },



    genre:
    async function (req,res) {
        res.render('template/layout', {
            konten: 'master/index',
            subkonten: 'genre/main',
            uri_segment: req.path.split('/'),
            flash_message: req.flash(),
            genre: await m_genre.get_all(),
        })
    },



    genre_detail:
    async function (req,res) {
        let id_genre = req.params.id
        res.render('template/layout', {
            konten          : 'master/index',
            subkonten       : 'genre/detail',
            uri_segment     : req.path.split('/'),
            flash_message   : req.flash(),
            genre      : await m_genre.get_one(id_genre),
            moment          : moment,
        })
    },



    genre_formTambah:
    async function (req,res) {
        res.render('template/layout', {
            konten      : 'master/index',
            subkonten   : 'genre/form-tambah',
            uri_segment : req.path.split('/'),
            flash_message: req.flash(),
        })
    },



    genre_prosesInsert:
    async function (req,res) {
        let dataform = {
            kode        : req.body.form_kode,
            nama        : req.body.form_nama,
            is_active   : 1,
            created_at  : moment().format('YYYY-MM-DD HH:mm:ss'),
            created_by  : req.session.user.id,
        }
        try {
            let insert = await m_genre.insert(dataform)
            if (insert) {
                console.log(insert)
                req.flash('success', 'berhasil tambah genre baru')
                res.redirect('/master/genre')
            }
        } catch (error) {
            req.flash('error', error)
            res.redirect('/master/genre/tambah')
        }
    },


    genre_formEdit:
    async function (req,res) {
        let id_genre = req.params.id
        res.render('template/layout', {
            konten          : 'master/index',
            subkonten       : 'genre/form-edit',
            uri_segment     : req.path.split('/'),
            flash_message   : req.flash(),
            genre      : await m_genre.get_one(id_genre),
        })
    },



    genre_prosesUpdate:
    async function (req,res) {
        let id_genre = req.params.id
        let dataform = {
            kode        : req.body.form_kode,
            nama        : req.body.form_nama,
            updated_at  : moment().format('YYYY-MM-DD HH:mm:ss'),
            updated_by  : req.session.user.id,
        }
        try {
            let update = await m_genre.update(dataform, id_genre)
            if (typeof update[1].rowCount !== undefined && update[1].rowCount > 0) {
                req.flash('success', `berhasil perbarui genre buku ${dataform.nama}`)
                res.redirect('/master/genre')
            }
        } catch (error) {
            console.log(error)
            req.flash('danger', JSON.stringify(error))
            res.redirect(`/master/genre/edit/${id_genre}`)
        }
    },



    genre_prosesDelete:
    async function (req,res) {
        let id_genre = req.params.id
        
        try {
            let hapus = await m_genre.hapus(id_genre)
            if (hapus) {
                console.log(hapus)
                req.flash('success', 'berhasil hapus')
                res.redirect('/master/genre')
            }
        } catch (error) {
            req.flash('error', error)
            res.redirect('/master/genre')
        }
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