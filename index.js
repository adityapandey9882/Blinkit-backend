import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from "cookie-parser"
import morgan from "morgan"
import helmet from 'helmet'
import connectDB from "./config/connectDB.js"
import userRouter from './route/user.route.js'

const app = express()
// app.use(cors({
//     credentials: true,
//     origin : process.env.FRONTEND_URL
// }))
// app.use(cors({
//     origin : process.env.FRONTEND_URL,
//     method : ['GET', 'POST', 'PUT', 'DELETE'],
//     credentials : true
// }))
const alllowedOrigin = 'https://blinkit-ecommerce-application.netlify.app'

const corsOptions = {
    origin: alllowedOrigin,    // Allow the specific frontend origin
    methods: 'GET, POST, PUT, DELETE', // Allowed HTTP methods
    credentials: true, // Allow credentials (cookies, authorization headers)
    allowedHeaders: 'Content-Type, Authorization', // Allowed headers
  };

  app.use(cors(corsOptions)); // Use the CORS middleware with the custom options

app.use(express.json())
app.use(cookieParser())
app.use(morgan())
app.use(helmet({
    crossOriginResourcePolicy: false
}))

const PORT = 8080 || process.env.PORT

app.get('/',(request, response)=>{
    //server to client
    response.json({
        message: "Server is runnning " + PORT
    })
})

app.use('/api/user',userRouter)

connectDB()

app.listen(PORT, ()=>{
    console.log("Server is running", PORT)
})