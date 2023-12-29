// recibimos una palabra => vamos a tener una funcion que reciba un parámetro

// retornamos un booleano => tiene que decir si la palabra es palíndromo o no

// tenemos que desarmar la palabra


// MANDARINA


// for cada letra de la palabra
// guardarla en un array

// lista = ['m', 'a', 'n', 'd', 'a']
// ese array hay que recorrerlo para comparar si el primer y ultimo elemento son iguales
// en caso de que sí devuelve true
// en caso de que no devuelve false


function buscador (palabra) {

    let palabraReversa = []
    let palabraBien = []

    palabra = palabra.toLowerCase()

    for (let letra of palabra){
        palabraReversa.unshift(letra)
        palabraBien.push(letra)
    }
    
    console.log(palabraReversa)
    console.log(palabraBien)
    
    for (let i = 0; i < 10; i++ ) {
        console.log(i)
    }

    for (let i = 0; i < palabra.length; i++ ){
        if (palabraBien[i] == palabraReversa[i]){
            if (i == palabraBien.length - 1){
                return true
            }
        }
    }
}


let funcion = buscador('ala')

console.log(funcion)