const http = require('http')
    , fs = require('fs')
    , index = fs.readFileSync('index.html');


http.createServer(function(req, res){
    res.writeHead(200,{"Content-Type": "text/html"});
    res.end(index);
}).listen(3000, function(){
    console.log('Servidor rodando em localhost:3000');
});