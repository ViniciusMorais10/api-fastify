import fastify from 'fastify'
import knex from './database'

const app = fastify()

app.get('/hello', async () => {
  const test = await knex('sqlite_schema').select('*')

  return test
  return 'hello world'
})

app
  .listen({
    port: 3333
  })
  .then(() => {
    console.log('HTTP Server is running')
  })
