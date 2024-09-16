import express from 'express'
import dotenv from 'dotenv'
import connectToMongodb from "./db/connection.js";
import cookieParser from "cookie-parser";
import userRoute from './routes/userRoute.js'
import staticRoute from './routes/staticRoute.js'
import path from 'path'
dotenv.config()
const app = express()

const PORT = process.env.PORT;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"))

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
app.use(express.static("views"))


app.use('/', staticRoute)
app.use("/user", userRoute)

app.listen(PORT, ()=>{
    connectToMongodb(),
    console.log(`Server started at ${PORT}`);
})
    


