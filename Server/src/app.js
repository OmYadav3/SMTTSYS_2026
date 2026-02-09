import express from "express"
import cors from "cors"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))


//routes import
import authRouter from './routes/auth.route.js'

//routes declaration
app.use("/api/v1/users", authRouter)

// http://localhost:8000/api/v1/users/register

export { app }