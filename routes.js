const express= require('express');
const app=express();
data=['code','eat','sleep']

module.exports=(app)=>{
    
    app.get('/',(req,res)=>{
        res.render('home',{wish: data})
    })
    app.get("/profile/:id",(req,res)=>{
        res.send("you requested for : " +req.params.id)
    })
    
    app.get('/about',(req,res)=>{
    res.render('about');
    })

    app.post('/sent',(req,res)=>{
        console.log(req.params.item)
        data.push(req.params.item)
        res.send(data)
        console.log(data)
    })

    app.delete('/remove/:id',(req,res)=>{
        data=data.map(item=>{
            if(item!=req.params.id){
                return item
            }
        })
        console.log("ara hain",req.params.id)
        res.send(data)
    })

}