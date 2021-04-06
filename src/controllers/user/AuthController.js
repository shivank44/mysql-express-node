const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../../models/User");
const requestParams = require("./UserSchema");

const signup = async (req,res) => {
  try{
    let data = req.body;
    await requestParams.userRegister.validate(data);

    const userExist = await User.query().findOne({"email":data.email});
    if (userExist){
        return res.status(400).json({
          error: "User already registered",
        });
    }

  const user = await User.query().upsertGraph(data).returning('*');

  let token = await user.getJWT();

  return res.status(201).json({
    result : user,
    token : token,
    message : "User registered successfully"
  })


  }catch(err){
    let errMessage = err.message ? err.message : err[0].message;
    res.status(500).json ({ error : errMessage });
  }

}

const login = async (req,res) => {
  try{
    await requestParams.userLogin.validate(req.body);

    let {email,password} = req.body
    const user = await User.query().findOne({"email":email});
    if (!user){
        return res.status(400).json({
          message: "Invalid Email or Password!!",
        });
    }else{
      const isPassword = await user.comparePassword(password);
      if(!isPassword){
        return res.status(400).json({ message: "Invalid Email or Password!!" });
      }

      let token = await user.getJWT();

      return res.status(201).json({
        result : user,
        token : token,
        message : "User login successfully"
      });

    }

  }catch(err){
    let errMessage = err.message ? err.message : err[0].message;
    res.status(500).json ({ error : errMessage });
  }
}

module.exports = {
  signup,
  login
};
