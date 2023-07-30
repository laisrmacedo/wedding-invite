import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { formRouter } from './router/formRouter'

dotenv.config()

export const app = express()

app.use(cors())
app.use(express.json())

app.listen(Number(process.env.EXPRESS_PORT), () => {
    console.log(`Server running on port ${Number(process.env.EXPRESS_PORT)}`)
})

app.use("/forms", formRouter)