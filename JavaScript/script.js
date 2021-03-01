let animacionPlan = document.querySelectorAll(".Imagen_Introduccion")

function MostrarScroll (){
    let scrolltop = document.documentElement.scrollTop;
    for (var i=0; i < animacionPlan.length; i++){
        let alturascroll = animacionPlan[i].offsetTop;
        if (alturascroll - 550< scrolltop){
            animacionPlan[i].style.opacity = 1;
            animacionPlan[i].classList.add("mostarPlanes")
        }
    }
}
window.addEventListener("scroll", MostrarScroll)

const cotizarPlan=()=> {
    let nombre = $("#defaultContactFormName").val()
    let telefono = $("#telefono").val()
    let mail = $("#defaultContactFormEmail").val()
    let edad = $("#EdadSocio").val()
    let plan = $("#PlanElegido").val()
    let estadoCivil = $("#estadoCivil").val()
    let hijos = $("#hijos").val()

    let divResumen = document.getElementById("resumen")
    let divResultado = document.getElementById("resultado")

    if (edad === '' || plan === '0' || nombre === ''|| telefono === '' || mail === ''|| hijos === ''){
        mostrarError ("#errorAlCompletar","Selecciono mal un dato")
        return
    }

    let cotizacion = {edad,plan,hijos,estadoCivil};

    divResumen.style.backgroundColor="#FFF"
    divResumen.style.display="block"
    divResumen.innerHTML='<div style="text-align:center"><img src="Imagenes/cargando.gif" width=100 height=100></div>';
    setTimeout (()=> {
        divResumen.style.textAlign="center"
        divResumen.innerHTML=`<h2>Resumen de Consulta</h2>
        <ul>
            <li>Nombre y Apellido: ${mayuscula(nombre)}</li>
            <li>Edad: ${mayuscula(edad)}</li>
            <li>Plan Elegido: ${mayuscula(plan)}</li>
            <li>Estado Civil: ${mayuscula(estadoCivil)}</li>
            <li>Hijos: ${mayuscula(hijos)}</li>
        </ul>`;
        let cotizacionFinal = cotizar(cotizacion);
        divResultado.style.display="block";
        divResultado.className="divResultado"
        divResultado.innerHTML=`<p class="textoCotizacion">$ ${cotizacionFinal} </p>`;
    },1500);

    

}

function cotizar(cotizacion){
    const {edad, plan, hijos,estadoCivil} =cotizacion;
    let  resultado = 2000;

    resultado = calcularEdad(edad)*resultado
    resultado = calcularPlan(plan)*resultado
    resultado = calcularEstadoCivil(estadoCivil)*resultado
    resultado = calcularHijos(hijos)*resultado
    return resultado
}
function calcularPlan(plan){
    var incrementoPlan
    if (plan === "Exclusivo C") {
        incrementoPlan = 1;
    }
    else if (plan === "Exclusivo") {
        incrementoPlan = 1.35
    }
    else if (plan === "Premium C") {
        incrementoPlan = 1.45
    }
    else if (plan === "Premium") {
        incrementoPlan = 1.75
    }
    else if (plan === "Live") {
        incrementoPlan = 2
    }
    return incrementoPlan
}

function calcularEdad(edad){
    var incrementoEdad
    if (edad<26) {
        incrementoEdad = 1
    }
    else if (edad < 37 && edad >25) {
        incrementoEdad = 1.30
    }
    else if (edad < 50 && edad >36) {
        incrementoEdad = 1.6
    }
    else if (edad > 49) {
        incrementoEdad = 1.9
    }
    return incrementoEdad
}

function calcularEstadoCivil(estadoCivil){
    var incrementoEstadoCivil
    if (estadoCivil === "Soltero") {
        incrementoEstadoCivil = 1
    }
    else if (estadoCivil === "Casado") {
        incrementoEstadoCivil = 1.85
    }
    else if (estadoCivil === "Concubinato") {
        incrementoEstadoCivil = 1.85
    }
    else if (estadoCivil === "Divorciado") {
        incrementoEstadoCivil = 1
    }
    else if (estadoCivil === "Viudo") {
        incrementoEstadoCivil = 1
    }
    return incrementoEstadoCivil
}


function calcularHijos (hijos){
    var incrementoHijos
    if (hijos === "1") {
        incrementoHijos = 1;
    }
    else if (hijos === "2") {
        incrementoHijos = 1.5
    }
    else if (hijos === "3") {
        incrementoHijos = 2
    }
    else if (hijos=== "4") {
        incrementoHijos = 2.3
    }
    else if (hijos === "5") {
        incrementoHijos = 2.5
    }
    return incrementoHijos
}

function mayuscula(palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.slice(1)
}

function mostrarError(elemento, mensaje) {
    divError = document.querySelector(elemento)
    divError.innerHTML = `<p class="alert alert-danger error">${mensaje}</p>`
    setTimeout(() => { divError.innerHTML = '' }, 2500)
}

$("#calcular").click(cotizarPlan)

$("#imagen_Exclusivo").click(function(){
    $("Exclusivo").slideToggle()
}
)

$("#button_Planes").click(function(){
    $('html, body').animate({
        scrollTop: $("#planes").offset().top
    },1000)
}
)

$("#button_Cotizar").click(function(){
    $('html, body').animate({
        scrollTop: $(".Formulario__contacto").offset().top
    },1000)
}
)


