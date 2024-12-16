import React, { useEffect, useState } from "react";
import { Categorias } from "../categoria";

export function BannerTipoProducto() {
     const [ImgTipo, setImgTipo] = useState([]); // Inicializa como array vacío
    
      useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const ID = urlParams.get("id"); // Obtiene el ID desde la URL
    
        if (ID) {
          const ImgCategoriaEncontrada = Categorias.filter((cate) => cate.id === ID);
          setImgTipo(ImgCategoriaEncontrada); // Actualiza el estado con los productos encontrados
        } else {
          console.error("ID no válido");
        }
      }, []); 
    return(
        <div>
            {ImgTipo.map((cate) => (
                <div key={cate.id}>
                    <img src={cate.imgSlider} alt={cate.nombre} />
                </div>
            ))}
        </div>
    )
    
}