# Test 2

El fragmento de código de nuestro fichero `test.js` nos devuelve un output no 
deseado. Queremos imprimir un valor incremental a cada segundo pero lo que 
nos devuelve el código es el mismo valor en cada iteración. 

1. Sin necesidad de ejecutar el código, ¿sabrías decirnos qué valor imprimiría
 por consola el script? ¿Cuál es el motivo?

    El valor que imprime en consola es
    ```
        > 5
        > 5
        > 5
        > 5
        > 5
    ```

    Este resultado es debido a que `var` define la variable globalmente, por
    lo tanto cuando se ejecutan las funciones callback todas apuntan a la
    misma variable `i` que vale `5` debido a que es el valor que adquiere al
    finalizar el bucle `for`.

2. Sabiendo que el output que buscamos es el que encuentras bajo estas líneas… 
¿Cómo solucionarías el fragmento de código para que el output sea el deseado?

    ```
        > 0
        > 1
        > 2
        > 3
        > 4
    ```

    Lo solucionaría utilizando `let` en vez de `var` para declarar la variable
    `i`. `let` crea una variable por cada iteración, a nivel de bloque, por lo
    tanto ahora cada función apunta a su correspondiente `i`, la que fue creada
    en la misma iteración.

    En caso de que tengo que ser compatible con ES5 se podría conseguir el mismo
    efecto con una IIFE, el código quedaría así:

    ```
        for (var i = 0; i < 5; i++) {
            (function(j) {
                setTimeout(function() {
                    console.log(j);
                }, 1000);
            })(i);
        }
    ```