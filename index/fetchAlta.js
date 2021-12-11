let productos = {
  idp: 12,
  nombres: "FAR-GI-2021",
	idc: 2,
  codigob: "12-12",
  nombrep: "Lexotiroxina sódica",
  tipop: "Antibiotico",
  receta: "Si",
  fechav: "2021-10-18",
  cantidad: 20,
  precio: "$86.12",
  descripcion: "Para reemplazar la tiroxina",
	idv: 4,
  lugare: "Toluca",
  foto: "fotos/medicamento12.png",
  estatus: "En proceso"
}

fetch('http://127.0.0.1:8000/api/altaproducto',{
  method: 'POST',
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
