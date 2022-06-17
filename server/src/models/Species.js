const Model = require("./Model")

class Species extends Model {
  static get tableName() {
    return "species"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: [ "name" ],
      properties: {
        name: { type: "string" },
      }
    }
  }

  static get relationMappings() {
    const { Pet } = require("./index.js")

    return {
      pets: {
        relation: Model.HasManyRelation,
        modelClass: Pet,
        join: {
          from: "species.id",
          to: "pets.speciesId"
        }
      }
    }
  }
}

module.exports = Species