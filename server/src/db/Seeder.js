/* eslint-disable no-console */
import { connection } from "../boot.js"
import SpeciesSeeder from "./migrations/Seeder/SpeciesSeeder.js"
import PetsSeeder from "./migrations/Seeder/PetsSeeder.js"
import ApplicantsSeeder from "./migrations/Seeder/ApplicantsSeeder.js"
import ApplicationsSeeder from "./migrations/Seeder/ApplicationsSeeder.js"

class Seeder {
  static async seed() {
    // include individual seed commands here
    console.log("Seeding Species")
    await SpeciesSeeder.seed() 

    console.log("Done!")
    
    console.log("Seeding Pets")
    await PetsSeeder.seed()
  
    console.log("Done!")

    console.log("Seeding Applicants")
    await ApplicantsSeeder.seed()

    console.log("Done!")

    console.log("Seeding Applications")
    await ApplicationsSeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
  
  
}

export default Seeder