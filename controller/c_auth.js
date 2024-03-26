const bcrypt = require('bcryptjs')
const m_user = require('../model/m_user')

module.exports = 
{

    form_login:
    function (req,res) {
        res.render('auth/form-login', {
            flash_message: req.flash(),
        })
    },



    proses_login:
    async function (req,res) {
        let username = req.body.form_username
        let password = req.body.form_password
        let get_user = await m_user.get_one(username)

        // cek username
        try {
            if (get_user.length > 0) {
                let password_match = bcrypt.compareSync(password, get_user[0].password)
                if (password_match) {
                    req.session.user = get_user[0]
                    return res.redirect('/dashboard')
                } else {
                    req.flash('warning', 'password salah')
                    res.redirect('/auth')
                }
            } else {
                req.flash('info', 'username not existed')
                res.redirect('/auth')
            }
        } catch (error) {
            return error
            // res.redirect(`/auth?m=${error}`)
        }
    },



    cek_login:
    function (req,res,next) {
        if (req.session.user) {
            next()
        } else {
            res.redirect('/auth')
        }
    }



}