const ticketservice=require('../services/emailservice');

const create=async(req,res)=>{
    try {
        const response=await ticketservice.createNotification(req.body);
        return res.status(201).json({
            success:true,
            data:response,
            err:{},
            message:'succesfully registered an email' 
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            data:response,
            err:error,
            message:"not able to register an email"
        })
    }
}
module.exports={
    create
}