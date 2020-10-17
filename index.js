const express = require('express')
const app = express()
var ejsLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.get('/', (req, res)=> {
    res.render('index')
})

app.get('/earth', (req, res) => {
    res.render('earth', {earth: ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']}  )
})

app.get('/fire', (req, res) => {
    res.render('fire', {fire: ['passionate', 'strong emotions', 'tempermental', 'energetic', 'accomplished', 'interesting']}  )
})

app.get('/water', (req, res) => {
    res.render('water', {water: ['private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensitive']}  )
})

app.get('/air', (req, res) => {
    res.render('air', {air: ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']}  )
})



app.listen(5000, () => {
    console.log('You are on port 5000')
})