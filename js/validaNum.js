const validaNum = (msg) => {
    num = Number(prompt(msg));
//    num = 0; // Variable iniciada en 0 para evitar el valor null
    while (isNaN(num) || num <= 0) {  //bucle en caso de que sea menor o igual a cero o No Numero
//        if (isNaN(num) || num <= 0){
           num = Number(prompt(`Valor Incorrecto \n "${msg}"`));
//    }
    }
    return num;
}