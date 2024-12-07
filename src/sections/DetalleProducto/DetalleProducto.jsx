import { Rating } from "./Rating";
import { Contador } from "./Contador";
export function DetalleProducto() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-auto  mt-10 ">
        <div className="w-[90%]">
          <img
            className="w-full h-full object-cover "
            src="https://res.cloudinary.com/dleem7osr/image/upload/v1733355671/CocoNuw-removebg-preview_hnv1rw.png"
            alt=""
          />
        </div>
        <div className="flex  flex-col mr-auto gap-3">
          <div className="flex  flex-col gap-7 border-b-[1px] border-gray-300 pb-6">
            <h1 className=" text-3xl font-ArchivoBlack">COCONUT DEW SLASH</h1>
            <p className="font-Nunito text-5xl font-black ">$29.99</p>
            <Rating />
            <Contador />
            <button className="font-ArchivoBlack border-[1px] border-black bg-black text-white   px-2 py-3 hover:bg-white hover:text-black transition-all ease-in-out duration-100 ">
              ADD TO CARD
            </button>
          </div>
          <div>
             <ul className="text-sm">
                <li>GG</li>
                <li>ASDAS</li>
                <li>DASDAS</li>
                <li>ASDASD</li>
             </ul>
          </div>
        </div>
      </div>
    </>
  );
}
