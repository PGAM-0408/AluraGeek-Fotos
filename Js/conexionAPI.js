async function listaArticulos() {
    const conexion = await fetch('https://fake-api-pgam.vercel.app/articulos');
    const articulos = await conexion.json();
    return articulos;
}

async function agregarArticulo(nombre, precio, imagen) {
    const conexion = await fetch('https://fake-api-pgam.vercel.app/articulos', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nombre: nombre,
            precio: precio,
            imagen: imagen
        })
    });
    const articulo = await conexion.json();

    if (!conexion.ok) {
        throw new Error("No se pudo agregar el articulo");
    }

    return articulo;
}

async function eliminarArticulo(id) {
    const conexion = await fetch(`https://fake-api-pgam.vercel.app/articulos/${id}`, {
        method: "DELETE",
    });

    if (!conexion.ok) {
        throw new Error("No se pudo eliminar el artículo");
    }
}

export const conexionAPI = {
    listaArticulos,
    agregarArticulo,
    eliminarArticulo
};
