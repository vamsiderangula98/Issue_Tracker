const url=require("url");
const User = require("../models/user");
const Project=require("../models/projects");
//login controller
module.exports.logIn=function(req,res){
    if(!req.isAuthenticated()){
        console.log("login");
        return res.render('login',{
            title:"Login"
        });
    }
    const projects=Project.find({});
    console.log(projects);
    console.log("already signed in");
    return res.render('home',{
        title:"Home",
        projects,
    });
}

//create-session controller
module.exports.createSession=async function(req,res){
    console.log("You are Sucessfully Signed in");
    const projects=await Project.find({});
    console.log(projects);
res.redirect(url.format({
    pathname:"/",
    projects,
    title:"Home",
}));

};
//rendering sign up page
module.exports.signUp=function(req,res){
    return res.render('signup',{
        title:"Sign Up"
    });
}

//creating a new user 
module.exports.createUser=async function(req,res){
    const {userName,email,password,confirmPassword}=req.body;
    const user=await User.findOne({email:email});
    if(user){
        console.log("user is already present");
        return res.redirect("/users/login");
    }else{
        if(password !== confirmPassword){
            console.log("password mismatch");
            return res.redirect("/users/signup");
          
        }else{
            const new_user= await User.create({
                name:userName,
                email,
                password,
            });
            await new_user.save();
            console.log("user_created",new_user);
            if(!new_user){
                console.log("error in creating new user");
                return res.redirect("/users/signup");
              
            }
            return res.redirect("/users/login");
        }
    }
    
}

//logging out the user 
module.exports.signout=function(req,res){
    req.logout();
    console.log("You are logged out successfully");
    res.redirect("/users/login");
  
}