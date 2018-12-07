const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoute = require('./routes/productRoute');
const UsersRoute = require('./routes/UsersRoute');


mongoose.connect('mongodb://127.0.0.1/The_Light_Collection', ()=>{
    console.log('connected to mongodb');
})

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/products', productRoute);
app.use('/users', UsersRoute);


// cloudinary 			= require('cloudinary'),
// cloudinaryConfig    	= require('./configs'); /shjbvjhdvjhs?
app.use(cors());
app.options('*', cors());


app.listen(port, ()=>{
    console.log(`Express server running on port ${port}`)
})
