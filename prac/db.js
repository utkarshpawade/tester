const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const ObjectId=mongoose.ObjectId;
const user=new Schema({
    email:String,
    password: String,
    name: String
})
const todo=new Schema({
    title:String,
    done: Boolean,
    userId: ObjectId
})
const usermodel=mongoose.model('users', user);
const todomodel=mongoose.model('todos', todo);
module.exports={
    usermodel:usermodel
}