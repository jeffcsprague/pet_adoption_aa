class ApplicantSerializer {
  static getSummary(applicant) {
    const allowedAttributes = ["id", "firstName", "lastName"]
    const serializedApplicants = {}
    for (const attribute of allowedAttributes) {
      serializedApplicants[attribute] = applicant[attribute]
    }
    return serializedApplicants
  }
}

export default ApplicantSerializer