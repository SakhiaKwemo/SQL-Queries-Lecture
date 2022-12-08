const { Client } = require('pg')
 
const client = new Client({
  host: 'localhost',
  database: 'postgres',
  port: 5432,
  user: 'postgres',
  password: 'Sakhia',
})

client.connect()

module.exports = {client}