const express = require("express");
const app = express();
const fs = require("fs");
const morgan = require("morgan");

// get the data.json and index.html
const index = fs.readFileSync('index.html', 'utf-8')
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))
const products = data.products

// bodyParser -> iske bina body nahi kam kargi
app.use(express.json())
// app.use(express.urlencoded())
app.use(morgan('dev'))
app.use(express.static('public'))
   


// MiddleWare




 

// API - End-Point - Route

// Products

// API ROOT, Base URL, ex:- google.com/api/v2/

// C U R D Operations (Create, Read, Update, Delete)

// READ GET /products
app.get("/products", (req, res) => {
    res.json(products)
  });
// READ GET /products/:id
app.get("/products/:id", (req, res) => {
    // console.log(req.params);
    const id = +req.params.id
    const product = products.find(p=>p.id === id)
    res.json(product)
  });
 

// CREATE POST /products/:id
app.post("/products",  (req, res) => {

    console.log(req.body);
    products.push(req.body)
    res.json(req.body);
  });


// UPDATE PUT /products/:id
app.put("/products/:id",  (req, res) => {
  const id = +req.params.id
  const productIndex = products.findIndex(p=>p.id === id)
  products.splice(productIndex,1,{...req.body, id:id})
  res.status(201).json()
  });


// UPDATE PATCH /products/:id
app.patch("/products/:id",  (req, res) => {
  const id = +req.params.id
  const productIndex = products.findIndex(p=>p.id === id)
  const product = products[productIndex]
  products.splice(productIndex,1,{...product ,...req.body})
  res.status(201).json()
  });


// DELETE DELETE /products/:id
app.delete("/products/:id",  (req, res) => {
  const id = +req.params.id
  const productIndex = products.findIndex(p=>p.id === id)
  const product = products[productIndex]
  products.splice(productIndex, 1)
  res.status(201).json(product)
  });




app.listen(8080, () => {
  console.log("Server Start") 
});

// start with 3:33