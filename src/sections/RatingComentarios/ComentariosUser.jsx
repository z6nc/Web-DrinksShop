import { Comentarios } from "./comentarios";
export function ComentariosUser() {
    return(
    <>
    <section className="px-8 pb-12 flex flex-col">
        <h2 class=" text-4xl lg:text-6xl pl-3 font-Archivo lg:py-2 text-center lg:text-start tracking-widest uppercase">Customer Reviews</h2>
        <Comentarios />
        <Comentarios />
          <button className="font-ArchivoBlack rounded-md  px-14 py-2 border-[1px] border-black mx-auto hover:bg-black  hover:text-white bg-white text-black">Ver mas </button>
    </section>
    </>
    );
}