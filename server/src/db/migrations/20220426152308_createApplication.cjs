/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("applications", (t) => {
    t.bigIncrements("id")
    t.bigInteger("petId")
      .notNullable()
      .unsigned()
      .index()
      .references("pets.id")
    t.bigInteger("applicantId")
      .notNullable()
      .unsigned()
      .index()
      .references("applicants.id")
    t.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    t.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  return knex.schema.dropTableIfExists("applications")
}
