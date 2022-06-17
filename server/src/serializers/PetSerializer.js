import ApplicantSerializer from "./ApplicantSerializer.js"

class PetSerializer {
  static async getDetails(pet) {
    try {
      const allowedAttributes = ["id", "name", "available", "weight", "estimatedAge", "speciesId"]
      let serializedPet = {}
      for (const attribute of allowedAttributes){
        serializedPet[attribute] = pet[attribute]
      }
      const personApplicants = await pet.$relatedQuery("applicants")
      const serializedApplicants =  personApplicants.map((applier) => {
        return  ApplicantSerializer.getSummary(applier)
      })
      serializedPet.applicants =  serializedApplicants
      return serializedPet
    } catch(error) {
      throw error
    }
  }
}

export default PetSerializer