const express = require('express')
const router=express.Router()
const Mydata=require("../models/customers")
const moment = require('moment')



router.get('/',(req,res)=>{
    Mydata.find()
    .then((result)=>{
      res.render("index",{array:result,moment:moment})
    })
    .catch((err)=>{
       console.log(err)
    })
    })
  
  
  router.get("/view/:id",(req,res)=>{
    Mydata.findById(req.params.id)
    .then((resulte)=>{
      res.render("user/view",{obj:resulte,moment:moment})
    })
    .catch((err)=>{
      console.log(err)
    })
  })
  
  router.get("/edit/:id",(req,res)=>{
    Mydata.findById(req.params.id)
    .then((result)=>{
      res.render("user/edit",{dataVE:result})
    })
    .catch((err)=>{
      console.log(err)
    })
  })
  router.delete("/delete/:id",(req,res)=>{
    Mydata.findByIdAndDelete(req.params.id)
    .then(()=>{
      res.redirect("/")
    })
    .catch((err)=>{
      console.log(err)
    })
  
  })
  router.put("/edit/update/:id",(req,res)=>{
    Mydata.findByIdAndUpdate(req.params.id,req.body)
    .then(()=>{
      res.redirect("/")
    })
    .catch((err)=>{
      console.log(err)
    })
  })
  
  
  router.post("/search",(req,res)=>{
    Mydata.find({$or :[{firstName : req.body.search},{lastName : req.body.search}]})
    .then((result)=>{
      res.render("user/search",{dataS : result})
  
    })
    .catch((err)=>{
      console.log(err)
    })
  })





  /*app.get('/user/view.html',(req,res)=>{
    res.render("user/view")
  })*/
  
  
  
  //fin Affichage des pages
  
  //array d'object
  /*Mydata.find()
  .then((result)=>{
    app.get('/', (req, res) => {
      res.render("home",{array:result})
    })
  
  })
  .catch((err)=>{
    console.log(err)
  
  })*/
  
  /*app.get('/index.html', (req, res) => {
    res.send("<h1>Data Sending with succes</h1>")
  })*/
  
  //Connection to the BD
  
  //fin connection
  /*const model = new Mydata(req.body)
    model.save().then(()=>{
      res.redirect("/index.html")
  
  
    })*/
  //Post requst

  module.exports = router;