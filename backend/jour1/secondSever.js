const http = require('http')
const fs = require('fs')
const { error } = require('console')

const serveur = http.createServer((request, response)=>{

    // definition de l'entete
    response.setHeader('content-type', 'text/html')
    let fichier = ''

    //definition de la reponse en fonction de chemin d'access
    if(request.url === '/acceuil'){
      fichier = './front/acceuil.html'  
    }else if(request.url === '/profil'){
        fichier = './front/profil.html'
    }else{
        fichier = './front/error.html'
    }

    //finition et affichage des reponse
    fs.readFile(fichier, (error, data)=>{
        if(error){
            console.log(error);
            response.end()
        }else{
            response.write(data)
            response.end()
        }
    })

})


// ecout du seveur
serveur.listen(3003, 'localhost', ()=>console.log("serveur pres a l'emploie"));