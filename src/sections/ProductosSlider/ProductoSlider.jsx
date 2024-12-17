import { Producto } from "../../sections/productos.ts";
import { SvgTipos } from "../../sections/SvgTipos.jsx";
import { ImagenSlider } from "../../sections/ProductosSlider/ImagenSlider.jsx";
export function ProductoSlider({tipo}) {
   const productos = Producto.filter((producto) => producto.tipo === tipo);
     
  return (
    <>

      <section className="font-Nunito  pb-8  flex flex-col gap-4">
        <h1 className=" text-5xl lg:text-7xl  font-Archivo lg:py-2 text-center tracking-widest uppercase">
          {tipo}
        </h1>

        <div
          id="art"
          className="flex flex-wrap gap-3  lg:max-w-7xl lg:mx-auto   justify-center"
        >
          {productos.slice(0, 5).map(({ id, nombre, img, precio, tipo }) => (
            <article
            key={id}
              id="articulo"
              className="bg-white rounded-lg  overflow-hidden  flex flex-col justify-between gap-2 animate-fade-in-up"
            >
                <section >
                    <div className="w-44 lg:w-60 overflow-hidden bg-[#f1f1f1]">
                        <img className="w-full h-full object-cover " src={img} alt={`Imagen de la bebida ${nombre}`}  lazy="loading" />
                   </div>
                <div className=" text-center overflow-hidden flex flex-wrap flex-col w-44 lg:w-full  mx-auto pt-2">
                    <h4 className=" text-sm lg:text-[15px]   uppercase ">
                    {nombre}
                    </h4>
                    <div className="inline-flex items-center gap-3 justify-center  text-gray-600 py-1">
                    <p>{SvgTipos[tipo]}</p>/
                    <h3 className="  tracking-wider text-sm ">${precio}</h3>
                    </div>
                </div>
                </section>
             

              <button className=" w-full h-9 bg-black border-[1px] border-black  text-white  hover:bg-white hover:text-black transition ">
                <a
                  className=" text-xs lg:text-sm  my-4 font-bold "
                  href={`productoDetalle?id=${id}`}
                >
                   MORE INFO
                </a>
              </button>
            </article>
          ))}
        </div>
       <ImagenSlider nombre={tipo} client:idle/>

      </section>
    </>
  );
}
