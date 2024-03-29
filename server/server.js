const express = require("express")
const app = express()
const cors = require("cors")
require('dotenv').config()
const mongoose = require("mongoose")
const userRouter = require("./Router/Users")
const authRouter = require("./Router/Auth")
const categoriesRouter = require("./Router/Categories")
const productsRouter = require("./Router/Products")
const customFunctions = require('./Helpers/customFunctions')
const responseHandler = require('./Helpers/responseHandler')

app.use(express.json())
app.use(cors())
app.use(customFunctions)
app.use("/users", userRouter)
app.use('/auth', authRouter)
app.use('/categories', categoriesRouter)
app.use('/products', productsRouter)
app.use(responseHandler)

mongoose.connect(process.env.MONGO_URL).then(res => {
    console.log("connected mongodb!")
})
app.listen(process.env.SERVER_PORT, () => {
    // console.log("app runnign on " + process.env.SERVER_PORT)
})