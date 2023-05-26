const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://snehasiby2020:snehasiby@cluster0.o6y3vcf.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log("db connectd");
})
.catch(err=>console.log(err));
let Schema = mongoose.Schema;

const studentSchema = new Schema({
    sname:String,
    sgrade:Number
})
var studentModel = mongoose.model("students",studentSchema);
module.exports= studentModel