class SpeciesSerializer {
  static async getDetails(species) {
    const allowedAttributes = ["id", "name"]
    let serializedSpecies = {}
    for (const attribute of allowedAttributes) {
      serializedSpecies[attribute] = species[attribute]
    }
    serializedSpecies.pets = await species.$relatedQuery("pets")
    return serializedSpecies
  }

}

export default SpeciesSerializer