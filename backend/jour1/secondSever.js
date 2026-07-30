const http = require('http');

const serveur = http.createServer((request, response)=>{
    console.log('mon premier seveur');
})

serveur.listen(3002, 'localhost', ()=>{
    console.log('serveur creer avec succes')
    
})