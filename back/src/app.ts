import express, { Application } from "express"
import adsRouters from "./routers/ads.routes"
import { handleError } from "./errors"
import userRouter from "./routers/users.routes"
import loginRouter from "./routers/login.routes"
import cors from 'cors'
import addressRouter from "./routers/address.routes"
import { commentsRoutes } from "./routers/comments.routes"


const app: Application = express()

app.use(cors())
app.use(express.json())
app.use("/login/", loginRouter)
app.use("/users/", userRouter)
app.use("/ads/", adsRouters)
app.use("/address/", addressRouter)
app.use("/comments/", commentsRoutes)
app.use(handleError)

export default app