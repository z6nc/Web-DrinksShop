import { Producto } from "../../sections/productos.ts";
import { SvgTipos } from "../../sections/SvgTipos.jsx";
export function ProductoSlider({tipo}) {
   const productos = Producto.filter((producto) => producto.tipo === tipo);
     
  return (
    <>

      <section className="font-Nunito  pb-8">
        <h1 className="font-black text-4xl lg:text-9xl pl-3  lg:py-2 text-center tracking-widest uppercase">
          {tipo}
        </h1>
        <div
          id="art"
          className="flex flex-wrap gap-3 lg:gap-6  lg:max-w-7xl lg:mx-auto   justify-between mx-3"
        >
          {productos.slice(0, 5).map(({ id, nombre, img, precio, tipo }) => (
            <article
            key={id}
              id="articulo"
              className="bg-white rounded-lg  overflow-hidden  flex flex-col justify-between gap-2 animate-fade-in-up"
            >
                <section >
                    <div className="w-44 overflow-hidden">
                        <img className="w-full h-full object-cover" src={img} alt="" />
                   </div>
                <div className=" text-center overflow-hidden flex flex-wrap flex-col w-44 ">
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
                   MORE INFO
                </a>
              </button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
