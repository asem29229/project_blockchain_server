import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import routerUser from "./server/routes/userRoute.js"


import dotenv from "dotenv"
import morgan from "morgan"


dotenv.config()

const m = morgan
const app = express()

mongoose.connect(process.env.DATABASEURL).then(() => console.log("DB connected")).catch((err) => console.log("DB Failed to Connect", err))
//haytham_t1
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(m("dev"))

app.use("/user", routerUser)

/**
 * Used to check if connection is receieved from server upon starting the application
 */
app.get("/hello", (req, res) => {
    res.send("hello world from the API from index.mjs")
})
app.get("/", (req, res) => {
    res.send("hello world from the API from index.mjs")
})
  
app.listen(process.env.PORT, () => console.log("server running on port 8080"))
