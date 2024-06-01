const express=require("express")
const User = require("../models/User")
const router =express.Router()
const passport =require('passport')
const cors = require('cors')



router.get("/api/signup",(req,res)=>{
    res.render("auth/signup")
})

router.post("/api/signup",async(req,res)=>{
    const {username,email,password}=req.body
    console.log(req.body)
    // let newUser = new User({username,email,password})
    // let user= await User.register(newUser,password)
    // res.redirect('/login')
})

router.get("/login",(req,res)=>{
    req.flash("success","You have to login")
    res.render("auth/login")
})

router.get("/login",(req,res)=>{
    req.flash("success","You have to login")
    res.render("auth/login")
})

router.post('/login',
passport.authenticate('local', { failureRedirect: '/login', failureMessage: true }),
function(req, res) {
  req.flash("success",`Welcome back ${req.user.username}`)
  res.redirect('/furnitures');
});

router.get("/logout",(req,res)=>{
    req.logout(()=>{
        res.redirect("/login");
    })
  })

module.exports = router