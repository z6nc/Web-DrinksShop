import {Categorias} from "../../sections/categoria.js";
export function ImagenSlider({nombre}) {
   const Sliderimagen = Categorias.filter((producto) => producto.nombre === nombre);
     
  return (
    <>
      <section className=" w-full h-48 overflow-hidden rounded-md ">
      {Sliderimagen.map(({id ,imgSlider }) => (
                <img key={id} className="w-full h-full object-cover object-left-bottom   " src={imgSlider} alt="" />
          ))}
      </section>
       
         
    </>
  );
}
