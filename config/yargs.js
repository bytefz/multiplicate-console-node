const argv = require('yargs')
        .options({
        'b': {
            alias: "base",
            type: 'number',
            demandOption: true,
        }, 
        's':{
            alias: 'show',
            type: 'boolean',
            default: false,
            description: 'Muestra la tabla de multiplicar'
        },
        't':{
            alias: 'to',
            type: 'number',
            default: 10,
            description: 'Number multiplication limit'
        },
    })
        .check((argv, options) => {
            if(isNaN(argv.b)){
                throw 'Have to be a number'
            }
            return true;
        })
        .argv;


module.exports = argv;