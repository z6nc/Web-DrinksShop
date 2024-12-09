import { Producto } from "../productos";
import React, { useState, useEffect } from "react";
import { SvgTipos } from "../SvgTipos";

// crear un cosnta randon con un numero random

function RandomProducots() {
  let nuevosProductos = [];
  for (let i = 0; i < 4; i++) {
    let random = Math.floor(Math.random() * Producto.length); // Generar un nuevo índice aleatorio
    nuevosProductos.push(Producto[random]); // Agregar el producto aleatorio al array temporal
  }
  return nuevosProductos;
}

export function ProductosRecomendar() {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    const recomendados = RandomProducots(); // Generar productos aleatorios
    setProductos(recomendados); // Guardar en el estado
  }, []);

  return (
    <>
      <article className="flex flex-col justify-center gap-3  items-center w-full  my-24">
        <div className="border-b-[1px] border-gray-200 w-full ">
          <h3 className=" font-bold text-2xl text-center pb-4">
            TAMBIEN PODRIA GUSTARTE
          </h3>
        </div>

        <div className=" flex flex-wrap gap-4 justify-center items-center">
          {productos.map((producto, index) => (
            <div className="flex flex-col items-center" key={index}>
              <div className="w-full">
                <img className="w-72 bg-[#f1f1f1]" src={producto.img} alt={`imagen de la bebida ${producto.nombre}`} />
              </div>

              <div className=" text-center overflow-hidden flex flex-wrap flex-col  items-center pt-2 ">
                <h4 className="  text-[15px]     uppercase ">
                 {producto.nombre}
                </h4>
                <div className="inline-flex items-center gap-2 justify-center  text-gray-600 py-2">
                  <p>{SvgTipos[producto.tipo]}</p>/
                  <h3 className=" text-[17px] tracking-wider ">${producto.precio}</h3>
                </div>
              </div>

              <button className=" w-full h-9 bg-black border-[1px] border-black  text-white font-ArchivoBlack hover:bg-white hover:text-black transition ">
                <a
                  className=" text-sm  my-4 font-bold "
                  href={`productoDetalle?id=${producto.id}`}
                >
                  MORE INFO
                </a>
              </button>
            </div>
          ))}
        </div>
      </article>
    </>
  );
}
