const userServices = require("../services/userServices")

const createUser = async(req,res)=>{
   const data = await userServices.createUserdata(req.body);
   res.send(data)
 }
 
 const getAllUsersData = async (req, res)=>{
    const data = await userServices.getAlluser()
    res.send (data)
 }

 const getUserByID = async (req,res)=>{
       const data = await userServices.getUserInFile(req.params);
       res.send(data)
 }

 const deleteUserByID = async (req, res) => {
  const data = await userServices.deleteUserInFile(req.params);
  res.send(data);
 }

 const deleteUser = async (req, res) => {
   const data = await userServices.deleteNewUser(req.params.id);
   res.send(data)
 }

 const updateUser = async (req, res) => {
   const data = await userServices.updateUserOne(req.params.id, req.body);
   res.send(data)
  }

 const userLogin = async (req, res)=>{
  const{ email, password} = req.body;
  const data =  await userServices.loginUser(email, password);

  res.send(data);

 }

 const forgototp = async (req, res)=>{
    const data = await userServices.userForgotpassword(req.body)
    res.send(data)   
 }

 const login = async(req,res)=>{

    try{
            const data = await userServices.login(req.body)
    // res.send(data)
     res.status(200).send(data)

    }catch(e){
        res.status(401).send({ message: "incorrect email or password", status: false})
    }
 } 

 const verifytheOtp = async (req, res) => {
    try {
        const data = await UserService.verifyOtpData(req.body);
        res.send(data);

    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal server error" });
    }
 }



 module.exports = {
 createUser,
 getAllUsersData,
 getUserByID,
 deleteUserByID,
 deleteUser,
 updateUser,
 userLogin,
 forgototp,
 login,
verifytheOtp
 }