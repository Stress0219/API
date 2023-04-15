import  User  from "../models/UserModel.js";

export const getAllUsers = async (req, res)=>{
    try {
      const users = await User.findAll()
      res.json(users)
    } catch (error) {
      res.json( { message: error.message } )
    }
}

export const getUserById = async (req, res)=>{
try {
  const user = await User.findAll({
    where:{ id:req.params.id }
  })
  res.json(user)
} catch (error) {
  res.json( { message: error.message } )
}
}