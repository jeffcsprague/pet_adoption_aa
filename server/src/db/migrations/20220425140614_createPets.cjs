/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return knex.schema.createTable("pets", (t) => {
    t.bigIncrements("id")
    t.string("name").notNullable()
    t.boolean("available").notNullable()
    t.integer("weight")
    t.integer("estimatedAge")
    t.bigInteger("speciesId")
      .unsigned()
      .notNullable()
      .index()
      .references("species.id")
    t.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    t.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = async (knex) => {
  return knex.schema.dropTableIfExists("pets")
}
