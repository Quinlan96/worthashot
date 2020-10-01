import Knex from 'knex'
import knexfile from '../config/knexfile'

const knex = Knex(knexfile)

export default knex
