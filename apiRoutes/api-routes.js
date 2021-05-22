
const express= require('express')
const app=express();
const path =require('path')
const fs = require('fs')

module.exports=(app)=>{
    fs.readFile("db/db.json", "utf8", (err, data) => {
      if (err) throw err;
  
      var notes = JSON.parse(data);
  
      
  
     
      app.get("/api/notes", function (req, res) {
       
        res.json(notes);
      });
