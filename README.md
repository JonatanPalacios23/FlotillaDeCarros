# TestProgra
repositorio para almacenar prueba de programación para procesos eficientes

-----------------------------------------------------------------------------------------------------------------------
------------------------- Instrucciones para levantar el ambiente local de desarrollo ---------------------------------
-----------------------------------------------------------------------------------------------------------------------

Paso1:
	Tienes que iniciar una terminal y ubicarte en la raíz de la aplicación.

Paso2:
	Tienes que instalar los node_modules para que la aplicación pueda ejecutarse sin ningún error,
	para esto tienes que escribir en la terminal lo siguiente ( npm install ), con esto se instalaran
	todos los módulos requeridos para levantar la aplicación.

Paso3:
	Después de haber instalado los node_modules, dentro de la terminal ubicada en la raíz de tu aplicación
	tienes que escribir lo siguiente para que comience la ejecución de la aplicación  ( npm run dev )


-----------------------------------------------------------------------------------------------------------------------
------------------------------------ Instrucciones de como levantar la aplicación -------------------------------------
-----------------------------------------------------------------------------------------------------------------------
Paso1:
	Luego de haber realizado las instrucciones para levantar el ambiente de desarrollo debemos de crear nuestra
	base de datos. La base de datos esta creada con MySQL, dentro de la aplicación hay un schema para poder crear 
	la base de datos.
Paso2:
	Luego de haber creado la base de datos tienes que revisar en el archivo ( index.js ) si la información de la 
	base de datos es correcta o es distinta, en el caso de ser distinta tienes que cambiar estos datos, ya sea el
	puerto, el nombre, contraseña o incluso si se ah cambiado el nombre de la base de datos, esto es para que pueda
	establecer una conexión y poder usarla para almacenar los datos de nuestra aplicación.
Paso3:
	Nuestra aplicación en este momento esta corriendo de forma local, así que después de haber creado la base de datos,
	tienes que ir al navegador y en la barra de direcciones tienes que escribir ( localhost:3200 ), y aparecerá la vista
 	principal de la aplicación
