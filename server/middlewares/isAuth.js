
import jwt from 'jsonwebtoken'
const isAuth=async(req,res,next)=>{
  try{
    let{token}=req.cookies;
    if(!token){
      return res.status(400).json({message:"user does not have a token"})
    }
    const verfiyToken=jwt.verify(token,process.env.JWT_SECRET)
    if(!verfiyToken){
      return res.status(400).json({message:"user does not have a valid token"})
 
    }
      req.userId=verfiyToken.userId;
      next()
  }
  catch(error){
  return res.status(500).json({message:`isAuth error ${error}`})
  }

}
export default isAuth;