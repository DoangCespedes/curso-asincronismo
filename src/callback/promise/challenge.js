import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1'

// function fetchDataa(urlApi){
//     return fetch(urlApi)
// }

// fetchDataa(`${API}/products`)
//     .then(response => response.json())
//     .then(products => {
//         console.log(products);
//     })
//     .then(() => {
//         console.log('HOLA')
//     })
//     .catch(error => console.log(error));

fetchData(`${API}/products`)

