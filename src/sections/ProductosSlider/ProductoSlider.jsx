import { Producto } from "../../sections/productos.ts";
const SvgTipos = {
  nutricional: (
    <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="#000000"
  viewBox="0 0 512 512"
  id="Sustainable_growth"
  className="h-6 w-6"
>
  <path
    d="M266.81,249.16H405v-18H266.84V198.54c32.71-.65,58.12-10.1,75.56-28.18,24.37-25.28,26.5-60.76,25.6-79.67a24.14,24.14,0,0,0-23.07-23.06c-18.9-.9-54.39,1.23-79.66,25.6a78.91,78.91,0,0,0-7.45,8.27,80.14,80.14,0,0,0-7.46-8.27c-25.28-24.37-60.77-26.5-79.66-25.6a24.13,24.13,0,0,0-23.07,23.06c-.9,18.91,1.23,54.39,25.6,79.67,17.45,18.09,42.87,27.54,75.61,28.18v32.62H112.32v18H248.81v37l-87.24,29.46H112.32v18h41.73v33L117.8,394.41l11,14.29,34.29-26.29L193.81,406v40.11h18v-49l-39.76-30.48V331.11l85.76-29,85.77,29v35.52l-39.77,30.48v49h18V406l30.77-23.59,34.29,26.29,10.95-14.29-36.24-27.78v-33H405v-18H354.06l-87.25-29.46ZM165.61,91.55a6.23,6.23,0,0,1,5.94-6c16-.75,45.91.91,66.32,20.59,14.18,13.67,21.76,34.17,22.63,61-13.91-29-41.94-38.25-43.37-38.71L212,144.65c.29.09,26,8.61,35.62,35.87-27-.81-47.66-8.4-61.41-22.66C166.51,137.45,164.85,107.55,165.61,91.55Z"
  />
</svg>

  ),
  energizante: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="h-5 w-5"
      fill="#000000"
      version="1.1"
      id="Capa_1"
      viewBox="0 0 300.145 300.145"
      xmlSpace="preserve"
    >
      <g>
        <path d="M49.126,150.126c0-42.346,26.212-78.68,63.26-93.643l18.904-37.971C66.847,27.667,17.126,83.194,17.126,150.126   c0,60.895,41.157,112.355,97.113,128.035l3.636-32.354C77.952,232.337,49.126,194.535,49.126,150.126z" />
        <path d="M283.019,150.126c0-60.883-41.139-112.333-97.076-128.025l-3.718,32.33c39.946,13.457,68.794,51.27,68.794,95.695   c0,42.099-25.907,78.255-62.613,93.379l-19.428,38.217C233.361,272.515,283.019,217.015,283.019,150.126z" />
        <path d="M226.169,134.015c1.26-2.479,1.141-5.202-0.314-7.572c-1.454-2.371-4.036-3.316-6.818-3.316h-60.821L171.309,9.3   c0.446-3.859-1.946-7.857-5.672-8.963C164.868,0.109,164.089,0,163.32,0c-2.954,0-5.746,1.681-7.121,4.442L73.946,169.718   c-1.234,2.479-1.098,5.78,0.36,8.136c1.459,2.355,4.031,4.273,6.802,4.273h60.019l-12.304,109.543   c-0.43,3.844,1.951,7.077,5.657,8.185c0.761,0.228,1.532,0.29,2.293,0.29c2.948,0,5.74-1.637,7.133-4.378L226.169,134.015z" />
      </g>
    </svg>
  ),
  hidratante: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
    >
      <g id="Environment / Water_Drop">
        <path
          id="Vector"
          d="M16.0001 13.3848C16.0001 14.6088 15.526 15.7828 14.6821 16.6483C14.203 17.1397 13.6269 17.5091 13 17.7364M19 13.6923C19 7.11538 12 2 12 2C12 2 5 7.11538 5 13.6923C5 15.6304 5.7375 17.4893 7.05025 18.8598C8.36301 20.2302 10.1436 20.9994 12.0001 20.9994C13.8566 20.9994 15.637 20.2298 16.9497 18.8594C18.2625 17.4889 19 15.6304 19 13.6923Z"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  ),
};

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
          {productos.slice(0, 6).map(({ id, nombre, img, precio, tipo }) => (
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
                   ADD CARD
                </a>
              </button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
