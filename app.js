const { bgBlack, bgBlue, red } = require('colors')

require('colors')

const main = async() =>{
    console.clear()
    let nombres= ("Sergio")
    let  apellidos= ("Garcia")
    let nombrecompleto = nombres[0].toUpperCase()+nombres.substring(1).toLocaleLowerCase() + " " + apellidos[0].toUpperCase()+apellidos.substring(1).toLocaleLowerCase()
    let textos = nombrecompleto.length  
    while(textos>0){
        console.log  (textos + "  ".blue + nombrecompleto.substring(0,textos).blue);
        textos--;
    }
    let textos1 = nombrecompleto.length
    let nums = 1  
    while(textos1>0){
        console.log  (nums + "  ".blue+ nombrecompleto.at(-1,textos1));
        textos1--;
        nums ++;
    }
    
    console.log(nombres.toUpperCase().bgGreen+" ".blue+apellidos.toUpperCase().bgGreen)
    console.log(nombres.toLowerCase().bgGreen+" ".blue+apellidos.toLowerCase().bgGreen)
    console.log(nombrecompleto.bgGreen)
}


main();
