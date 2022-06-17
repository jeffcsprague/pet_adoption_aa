const Applicant = require("./Applicant")
const Model = require("./Model") 

class Pet extends Model {
  static get tableName() {
    return "pets"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: [ "name", "available" ],
      properties: {
        name: { type: "string" },
        available: { type: [ "string", "boolean" ]},
        weight: { type: [ "string", "integer" ]},
        estimatedAge: { type: [ "string", "integer" ]},
      }
    }
  }

  static get relationMappings() {
    const { Species, Applicant, Application } = require("./index.js")

    return {
      species: {
        relation: Model.BelongsToOneRelation,
        modelClass: Species,
        join: {
          from: "pets.speciesId",
          to: "species.id"
        }
      },
      
      applicants: {
        relation: Model.ManyToManyRelation,
        modelClass: Applicant,
        join: {
          from: "pets.id",
          through: {
            from: "applications.petId",
            to: "applications.applicantId"
          },
          to: "applicants.id"
        }
      },

      application: {
        relation: Model.HasManyRelation,
        modelClass: Application,
        join: {
          from: "pets.id",
          to: "applications.petId"
        }
      }
    }
  }
}

module.exports = Pet