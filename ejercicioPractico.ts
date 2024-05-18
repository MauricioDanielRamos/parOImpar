import * as rls from "readline-sync";

// Solicitar al usuario que ingrese un numero.

let numero: number = rls.questionInt("Ingrese un numero: ");

if (numero == 0) {                           // Aqui se verifica si el numero es cero.

    console.log("El numero es cero.");

    } else if (numero % 2 == 0) {            // Aqui se verifica si el numero es par.

    console.log("El numero es par.");

        } else {                              // Si el número no es cero ni par, entonces es impar.

    console.log("El numero es impar.");
}
