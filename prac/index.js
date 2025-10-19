const express=require('express');
const app=express();
const jwt=require('jsonwebtoken');
const JWT_SECRET="edcececf";
const {usermodel, todomodel}=require("./db");

app.use(express.json());
const users=[];
fucntion gentoken(){

}
app.post("/signup", function(req, res){
    const username=req.body.username;
    const password=req.body.password;
    users.push({
        username: username,
        password: password
    })
    res.json({
        message:"signed up"
    })
})
app.post("/signin", function(req, res){
    const username=req.body.username;
    const password=req.body.password;
    const founduser=users.find(function(u){
        if(u.username==username && u.password=password){
            return true
        }
        else{
            return false
        }
    })
    if(founduser){
        const token=jwt.sign({
            username:username
        }, JWT_SECRET);
        founduser.token=token;
        res.json({
            message:token
        })
    }

})
app.get("/me", function(req, res){
    const token=req.headers.token;
    const decodedinfo=jwt.verify(token, JWT_SECRET);
    for(int i=0;i<users.length;i++){
        if(users[i].token==token){
            founduser=
        }
    }
})
app.listen(3000);