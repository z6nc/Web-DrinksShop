import { Rating } from "./Rating";
import { Contador } from "./Contador";
import { Producto } from "../productos";
import { useState, useEffect } from "react";
import { Categorias } from "../categoria";

export function DetalleProducto() {
  const [filtroProductos, setEncontrado] = useState(null);
  const [beneficios, setBeneficios] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    let id = parseInt(urlParams.get("id"), 10);
    if (id) {
      const filtroProducto = Producto.find((producto) => producto.id === id);
      if (filtroProducto) {
        setEncontrado(filtroProducto);
      } else {
        console.error("Producto no encontrado");
      }
    } else {
      console.error("ID no válido");
    }
  }, []);

  useEffect(() => {
    if (filtroProductos) {
      const categoria = Categorias.find(
        (categoria) => categoria.id === filtroProductos.tipo
      );
      setBeneficios(categoria.beneficios);
    }
  }, [filtroProductos]);
  




  if (!filtroProductos) {
    return <p>Buscando producto...</p>;
  }

  const { nombre, tamaño, img, imgDos, imgTres, descripcion,  precio } = filtroProductos;

  return (
    <div className="flex flex-wrap mt-10 gap-5">
      <article className="grid grid-cols-2 gap-2 overflow-hidden">
      <div className="w-full  h-[350px] lg:h-[700px] col-span-2 overflow-hidden">
          <img
            className="w-full h-full  object-cover bg-[#f1f1f1]"
            src={imgTres}
            alt={`imagen de bebida ${nombre}`}
          />
        </div>
        <div className="w-full">
          <img className="w-96 bg-[#f1f1f1]" src={img} alt={`imagen secundaria de bebida ${nombre}`} />
        </div>
        <div className="w-full">
          <img className="w-96 bg-[#f1f1f1]" src={imgDos} alt={` imagen de bebida ${nombre}`} />
        </div>
        
      </article>
      <div className="flex flex-col items-center lg:items-start gap-4 mx-auto lg:mx-0 lg:max-w-[22rem]  lg:pl-3">
        <div className="flex flex-col items-center lg:items-stretch gap-4 border-b border-gray-300 pb-6 ">
          <div>
            <h1 className="text-xl lg:text-3xl font-medium lg:font-bold uppercase">{nombre}</h1>
            <p className=" text-gray-500 text-center lg:text-start ">{tamaño}</p>
          </div>
          <Rating />
          <p className="text-3xl font-extralight font-ArchivoBlack ">${precio}</p>
          <Contador />
          <button className="font-bold border border-black bg-black text-white px-32 lg:px-2 py-3 hover:bg-white hover:text-black transition-all duration-100">
            ADD TO CART
          </button>
        </div>
        <div className="text-gray-500 flex gap-3 flex-col">
            <h2 className="font-bold">BENEFICIOS</h2>
          <ul className="text-sm list-disc ml-4 flex flex-col gap-5">
              {
                beneficios && beneficios.map((beneficio, index) => (
                  <li key={index}>{beneficio}</li>
                ))
              }
          </ul>
        </div>
      </div>
    </div>
  );
}
