const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./yargs');
const color = require('colors/safe');

let comando = argv._[0];
console.log(comando);
switch(comando){
	case 'listar':
		listarTabla(argv.base,argv.limite);
		break;
	case 'crear':	
		crearArchivo(argv.base).then(archivo => console.log('Archivo creado: ',color.green(archivo)),(err)=>{
			console.log(err);
		})
		break;
}
				  
