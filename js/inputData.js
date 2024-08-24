const validaTexto = (opt) => { // Validador de cadena de texto
    let texto = "";
    while (texto === "" || texto.trim()==="") {
       texto = prompt(opt).toLowerCase();
   };
    return texto;
}

const validaRespuesta = (opt) => { // Funcion que valida respuesta S o N
    respuesta ="";
    while (respuesta !== "s" && respuesta !== "n"){
        respuesta = validaTexto(opt); //Validador de respuesta SI o NO, utiliza el validaTexto, en este caso lo utilizamos para validar que la cadena de texto sea un "s" o un "n"
        
        if (respuesta !== "s" && respuesta !== "n") {
            alert(`Opcion no Válida \n Debe responder S/N`);
        } 
    }
    return respuesta;
}

let respuesta = ""; // Se declara variable respuesta para seguir agregando datos al arreglo
let data = []; //Se declara arreglo con nombre data

function inputData() {
     do {
         respuesta ="";
         let msgPantalla = "Ingrese Numero Entero Positivo mayor de 0"
         let dato = validaNum(msgPantalla);
         data.push({dato}); //cuando el dato sale validado, éste se guarda en el arreglo data en la ultima posición
         respuesta = validaRespuesta('¿Desea agreagar otro Número? S/N');
        
     } while (respuesta === "s");
 }