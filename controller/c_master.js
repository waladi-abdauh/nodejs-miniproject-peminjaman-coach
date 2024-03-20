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
    function (req,res) {
        res.render('template/layout', {
            konten: 'master/index',
            subkonten: 'jenis-buku/main',
            uri_segment: req.path.split('/'),
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