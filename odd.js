//Función que permite contar la cantidad de números impares de un arreglo
function contarImpares(arreglo) {
    //Inicializamos la variable que llevará la cuenta de los números impares
    let contador = 0
    //Bucle que recorrerá de a uno el arreglo, mientras i sea menor que el largo del arreglo
    for (let i = 0; i < arreglo.length; i += 1) {
        //Condicional que determina que se lleve la cuenta sólo de los numeros impares
        if (arreglo[i] % 2 !== 0) {
            //Mientras los números sean impares, la variable contador se incrementará en uno
            contador += 1
        }
    }
    //La función retornará el valor de la variable 'contador'
    return contador;
}

//Ejemplo de uso (para un mejor entendimiento, esto se puede borrar previo al merge)
const num = [5,4,2,7,5,9,2,34,61,12,11]
const cantidadImpares = contarImpares(num)
console.log(cantidadImpares)