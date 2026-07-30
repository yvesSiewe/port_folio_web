const http = require('http')

const serveur = http.createServer((requete, reponse) =>{
    // console.log('serveur creer')

    // definition de l'entete
    reponse.setHeader('content-type', 'text/plain')

    //definition de la reponse en fonction de la requete
    if(requete.url==='/acceuil'){
        reponse.write('Bienvenue tres cher developpeur');
    } else if(requete.url === '/profil'){
        reponse.write('vous ete un developpeur backend');
    } else{
        reponse.write("l'url n'est pas valide")
    }

    // finalisation de la reponse
    reponse.end();
})


serveur.listen(3001, 'localhost', ()=>{
    console.log('prest a ecouter les requette au port 3001')
})