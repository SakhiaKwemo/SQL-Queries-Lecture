const { Client } = require('pg')
 
const client = new Client({
  host: 'localhost',
  database: 'postgres',
  port: 5432,
  user: 'postgres',
  password: 'Sakhia',
})

client.connect()

// client.query('SELECT * FROM christmas_movies', (err, res) => {
//     console.log(err)
//     // console.log(res.rows)
//     client.end()
// })
const query = process.argv[2]
switch(query) {
    case 'select': 
    client.query('SELECT * FROM christmas_movies')
        .then((res) => {
            console.log(res.rows)
            client.end()
        })
        .catch((err)=> {
            console.log(err)
        })
    break;
    case 'showId': 
    client.query('SELECT (id) FROM christmas_movies')
        .then((res) => {
            console.log(res.rows)
            client.end()
        })
        .catch((err)=> {
            console.log(err)
        })
    break;
    case 'getMovies': 
    client.query('SELECT (moviename) FROM christmas_movies')
        .then((res) => {
            console.log(res.rows)
            client.end()
        })
        .catch((err)=> {
            console.log(err)
        })
    break;
}




