import { Comentarios } from "./comentarios";
export function ComentariosUser() {
    return(
    <>
    <section className="pl-3 ">
        <h2 class=" text-4xl lg:text-6xl pl-3 font-Archivo lg:py-2 text-start tracking-widest uppercase">Customer Reviews</h2>
        <Comentarios />
        <Comentarios />

    </section>
    </>
    );
}