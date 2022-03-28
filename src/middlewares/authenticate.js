const authenticate=async(req,res,next)=>{
    if(!req.headers.authorization)
    return res.status(400).send({message:"Authorization token not found or incorrect"})

    if(!req.headers.authorization.startswish("bearer"))
    return res.status(400).send({message:"Authoriztion token not found or incorrect"})

    const token=req.headers.authorization.trim().split(" ")[1]
    let decoded;
    try {

        decoded=await verifyToken(token)
        
    } catch (error) {
        console.log(err)

        return res.status(400).send({message:"Authoriztion token not found or incoorect"})

        
    }
    console.log(decoded)
    req.UserID=decoded.user._id;
    return next();

}
module.exports=authenticate;