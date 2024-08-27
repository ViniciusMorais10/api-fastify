import fastify from 'fastify'
import {knex} from './database'
import crypto from 'node:crypto'
import { env } from './env'

const app = fastify()

app.get('/transactions', async () => {
  const transaction = await knex('transactions').insert({
    id: crypto.randomUUID(),
    title: 'Transaction 1',
    amount: 1500
  }).returning('*')
  return transaction
})

  // const transaction = await knex('transactions').select('*')


app
  .listen({
    port: env?.PORT
  })
  .then(() => {
    console.log('HTTP Server is running')
  })
