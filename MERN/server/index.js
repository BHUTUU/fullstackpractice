const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
mongoose.connect('mongodb://localhost:27017/register');
const app=express();
app.use(cors());
app.use(express.json());
const userSchema=new mongoose.Schema({
    username:String,
    email:String,
    password:String
});
const User=mongoose.model('User',userSchema);
// app.get('/users',async(req,res)=>{
//     const users=await User.find();
//     res.json(users);
// });
app.post('/signup',async(req,res)=>{
    const {username,email,password}=req.body;
    console.log(username,email);
    const user=new User({
        username:username,
        email:email,
        password:password
    });
    await user.save();
    res.json(user);
});
app.listen(3000,()=>{
    console.log('Server started on port 3000');
});
