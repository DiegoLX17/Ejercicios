//primer ejercicio
const character = 1 //ingresa aqui tu caracter
// console.log('Ingresa tu caracter arriba en la variable','tu variable es de tipo:',typeof(character))
// const typeofcharacter = typeof(characterfive)
if(typeof(character) == 'number'){
    console.log('Es una cadena de digitos')
}
else if (typeof(character) == 'string'){
    console.log('Es una cadena de texto')
}
else(console.log('No es ninguno de los 2'))
//

// function myGeeks() {

//     var str = 'jhkj7682834'
//     var matches = str.match(/(\d+)/);
      
//     if (matches) {
//         matches[0]
//     }


//segundo ejercicio
const text = 'Hola mundo que tal'
const initial = text.substring(5,10)
var verify = text.split('mundo')
console.log(initial,...verify)
//segunda completa
const text1 = 'Hola mundo que tal'
const split1 = text1.split(' ')
console.log(split1)
const initial1 = 'mundo'
console.log(initial1,text1.split(initial1)[1])

//tercer ejecicio
const separar = 'Hola mundo prueba mundo'
const separado = separar.split(' ')
console.log(separado)
// const contador = separado.find('mundo')
//console.log(contador)






//cuarto ejercicio
let i
let j

console.log('Tus numeros pares son: ')
for (i=2;i<50;i=i+2){
    console.log(i)
}
console.log('Tus numeros impares son: ')
for (i=1;i<50;i=i+2){
    console.log(i)
}

const prueba = 'Hola'
const prueba1 = 'hola'
const verifyUpper = (prueba1.substring(0,1).toUpperCase())
const testMayus = prueba.substring(0,1)
console.log(testMayus)
console.log(verifyUpper)
if(verifyUpper === testMayus){
    'tu variable es mayucula'
}
else{
    'no es mayuscula'
}

//quinto ejercicio
const characterfive = 'Hola'
const checkUpper = (prueba1.substring(0,1).toUpperCase())
const verifyLetter = prueba.substring(0,1)
if(typeof(characterfive) == 'number'){
    console.log('Es numero')
}
else if (typeof(characterfive) == 'string'){
    console.log('Es texto')
    if(verifyLetter === 'H'){
        console.log('Y tu variable es mayúscula')
    }
    else{
        console.log('Y tu variable es minúscula')
    }
}
else(console.log('No es ninguno de los 2'))
// console.log(typeofcharacter)


// const characterfived = 'Hola'
// const cortado = characterfived.substring(0,1)
// console.log(cortado)
// Mayuscula = 'H'
// console.log(cortado == Mayuscula)

// if(typeof(characterfived) == 'number'){
//     console.log('Es numero')
// }
// else if (typeof(characterfived) == 'string' && cortado == Mayuscula){
//     console.log('Es texto y empieza con Mayuscula')
// }
// else(console.log('No es ninguno de los 2'))
// // console.log(typeofcharacter)

//sexto ejercicio

//septimo ejercicio
const height = 5 //indica tu altura
for( i=1; i<=height; i++){
    let resultado = ''

    for (j = 1; j<=i; j++){
        resultado += '*','\n'
    }
    console.log(resultado)
}
//octavo ejercicio