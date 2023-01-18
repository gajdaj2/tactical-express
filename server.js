const express = require('express');
const path = require('path');
const app = express();

const routes = require('./routes');

const PORT = 3000;

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./views'));

app.use(express.static(path.join(__dirname,'./tactical')))

app.use('/',routes());

app.listen(PORT,()=>{
    console.log('Express server listening on port '+PORT);
});


