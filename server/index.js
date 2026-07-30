import express from"express"
import dotenv from "dotenv"
import connectDb from "./config/connectDb.js";
import cookieParser from "cookie-parser";
dotenv.config()
import cors from "cors"
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import interviewRouter from "./routes/interview.route.js";


const app=express();
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}))

app.use(cookieParser());
app.use(express.json());


app.use("/api/auth",authRouter);
app.use("/api/user",userRouter);
app.use("/api/interview",interviewRouter);


const Port=process.env.PORT||6000
app.listen(Port,()=>{
  console.log(`server running on port ${Port}`)
  connectDb()
})