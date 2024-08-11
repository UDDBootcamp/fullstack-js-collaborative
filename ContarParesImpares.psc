Funcion numeroUsuario <- ValidaNumero(n)  
    // Creamos una función para leer el número ingresado y validar que sea mayor que cero y positivo,
    // cuando es validado, sale de la función con el dato validado y guardado en la variable numeroUsuario.
    numeroUsuario <- 0                      
    Repetir                               
        Leer numeroUsuario
        Si numeroUsuario = 0 Entonces
            Escribir "Ingrese un Número Válido Mayor que cero y positivo"
        FinSi
    Hasta Que numeroUsuario > 0
FinFuncion

Algoritmo ContarParesImpares
    definir arreglo, cuentaPares, cuentaImpares Como Entero  // Declaro las variables Como Entero
    
    Dimension arreglo[10]  // La variable arreglo la dimensiono como un Arreglo de 10
    
    Para i desde 1 Hasta 10 Hacer  // Recorro desde 1 hasta 10 para guardar los números del teclado a cada posición
        Escribir i, ") Ingrese un número entero positivo"  // del arreglo después de validarlos
        arreglo[i] <- ValidaNumero(numeroUsuario)  // Hago el llamado a la función de validación y cuando retorne el valor validado
    FinPara  // Lo guardo en la posición del arreglo correspondiente
    
    Limpiar Pantalla  // Limpia la pantalla para continuar con el siguiente proceso
    
    Para i Desde 1 Hasta 10 Hacer  // Recorro el arreglo desde la posición 1 hasta la 10
        Si arreglo[i] % 2 == 0 Entonces  // Realizo la operación para saber si el número guardado en la posición i es par
            cuentaPares = cuentaPares + 1  // Incremento en 1 el contador para números pares
        SiNo
            cuentaImpares = cuentaImpares + 1  // Incremento en 1 el contador para los números impares
        FinSi
    FinPara
    
    Escribir "La cantidad de Números Pares ingresados es de: ", cuentaPares
    Escribir "La cantidad de Números Impares ingresados es de: ", cuentaImpares
    
    // Bloque Opcional para recorrer el arreglo y mostrar los números ingresados por teclado
    
    // Escribir " "       
    // Escribir "Los Números Ingresados fueron: "
    
    // Para i desde 1 hasta 10 Hacer 
    //     Escribir arreglo[i]  
    // FinPara
    
FinAlgoritmo