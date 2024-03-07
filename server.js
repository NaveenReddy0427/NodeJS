// creating server using nodejs

// require http module/library
const http = require("http");

// created server
const server = http.createServer((req, res)=>{

    // here comes teh response
    res.end("Hello macha!")
})


// server is listening through port 3000 for clients request
server.listen(3000, ()=>{
    console.log("server is listening on port: 3000")
})

