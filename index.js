const express = require('express')
// const bodyParser = require('body-parser')
// const morgan = require('morgan')

const PORT = 5000

const app =express()

const {getMovies, getMovie} = require('./getChristmas_movies')

// app.use(morgan('dev'))

app.set('view engine', 'ejs')

app.get('/get-movies',(req, res) => {
    console.log("Give Me All Movies")
    getMovies().then((result) => {
        console.log(result)
        const templateVars = {movies: result}
        res.render('index', templateVars)
    })
} )

app.get('/get-movie/',(req, res) => {
    console.log("Give Me 1 Movie")
    console.log(req.body)
    let id = req.params.movie
    getMovie(id).then((result) => {
        console.log(result)
        const templateVars = {movie: result[0]}
        res.render('singlemovie.ejs', templateVars)
    })
} )

app.post('/info', function (req, res) {
    console.log(req.query)
    })

app.listen(PORT, () => {
    console.log('Express is running on Port: ' + PORT)
})