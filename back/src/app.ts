import express, { Application } from "express"
import adsRouters from "./routers/ads.routes"
import { handleError } from "./errors"
import cors from 'cors'

const app: Application = express()

app.use(cors())
app.use(express.json())

app.use("/ads/", adsRouters)
app.use(handleError)

export default app