import { Categorias } from "../categoria.js";
import { HeroSecundario } from "../heroSecundario.jsx";
import { useEffect, useState } from "react";

export function ProductoHero() {
  const [encontrado, setEncontrado] = useState(null); // Usa `null` para diferenciar estado inicial

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const ID = urlParams.get("id"); // Obtendrá un string automáticamente
  
    if (ID) {
      const encontrado = Categorias.find((categoria) => categoria.id === ID);
      setEncontrado(encontrado);
    } else {
      console.error("ID no válido");
    }
  }, []);
  

  return (
    <>
      {/* Verifica si `encontrado` existe antes de renderizar */}
      {encontrado ? (
        <HeroSecundario ImgPrincipal={encontrado.img} />
      ) : (
        <p>Cargando o no se encontró la categoría</p>
      )}
    </>
  );
}
