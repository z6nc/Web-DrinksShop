import { Producto } from "./productos.ts";

export function recuperarCategorias(Producto) {
    const categorias = new Set();
    Producto.forEach(producto => {
        categorias.add(producto.categoria);
    });
    return Array.from(categorias);
}
console.log(recuperarCategorias(Producto));
