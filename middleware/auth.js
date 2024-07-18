import jwt from 'jsonwebtoken'
import BadRequestError from '../errors/BadRequestError.js';
import UnAuthorizedError from '../errors/UnAuthorizedError.js';
//import CustomAPIError from '../errors/CustomAPIError.js';

const auth =(req,res,next)=>
{
   // console.log(re.headers.authorization);//authorization ki  hai ya nahi ---bearer work
   const authHeader=req.headers.authorization;
   if(!authHeader||!authHeader.startsWith("Bearer "))
   {
    throw new BadRequestError("No token provided");
   }
    const token = authHeader.split(" ")[1];
    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        const {id , username}=decoded;
        req.user={id,username};
        next();        
    } 
    catch (error) 
    {
        throw new UnAuthorizedError("NOT AUTHORIZED to access this route");
        
    }
   };
export default auth;