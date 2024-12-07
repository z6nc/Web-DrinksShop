import {Categorias} from "../../sections/categoria.js";
export function ImagenSlider({nombre}) {
   const Sliderimagen = Categorias.filter((producto) => producto.nombre === nombre);
     
  return (
    <>

          {Sliderimagen.map(({imgSlider }) => (
            <div className="w-[40%]">
                <img className="w-full h-full object-cover  " src={imgSlider} alt="" />
            </div>
          ))}
    </>
  );
}
