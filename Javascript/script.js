
var divParticular =  document.getElementById("divParticular")
var divDependencia = document.getElementById("divDependencia")
var divMonotributo = document.getElementById("divMonotributo")


const guardarStorage = () => {
    let nombre = $("#nombreModal").val()
    let telefono = $("#telefonoModal").val()
    let mail = $("#mailModal").val()

    localStorage.setItem ("Nombre", nombre)
    localStorage.setItem ("Telefono", telefono)
    localStorage.setItem ("Mail", mail)
}

function MostarModal(){
    $('#myModal').modal('show')
}

function mostrarDivParticular(){
    divParticular.style.display="block"
}
function cerrarDivParticular (){
    divParticular.style.display="none"
}
function mostrarDivDependencia(){
    divDependencia.style.display="block"
}
function cerrarDivDependencia (){
    divDependencia.style.display="none"
}
function mostrarDivMonotributo(){
    divMonotributo.style.display="block"
}
function cerrarDivMonotributo (){
    divMonotributo.style.display="none"
}

$(document).ready(MostarModal)

$("#btnParticular").click(mostrarDivParticular)
$("#btnDependencia").click(mostrarDivDependencia)
$("#btnMonotributo").click(mostrarDivMonotributo)

$("#btnCerrar").click(cerrarDivParticular)
$("#btnCerrarDependencia").click(cerrarDivDependencia)
$("#btnCerrarMonotributo").click(cerrarDivMonotributo)

$("#btnModalGuardar").click(guardarStorage)
