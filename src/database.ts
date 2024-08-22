import { knex as setupKnex } from 'knex'

const knex = setupKnex({
  client: 'sqlite',
  connection: {
    filename: './tmp/app.db'
  }
})

export default knex
