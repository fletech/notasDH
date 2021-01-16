const path = require('path');
const db = require('../database/models');
const notitas = require('../database/models/notitas');


module.exports = {
     
     detalle: function(req,res) {
          db.notitas.findByPk(req.params.id)
          .then(function(nota) {
               res.render('detail', {
                   nota
               })
           })
     },
     delete: function(req,res){
          console.log(req.body.id);

          db.notitas.update({
               status : 0
          }, {
               where: {
                    id: req.body.id
               }
          })
          .then((notaEditada)=>{
               res.redirect('/')
          })
          
     },
     fijar : function(req,res){
          if(req.body.pin == 1){
               db.notitas.update({
                    pin: 0,
               }, {
                    where: {
                         id: req.body.id
                    }
               })
               .then((notaEditada)=>{
                    return res.redirect('/')
               })
          } else {
               db.notitas.update({
                    pin: 1,
               }, {
                    where: {
                         id: req.body.id
                    }
               })
               .then((notaEditada)=>{
                    return res.redirect('/')
               })
          }
          
     },
     home : function(req,res) {
          //db.sequelize.query("SELECT * FROM notas")
          db.notitas.findAll({
               where: {
                 status: 1
               }
             })
          .then((resultado)=>{
          return res.render('index',{resultado:resultado})
          })
     },
     nuevaNota: function(req,res) {
          db.notitas.create({
               titulo: req.body.title,
               nota: req.body.nota,
               status: 1,
               pin: 0
               }
          )
          .then((nuevaNota)=>{
               return res.redirect('/');
          })
     },
     update: function(req,res){
          db.notitas.update({
               titulo: req.body.titulo,
               nota: req.body.nota
          }, {
               where: {
                    id: req.params.id
               }
          })
          .then((notaEditada)=>{
               return res.redirect('/')
          })
     }
}