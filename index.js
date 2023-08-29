const fs = require('fs')
const http = require('http')
const url = require('url')

const server = http.createServer((req,res) => {
    console.log(req)
    if(req.url === '/'){
        fs.readFile(
            './index.html', (err, content) => {
                if (err) throw err
                res.writeHead(200, {'Content-Type' : 'text/html'})
                res.end(content)
            }
        )
    }
    if(req.url === '/about'){
        fs.readFile(
            './about.html', (err, content) => {
                if (err) throw err
                res.writeHead(200, {'Content-Type' : 'text/html'})
                res.end(content)
            }
        )
    }
})

server.listen(8000, () => console.log('Server is runing'))