// creating server using nodejs

// require http module/library
const http = require("http");

const server = http.createServer((req, res)=>{
    res.end("Hello macha!")
})

server.listen(3000, ()=>{
    console.log("server is listening on port: 3000")
})

