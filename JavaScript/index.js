const express = require('express')
const app = express()
const fs = require('fs')
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))
const products = data.products;


// Application level Midleware
app.use((req, res, next) => {
    console.log(req.method, req.ip, req.hostname, new Date(), req.get('User-Agent'));
    next()
})

// Midleware
const auth = (req, res, next) => {
    console.log(req.query);
    if(req.query.password === '123'){
        next()
    }else{
        res.sendStatus(401)
    }
    
}
app.use(auth)

// API - End-Point - Server Route


app.get('/', (req, res) => {
    res.json({type:'GET'})
})
app.post('/', (req, res) => {
    res.json({type:'POST'})
})
app.put('/', (req, res) => {
    res.json({type:'PUT'})
})
app.patch('/', (req, res) => {
    res.json({type:'PATCH'})
})
app.delete('/', (req, res) => {
    res.json({type:'DELETE'})
})



app.get('/demo', (req, res) => {
    // res.send('<h1>Home</h1>')
    // res.sendFile("/home/aknandan/Documents/MERN/JavaScript/index.html");
    // res.json(products)
    res.status(201).json(products)
})






app.listen(8080, () => {
    console.log('Server Startd');
})

// 2:50
