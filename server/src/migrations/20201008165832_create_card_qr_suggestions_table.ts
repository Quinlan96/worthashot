import * as Knex from "knex";

export const up = async (knex: Knex): Promise<void> => {
    return knex.schema
        .createTable('card_qr_suggestions', (table) => {
            table.increments('id')
            table.integer('card_id').unsigned()
            table.string('text')
            table.timestamps()

            table.foreign('card_id').references('id').inTable('cards')
        })
}

export const down = async (knex: Knex): Promise<void> => {
    return knex.schema
        .dropTable('card_qr_suggestions')
}
