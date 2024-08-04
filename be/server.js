const express =require('express');
const app = express();
const mongoose = require('mongoose')
const userRouter = require('./routers/userRouter')

const PORT=3002;


mongoose.connect('mongodb+srv://manishaisha2002:W26SwkjBRlKIohlz@cluster0.x40spfb.mongodb.net/',{useURlParser:true,useUnifiedTopology:true}).
then(()=>console.log("connected to database"))

app.use('/user',userRouter)

app.listen(PORT,()=>{
    console.log('server created',PORT)
})