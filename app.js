const express       = require('express')
const app           = express()
const port          = 3003
const session       = require('express-session')
const connectFlash  = require('connect-flash')
const cookieParser  = require('cookie-parser')

const c_home        = require('./controller/c_home')
const c_auth        = require('./controller/c_auth')
const cek_login     = require('./controller/c_auth').cek_login
const c_dashboard   = require('./controller/c_dashboard')
const c_user        = require('./controller/c_user')
const c_master      = require('./controller/c_master')
const c_bukuMasuk   = require('./controller/c_buku_masuk')
const c_bukuKeluar  = require('./controller/c_buku_keluar')


app.use(connectFlash())
app.use(cookieParser('secret'))
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 2
        // 1000 milidetik * 60  = 1 menit
        // 1 menit * 60         = 1 jam
        // 1 jam * durasi       = x jam (aplikasi expired dalam x jam)
    }
}))


app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))


app.set('view engine', 'ejs')
app.set('views', './view')


app.get('/', c_home.index)
app.get('/auth', c_auth.form_login)
app.post('/auth/proses-login', c_auth.proses_login)
app.get('/dashboard', cek_login, c_dashboard.index)
app.get('/profil', cek_login, c_user.profil)


app.get('/master', cek_login, c_master.index)

app.get('/master/jenis-buku', cek_login, c_master.jenis_buku)
app.get('/master/jenis-buku/tambah', cek_login, c_master.jenis_buku_formTambah)
app.post('/master/jenis-buku/proses-insert', cek_login, c_master.jenis_buku_prosesInsert)
app.post('/master/jenis-buku/delete/:id', cek_login, c_master.jenis_buku_prosesDelete)
app.get('/master/jenis-buku/detail/:id', cek_login, c_master.jenis_buku_detail)
app.get('/master/jenis-buku/edit/:id', cek_login, c_master.jenis_buku_formEdit)
app.post('/master/jenis-buku/proses-update/:id', cek_login, c_master.jenis_buku_prosesUpdate)


app.get('/master/genre', cek_login, c_master.genre)
app.get('/master/rak', cek_login, c_master.rak)


app.get('/buku-masuk', cek_login, c_bukuMasuk.index)
app.post('/buku-masuk/proses-insert', cek_login, c_bukuMasuk.prosesInsert)


app.get('/buku-keluar', cek_login, c_bukuKeluar.index)
app.post('/buku-keluar/proses-insert', cek_login, c_bukuKeluar.prosesInsert)



app.listen(port, ()=>{
    console.log('Aplikasi anda sudah siap, silakan buka http://localhost:' + port)
})