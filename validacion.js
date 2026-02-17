// let usuario = document.getElementById("usuario")
//  usuario.addEventListener("keydown",function(evento){
//    if(evento.keyCode === 8){ 
//     evento.preventDefault()
//     this.value += "borrando"
//    }
//  })
let usuario = document.getElementById("usuario")
let mensaje = document.getElementById("mensaje")
 usuario.addEventListener("keydown",function(evento){
   this.value = this.value.toLowerCase()
   this.value =this.value.replace(/[^a-z]/g,"")
   this.borderColor = "2px solid"
   if(this.value == ""){

    
      mensaje.textContent = "usuario invalido"
      this.style.borderColor = "red"
   }
   else {
      mensaje.textContent = "usuario valido"
       this.style.borderColor = "green"
   }
 })