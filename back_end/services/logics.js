const db=require('./db')

RegisterUser=(runame,remail,rpswd)=>{

    return db.Tuser.findOne({email:remail,pswd:rpswd}).then(user=>{
        if (user){
            return{
                status:false,
                message:'User already exist',
                statusCode:404
            }
        }
        else{
            newTuser=new db.Tuser({
                uname:runame,
                email:remail,
                pswd:rpswd,
                task:[]
            })

            newTuser.save()

            return{
                status:true,
                message:'Successfully registered',
                statusCode:200
            }
        }
    })

}

LoginUser=(lemail,lpswd)=>{
    return db.Tuser.findOne({email:lemail,pswd:lpswd}).then(user=>{
        if(user){
            return{
                status:true,
                message:'Successfully Login',
                statusCode:200
            }
        }
        else{
            return{
                status:false,
                message:'Incorrect login details',
                statusCode:400
            }
        }
    })
}

getUser=(id)=>{
return db.Tuser.findOne({email:id}).then(user=>{
    if(user){
        return{
            status:true,
            message:user,
            statusCode:200
        }
    }
})
}

addTask=(id,task,params1)=>{
    return db.Tuser.findOne({email:params1}).then(user=>{
        if(user){
            date=new Date()
            shortDate = date.toLocaleDateString();
            user.task.push({Task:task, Date:shortDate,completed:'-',status:'Pending',id:id})
            

            user.save()
            return{
                status:true,
                message:"Task Added",
                statusCode:200
            }
        }
    })
}

showTask=(id)=>{
    return db.Tuser.findOne({email:id}).then(user=>{
        if(user){
            return{
                status:true,
                message:user.task,
                statusCode:200
            }
        }
    })
}

deleteTask=(id)=>{
    return db.Tuser.updateOne(
        {_id: id}, {$pull: {"task.id": {id: id}}}
      )

}

module.exports={
    RegisterUser,LoginUser,getUser,addTask,showTask,deleteTask
}