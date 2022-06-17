import express from "express" 
import speciesPetRouter from "./speciesPetRouter.js"
import { Species } from "../../../models/index.js"
import SpeciesSerializer from "../../../serializers/SpeciesSerializer.js"

const speciesRouter = new express.Router()

speciesRouter.use("/:speciesId/pets", speciesPetRouter)

speciesRouter.get("/", async (req, res) => {
  try {
    const species = await Species.query()
    return res.status(200).json({ species: species })
  } catch (err) {
    return res.status(500).json({ errors: err })
  }
})

speciesRouter.get("/:id", async (req, res) => {
  try {
    const species = await Species.query().findById(req.params.id)
    const serializedSpecies = await SpeciesSerializer.getDetails(species)
    return res.status(200).json({ species: serializedSpecies })
  } catch (err) {
    return res.status(500).json({ errors: err})
  }
})

export default speciesRouter