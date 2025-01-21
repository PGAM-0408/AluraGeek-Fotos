import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function crearArticulo(evento) {

    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    try{
        await conexionAPI.agregarArticulo(nombre, precio, imagen); 
    }catch(error){
        alert("Error al agregar el articulo");
    }


}

formulario.addEventListener("submit", evento => {crearArticulo(evento)});