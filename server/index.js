import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import * as dotenv from 'dotenv'
dotenv.config()

import getFakeData from './routes/getFakeData/getFakeData.js'

const server = express()
const PORT = process.env.PORT || 3000

server.use(cors())
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(express.json())

server.use(getFakeData)

server.listen(PORT, () => {
    console.log(`server started at ${PORT} port`)
})