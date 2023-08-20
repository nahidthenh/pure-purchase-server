const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())

const products = require('./data/products.json')

app.get('/', (req, res) => {
    res.send('PurePurchase Server Is Running !!! ')
})


app.get('/products', (req, res) => {
    res.send(products)
})
app.get('/products/:id', (req, res) => {
    const id = req.params.id
    const products = products.find(prdt => prdt.id == id)
    res.send(products)
})



app.listen(port, () => {
    console.log(`Adventura Server Running On Port ${port}`)
})
