# Test 1

Para responder a este test encontrarás un archivo llamado `test.js` en esta
misma carpeta donde hay un pequeño fragmento de código que deberás analizar
y responder a las siguientes cuestiones.

1. En el fragmento de código de nuestro archivo (`test.js`) podemos encontrar
   hasta 3 variables. ¿Podrías decirnos cuál sería el valor de todas ellas al
   finalizar la ejecución del script?

    El valor de `rgb` es:
    
    ```
    {
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF",
        white: "#FFFFFF",
        black: "#000000"
    }
    ```

    El valor de `wb` es:
    
    ```
    {
        white: "#FFFFFF",
        black: "#000000"
    }
    ```

    El valor de `colors` es:

    ```
    {
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF",
        white: "#FFFFFF",
        black: "#000000"
    }
    ```

    Las variables `rgb` y `colors` hacen referencia al mismo objecto.

2. Modifica el código para que las variables `rgb` y `wb` mantengan sus valores
   iniciales y `colors` tenga los valores de ambas al finalizar la ejecución del
   script.

    Codigo modificado en `test.js`

3. Además, tenemos un bug localizado en dispositivos con Internet Explorer…
   El código de nuestro script no funciona y necesitamos que se ejecute también
   en este navegador. ¿Sabrías identificar cuál es el problema? ¿Qué solución nos
   propones?

    El problema es que Internet Explorer no es compatible con el metodo Object.assign().

    Una posible solución sería crear un polyfill para proporcionar la misma funcionalidad
    en los navegadores que no incluyan Object.assign() de forma nativa.

    Ejemplo del polyfill:

    ```
    if (typeof Object.assign !== 'function') { // Must be writable: true, enumerable: false, configurable: true
        Object.defineProperty(Object, 'assign', {
            value: function assign(target, varArgs) { // .length of function is 2
                'use strict';
                if (target === null || target === undefined) {
                    throw new TypeError('Cannot convert undefined or null to object');
                }

                var to = Object(target);

                for (var index = 1; index < arguments.length; index++) {
                    var nextSource = arguments[index];

                    if (nextSource !== null && nextSource !== undefined) {
                        for (var nextKey in nextSource) {
                            // Avoid bugs when hasOwnProperty is shadowed
                            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                                to[nextKey] = nextSource[nextKey];
                            }
                        }
                    }
                }
                return to;
            },
            writable: true,
            configurable: true,
        });
    }
    ```

**PS**: No es estrictamente necesario tener Internet Explorer para poder identificar y/o resolver el bug.
