const fs = require('fs');
const colors = require('colors');

/**
 * 
 * @param {Number} base 
 * @param {Boolean} show 
 * @param {Number} to 
 * @returns 
 */
const crearArchivoTabla = async (base, show, to) => {

    try {
        console.log('======================'.rainbow);
        console.log(colors.green(`    Tabla del ${base}`),  );
        console.log('======================'.rainbow);

        let salida = "";

        for (let index = 1; index <= to; index++) {
            salida += ` ${base} x ${index} = ${base*index}\n`;
        }

        if (show)
            console.log(salida);

        fs.writeFileSync(`./outputs/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;

    } catch (err) {
        throw err;
    }

    

}

module.exports = {
    crearArchivoTabla
}
