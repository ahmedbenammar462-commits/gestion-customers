const express = require('express')
const router=express.Router()
const Mydata=require("../models/customers")
const moment = require('moment')





router.get('/add.html',(req,res)=>{
    res.render("user/add")
  })
router.post('/add.html', (req, res) => {
    const model=new Mydata(req.body)
    model.save()
    .then(()=>{
      res.redirect("/")
  
    })
  
    .catch((errur)=>{
      console.log("errur")
    })
  
    
  })


  module.exports = router ;