const express = require('express')
const hbs = require('hbs')

hbs.registerPartials(__dirname + '/views/partials')
const app = express()

hbs.registerHelper('currentYear', () => {
    return new Date().getFullYear()
})
app.set('view engine', 'hbs')

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: "Home"
    })
})

app.get('/about', (req, res) => {
    res.render('about.hbs')
})

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: ' unable to fetch the url'
    })
})

app.listen(3000)