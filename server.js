const express = require('express')
const hbs = require('hbs')

const port = process.env.PORT || 3000
hbs.registerPartials(__dirname + '/views/partials')
const app = express()

app.set('view engine', 'hbs')

app.use(express.static(__dirname + '/public'))

// app.use((req, res, next) => {
//     res.render('mentance.hbs')
// })

hbs.registerHelper('currentYear', () => {
    return new Date().getFullYear()
})

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: "Welcome Buddy"
    })
})

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About'
    })
})

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: ' unable to fetch the url'
    })
})

app.listen(port, () => {
    console.log(`unable to load at port ${port}`)
})