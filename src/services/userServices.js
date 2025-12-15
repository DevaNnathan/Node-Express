const userModel = require("../models/userModel")
const mailmodel = require("../models/mailmodel")
const mongoose = require("mongoose")
const crypto = require("crypto")
const jwt = require("jsonwebtoken")

const sendMail = require("../utils/mail")

 const createUserdata = async(body)=> {
   const userData = await userModel.create(body)
   return userData
 }                                              

  const getAlluser = async()=>{
    const users = await userModel.find({})
    return users
  }

  const getUserInFile = async (userId)=>{

    const checkUser = await userModel.findById(new mongoose.Types.ObjectId(userId))
    return checkUser
  }

  const deleteUserInFile = async (userId)=>{

    const deleteUser = await userModel.findByIdAndDelete(new mongoose.Types.ObjectId(userId))
    return deleteUser
}

  const deleteNewUser = async (userId)=>{
     const deleteNew = await userModel.findById(new mongoose.Types.ObjectId(userId))

     if(!deleteNew){
      console.log("User not found");
     }

     const deleteTwo = await userModel.findByIdAndDelete(new mongoose.Types.ObjectId(userId))
     return deleteTwo
  }

  const updateUserOne = async (userId, updatebody) =>{
     const updateNew = await userModel.findById(new mongoose.Types.ObjectId(userId))

     if(!updateNew) {
      console.log("User not found");
     }

     const updateOne = await userModel.findByIdAndUpdate(new mongoose.Types.ObjectId(userId),updatebody,{new:true})
     return updateOne
  }

   const loginUser = async (email, password) =>{
     const userSearch = await userModel.findOne({email: email, password: password});

     if (!userSearch) {
    return { message: "User not found" };
  }

  return userSearch;
   }


// Password-Generating function
const userForgotpassword = async (body) => { 
    console.log(body);

    const checkUser = await userModel.findOne({ email: body.email });
    console.log(checkUser);``

    if (!checkUser) {
        return { message: "user not found" };
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000);

    // Send OTP to user
    await sendMail(body.email, otp);

    // Create or Update existing OTP
    await mailmodel.findOneAndUpdate(
        { email: body.email },            // find
        { OTP: otp, date: new Date() },   // update data
        { upsert: true, new: true }       // if not exist → create
    );

    return {
        message: "OTP generated & stored successfully",
        success: true
    };
};


const login = async (body)=>{
     const checktheUser = await userModel.findOne({"email":body.email})
     if(!checktheUser){
         throw new Error("User not found");
     }


const JWT_CODE = crypto.randomBytes(64).toString("hex");

const token = jwt.sign(
  { payload: checktheUser },
  process.env.JWT_SECRET,
  { expiresIn: "1d" }
);
       

return{
  status: true,
  message: "user login successfully",
  token: token
}

}
const verifyOtpData = async (body) => {
    console.log(body.email);
    
    const { email, otp } = body;

    // Step 1: Check OTP record exists
    const otpRecord = await CredentialModel.findOne({"email": body.email });
    console.log(otpRecord);
    

    if (!otpRecord) {
        return { success: false, message: "OTP not found. Please request a new one." };
    }

    // Step 2: Check expiration
    if (new Date() > otpRecord.expiresAt) {
        return { success: false, message: "OTP expired. Please request a new one." };
    }

    // Step 3: Match OTP
    if (otpRecord.OTP != otp) {
        return { success: false, message: "Invalid OTP. Please try again." };
    }

    // Optional: Delete OTP after successful validation
    // await CredentialModel.deleteOne({ email });

    return {
        success: true,
        message: "OTP verified successfully"
    };
};


module.exports = {
    createUserdata,
    getAlluser,
    getUserInFile,
    deleteUserInFile,
    deleteNewUser,
    updateUserOne,
    loginUser,
    userForgotpassword,
    login,
    verifyOtpData
 } 