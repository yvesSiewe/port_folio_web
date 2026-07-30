const { log } = require('console')
const fs = require('fs')

'geestion des dossiers'

// if(fs.existsSync('./mesFichiers')){
//     console.log('le dossier est existant')
//     fs.rmdir('./mesFichiers', (error)=>{
//         if(error){
//             console.log(error)
//         }else{
//             console.log('dossier supprimer')
//         }
//     })
// }else{
//     fs.mkdir('./mesFichiers', (error)=>{
//         if(error){
//             console.log(error)
//         }else{
//             console.log('succes file created')
//         }
//     })
// }


// creation de fichier

// fs.writeFile('./mesFichiers/fichier1.txt', 'je developpe en nodeJS', ()=>{
//     console.log('creation du fichier avec succes')
// })

//lecture d'un fichier

// fs.readFile('./mesFichiers/fichier1.txt', (error, datas)=>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log(datas.toString())
//     }
// })

// suppression d'un fichier

if(fs.existsSync('./mesFichiers/fichier1.txt')){
    fs.unlink('./mesFichiers/fichier1.txt', (error)=>{
        if(error){
            console.log(error)
        }else{
            console.log('fichier supprimer avec succes')
        }
    })
}else{
    console.log("impossible de supprimer un fichier qui n'existe pas")
}
