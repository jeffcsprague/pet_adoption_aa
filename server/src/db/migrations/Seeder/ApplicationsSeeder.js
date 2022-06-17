import { Application } from "../../../models/index.js"

class ApplicationsSeeder {
  static async seed(){
    const applicationData = [
      {
        petId: 8,
        applicantId: 1
      },
      {
        petId: 9,
        applicantId: 2
      },
      {
        petId: 8,
        applicantId: 3
      },
      {
        petId: 6,
        applicantId: 4
      },
      {
        petId: 7,
        applicantId: 2
      },
      {
        petId: 4,
        applicantId: 3
      },
      {
        petId: 2,
        applicantId: 1
      },
    ]

    for (const singleApplicationDatum of applicationData) {
      const currentApplication = await Application.query().findOne({ petId: singleApplicationDatum.petId, applicantId: singleApplicationDatum.applicantId })
      if(!currentApplication) {
        await Application.query().insert(singleApplicationDatum)
      }
    }
  }
}

export default ApplicationsSeeder