// Al principio es difícil entender un callback de esta forma. Piensas, 
//"si ya tengo la función sum, para que hacer un callback, puedo llamarla tal cual y omitir ese paso". Pero piensa que tienes funciones para sumar, restar, multiplicar 
//.....como hacer una calculadora. Las declaras todas en lista,
// y abajo solo tienes que usar un callback que va tirando de todas a la vez.

const sum = (num1, num2) =>{
    return num1 + num2
}

function rest(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

const calc = (num1 , num2 , callback) =>{
    return callback(num1 , num2)
}

console.log(calc (2, 2, sum))

// Para este segundo ejm usaremos setTimeOut una funcion originalmente de JS y le pasaremos como argumento una funcion anonima , esta sera nuestro callback

setTimeout(function () {
    console.log('Hola JavaScript')
}, 5000)

//Otro ejm

const gretting = (name) =>{
    console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000 , 'Doang')