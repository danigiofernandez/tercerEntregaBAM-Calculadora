//Primer Prompt: Ingreso del primero numero.
let numeroUno = parseInt(prompt("Ingrese un número: "))
let numeroDos = parseInt(prompt("Ingrese otro número: "))
let operacion = prompt("Ingrese la operacion a realizar (+ - * /): ")
let mostrar = prompt("Ingrese donde desea motrar el resultado: (consola o alert)")

let suma = numeroUno + numeroDos;
let resta = numeroUno - numeroDos;
let division = numeroUno / numeroDos;
let multiplicacion = numeroUno * numeroDos;

if (operacion === "/" && numeroUno === 0 || numeroDos === 0) {
    alert("No se puede dividir por 0")
} else { if (operacion != "+" && operacion != "-" && operacion != "/" && operacion != "*") {
    alert("Operación inválida")
}else{ if (mostrar === "consola") {
    switch (operacion) {
        case "+":
            console.log("El resultado es: " + suma)
            break;
        case "-":
            console.log("El resultado es: " + resta)
            break;
        case "/":
            console.log("El resultado es: " + division)
            break;
        case "*":
            console.log("El resultado es: " + multiplicacion)
            break;
        }
} else {if (mostrar === "alert") {
    switch (operacion) {
        case "+":
            alert("El resultado es: " + suma)
            break;
        case "-":
            alert("El resultado es: " + resta)
            break;
        case "/":
            alert("El resultado es: " + division)
            break;
        case "*":
            alert("El resultado es: " + multiplicacion)
            break;
        }   
        }
    }
    }
}
