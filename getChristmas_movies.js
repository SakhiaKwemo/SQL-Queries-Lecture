const {client} = require('./connection')

const getMovies = () => {
    return client.query('SELECT * FROM christmas_movies')
    .then((res) => {
        return res.rows
    })
    .catch((err)=> {
        return err
    })
}

const getMovie = (id) => {
    return client.query(`SELECT * FROM christmas_movies WHERE id=${id}`)
    .then((res) => {
        return res.rows
    })
    .catch((err)=> {
        return err
    })
}

module.exports = {getMovies, getMovie}