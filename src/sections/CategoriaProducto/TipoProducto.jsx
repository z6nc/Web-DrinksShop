import { useEffect, useState } from "react";
import { Producto } from "../productos.ts";
import { SvgTipos } from "../SvgTipos.jsx";

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
  }, []); // Dependencias vacías, ejecuta useEffect solo una vez

  return (
    <>
    <section className="flex flex-wrap gap-3 lg:gap-6  lg:max-w-4xl lg:mx-auto   justify-between mx-3">
    {Tipo.length > 0 ? ( // Comprueba si hay productos para mostrar
        Tipo.map(({ id, nombre, img, precio ,tipo}) => (
            <article
            key={id}
              id="articulo"
              className="bg-white rounded-lg  overflow-hidden   flex flex-col justify-between gap-2 animate-fade-in-up"
            >
                <section className="">
                    <div className="w-56 overflow-hidden">
                        <img className="w-full h-full object-cover" src={img} alt="" />
                   </div>
                <div className=" text-center overflow-hidden flex flex-wrap flex-col w-44  items-center justify-center">
                    <h4 className="lg:text-base  text-[15px]   font-bold uppercase ">
                    {nombre}
                    </h4>
                    <div className="inline-flex items-center gap-3 justify-center font-Nunito text-gray-600">
                    <p>{SvgTipos[tipo]}</p>/
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
        <p>No se encontraron productos para este tipo.</p>
      )}
    </section>
     
    </>
  );
}
