/*Declaración de variables globales:

a) strDigit: guarda el arreglo de letras en relación con cada dígito de la cantidad proporcionada
b) strArray: guarda los arreglos de letras en relación con los dígitos de la cantidad ingresada
c) arrayDigit: contiene el arreglo con las distintas combinaciones de letras en base a los
dígitos de la cantidad proporcionada

*/

let strDigit = [];
let strArray = [];
let arrayDigit = [];

//Ingreso de la cantidad por parte del usuario (conversión del string a un array):
const digits = "9567";
const digitsArr = digits.split("");

//Restricción # 1: la cantidad debe contener como máximo 4 dígitos
if(digitsArr.length > 4){
    console.log("Por favor, ingrese una cantidad de 4 dígitos como máximo")
}else{//Se cumple la condición # 1

    //Creación del arreglo que contiene los subarreglos de letras por dígito
    for (let digit of digitsArr){

        switch (digit) {
            case "1"://Restricción # 2: ingresar dígitos del 2 al 9
                console.log("Por favor, ingrese digitos del 2 al 9");
                return;
            case "2":
                strDigit = ["a", "b", "c"];
                break;
            case "3":
                strDigit = ["d", "e", "f"];
                break;
            case "4":
                strDigit = ["g", "h", "i"];
                break;
            case "5":
                strDigit = ["j", "k", "l"];
                break;
            case "6":
                strDigit = ["m", "n", "o"];
                break;
            case "7":
                strDigit = ["p", "q", "r", "s"];
                break;
            case "8":
                strDigit = ["t", "u", "v"];
                break;
            case "9":
                strDigit = ["w", "x", "y", "z"];
                break;
            default:
                strDigit = "";
                break;
        }

        strArray.push(strDigit);

    }
    
    /*Condicional: si el arreglo con los subarreglos de letras por dígito posee un solo elemento,
    entonces el arreglo de combinaciones será ese único elemento*/
    if(strArray.length === 1){
        strArray.forEach(array=>{
            arrayDigit = array;
        })
    }else{//Proceso si el arreglo con los subarreglos de letras posee más de un elemento o subarreglo
        
        for(let i = 0; i < strArray.length; i++){
            for(let j = 1; j < strArray.length; j++){
                if(i < j){
                    strArray[i].forEach(digit01=>{
                        strArray[j].forEach(digit02=>{
                            arrayDigit.push(digit01 + digit02);
                        })
                    })
                }
            }
        }
    }

console.log(arrayDigit);//Se muestra el arreglo con todas las combinaciones de letras por dígito

}
