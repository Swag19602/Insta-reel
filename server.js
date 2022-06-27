import express, { response } from 'express';
import mongoose from 'mongoose';
import myVideos from './dbModel.js';
import data from './data.js';
const app=express();
const port=process.env.port || 9000;
//middle wares
app.use(express.json());
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*'),
    res.setHeader('Access-Control-Allow-Headers','*'),
    next()
})
//db config
const connection_url='mongodb+srv://Swag19602:Swagbidisha1986@cluster0.ulrjfde.mongodb.net/tiktok?retryWrites=true&w=majority'
mongoose.connect(connection_url,{
    useNewUrlParser: true,
//   useCreateIndex:false,
  useUnifiedTopology: true,
})

//api endpoints
app.get('/',(req,res)=>{
    res.status(200).send('Hello world')
})
app.get('/v1/posts',(req,res)=>{
    res.status(200).send(data);
})
app.post('/v2/posts',(req,res)=>{
    const dbVideos=req.body;
    myVideos.create(dbVideos,(err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    })
  
})
app.get('/v2/posts',(req,res)=>{
    myVideos.find({},(err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    })
})
//api listen points
app.listen(port, (req,res)=>{
    console.log(`server is running at localhost: ${port}`);
})
