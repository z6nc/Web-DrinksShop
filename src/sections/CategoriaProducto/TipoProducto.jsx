import { useEffect, useState } from "react";
import { Producto } from "../productos.ts";
import { TipoProductoWait } from "./TipoProductoWait.jsx";
import { SvgTipos } from "../SvgTipos.jsx";

export function TipoProducto() {
  const [Tipo, setTipo] = useState([]); // Inicializa como array vacío

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const ID = urlParams.get("id"); // Obtiene el ID desde la URL

    if (ID) {
      const productosFiltrados = Producto.filter(
        (producto) => producto.tipo === ID
      );
      setTipo(productosFiltrados); // Actualiza el estado con los productos encontrados
    } else {
      console.error("ID no válido");
    }
  }, []);

  return (
    <>
      <section className=" flex flex-wrap gap-3 lg:gap-6  pb-8 lg:max-w-6xl lg:mx-auto  justify-center mx-3">
        {Tipo.length > 0 ? ( // Comprueba si hay productos para mostrar
          Tipo.map(({ id, nombre, img, precio, tipo }) => (
            <article
              key={id}
              id="articulo"
              className="bg-white rounded-lg  overflow-hidden  flex flex-col justify-between gap-2 animate-fade-in-up"
            >
              <section>
                <div className=" w-44 lg:w-full  overflow-hidden bg-[#f1f1f1]">
                  <img
                    className=" w-full lg:w-72 h-full object-cover "
                    src={img}
                    alt=""
                  />
                </div>
                <div className=" text-center overflow-hidden flex flex-wrap flex-col w-44 lg:w-full  mx-auto pt-2">
                  <h4 className="  text-sm lg:text-[15px] uppercase">{nombre}</h4>
                  <div className="inline-flex items-center gap-3 justify-center  text-gray-600 py-1">
                    <p>{SvgTipos[tipo]}</p>/
                    <h3 className="  tracking-wider text-base ">${precio}</h3>
                  </div>
                </div>
              </section>

              <button className=" w-full h-9 bg-black border-[1px] border-black  text-white  hover:bg-white hover:text-black transition ">
                <a
                  className=" text-xs lg:text-sm  my-4 font-bold"
                  href={`productoDetalle?id=${id}`}
                >
                  MORE INFO
                </a>
              </button>
            </article>
          ))
        ) : (
          <TipoProductoWait />
        )}
      </section>
    </>
  );
}
