control()

function control(){

  encriptar();
  desencriptar();
  copiar();

  var buttonInput = document.querySelector(".texto");
  buttonInput.addEventListener('input', function(){
    
    if(buttonInput.value == ""){
      reset();
    }
  });
}

function encriptar(){

  var button = document.querySelector(".button-area");
  
  button.addEventListener('click', function(e){
     e.preventDefault();
     var buttonInput = document.querySelector(".texto").value;
     if(buttonInput!= ""){
      var palabraEncriptada = buttonInput.replace(/e/gm,"enter");
        palabraEncriptada = palabraEncriptada.replace(/i/gm,"imes");
        palabraEncriptada = palabraEncriptada.replace(/a/gm, "ai");
        palabraEncriptada = palabraEncriptada.replace(/o/gm,"ober");
        palabraEncriptada = palabraEncriptada.replace(/u/gm,"ufat");
      var mostrarPalabra = document.querySelector(".texto2");
      mostrarPalabra.textContent = palabraEncriptada;
     
      visualizar();
     }
  });
 
}

function desencriptar(){
  var mostrarPalabra = document.querySelector("#desencriptar");
  
  mostrarPalabra.addEventListener('click', function(e){
    e.preventDefault();
    var textoEncriptado = document.querySelector(".texto").value;
    if(textoEncriptado!=""){
    var palabraDesencriptada = textoEncriptado.replace(/enter/gm, "e");
     palabraDesencriptada = palabraDesencriptada.replace(/imes/gm, "i");
     palabraDesencriptada = palabraDesencriptada.replace(/ai/gm, "a");
     palabraDesencriptada = palabraDesencriptada.replace(/ober/gm, "o");
     palabraDesencriptada = palabraDesencriptada.replace(/ufat/gm, "u");
    
    var mostrarPalabra = document.querySelector(".texto2");
      mostrarPalabra.textContent = palabraDesencriptada;

      visualizar();
    }
  });
}

function copiar(){
 var copiarPalabra = document.querySelector(".copiar");
 var textoCopiado = document.querySelector(".texto2");

 copiarPalabra.addEventListener('click', function(e){
   e.preventDefault();
    textoCopiado.select();
    document.execCommand("copy");
    
 });
}


function visualizar(){
  var img = document.querySelector(".img-right");
  img.classList.add("img-none");
  var title= document.querySelector(".text-title");
  title.classList.add("title-none");
  var buttonCopy = document.querySelector(".copiar");
  buttonCopy.classList.add("copiar-visible");
  var area = document.querySelector(".texto2");
  area.classList.add("area-actualizada");
}

function reset(){
  var img = document.querySelector(".img-right");
  img.classList.remove("img-none");
  var title= document.querySelector(".text-title");
  title.classList.remove("title-none");
  var buttonCopy = document.querySelector(".copiar");
  buttonCopy.classList.remove("copiar-visible");
  var area = document.querySelector(".texto2");
  area.classList.remove("area-actualizada");
  var mostrarPalabra = document.querySelector(".texto2");
  mostrarPalabra.textContent = "";
  
}