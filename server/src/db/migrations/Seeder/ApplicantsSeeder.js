import { Applicant } from "../../../models/index.js"

class ApplicantsSeeder {
  static async seed() {
    const applicantData = [
      {
        firstName: "Sony",
        lastName: "Thark"
      },
      {
        firstName: "Beter",
        lastName: "Barker"
      },
      {
        firstName: "Stacey",
        lastName: "Gwenings"
      },
      {
        firstName: "Jane",
        lastName: "Maryton"
      }
    ]

    for (const singleApplicantData of applicantData) {
      const currentApplicant = await Applicant.query().findOne({ firstName: singleApplicantData.firstName })
      if(!currentApplicant) {
        await Applicant.query().insert(singleApplicantData)
      }
    }
  }
}

export default ApplicantsSeeder