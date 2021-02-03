
var plan = document.getElementById("planElegido").value;

var nombre = document.getElementById("defaultContactFormName").value

var edad
edad = parseInt(prompt("Ingrese su edad"))

var edadSocio = document.getElementById("EdadSocio")
console.log(edadSocio)

edadSocio.value = edad


// let casado
// casado = prompt("esta casado")


// let array25Solo = [
//     "plan: Exclusivo C, precio: 1000",
//     "plan: Exclusvio, precio: 2000",
//     "plan: Premium C, precio: 3000",
//     "plan: Premium, precio: 4000",
//     "plan: Live, precio: 5000", 
// ]
// let array37Solo = [
//     "plan: Exclusivo C, precio: 2000",
//     "plan: Exclusvio, precio: 3000",
//     "plan: Premium C, precio: 4000",
//     "plan: Premium, precio: 5000",
//     "plan: Live, precio: 6000", 
// ]
// let array50Solo = [
//     "plan: Exclusivo C, precio: 3000",
//     "plan: Exclusvio, precio: 4000",
//     "plan: Premium C, precio: 5000",
//     "plan: Premium, precio: 6000",
//     "plan: Live, precio: 7000", 
// ]
// let arrayMas50Solo = [
//     "plan: Exclusivo C, precio: 4000",
//     "plan: Exclusvio, precio: 5000",
//     "plan: Premium C, precio: 6000",
//     "plan: Premium, precio: 7000",
//     "plan: Live, precio: 8000", 
// ]
// let array25Casado = [
//     "plan: Exclusivo C, precio: 2000",
//     "plan: Exclusvio, precio: 3000",
//     "plan: Premium C, precio: 4000",
//     "plan: Premium, precio: 5000",
//     "plan: Live, precio: 6000", 
// ]
// let array37Casado = [
//     "plan: Exclusivo C, precio: 3000",
//     "plan: Exclusvio, precio: 4000",
//     "plan: Premium C, precio: 5000",
//     "plan: Premium, precio: 6000",
//     "plan: Live, precio: 7000", 
// ]
// let array50Casado = [
//     "plan: Exclusivo C, precio: 4000",
//     "plan: Exclusvio, precio: 5000",
//     "plan: Premium C, precio: 6000",
//     "plan: Premium, precio: 7000",
//     "plan: Live, precio: 8000", 
// ]
// let arrayMas50Casado = [
//     "plan: Exclusivo C, precio: 5000",
//     "plan: Exclusvio, precio: 6000",
//     "plan: Premium C, precio: 7000",
//     "plan: Premium, precio: 8000",
//     "plan: Live, precio: 9000", 
// ]

// if (casado == "si"){
//     casado = true;
// }
// else {
//     casado = false;
// }

// if (edad < 26 && casado == false){
//     for (let i = 0; i < array25Solo.length; i++){
//         console.log(array25Solo[i])
//     }
// }
// else if (edad < 37 && casado == false){
//     for (let i = 0; i < array37Solo.length; i++){
//         console.log(array37Solo[i])
//     }
// }
// else if (edad < 50 && casado == false) {
//     for (let i = 0; i < array50Solo.length; i++){
//         console.log(array50Solo[i])
//     }
// }
// else if (edad > 50 && casado == false){
//     for (let i = 0; i < arrayMas50Solo.length; i++){
//         console.log(arrayMas50Solo[i])
//     }
// }
// else if (edad < 26 && casado == true){
//     for (let i = 0; i < array25Casado.length; i++){
//         console.log(array25Casado[i])
//     }
// }
// else if (edad < 37 && casado == true){
//     for (let i = 0; i < array37Casado.length; i++){
//         console.log(array37Casado[i])
//     }
// }
// else if (edad < 50 && casado == true){
//     for (let i = 0; i < array50Casado.length; i++){
//         console.log(array50Casado[i])
//     }
// }
// else if (edad < 37 && casado == true){
//     for (let i = 0; i < arrayMas50Casado.length; i++){
//         console.log(arrayMas50Casado[i])
//     }
// }
// else {
//     console.log ("Ingrese correctamente la edad");
// }

const arrayProductos = [
    {plan: "Exclusivo", precio: 1000},
    {plan: "Premium", precio: 2000},
]
if (plan == "Exclusivo"){
    // let ArrayFiltrado = arrayProductos.filter ((el) => el.plan == "Exclusivo")
    // console.log(ArrayFiltrado)
    console.log(arrayProductos.filter ((el) => el.plan == "Exclusivo"))
}
else {
    console.log ("ingrese el plan correctamente")
}