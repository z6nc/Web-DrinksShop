import { useState } from "react";
const SvgPlus = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </svg>
);

const SvgMinus = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-4 "
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
  </svg>
);
export function Contador() {
  const [contador, setContador] = useState(1);

  return (
    <>
      <div className=" inline-flex items-center gap-6 w-32 border-[1px] border-black px-4 py-2 text-gray-500">
        {contador > 1 ? (
          <button className="" onClick={() => setContador(contador - 1)}>
            <SvgMinus />
          </button>
        ) : (
          <button className="cursor-not-allowed" disabled>
            <SvgMinus />
          </button>
        )}
        <span className="text-lg ">{contador}</span>
        <button onClick={() => setContador(contador + 1)}>
          <SvgPlus />
        </button>
      </div>
    </>
  );
}
