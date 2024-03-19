module.exports =
{

    index:
    function (req,res) {
        res.render('template/layout', {
            konten: 'master/index'
        })
    },



    jenis_buku:
    function (req,res) {
        res.render('template/layout', {
            konten: 'master/index',
            subkonten: 'jenis-buku/main',
        })
    },



    genre:
    function (req,res) {
        res.render('template/layout', {
            konten: 'master/index',
            subkonten: 'genre/main',
        })
    },



    rak:
    function (req,res) {
        res.render('template/layout', {
            konten: 'master/index',
            subkonten: 'rak/main',
        })
    },



}