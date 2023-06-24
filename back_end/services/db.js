const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/TaskManager')

const Tuser=mongoose.model('Tuser',
{
    uname:String,
    email:String,
    pswd:String,
    task:[]
})

module.exports={
    Tuser
}