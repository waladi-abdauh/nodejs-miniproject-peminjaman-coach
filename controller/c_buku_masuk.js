const moment = require('moment')
moment.locale('id')

module.exports =
{


    index:
    function(req,res) {
        res.render('template/layout', {
            konten          : 'buku-masuk/index',
            uri_segment     : req.path.split('/'),
            flash_message   : req.flash(),
        })
    },



}