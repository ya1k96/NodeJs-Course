//requireds
const fs = require('fs');
const color = require('colors');

let base = 6;
let data = '';

 crearArchivo = ( base, limite ) => {
    if( !Number(base) ){
        throw new Error(`${ base } no es un numero`);
        return;
    }
    return new Promise( (resolve, reject) =>{
         for(let i = 1; i != 10; i++){
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }
            fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
                if(err){ 
                    reject(err);
                }else{
                    resolve(`tabla-${ base }.txt`);                
                }
            });
        });
   
 }
let listarTabla = ( base, limite = 10) => {
    for (let i = 0; i != limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }\n`.green);
        console.log('=======================================');
    }
}

module.exports ={ crearArchivo, listarTabla };