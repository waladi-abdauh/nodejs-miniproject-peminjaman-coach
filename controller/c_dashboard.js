module.exports =
{

index:
function(req,res) {
    res.render('template/layout', {
        konten: 'dashboard/index'
    })
},


}