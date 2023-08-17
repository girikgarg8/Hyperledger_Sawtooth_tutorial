const express= require('express');

const app=express();

const user=require('./routes/user');

const port = process.env.PORT || 8000;
//Setup

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Register routes

app.get('/health',(req,res)=>{
    res.json({
        message: 'Running'
    })
})

app.use('/auth',user);

//Server run

const start = async () => {
    try{
        const mongoose=require('mongoose');
        await mongoose.connect('mongodb://localhost:27017/vin-sell');
        app.listen(port,'0.0.0.0',()=>{
            console.log(`Server running over here http://localhost:${port}/health`);
        })
    }
    catch(error){
        console.error('Failed to get the server running ',error);
    }
}

start();