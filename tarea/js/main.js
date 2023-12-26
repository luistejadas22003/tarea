class OperacionesMatematicas {
    // Divisores de un número
    obtenerDivisores(numero) {
        let divisores = [];
        for (let i = 1; i <= numero; i++) {
            if (numero % i === 0) {
                divisores.push(i);
            }
        }
        return divisores;
    }

    // Verificar si un número es perfecto
    esPerfecto(numero) {
        const sumaDivisores = this.obtenerDivisores(numero).reduce((sum, divisor) => sum + divisor, 0);
        return sumaDivisores - numero === numero;
    }

    // Verificar si un número es primo
    esPrimo(numero) {
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                return false;
            }
        }
        return numero > 1;
    }

    // Verificar si dos números son primos gemelos
    sonPrimosGemelos(num1, num2) {
        return this.esPrimo(num1) && this.esPrimo(num2) && Math.abs(num1 - num2) === 2;
    }
}

class OperacionesCadenas {
    // Concatenar dos cadenas
    concatenarCadenas(cadena1, cadena2) {
        return cadena1 + cadena2;
    }

    // Buscar una subcadena
    buscarSubcadena(cadena, subcadena) {
        return cadena.includes(subcadena);
    }

    // Insertar una subcadena en una posición específica
    insertarSubcadena(cadena, subcadena, indice) {
        return cadena.slice(0, indice) + subcadena + cadena.slice(indice);
    }

    // Eliminar una subcadena
    eliminarSubcadena(cadena, subcadena) {
        return cadena.replace(subcadena, '');
    }
}

class OperacionesArreglos {
    // Convertir un arreglo a cadena
    arregloACadena(arreglo) {
        return arreglo.join(', '); // Puedes personalizar el separador
    }

    // Encontrar el mayor de un arreglo
    encontrarMayor(arreglo) {
        return Math.max(...arreglo);
    }

    // Buscar elemento en un arreglo
    buscarEnArreglo(arreglo, elemento) {
        return arreglo.includes(elemento);
    }

    // Insertar elemento en un arreglo
    insertarEnArreglo(arreglo, elemento) {
        arreglo.push(elemento);
        return arreglo;
    }

    // Eliminar elemento de un arreglo
    eliminarDeArreglo(arreglo, elemento) {
        const index = arreglo.indexOf(elemento);
        if (index !== -1) {
            arreglo.splice(index, 1);
        }
        return arreglo;
    }

    // Convertir una cadena a arreglo
    cadenaAArreglo(cadena) {
        return cadena.split('');
    }
}

class OperacionesBases {
    // Convertir de base 10 a base 2
    base10a2(numero) {
        return numero.toString(2);
    }

    // Convertir de base 10 a base 8
    base10a8(numero) {
        return numero.toString(8);
    }

    // Convertir de base 10 a base 16
    base10a16(numero) {
        return numero.toString(16);
    }

    // Convertir de base 2 a base 10
    base2a10(numero) {
        return parseInt(numero, 2);
    }

    // Convertir de base 2 a base 8
    base2a8(numero) {
        return this.base10a8(this.base2a10(numero));
    }

    // Convertir de base 2 a base 16
    base2a16(numero) {
        return this.base10a16(this.base2a10(numero));
    }
}

// Ejemplo de uso
const operacionesMatematicas = new OperacionesMatematicas();
const operacionesCadenas = new OperacionesCadenas();
const operacionesArreglos = new OperacionesArreglos();
const operacionesBases = new OperacionesBases();
