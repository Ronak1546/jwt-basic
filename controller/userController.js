import BadRequestError from "../errors/BadRequestError.js";
//import CustomAPIError from "../errors/CustomAPIError.js";
import jwt from 'jsonwebtoken'
export const login=(req,res)=>
{
    console.log(req.body);
const {username,password}=req.body;
if(!username||!password)
{
    //return res.status(400).json({msg:"please provide me the email and password"});
    throw new BadRequestError("please provide email and password");
}
    //  res.send("fake login/register/signup")

const id=new Date().getDate();
console.log("id",id);
const token=jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:"1d",});
console.log(token);
res.status(200).json({msg:'user created',token})
// res.send("fakelogin")
}
export const dashboard=(req,res)=>
{
   
    const luckyNumber=Math.floor(Math.random()*100)
    res.status(200).json({msg:`Hello ${req.user.username}`,secret:`Here is your authorized data,Your lucky nummber is ${luckyNumber}`,})
}
