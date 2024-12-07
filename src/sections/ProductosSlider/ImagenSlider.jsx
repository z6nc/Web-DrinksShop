import {Categorias} from "../../sections/categoria.js";
export function ImagenSlider({nombre}) {
   const Sliderimagen = Categorias.filter((producto) => producto.nombre === nombre);
     
  return (
    <>
      <section className=" flex  items-center justify-evenly">
        <a href="">22 </a>
      {Sliderimagen.map(({id ,imgSlider }) => (
            <div className="w-[40%] " key={id}>
                <img className="w-full h-full object-cover  " src={imgSlider} alt="" />
            </div>
          ))}
      <a href="">22 </a>
      </section>
       
         
    </>
  );
}
