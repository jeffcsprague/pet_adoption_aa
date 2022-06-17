import express from "express"
//import petsRouter from "./api/v1/petsRouter.js"
import speciesRouter from "./api/v1/speciesRouter.js"
import clientRouter from "./clientRouter.js"

const rootRouter = new express.Router()

rootRouter.use("/", clientRouter)
rootRouter.use("/api/v1/species", speciesRouter )
//rootRouter.use("/api/v1/pets", petsRouter)

export default rootRouter
