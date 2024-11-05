const express = require('express')
const app =express()
const port= 2000
app.use(express.json())
let items = [
    { id: 1, name: "Book 1", description: "This is the first book." },
    { id: 2, name: "Book 2", description: "This is the second book." }
  ];
app.listen(port,()=>{
    console.log("server is running")
})

app.get('/items', (req, res) => {
    res.json(items);
  });
  
  app.get('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = items.find(i => i.id === id);
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  });
  
  app.post('/items', (req, res) => {
    const newItem = req.body;
    newItem.id = items.length + 1; 
    items.push(newItem);
    res.status(201).json(newItem);
  });
