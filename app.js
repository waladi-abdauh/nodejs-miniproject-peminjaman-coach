const express   = require('express')
const app       = express()
const port      = 3000
const c_home    = require('./controller/c_home')
const c_auth    = require('./controller/c_auth')


app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))


app.set('view engine', 'ejs')
app.set('views', './view')


app.get('/', c_home.index)
app.get('/auth', c_auth.form_login)


app.listen(port, ()=>{
    console.log('Aplikasi anda sudah siap, silakan buka http://localhost:' + port)
})