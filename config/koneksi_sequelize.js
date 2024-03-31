const { Sequelize } = require('sequelize')

//koneksi db


module.exports = {
    db: new Sequelize('db_peminjaman', 'postgres', 'root', {
        host: 'localhost',
        port: '5433',
        dialect: 'postgres',
        define: {
            freezeTableName: true, // untuk kesamaan antara nama model & table
            timestamps: false, // untuk mematikan fitur timestamps bawaan sequelize
        }
    })
}