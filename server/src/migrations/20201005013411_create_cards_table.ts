import * as Knex from "knex";

export const up = async (knex: Knex): Promise<void> => {
    return knex.schema
        .createTable('cards', (table) => {
            table.increments('id')
            table.integer('category_id').unsigned()
            table.string('code').nullable()
            table.string('text').nullable()
            table.string('notes').nullable()
            table.boolean('qr_enabled').defaultTo(false)
            table.integer('qr_category_id').unsigned().nullable()
            table.timestamps()

            table.foreign('category_id').references('id').inTable('categories')
            table.foreign('qr_category_id').references('id').inTable('card_qr_categories')
        })
}

export const down = async (knex: Knex): Promise<void> => {
    return knex.schema
        .dropTable('cards')
}
