import * as Knex from "knex";

export const up = async (knex: Knex): Promise<void> => {
    return knex.schema
        .createTable('categories', (table: any) => {
            table.increments('id')
            table.string('name')
            table.timestamps()
        })
}

export const down = async (knex: Knex): Promise<void> => {
    return knex.schema
        .dropTable('categories')
}
