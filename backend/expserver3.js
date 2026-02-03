const express= require('express');
const app= express();

app.use(express.json());
app.post('/employee/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Hello ${req.params.id}`);
});

app.listen(4000, ()=>console.log('Server running on port 4000'));