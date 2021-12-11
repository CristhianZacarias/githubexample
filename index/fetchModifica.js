let productos = {
  idp: 7,
  codigob: "12345678910",
  nombrep: "Ejemplo"
}

fetch('http://127.0.0.1:8000/api/modificaproductos/',{
  method: 'PUT',
  mode: 'cors',
  body: JSON.stringify(productos),
  headers:{
    'Accept': 'application/json',
    'Content-Type':'application/json'
  }
})
.then(resp=>resp.json())
.then(console.log)
.catch(console.error);
