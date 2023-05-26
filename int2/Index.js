const express=require('express');
const { model } = require('mongoose');
const studentModel=require('./Model/Studentdb')
const cors =require('cors')

const app = new express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

app.get('/view',(req,res)=>{
    res.json({"name":"liya","age":12})
})

app.post('/create',(req,res)=>{
    var result= new studentModel(req.body);
    result.save();
    res.send("data added")
})


app.get('/see',async(req,res)=>{
 var data  = await studentModel.find();
 res.json(data);
})



app.delete('/delete/:id',async(req,res)=>{
    let id = req.params.id;
    await studentModel.findByIdAndDelete(id);
    res.send("Deleted")
})
app.put('/update/:id',async(req,res)=>{
    var id = req.params.id;
    await studentModel.findByIdAndUpdate(id,req.body);
    res.send("updated")
})



app.listen(8080,(req,res)=>{
    console.log("app is running in port 8080")
})