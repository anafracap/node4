const http = require('http');
const os = require('os');
const dotenv = require('dotenv');
dotenv.config();

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    info();
    res.end('<h1>Hello, World!</h1>');
});
server.listen(port, () => {
    console.log(`Server running at port ${port}`);
});

function info(){
    console.log('Node.js version: '+ process.version);
    console.log('System version: '+ os.release);
    setInterval(additionalInfo, 2000)
    //setInterval(additionalInfo, process.env.DELAY)
}

function additionalInfo(){
    let pCPUUsage = JSON.stringify(process.cpuUsage());
    let pMemUsage = JSON.stringify(process.memoryUsage());
    console.log('CPU Usage: '+ pCPUUsage);
    console.log('Memory Usage: '+ pMemUsage);
    console.log('System Uptime: '+ os.uptime());
    console.log('Process Uptime: '+ process.uptime());
   console.log('VAR1 :')
}