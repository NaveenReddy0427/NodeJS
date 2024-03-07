// in this file, we are sending html page as response for the request of the client

const http = require("http")
const fs = require("fs") // to read the html file

const server = http.createServer((req, res)=>{
    const data = fs.readFileSync("index.html")
    res.end(data)
})

server.listen(3100, ()=>{
    console.log("server is listening on port: 3100")
})