import { Species } from "../../../models/index.js"

class SpeciesSeeder {
  static async seed() {
    const speciesData = [
      {
        name: "cat"
      },
      {
        name: "dog"
      },
      {
        name: "lizard"
      },
      {
        name: "bird"
      }
    ]

    for (const singleSpeciesData of speciesData) {
      const currentSpecies = await Species.query().findOne({ name: singleSpeciesData.name })
      if (!currentSpecies) {
        await Species.query().insert(singleSpeciesData)
      }
    }
  }
}
export default SpeciesSeeder