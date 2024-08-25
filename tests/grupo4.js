//Grupo4 - Módulo de Cálculo de Estadísticas Básicas

//funcion para calcular el máx, min y el total de los números ingresados
const calcularEstadisticas = (numeros) =>{
    let maximo = Math.max(...numeros);
    let minimo = Math.min(...numeros);
    let suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0); //Esta función simplemente suma el valor del numero actual al acumulador y devuelve el resultado. El método "reduce" recorre todos los elementos del arreglo "numeros"
    return {
        max: maximo,
        min: minimo,
        sumaTotal: suma
    };
};

//funcion para obtener los números ingresados por el usuario y los convierte a un arreglo de tipo Number
const obtenerNumeros = () => {
    let todook = true
    let numeros = []
    do {
        todook = true
        let input = prompt('Ingrese los números, separados por comas:'); 
        let numeros = input.split(",").map(Number);
        numeros.forEach(function(numero) { 
        if(isNaN (numero)){
            todook = false
            alert('Sólo se admiten números. Intente nuevamente');
        }            
        });        
        if(todook){
            return numeros;
        }
 } while (!todook)  
    
};

numeros = obtenerNumeros();
const estadisticas = calcularEstadisticas(numeros);

console.log("Estadísticas:");
console.log("Números ingresados: ", numeros)
console.log(`Máximo: ${estadisticas.max}`);
console.log(`Mínimo: ${estadisticas.min}`);
console.log(`Suma Total: ${estadisticas.sumaTotal}`);