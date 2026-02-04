const User=require("../models/User.js")


const createUser= async(req, res)=>{
    try{
        const {name, email, password, country, gender}= req.body;
        if(!name || !email || !password || !country || !gender){
            return res.status(400).json({message:"All fields are required"});
        }
        const user= new User({
            name,
            email,
            password,
            country,
            gender
        })
        await user.save();
        res.status(201).json({message:"User created successfully", user});
    }catch(error){
        res.status(500).json({message:"Error creating user", error});
    }
}

const getUser=async(req,res)=>{
    try{
        const user=await User.find();
        res.json(user);
    }catch(error){
        res.status(500).json({message:"Error fetching users", error});
    }
}


module.exports={createUser, getUser};