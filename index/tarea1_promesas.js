// ------------------------------Resolve

/*function combinada(numero){
  var promesa = new Promise(function (resolve, reject){
    setTimeout(function(){
      resolve(numero *(4+6)+3*6-(10+2))
    }, 300)
  })
  return promesa;
}

combinada(5).then(function(resultado){
  console.log(resultado)
});*/

// -----------------------------------Reject

/*function mensaje(numero){
  var promesa = new Promise(function (resolve, reject){
    if (numero>=18) {
      reject("Eres un adulto")
    }
    setTimeout(function(){
      resolve(numero + 1)
    }, 300)
  })
  return promesa;
}

mensaje(14)
.then(nuevoValor => mensaje(nuevoValor))
.then(mensaje)
.then(nuevoNumero => {
  console.log(nuevoNumero)
})
.catch(error => {
  console.log('Error en promesa');
  console.log(error);
});*/


// --------------------------------Promesa All

/*function multiplicar(numero){
  var promesa = new Promise(function (resolve, reject){
    setTimeout(function(){
       resolve(numero *10*5-10)
      //reject("Sumar lento fallo");
    }, 800)
  })
  return promesa;
}

function dividir(numero){
  var promesa = new Promise(function (resolve, reject){
    setTimeout(function(){
      resolve(numero /2-12*4)
    }, 300)
  })
  return promesa;
}

function retornaTrue(){
  return true;
}


Promise.all([multiplicar(5), dividir(40)])
.then(respuestas => {
  console.log(respuestas);
})
.catch(console.log);*/

// -------------------------------------Promesa RACE

function promesarace(numero){
  var promesa = new Promise(function (resolve, reject){
    setTimeout(function(){
       resolve(numero *(8-3)-(4+2))
      //reject("Sumar lento fallo");
    }, 100)
  })
  return promesa;
}

function promrace(numero){
  var promesa = new Promise(function (resolve, reject){
    setTimeout(function(){
      resolve((numero /4*3-5)*(15-9/3*5+3))
    }, 300)
  })
  return promesa;
}

function retornaTrue(){
  return true;
}


Promise.race([promesarace(3), promrace(8)])
.then(respuestas => {
  console.log(respuestas);
})
.catch(console.log);
