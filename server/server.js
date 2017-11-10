'use strict';

var date = (new Date()).toJSON();

const http = require('http')
    , SUCESS = {
        version: '1.0'
    ,   name: 'BE MEANNN'
    ,   returned_at: date
    }
    , ERROR = {
        message: "DEU MERDA Não encontrado!!!"
        }
    ;

http.createServer(function(req, res){
    if(req.url === '/api/v1') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(SUCESS));
    }
    else {
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(ERROR));
    }
    res.end();
}).listen(3000, function(){
    console.log('Servidor rodando em localhost: 3000');
})

