const https = require('https');
const cheerio = require('cheerio');
var data = '';
var $ = '';

function init(){
    setInterval(info, 5000);
}

function info(){
    https.get('https://www.webdesignerdepot.com/news/', (resp) => {
    resp.on('data', (chunk) => {
        data += chunk;
    });
    resp.on('end', () => {
        //console.log(data);
        $ = cheerio.load(data);
        let title = $(".ha__line"); //no reconoce la función extract, que serviría para varios títulos al tiempo
        console.log(title.html());
    });
    }).on("error", (err) => {
    console.log("Error: " + err.message);
    });
}

init();


/*
function info(){
    let $ = cheerio.fromURL('https://www.webdesignerdepot.com/news/'); //La función aparece en la documentación, pero no la reconoce aquí: https://cheerio.js.org/docs/api#fromurl
    const $title = $.extract({
        news: [".ha__line"]
    });
    console.log($title);
}
*/