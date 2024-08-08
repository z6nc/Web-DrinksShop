
export function recuperarCategorias(Producto) {
    const categorias = new Set();
    Producto.forEach(producto => {
        categorias.add(producto.categoria);
    });
    return Array.from(categorias);
}

export function recuperarMarca(Producto) {
    const Marcas = new Set();
    Producto.forEach(producto => {
        Marcas.add(producto.marca);
    });
    return Array.from(Marcas);
}

