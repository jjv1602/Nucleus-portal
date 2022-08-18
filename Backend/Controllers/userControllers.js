const registerUser=async(req,res)=>{

    // taking name,email and pwd from user
    const {name,email,password}=req.body;

    // Returning name and email to user
    res.json({
        name,
        email,
    });
};
module.exports={registerUser}