# Test 3

En este caso, tenemos un código usando el objeto `Promise` (Promesa). Las *promises* 
(promesas) nos permiten manejar situaciones asíncronas en nuestras ejecuciones, 
pero tenemos un pequeño problema… No es una solución totalmente cross-browser. 
Sabemos que no funciona en Internet Explorer así que nos gustaría saber cómo 
modificarías nuestro código (`test.js`) para que funcione correctamente.

   He modificado el código en `test.js` para que funcione correctamente en Internet
   Explorer cambiando el objeto `Promise` por callbacks.
   Para mantener la misma funcionalidad del objeto `Promise` en Internet Explorer
   habría que utilizar una herramienta como *Babel* que nos permita convertir
   código de ES6 en código de ES5, en este caso el del objeto `Promise`.
