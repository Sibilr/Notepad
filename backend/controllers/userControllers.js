import User from "../models/userModel.js";

const registerUser = async(req,res) => {
    const{ name , email , password , pic } = req.body;

    const userExists= await User.findOne( {email} )

    if(userExists){
        res.status(400);
        throw new Error("User already exists")
    }

    const user = await User.create({
        name,
        email,
        password,
        pic
    });

    if(user){
        res.status(201)
           .json({
            _id : user._id,
            name:user.name,
            password:user.password,
            email:user.email,
            isAdmin:user.isAdmin,
            pic:user.pic
           })
    }else{
        res.status(400);
        throw new Error("Error Occured");
    }

} 

export default registerUser;