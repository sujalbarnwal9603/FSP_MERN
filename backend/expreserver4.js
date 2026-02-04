const express= require('express');
const app= express();
const PORT=5000;
app.use(express.json());

app.get("/users/:userId/books/:bookId",(req,res)=>{
    res.send({
        params:req.params,
        query:req.query
    })
})

app.post("/users/:userId/books/:bookId",(req,res)=>{
    res.send({
        params:req.params,
        query:req.query,
        body:req.body
    })
})

app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));