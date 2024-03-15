const bcrypt = require('bcryptjs')
const m_user = require('../model/m_user')

module.exports = 
{

    form_login:
    function (req,res) {
        res.render('auth/form-login')
    },



    proses_login:
    async function (req,res) {
        let username = req.body.form_username
        let password = req.body.form_password
        let get_user = await m_user.get_one(username)

        // cek username
        if (get_user.length > 0) {
            // cek password
            let password_match = bcrypt.compareSync(password, get_user[0].password)
            if (password_match) {
                res.send('password betul')
            } else {
                res.send('password salah')
            }
        } else {
            res.send('user belum terdaftar')
        }
    },


}