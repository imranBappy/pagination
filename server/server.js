const express = require('express');
const mongoose = require('mongoose');
const todoRoute = require('./routes/todoRoute')
const userRoute = require('./routes/userRoute')

const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors())
app.use('/', todoRoute)
app.use('/user', userRoute)




mongoose.connect('mongodb://localhost:27017/pagination',
{ useUnifiedTopology: true, useNewUrlParser: true },
(err)=>{
    if (!err) {
        app.listen(4000,()=>{
            console.log('Everything is okay');
        })   
    }
})