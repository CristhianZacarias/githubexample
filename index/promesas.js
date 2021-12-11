function sumarlento(numero){
  var promesa = new Promise(function (resolve, reject){
    setTimeout(function(){
       resolve(numero +1)
      //reject("Sumar lento fallo");
    }, 800)
  })
  return promesa;
}

function sumarrapido(numero){
  var promesa = new Promise(function (resolve, reject){
    setTimeout(function(){
      resolve(numero *2)
    }, 300)
  })
  return promesa;
}

function retornaTrue(){
  return true;
}


Promise.all([sumarlento(5), sumarrapido(10)])
.then(respuestas => {
  console.log(respuestas);
})
.catch(console.log);
