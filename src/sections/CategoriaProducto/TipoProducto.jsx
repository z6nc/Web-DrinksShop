import { useEffect, useState } from "react";
import { Producto } from "../productos.ts";
import { TipoProductoWait } from "./TipoProductoWait.jsx";
// import { SvgTipos } from "../SvgTipos.jsx";

export function TipoProducto() {
  const [Tipo, setTipo] = useState([]); // Inicializa como array vacío

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const ID = urlParams.get("id"); // Obtiene el ID desde la URL

    if (ID) {
      const productosFiltrados = Producto.filter((producto) => producto.tipo === ID);
      setTipo(productosFiltrados); // Actualiza el estado con los productos encontrados
    } else {
      console.error("ID no válido");
    }
  }, []); 

  return (
    <>
    <section className="flex flex-wrap gap-3 lg:gap-6  pb-8 lg:max-w-4xl lg:mx-auto   justify-between mx-3">
    {
    
    Tipo.length > 0 ? ( // Comprueba si hay productos para mostrar
        Tipo.map(({ id, nombre, img, precio ,tipo}) => (
            <article
            key={id}
              id="articulo"
              className="bg-white rounded-lg  overflow-hidden  flex flex-col justify-between gap-2 "
            >
                <section className=" flex flex-col items-center text-center">
                    <div className="w-56 overflow-hidden">
                        <img className="w-full h-full object-cover" src={img} alt="" />
                   </div>
                <div className=" text-center overflow-hidden flex flex-wrap flex-col w-44  items-center justify-center">
                    <h4 className="lg:text-base  text-[15px]   font-medium- uppercase ">
                    {nombre}
                    </h4>
                    <div className="inline-flex items-center gap-3 justify-center font-Nunito text-gray-600">
                    <p>{tipo}</p>/
                    <h3 className=" font-semibold tracking-wider ">${precio}</h3>
                    </div>
                </div>
                </section>
             

              <button className=" w-full h-9 bg-black border-[1px] border-black  text-white font-Nunito hover:bg-white hover:text-black transition ">
                <a
                  className="lg:text-base text-sm  my-4 font-bold"
                  href={`productoDetalle?id=${id}`}
                >
                   ADD CARD
                </a>
              </button>
            </article>
        ))
      ) : (
        <TipoProductoWait/>
      )}
    </section>
     
    </>
  );
}
