const http = require('http')
const fs = require('fs')

const index = fs.readFileSync('index.html')
const data = JSON.parse(fs.readFileSync('data.json'))
const product = data.products[1];

const server = http.createServer((req, res) => {
    console.log("Server start")

    const url = req.url

    if(url === '/'){
        console.log('Home server');
        res.end("<h1>This is Home Page</h1>")
    }
    else if(url === '/json'){
        console.log('JSON server');
        res.end(JSON.stringify(data))
    }else if(url === '/html'){
        console.log('HTML server');
        res.end(index)
    }else if(url === '/pro'){
        // res.setHeader('Content-Type', 'text/html')
        // let modiIndex = index.replace('**title**', product.title)
        res.end(modiIndex);
    }else{
        console.log('404 Error');
        res.write("<h1>404 Page is Not Found</h1>");
        res.end()
    }
})
server.listen(8080)

// 1:50