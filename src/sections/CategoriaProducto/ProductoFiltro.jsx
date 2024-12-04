import { Categorias } from "../categoria.js";
import { HeroSecundario } from "../Hero/heroSecundario.jsx";
import {HeroSecundarioGost} from "../Hero/HeroWait.jsx";
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
        <HeroSecundarioGost />
      )}
    </>
  );
}
