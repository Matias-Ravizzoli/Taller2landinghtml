var input_nombre = document.getElementById("nombre");
var input_Email = document.getElementById("Email");
var input_Telefono = document.getElementById("Telefono");
var input_Tickets = document.getElementById("Tickets solicitados");
var input_submit = document.getElementById("submit");

input_submit.addEventListener("click", EnviarFormulario);

function EnviarFormulario(event){
    event.preventDefault();
    console.log("hay click");
    var valor_nombre = input_nombre.value;
    var valor_Email = input_Email.value;
    var valor_Telefono = input_Telefono.value;
    var valor_Tickets = input_Tickets.value;

    console.log(valor_nombre);
    console.log(valor_Email);
    console.log(valor_Telefono);
    console.log(valor_Tickets);

    var placeholder_nombre = document.getElementById("nombre_placeholder");
    var placeholder_Email = document.getElementById("Email_placeholder");
    var placeholder_Telefono = document.getElementById("Telefono_placeholder");

    placeholder_nombre.innerHTML = valor_nombre;
    placeholder_Email.innerHTML = valor_Email;
    placeholder_Telefono.innerHTML = valor_Telefono;

    elemento_feedback = document.getElementById("feedback");
    elemento_feedback.classList.remove("oculto");

    elemento_formulario = document.getElementById("formulario");
    elemento_formulario.classList.add("oculto");
}