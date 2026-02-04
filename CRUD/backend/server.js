const express= require("express");
const cors= require("cors");
const bodyParser= require("body-parser");
const UserRouter= require("./routes/Router.js");
const mongoose= require("mongoose");


const app= express();
const PORT=5000;

app.use(bodyParser.json());
app.use(cors());

app.use("/api", UserRouter);

mongoose.connect("mongodb://0.0.0.0:27017/my_db")
.then(()=>{
    console.log("Connected to MongoDB");
}).catch((error)=>{
    console.error("Error connecting to MongoDB", error);
});

app.listen(PORT, ()=> console.log('Server is running'));
