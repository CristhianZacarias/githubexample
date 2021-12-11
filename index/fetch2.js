fetch('http://127.0.0.1:8000/api/cargap')
.then(resp=>resp.json())
.then(respObj=> {
  console.log(respObj);
})
