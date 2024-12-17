import { Rating } from "../DetalleProducto/Rating";
export function Comentarios() {
  return (
    <>
<article className="md:gap-6 md:grid md:grid-cols-3 my-8 border-b-[1px] border-gray-200 py-9">
    <div>
        <div className="flex items-center mb-6">
            {/* <img class="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt=""> */}
            <img className="w-10 h-10 rounded-full " src="https://unavatar.io/github/z6nc" alt="" />
            <div className="ms-4 font-medium text-black">
                <p>Cristiano Ronaldo</p>
                <Rating />
            </div>
        </div>
      
    </div>
    <div className="col-span-2 mt-6 md:mt-0">
        <div className="flex items-start mb-5">
            <div className="pe-4">
                <footer>
                    <p className="mb-2 text-sm text-gray-500 ">Reviewed: <time datetime="2024-12-14 19:00">Diciembre 14, 2024</time></p>
                </footer>
                <h4 className="text-xl font-bold text-gray-900 ">¡Dragon Fruit Blast es increíble!.</h4>
            </div>
            <p className="bg-blue-700 text-white text-sm font-semibold inline-flex items-center p-1.5 rounded">8.7</p>
        </div>
        <p className="mb-2 text-gray-500 dark:text-gray-400">No solo me da la energía que necesito para mis días largos en el trabajo, sino que el sabor es único y refrescante. Me encanta que no sea demasiado dulce, y el toque tropical de la pitahaya me hace sentir como si estuviera de vacaciones.</p>
        <p className="mb-5 text-gray-500 dark:text-gray-400">¡Definitivamente se ha convertido en mi bebida energética favorita!.</p>
        <aside className="flex items-center mt-3">
            <a href="#" className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                <svg className="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z"/>
                </svg>
                Helpful
            </a>
            <a href="#" className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 group ms-5">
                <svg className="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M11.955 2.117h-.114C9.732 1.535 6.941.5 4.356.5c-1.4 0-1.592.526-1.879 1.316l-2.355 7A2 2 0 0 0 2 11.5h3.956L4.4 16a1.779 1.779 0 0 0 3.332 1.061 24.8 24.8 0 0 1 4.226-5.36l-.003-9.584ZM15 11h2a1 1 0 0 0 1-1V2a2 2 0 1 0-4 0v8a1 1 0 0 0 1 1Z"/>
                </svg>
                Not helpful
            </a>
        </aside>
    </div>
</article>

    </>
  );
}
