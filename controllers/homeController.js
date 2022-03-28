module.exports.home=(req,res)=>{
    console.log(req.body);
    return res.render('home');
}