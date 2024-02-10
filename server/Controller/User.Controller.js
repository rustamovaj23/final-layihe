const User = require("../Models/User.Model")

const userController = {
    getAll: async (req, res) =>{
        try{
            const users = await User.find()
            res.send(users)
        }catch(error){
            res.status(404).send("item not found")
        }
    },
    getById: async (req, res) =>{
        try{
            const {id}=req.params
            const target = await User.findById(id)
            res.send(target)
        }catch(error){
            res.status(404).send("item not found")
        }
    },
    post: async (req, res) =>{
        try{
            const {image, name, price, categories}=req.body
            const newUser = new User ({name,image, price, categories})
            await newUser.save()
            res.send(newUser)
        }catch(error){
            res.status(404).send("item not created")
        }
    },
    delete: async (req, res) =>{
        try{
            const {id} =req.params
            await User.findByIdAndDelete(id)
            res.send("item deleted")
        }catch(error){
            res.status(404).send("item deleted")
        }
    }
}

module.exports = userController