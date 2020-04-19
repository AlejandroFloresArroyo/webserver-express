const http = require('http');

http.createServer( ( req, res ) =>{

    res.writeHead(200, {'Content-Type' : 'aplication/json'})
    
    let salida = {
        nombre: 'alejandro' ,
        edad: 22,
        url: req.url
    };

    res.write(JSON.stringify(salida));
    // res.write('Hola mundote');
    res.end();

}).listen(8080);

console.log('Escuchando el 8080');