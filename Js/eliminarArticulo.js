import { conexionAPI } from "./conexionAPI.js";


export async function manejarEliminar(event) {
    if (event.target.closest(".delete-btn")) {
        const card = event.target.closest(".product-card");
        const productId = card.dataset.id;

        try {
            await conexionAPI.eliminarArticulo(productId);
            card.remove();
            console.log(`Producto con ID ${productId} eliminado.`);
        } catch (error) {
            console.error("Error al eliminar el producto:", error);
        }
    }
}

document.addEventListener("click", manejarEliminar);
