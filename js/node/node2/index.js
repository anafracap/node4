const fs = require("fs"); 
const http = require('http');

let nWords = 5;
let password = "";

const server = http.createServer((req, res) => {
    req.url = "/?" + nWords;
    let q = req.url.split('?')[1];
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    info(res, q);
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at port ${port}`);
});

function info(res, q){
    let words = "";
    fs.readFile('diccionario.txt', 'utf-8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        words = data.split(/\r?\n/);
        generate(res, words, q);
    });
};

function generate(res, words, q){
    for(let i = 0; i<q; i++){
        let num = Math.random();
        let float = num * words.length;
        let random = Math.floor( float);

        password += words[random];
    }
    res.end(password);
};