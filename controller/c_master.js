const m_jenis_buku = require('../model/m_jenis_buku')
const { Sequelize } = require('sequelize')

//koneksi db
const sequelize = new Sequelize('db_peminjaman', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres',
    define: {
        freezeTableName: true, // untuk kesamaan antara nama model & table
        timestamps: false, // untuk mematikan fitur timestamps bawaan sequelize
    }
})

// setting penamaan yg sama antara model & table
// const m_jenis_buku = sequelize.define('m_jenis_buku')


module.exports =
{

    index:
    function (req,res) {
        res.render('template/layout', {
            konten: 'master/index',
            uri_segment: req.path.split('/'),
        })
    },



    jenis_buku:
    async function (req,res) {
        res.render('template/layout', {
            konten: 'master/index',
            subkonten: 'jenis-buku/main',
            uri_segment: req.path.split('/'),
            jenis_buku: await m_jenis_buku.get_all(),
        })
    },



    genre:
    function (req,res) {
        res.render('template/layout', {
            konten: 'master/index',
            subkonten: 'genre/main',
            uri_segment: req.path.split('/'),
        })
    },



    rak:
    function (req,res) {
        res.render('template/layout', {
            konten: 'master/index',
            subkonten: 'rak/main',
            uri_segment: req.path.split('/'),
        })
    },



}