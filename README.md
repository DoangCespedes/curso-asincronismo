𝗖𝗹𝗮𝘀𝗲 #𝟳: 𝗫𝗠𝗟𝗛𝗧𝗧𝗣𝗥𝗲𝗾𝘂𝗲𝘀𝘁𝟳/𝟮𝟭 📤 . 📲 ++XMLHttpRequest++ es un objeto de JS que permite hacer peticiones hacia servicios en la nube(URLs o APIs). . 📪 ++Existen 5 estados en un llamado XMLHttpRequest:++ .

0 → Se ha inicializado.
1 → Loading (cargando).
2 → Se ha cargado.
3 → Procesamiento si existe alguna descarga.
4 → Completado. .
📫 ++Métodos y propiedades:++ . xmlhttp.open() → Prepara la petición para ser enviada tomando tres parámetros: prótocolo, url, asíncrono (true). xmlhttp.readyState → Retorna el estado de la petición. xmlhttp.onreadystatechange → Un eventHandler que es llamado cuando la propiedad readyState cambia. xmlhttp.status → Retorna el estado de la respuesta de la petición. (200,400,500) xmlhttp.send() → Envía la petición. . 📬 ++Características del protocolo http:++ . ++Verbos++: Los verbos indican acciones que están asociadas a peticiones y recursos, es decir, sirven para la manipulación de recursos cliente/servidor. Los Verbos http son:

GET → Solicita un recurso.
HEAD → Solicita un recurso pero sin retornar información, la estructura de esta petición es igual que get tanto en su headers como estatus. Es útil cuando vamos a utilizar API, para comprobar si lo que vamos a enviar esta correcto y puede ser procesado.
POST → Sirve para la creación de recursos en el servidor.
PUT → Actualiza por completo un recurso, reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la petición.
PATCH → Actualiza parcialmente un recurso.
DELETE → Elimina un recurso. .
📭 ++Los códigos de estados del servidor:++ . El código de estado (status codes) sirve para describir el estado de la petición hecha al servidor.

1xx → Indican que la petición fue recibida por el servidor, pero está siendo procesada por el servidor.
2xx → Indican que la petición fue recibida, aceptada y procesada correctamente.
3xx → Indican que hay que tomar acciones adicionales para completar la solicitud.
4xx → Indican errores del lado del cliente que hizo mal una solicitud.
5xx → Indican errores del servidor. Suelen aparecer cuando existe un fallo en la ejecución en el servidor. .
📧 ++Los códigos más comunes a la hora de interactuar con una API son:++ .

200 → OK → Indica que todo está correcto.
201 → Created → Todo está correcto cuando se hizo una solicitud POST, el recurso se creó y se guardó correctamente.
204 → No Content → Indica que la solicitud se completó correctamente pero no devolvió información. Este es común cuando se hacen peticiones con el verbo DELETE.
400 → Bad Request → Indica que algo está mal en la petición (no encontró algo).
401 → Unauthorized → Significa que antes de hacer una solicitud al servidor nos debemos autenticar.
403 → Forbidden → Indica que no tenemos acceso a ese recurso aunque se esté autenticado.
404 → Not Found → Indica que no existe el recurso que se está intentando acceder.
500 → Internal Server Error → Indica que algo falló, es un error que retorna el servidor cuando la solicitud no pudo ser procesada. . Fuente: aquí .
🖍️ ++Ejemplo en VSC:++ .

Ir a la consola y ubicarnos en la carpeta del proyecto y escribir el comando para instalar el paquete ++XMLHttpRequest++: npm i xmlhttprequest
Ir al ++VSC++ y crear un archivo llamado challenge.js en la ruta src/callback. El archivo queda:

const XMLHttppRequest = requiere('xmlhttprquest'); //llamado al XmlHttpRequest
const API = 'https://api.escuelajs.co/api/v1'; //API en mayúscula porque es una referencia que no va a cambiar

function fetchData(urlApi, callback){ //urlApi: no confundir y colocar API
	let xhttp = new XMLHttppRequest(); //referencia a new XMLHttpRequest

	xhttp.open('GET', urlApi, true); //petición "obtener" con true para habilitarlo
	xhttp.onreadystatechange = function(event) { //escucha diferentes estados de la solicitud y conocer cuando está disponible la información
	if(xhttp.readyState === 4) { //si el estado ha sido completada la llamada
		if(xhttp.status === 200 ){ //el servido responde de forma correcta
			callback(null, JSON.parse(xhttp.responseText)); //dentro de xhttp.responseTex recibimos lo que entrega el servidor en texto y se hace la transformación en JSON
		}
	} else {
		const error = new Error('Error' + urlApi);
		return callback(error,null); //es null porque no se está regresando ningún dato
	}
	}
	xhttp.send();
}



