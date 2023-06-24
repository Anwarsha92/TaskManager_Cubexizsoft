const express=require('express')

const server=express()

const cors=require('cors')

server.use(cors({origin:'http://localhost:3000'}))

server.use(express.json())

const logics=require('./services/logics')

server.listen(8000,()=>{
    console.log('server run in 8000 port');
})

server.post('/register',(req,res)=>{
    logics.RegisterUser(req.body.runame,req.body.remail,req.body.rpswd,).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

server.post('/login',(req,res)=>{
    logics.LoginUser(req.body.lemail,req.body.lpswd).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

server.get('/getUser/:id',(req,res)=>{
    logics.getUser(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
    })

})
server.post('/task',(req,res)=>{
    logics.addTask(req.body.id,req.body.task,req.body.params1).then(result=>{
        res.status(result.statusCode).json(result)
    })

})

server.get('/showtask/:id',(req,res)=>{
    logics.showTask(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
    })

})

server.post('/deleteTask/:id',(req,res)=>{
    logics.deleteTask(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
    })

})

