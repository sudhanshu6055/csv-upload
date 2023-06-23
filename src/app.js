const express = require('express');
const mongoose = require('mongoose');
const PORT = 3000;
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const db = require('./conflig/mongoose');

app.use(expressLayouts);

//ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// index.html
app.get('/ram',(req,res)=>{
  res.sendFile(path.join(__dirname,'index.html'))
})



//routes
app.use('/', require('./routes/csvRoutes'));

//server listening
app.listen(PORT, (err) => {
    if(err) console.log("error listening on", PORT);

    console.log('listening on port', PORT);
})