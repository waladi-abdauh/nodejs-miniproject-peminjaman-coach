module.exports =
{

index:
function(req,res) {
    res.render('template/layout', {
        konten: 'dashboard/index',
        uri_segment: req.path.split('/'),
        flash_message: req.flash(),
    })
},


}