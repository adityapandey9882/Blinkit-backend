import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from "cookie-parser"
import morgan from "morgan"
import helmet from 'helmet'
import connectDB from "./config/connectDB.js"
import userRouter from './route/user.route.js'
import categoryRouter from './route/category.route.js'
import upload from './route/upload.router.js'
import subCategoryRouter from './route/subCategory.route.js'
import productRouter from './route/product.route.js'

const app = express()
const allowedOrigin = process.env.FRONTEND_URL

app.use(cors({
    origin: allowedOrigin, // Set the allowed origin (no wildcards here)
    credentials: true, // Allow credentials like cookies or HTTP authentication
  }));

app.use(express.json())
app.use(cookieParser())
app.use(morgan())
app.use(helmet({
    crossOriginResourcePolicy: false
}))

const PORT = 8081 || process.env.PORT

app.get('/',(request, response)=>{
    //server to client
    response.json({
        message: "Server is runnning " + PORT
    })
})

app.use('/api/user',userRouter)
app.use('/api/category',categoryRouter)
app.use('/api/file',upload)
app.use('/api/subcategory',subCategoryRouter)
app.use('/api/product',productRouter)


connectDB()



app.listen(PORT, ()=>{
    console.log("Server is running", PORT)
})