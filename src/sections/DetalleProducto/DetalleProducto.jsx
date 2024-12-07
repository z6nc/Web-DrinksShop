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
        <div className="flex  flex-col mr-auto gap-3 max-w-80">
          <div className="flex  flex-col gap-7 border-b-[1px] border-gray-300 pb-6">
            <div>
              <h1 className=" text-2xl font-ArchivoBlack">COCONUT DEW SLASH</h1>
              <p>500ml</p>
            </div>
            <p className=" text-3xl font-ArchivoBlack text-gray-700 ">$28.00</p>
            <Rating />
            <Contador />
            <button className="font-ArchivoBlack border-[1px] border-black bg-black text-white   px-2 py-3 hover:bg-white hover:text-black transition-all ease-in-out duration-100 ">
              ADD TO CARD
            </button>
          </div>
          <div className="text-gray-500">
            <h2 className=" font-ArchivoBlack ">DESCRIPCION</h2>
            <p className=" text-sm  ">
            Refrescante bebida a base de mango con un toque tropical.
            </p>
            <ul className="text-sm list-disc ml-4 flex flex-col gap-3">
              <li>Zero Added Sugar</li>
              <li>25 Calories</li>
              <li>Antioxidants + Electrolytes</li>
              <li>Caffeine-Free + Gluten-Free</li>
            </ul>
          
          </div>
        </div>
      </div>
    </>
  );
}
