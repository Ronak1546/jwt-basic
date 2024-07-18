import notFoundError from "../errors/NotFoundError.js";

const notFound =(req,res)=>{
   // res.send("Route does not exist");
   throw new notFoundError("Route does not exist");
}
export default notFound;

