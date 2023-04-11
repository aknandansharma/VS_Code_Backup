const express = require("express");
const app = express();
const fs = require("fs");

// bodyParser -> iske bina body nahi kam kargi
app.use(express.json())
app.use(express.urlencoded())

app.use(express.static('public'))
   
const data = fs.readFileSync("data.json", "utf-8");

// MiddleWare

// app.use((req, res, next) => {
//     console.log(
//         req.method, req.ip, req.hostname, req.get('User-Agent'), new Date());
//     next()
// })



const auth  = (req, res, next) => {
    // console.log(req.query);
    if (req.body.password === '123') {
        next()
    } else {
        // res.sendStatus(401)
         res.status(404).send('<h1>404 NOT FOUND</h1>')
    }
    
}

// app.use(auth)

 

// API - End-Point - Route
app.get("/", auth, (req, res) => {
    res.status(200).send('<h1>GET</h1>');
  });
 
app.post("/", auth,  (req, res) => {
    res.status(200).send('<h1>POST</h1>');
  });
app.put("/", (req, res) => {
    res.status(200).send('<h1>PUT</h1>');
  });
 
app.patch("/", (req, res) => {
    res.status(200).send('<h1>PATCH</h1>');
  });
app.delete("/", (req, res) => {
    res.status(200).send('<h1>DELETE</h1>');
  });
 

app.get("/demo", (req, res) => {
  // res.send("Aknnadan kumar")
  // res.sendFile('/Users/aknandan/Desktop/VS_Code_Backup/JavaScript/index.html');
  // res.json(data)
  res.status(201).send("ths is demo :-)");
});

app.listen(8080, () => {
  console.log("Server Start") 
});

// 2:50