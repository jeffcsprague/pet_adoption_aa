import express from "express"
import { Pet } from "../../../models/index.js"
import PetSerializer from "../../../serializers/PetSerializer.js"

const petsRouter = new express.Router()

petsRouter.get("/", async (req, res) => {
  try {
    const pets = await Pet.query()
    return res.status(200).json({ pets: pets })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

petsRouter.get("/:id", async (req, res) => {
  try {
    const pet = await Pet.query().findById(req.params.id)
    const serializedPet = await PetSerializer.getDetails(pet)
    return res.status(200).json({ pet: serializedPet })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

export default petsRouter