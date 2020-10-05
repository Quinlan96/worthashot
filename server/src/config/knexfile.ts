import Knex from 'knex'

import dotenv from 'dotenv'

dotenv.config({ path: '../../.env' })

import constants from '../constants'

const knexfile: Knex.Config = {
    client: 'postgres',
    connection: {
        user:       constants.DB_USERNAME,
        password:   constants.DB_PASSWORD,
        database:   constants.DB_DATABASE,
		dateStrings: true
    },
    migrations: {
        directory: '../migrations',
        tableName: 'knex_migrations'
    }
}

export default knexfile