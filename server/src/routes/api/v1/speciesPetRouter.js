import express from "express"
import objection from "objection"
import { Pet } from "../../../models/index.js"
import cleanUserInput from "../../../services/cleanUserInput.js"
const { ValidationError } = objection

const speciesPetRouter = new express.Router({ mergeParams: true  })

speciesPetRouter.post("/", async (req, res) => {
  const { body } = req
  const formInput = cleanUserInput(body)
  const { name, available, weight, estimatedAge } = formInput
  const { speciesId } = req.params

  try {
    const newPet = await Pet.query().insertAndFetch({ name, available, weight, estimatedAge, speciesId })
    return res.status(201).json({ pet: newPet })
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data })
    }
    return res.status(500).json({ errors: error })
  }
})

export default speciesPetRouter