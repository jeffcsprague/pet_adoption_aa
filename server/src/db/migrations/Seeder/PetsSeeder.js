import { Pet } from "../../../models/index.js"

class PetsSeeder {
  static async seed() {
    const petsData = [
      {
        name: "Fifi",
        available: false,
        weight: 11,
        estimatedAge: 5,
        speciesId: 1
      },
      {
        name: "Cat the Dog",
        available: true,
        weight: 15,
        estimatedAge: 10,
        speciesId: 2
      },
      {
        name: "Sprinkles",
        available: false,
        weight: 1,
        estimatedAge: 25,
        speciesId: 3
      },
      {
        name: "Squawk",
        available: true,
        estimatedAge: 20,
        speciesId: 4
      }, 
      {
        name: "GangstaBoo",
        available: true,
        weight: 25,
        estimatedAge: 3,
        speciesId: 2
      }, 
      {
        name: "Kiki",
        available: true,
        weight: 16,
        estimatedAge: 6,
        speciesId: 1
      },
      {
        name: "Tiamat",
        available: true,
        weight: 2,
        estimatedAge: 22,
        speciesId: 3
      },
      {
        name: "Kenkuano Reeves",
        available: true,
        weight: 1,
        estimatedAge: 40,
        speciesId: 4
      },
      {
        name: "Ghostbird Trilla",
        available: true,
        weight: 1,
        estimatedAge: 29,
        speciesId: 4
      }
    ]

    for (const singlePetData of petsData) {
      const currentPet = await Pet.query().findOne({ name: singlePetData.name })
      if(!currentPet) {
        await Pet.query().insert(singlePetData)
      }
    }
  }
}

export default PetsSeeder