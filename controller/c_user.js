module.exports =
{

profil:
function(req,res) {
    res.render('template/layout', {
        konten: 'user/profil',
        uri_segment: req.path.split('/'),
    })
},


}