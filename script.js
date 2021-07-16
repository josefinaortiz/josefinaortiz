let Inicio = document.querySelector ("#Inicio");
let Primero = document.querySelector ("#Primero");

Inicio.addEventListener ("click", irPrimero, false);
function irPrimero (e) {
    Primero.scrollIntoView({behavior: "smooth"});
}

let SobreMi = document.querySelector ("#SobreMi");
let Segundo = document.querySelector ("#Segundo");

SobreMi.addEventListener ("click", irSegundo, false);
function irSegundo (e) {
    Segundo.scrollIntoView({behavior: "smooth"});
}

let Estudios = document.querySelector ("#Estudios");
let Tercero = document.querySelector ("#Tercero");

Estudios.addEventListener ("click", irTercero, false);
function irTercero (e) {
    Tercero.scrollIntoView({behavior: "smooth"});
}

let MisViajes = document.querySelector ("#MisViajes");
let Cuarto = document.querySelector ("#Cuarto");

MisViajes.addEventListener ("click", irCuarto, false);
function irCuarto (e) {
    Cuarto.scrollIntoView({behavior: "smooth"});
}

let Contacto = document.querySelector ("#Contacto");
let Quinto = document.querySelector ("#Quinto");

Contacto.addEventListener ("click", irQuinto, false);
function irQuinto (e) {
    Quinto.scrollIntoView({behavior: "smooth"});
}

const configuracion_ventana =
  "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";



let github = document.getElementById ("github");
github.addEventListener("click", abrirGitHub);
function abrirGitHub() {
    github = window.open(
        "https://github.com/josefinaortiz", "github.com", configuracion_ventana
    );
}

mail.addEventListener ("click", abrirMail);
function abrirMail () {
mail = window.open (
    "mailto:josefinaortizvelzi@gmail.com", "gmail.com", configuracion_ventana
);
}


instagram.addEventListener ("click", abrirInstagram);
function abrirInstagram (){
    instagram = window.open (
        "https://www.instagram.com/josefiina.ortiz/?hl=es-la", "instagram.com", configuracion_ventana
    )
}