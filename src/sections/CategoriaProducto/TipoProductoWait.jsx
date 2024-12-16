
export function TipoProductoWait() {
    const GostProducto = {
        id: 0,
        nombre: "",
        img: "",
      };
      const ArrayProductos = new Array(3).fill(null).map(() => ({ ...GostProducto }));
  return (
    <>
      <section className="flex flex-wrap gap-3 lg:gap-6  lg:max-w-4xl lg:mx-auto   justify-between mx-3 animate-pulse">
        {ArrayProductos.map((Gost) => (
          <article
          key={Gost.id}
            id="articulo"
            className="bg-white rounded-lg  overflow-hidden  flex flex-col justify-between gap-2  "
          >
            <section className=" flex flex-col items-center justify-center  gap-3">
              <div className="w-56 overflow-hidden h-56 bg-gray-200">
                {/* <img className="w-full h-full object-cover" src={producto.img} alt="" /> */}
              </div>
              <div className="  flex flex-wrap flex-col :w-44  items-center justify-center">
                <div className=" w-full h-3 bg-gray-200 rounded-xl">
                </div>
              </div>
            </section>

            <button className=" w-full h-9 bg-gray-200  ">
            </button>
          </article>
        ))}
      </section>
    </>
  );
}
