# Backend-prueba

## instalacion

Luego de clonar el repositorio ejecuta el comando 
*npm install*

para correr el proyecto en produccion debes ejecutar el comando
*npm run start*.
Con esto ya podemos ver nuestro proyecto en el puerto 4200 como es costumbre.

## Aplicacion

en el inicio de la aplicacion vamos a tener esta interfaz
[![Captura2.jpg](https://i.postimg.cc/bvvCf2sj/Captura2.jpg)](https://postimg.cc/VJ3Bjvq7)

para obtener todos los usuarios precionamos en boton listar y nuestro Frontend va a enviar una peticion a nuestro Backend y obtendremos los usuarios registrados en la aplicación

[![Captura3.jpg](https://i.postimg.cc/3rjg9xxj/Captura3.jpg)](https://postimg.cc/jC5wSKNC)

luego de que el Frontend obtenga respues listara nuestros usuarios en una tabla con algunos botones para hacer varias operaciones

si precionamos el boton de nuevo al lado de listar obtendremos un formulario donde podremos ingresar los datos de el usuario que deseamos registrar si dejamos algun campo vacio nuestro backend nos devolvera un mensaje que sera mostrado por medio de un alert al usuario con el error producido

[![Captura4.jpg](https://i.postimg.cc/nh9rR318/Captura4.jpg)](https://postimg.cc/BjsJtcyN)

luego de ingresar los datos precionamos en boton de guardar para envia los datos a nuestro Backend para que este guarde la informacion en nuestra base de datos

si precionamos el boton de Addtelefono obtendremos un formulario donde podremos agregar un telefono a el usuario tambien podremos agregar un email si le damos al el boton addemail

el boton de mas informacion nos muestra los telefonos y emails agregados por el usuario

[![Captura5.jpg](https://i.postimg.cc/JzBrRtgS/Captura5.jpg)](https://postimg.cc/18shHRyK)

en esta pantalla tendremos un boton que elimina los telefonos de el usuario y el email

por ultimo tendremos un input en la cabecera que busca a los usuarios y los lista por su nombre

## Tener en cuenta

* si el usuario no tiene mas informacion adicional no se mostrara nada al dar al boton mas informacion

* si buscas a el usuario por su nombre y escribe un nombre no registrado en la base de datos la tabla no mostrara datos 

* si el usuario no tiene email e telefonos no mostrara nda el boton de mas informacion 

