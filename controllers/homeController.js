module.exports.home=function(req,res){
    console.log(req.body);
    return res.render('home');
};
module.exports.form=function(req,res){
    return res.render('projectform');
}