//Funciones
function edad(birthYear) {
    const edad = 2023 - birthYear
    return edad; //return para que guarde el valor en edad
}
const edadPablo = edad(1998)
console.log(edadPablo)

//Elevar a potencias
function potencia(num,exponente) {
    for (let i = 0; i<=exponente; i++) {
        const potencia = num**exponente
        return potencia
    
    }
}
const r = potencia(4,2)
    console.log(r)