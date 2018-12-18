const opts = {
		base:{
			demand:true,
			alias: 'b'
			},
			limite:{
				demand:false,
				default:10,
				alias:'l'
			}
}
const argv = require('yargs')
			.command('listar','Imprime en consola la tabla de multiplicar',{ opts })
			.command('crear','Crea un archivo .txt de tablas de multiplicar con base y limite',{ opts })
			.help()
			.argv;

module.exports = { argv };