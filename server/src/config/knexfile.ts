import constants from '../constants'

interface KnexConfig {
    [key: string]: any
}

const knexfile: KnexConfig = {
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