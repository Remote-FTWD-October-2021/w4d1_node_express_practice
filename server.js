
const chalk = require('chalk');
const express = require('express') //1. Importo express

const app = express() //2. Llamar a la funcion de express() y almacenarlo en la variable app

//MIDDLEWARE
app.use(express.static('public')); //Esto es necesario para indicarle a nuestra app que tenemos una carpeta de archivos estáticos en public

//ROUTES
app.get('/', (request, response)=>{
  response.sendFile(__dirname + '/index.html');
})

app.get('/contact', (request, response)=>{
  response.send('Contact page')
})

app.listen(3000, ()=>{ //3. Activar el app.listen() para que mi servidor esté activo en un puerto específico
  console.log('Servidor activo en el puerto 3000')
})

// localhost:3000






console.log(chalk.red('Hello Ironhack'));

//Para iniciar un archivo con node:
//$ node <nombre del archivo>

//Para actualizar npm:
// $ npm install -g npm
// $ sudo npm install -g npm

//PASOS para preparar mi proyecto para utilizar paquetes de npm

//1. Inicializo npm:
  //$ npm init -y
  //Este comando va a crearme un archivo que se llama package.json. Este archivo va a contener toda la información de mi proyecto, desde el nombre y la version hasta la lista de los paquetes de npm que nos hacen falta para ejecutar mi proyecto.

//2. Instalo el paquete de npm que me interesa (en este caso, el paquete de chalk)
  // $ npm install chalk

  //Esto va a provocar que pasen 3 cosas: 
    //1. Se crear un archivo que se llama package-lock.json. Este paquete nunca lo vamos a modificar a mano ni tampoco vamos a entrar en él. Solo es importante que exista ya que contiene información más detallada del package.json

    //2. Se crea una carpeta llamada node_modules. En esta carpeta van a estar instaladas todas las dependencias (paquetes de npm) que instale en este proyecto

    //3. En el package.json se crea una propiedad nueva llamada "dependencies: {}". Dentro de esta propiedad se van a ir añadiendo todos los nombres de los paquetes que he instalado en este proyecto.


//EXTRA: Si no tienes una carpeta node_modules instalada, tienes que ejecutar:

  // $ npm install

  //Este comando lo que hace es leer todas las dependencias escritas en el package.json y las instala


  //3. Importo en mi archivo JavaScript el paquete que he instalado en el node modules:

    // const chalk = require('chalk')
    // const express = require('express')

//EXTRA: Si queremos indicarle a git que ignore archivos especificos, tenemos que crear un archivo especial que se llama .gitignore. En él escribiremos el nombre de todas las carpetas y archivos que queremos que git no haga tracking. Es decir, todo lo que esté dentro del gitignore no va a ser subido a github.