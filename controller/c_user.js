const bcrypt = require('bcryptjs')
const m_user = require("../model/m_user")
const moment = require('moment')

module.exports =
{

    profil:
    async function(req,res) {
        let id_user = req.session.user.id
        res.render('template/layout', {
            konten: 'user/profil',
            uri_segment: req.path.split('/'),
            flash_message: req.flash(),
            user : await m_user.get_profil(id_user)
        })
    },

    profil_prosesUpdate:
    async function (req,res) {
        let id_user = req.session.user.id
        let dataform = {
            nama : req.body.form_nama,
            alamat : req.body.form_alamat,
            tanggal_lahir : moment(req.body.form_tgl_lahir).format('YYYY-MM-DD'),
            password : bcrypt.hashSync(req.body.form_pass_baru, 10),
        }
        //check if password is empty then use the old password
        if (!req.body.form_pass_baru) {
            dataform.password = req.session.user.password
        }

        try {
            let update = await m_user.update(dataform, id_user)
            console.log(dataform.alamat, id_user, update)
            if (update) {
                req.flash('success', `berhasil perbarui user`)
                res.redirect('/profil')
            } 
        } catch (error) {
            console.log(error)
            req.flash('danger', JSON.stringify(error))
            res.redirect(`/profil`)
        }
    },


}