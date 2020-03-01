const http = require('http');

const server = http.createServer(handleRequest);

function handleRequest(req, res){
    console.log(req.url);
    res.write('Hello NodeJS');
    res.end();
}

server.listen(2020, function(){
    console.log('Server is running on 2020')
});





