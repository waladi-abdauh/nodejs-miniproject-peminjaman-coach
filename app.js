const express   = require('express')
const app       = express()
const port      = 3000
const c_home    = require('./controller/c_home')
const c_auth    = require('./controller/c_auth')
const session           = require('express-session')
const connectFlash      = require('connect-flash')
const cookieParser      = require('cookie-parser')
// const initPassportLocal = require('./controller/c_passport_local')
const passport          = require('passport')

// initPassportLocal()
app.use(cookieParser('secret'))
app.use(session({
    secret:'secret', resave:true, saveUninitialized:false, cookie:{
        maxAge: 1000 * 60 * 60 * 24 // 86400000 1 day
    }
}))
app.use(connectFlash())
app.use(passport.initialize())
app.use(passport.session())

app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))


app.set('view engine', 'ejs')
app.set('views', './view')


app.get('/', c_home.index)
app.get('/auth', c_auth.form_login)



cek_logout = (req,res,next)=>{
    if (req.isAuthenticated()) {
        return res.redirect('/');
    }
    next();
}

let otentikasiGagal =
passport.authenticate('local', {
    failureRedirect : '/auth/login',
    failureFlash    : true
})


let otentikasiSukses =
(req,res)=>{
    if (req.session) {
        res.redirect('/home/produksi/data/mesin-produksi')
    }
}

app.post('/auth/proses-login', c_auth.proses_login)

app.get('/dashboard', function(req,res) {
    if (req.session.user) {
        res.send('login & session sukses' + JSON.stringify(req.session))
    }
    else {
        res.redirect('/auth')
    }
})


app.listen(port, ()=>{
    console.log('Aplikasi anda sudah siap, silakan buka http://localhost:' + port)
})