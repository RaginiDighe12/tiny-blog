 import dns from "node:dns";

dns.setServers(["1.1.1.1", "8.8.8.8"]);


import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
let requestCount=0;


app.get("/", (req,res) =>{
  res.json({
    success:"true",
    message:"server is running properly"
  });
});

app.get("/apicount" ,(req,res)=>{
    res.json({
        requestCount
    });
});

app.use((req,res,next)=>{
    requestCount++;
    next();
});



const checkedApi=(req,res,next)=>{
    const {api_key}= req.headers;
    if(api_key== "admin"){
        console.log("valid api");
        next();
    }
    else{
        console.log("Invalid Api");
    }

};

app.get("/api/test" , checkedApi,(req, res,next)=>{
    console.log("Middleware 2");
    next();
},
(req,res)=>{
    console.log("Actual controller");
    res.json({
        message:"Actual controller not a middleware",
    });
});


const PORT = process.env.PORT || 8080;

const connectDB= async () => {
    try{

        const conn = await mongoose.connect(process.env.MONGODB_URL);
        if(conn){
            console.log("MongoDB connected successfully");
        }

    }catch(error){
        console.log("MongoDB is not connected succesfully:",error);

    }
};

app.listen(PORT , ()=>{
    console.log(`Server is running on ${PORT}`);
    connectDB();

});