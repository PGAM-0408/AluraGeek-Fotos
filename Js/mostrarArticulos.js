import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");

function crearCard(nombre, precio, imagen, id) {
    const articulo = document.createElement("div");
    articulo.className = "product-card";
    articulo.dataset.id = id; // Agregar el ID como atributo del dataset
    articulo.innerHTML = `
        <img src="${imagen}" alt="${nombre}">
        <h3>${nombre}</h3>
        <div class="product-info">
            <p> $ ${precio}</p>
            <button class="delete-btn" onClick="eliminarArticulo(${id})">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </div>
    `;
    return articulo;
}

export async function listarArticulos() {
    try {
        const listaAPI = await conexionAPI.listaArticulos();
        listaAPI.forEach(articulo => {
            const card = crearCard(articulo.nombre, articulo.precio, articulo.imagen, articulo.id);
            lista.appendChild(card);
        });
    } catch {
        lista.innerHTML = `<h2 class="mensaje-error">No se encontraron artículos</h2>`;
    }
}

listarArticulos();