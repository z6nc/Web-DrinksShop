import React, { useEffect, useState } from "react";

const SvgExit = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18 18 6M6 6l12 12"
    />
  </svg>
);

const SvgInstagram = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 256 256"
    className="size-6"
  >
    <path d="m128 23 52 1c12 0 19 2 23 4 6 3 11 5 15 10 5 4 7 9 10 15 2 4 4 11 4 23a890 890 0 0 1-4 127c-3 6-5 11-10 15-4 5-9 7-15 10-4 2-11 4-23 4a888 888 0 0 1-127-4c-6-3-11-5-15-10-5-4-7-9-10-15-2-4-4-11-4-23a888 888 0 0 1 4-127c3-6 5-11 10-15 4-5 9-7 15-10 4-2 11-4 23-4l52-1m0-23L75 1C62 1 52 4 44 7s-15 7-23 14c-7 8-11 15-14 23S1 62 1 75a908 908 0 0 0 6 137c3 8 7 15 14 23 8 7 15 11 23 14s18 6 31 6a908 908 0 0 0 137-6c8-3 15-7 23-14 7-8 11-15 14-23s6-18 6-31a908 908 0 0 0-6-137c-3-8-7-15-14-23-8-7-15-11-23-14s-18-6-31-6l-53-1Zm0 62a66 66 0 1 0 0 132 66 66 0 0 0 0-132Zm0 109a43 43 0 1 1 0-86 43 43 0 0 1 0 86Zm84-111a15 15 0 1 1-31 0 15 15 0 0 1 31 0Z" />
  </svg>
);

const StyleNavbarBase = "absolute bg-[#ffffff] h-full flex-col w-[80%] z-50";
const StyleOpen = "slide-in";
const StyleClose = "hidden";

export function NavbarMovil({ Wait }) {
  const [open, setOpen] = useState(Wait || false);

  // Sincronizar el estado con el prop Wait
  useEffect(() => {
    setOpen(Wait);
  }, [Wait]);

  const StyleNavbar = `${StyleNavbarBase} ${open ? StyleOpen : StyleClose}`;

  return (
    <nav className={StyleNavbar}>
      <div className="py-5 px-6 sticky top-0">
        {/* Botón de cierre */}
        <button onClick={() => setOpen(false)}>
          <span className="text-2xl font-bold text-black">{SvgExit}</span>
        </button>

        {/* Links de navegación */}
        <div className="flex flex-col w-auto my-10">
          {/* Arreglar el li para quie tengan sus respectivos url */}
          {["HOME", "PRODUCTOS", "CATEGORIAS", "ABOUT", "INICIA SESION"].map(
            (link, index) => (
              <a
                key={index}
                className="border-[#cfcece] border-b-[1px] font-medium text-[15px] py-4"
                href="#"
              >
                {link}
              </a>
            )
          )}
        </div>

        {/* Iconos y branding */}
        <div className="flex flex-col justify-center items-center my-9">
          <h1 className="font-Protest text-4xl -skew-y-6">ENERGIX</h1>
          <div className="flex flex-row my-7">
            {SvgInstagram}
            {SvgExit}
          </div>
        </div>
      </div>
    </nav>
  );
}
