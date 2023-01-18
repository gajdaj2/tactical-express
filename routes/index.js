const express = require('express');
const about = require('./about');
const competitions = require('./competitions');
const contact = require('./contact');
const piro = require('./piro');
const services = require('./services');
const ma = require('./ma');



const router = express.Router()

module.exports = () =>{
    router.get('/',(request,response)=>{
        response.render('pages/index',{pageTitle:'Home' })
    });


    router.use('/about',about());
    router.use('/competitions',competitions());
    router.use('/contact',contact());
    router.use('/piro',piro());
    router.use('/services',services());
    router.use('/ma',ma());
    return router;

};


// app.get('/',(request,response)=>{
//     response.sendFile(path.join(__dirname,'./tactical/index.html'));
// });



