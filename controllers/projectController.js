const Project=require('../models/project');

module.exports.home=function(req,res){
    return res.render('project');
};
// module.exports.newForm=function(req,res){
//     return res.render('projectcreate');
// }
module.exports.newform=function(req,res){
    return res.render('projectform');
}
module.exports.create=async function(req,res){
    const {name,desc,author}=req.body;
            const new_project= await Project.create({
                name,
                desc,
                author
            });
            await new_project.save();
            console.log("new project created",new_project);
            if(!new_project){
                console.log("error in creating new project");
                return res.redirect('back');
            }
            return res.redirect('/');
        
    }
    
    