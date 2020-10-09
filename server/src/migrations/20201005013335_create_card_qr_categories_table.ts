import * as Knex from "knex";

export const up = async (knex: Knex): Promise<void> => {
    return knex.schema
        .createTable('card_qr_categories', (table: any) => {
            table.increments('id')
            table.string('name')
            table.string('code')
            table.timestamps()
        })
}

export const down = async (knex: Knex): Promise<void> => {
    return knex.schema
        .dropTable('card_qr_categories')
}
