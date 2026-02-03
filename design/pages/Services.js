// import React from "react";
// import { useState } from "react";

// function Services(){

//     const [value, setValue]= useState(0);
//     const handleIncrement=()=>{
//         setValue(value+1);
//     }
//     const handleDecrement=()=>{
//         setValue(value-1);
//     }
//     console.log("Value", value);
    


//     return(
//     <div className="services">
//       <button onClick={handleIncrement}>Increment</button>
//       <button onClick={handleDecrement}>Decrement</button>
//       <p>Current Value: {value}</p>
//     </div>
//     )
// }
// export default Services;



const http = require('http');
const fs = require('fs');
const url = require('url');
const PORT = 5000;

const server=http.createServer((req,res)=>{

    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const method=req.method;
    if(path=== '/' && method === 'GET')
    {
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end('<h1> Home page</h1>');
    }else if(path==='/users' && method==='GET')
      {
        const id=parsedUrl.query.id;
        res.writeHead(200, {'Content-Type':'application/json'});
        if(id)
        {
            res.end(JSON.stringify({id: id, name: `User ${id}`}));

        }else{
            res.end(JSON.stringify([
                {id: 1, name: 'Demo Name'}
            ]));
        }      
     }else if(path==='/data' && method === 'POST')
      {
        let body=''
        req.on('data', chunk => body += chunk);
        req.on('end', ()=>{
            let parsedBody;
            try{
                parsedBody=JSON.parsedBody(body)
            }catch{
                parsedBody = {raw : body};
            }
            res.writeHead(200, {'Content-Type':'application/json'});
            res.end(JSON.stringify({message: 'Data received', data: parsedBody}));
        })
      }else{
        res.writeHead(404, {'Content-Type':'text/plain'});
        res.end('404 not found');
      }        
})

server.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});


const express=require('express');
const app=express();

app.get('/', (req,res)=>res.send('Hello World'))
app.get('/about', (req,res)=>res.send('About Page'))
app.get('/contact', (req,res)=>res.send('Contact Page'))
app.listen(4000, ()=>console.log('Server running on port 4000'));

app.get("/users", (req,res)=>{
    res.json([
        {id:1, name:'User One'},
        {id:2, name:'User Two'}
    ])
});
app.listen(4000, ()=>console.log('Server running on port 4000'));