🤞🏼 𝗖𝗹𝗮𝘀𝗲 #𝟭𝟬: 𝗤𝘂é 𝘀𝗼𝗻 𝗹𝗮𝘀 𝗽𝗿𝗼𝗺𝗲𝘀𝗮𝘀 𝟭𝟬/𝟮𝟭 🤞🏼 . 🪃 Un ++callback++ devuelve una función en los parámetros, cuando llamamos varias veces un callback, estaremos colocando muchas lineas de código y sería engorroso, por eso nacen las promesas, éstas optimizan y permiten leer mejor el código con pocas lineas. . 🫱🏼‍🫲🏾 Las ++promesas++ son asíncronas, por lo que el código continuará su ejecución normalmente y luego dirá si la promesa se resolvió o se rechazó. Por lo que varias promesas pueden llegar a entrar en ejecución al mismo tiempo. . Las promesas pueden suceder: .

Ahora
En el futuro
Nunca .


🛠️ ++Para crear una promesa:++ . Utilizamos la palabra reservada new seguida de la palabra Promise que es el constructor de la promesa. Este constructor recibe un único parámetro que es una función, la cuál a su vez, recibe otros dos parámetros: resolve y reject.

El parámetro ++resolve++ se utiliza para cuando la promesa devuelve el valor correctamente.
El parámetro ++reject++, se usa en el que caso de que no funcione. . 📝 ++Ejemplo:++

 🗃️ Una Promesa puede estar en uno de los siguientes estados: .

Pendiente pending → Una promesa inicia en este estado: no cumplida, no rechazada:
Una promesa inicialmente está pendiente.
Cumplida fulfilled → Significa que la operación se completó satisfactoriamente, .then(va => …)
Cuando llamamos a resolve entonces la promesa pasa a estar resuelta.
Cuando una promesa se resuelve entonces se ejecuta la función que pasamos al método .then
Rechazada rejected → significa que la operación falló, .catch(err => …)
Si llamamos a reject pasa a estar rechazada (obtenemos un error que nos va a indicar la razón del rechazo).
Si la promesa es rechazada entonces se ejecuta la función que pasamos a .catch .

======================================================================================================

🎢 𝗖𝗹𝗮𝘀𝗲 #𝟭𝟯: 𝗙𝘂𝗻𝗰𝗶𝗼𝗻𝗲𝘀 𝗮𝘀í𝗻𝗰𝗿𝗼𝗻𝗮𝘀 𝟭𝟯/𝟮𝟭 🎢 . 🔁 ++¿Qué es una función asíncrona?++ . La declaración de función ++async++ define una función asíncrona que devuelve un objeto, lo cual permite a un programa correr una función sin congelar todo la compilación. Dada que la finalidad de las funciones async/await es simplificar el comportamiento del uso síncrono de promesas, se hace más fácil escribir promesas. . 🔏 La estructura se compone por las palabras reservadas async y await: .

La palabra async antes de la función, hace que la función devuelva una promesa.
La palabra await se utiliza dentro de las funciones async, lo que hace que el programa espere hasta que la variable(promesa) se resuelva para continuar. .
✏️ ++Ejemplo con código:++ .

Ir a VSC, crear dentro de la carpeta src una carpeta llamada ++async++.
En la ruta src/async crear el archivo ++index.js++
Dentro del archivo index.js, se crea la promesa y luego se valida si la promesa se resolverá, también se hace el llamado de la misma y luego se busca mostrar como se desenvuelve con await. En el ejemplo se usa el if ternario. .

🚥 ++¿Qué es un operador if ternario?++ . El operador ternario consta de 3 partes: condición ? expresión1 : expresión2;

La primera es la lógica, se evalúa una condición.
La segunda parte está después del signo de cierre de interrogación ?, ésta se ejecuta solo si la condición es verdadera true.
La tercera parte está después del símbolo de dos puntos :, ésta se ejecuta solo si la condición resulta falsa false.
Fuente: aquí Ejemplo:


var a = 5;
var b = 3;
var c = a > b ? "Es mayor" : "Es menor";
//Si la condición después del símbolo igual (=) se cumple, entonces se tendrá el valor: “Es mayor”, de lo contrario tomará el valor: “Es menor”.