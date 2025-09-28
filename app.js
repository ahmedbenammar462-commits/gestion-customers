const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

const mongoose = require('mongoose');
app.use(express.urlencoded({ extended: true }));

const Mydata=require("./models/customers")
const AllRouter =require("./routes/AllRouter")
const routerAdd =require("./routes/routerAdd")
var methodOverride = require('method-override')
app.use(methodOverride('_method'))


app.set('view engine', 'ejs')

app.use(express.static('public'))

require('dotenv').config();

const moment = require('moment')

//Auto refreche
 
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
 
 
const connectLivereload = require("connect-livereload");
app.use(connectLivereload());
 
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

//fin auto refrech

//Affichage des pages

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
   })
   .catch((err) => {
     console.log(err);
   });
app.use("/user",routerAdd)
app.use(AllRouter)




