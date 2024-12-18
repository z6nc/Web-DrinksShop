import React, { useEffect, useState } from "react";
import { NavbarMovil } from "./navbarMovil";

const Stylelinks="p-6 transition text-[13px]  border-b-2 border-transparent hover:border-white   tracking-wider ";
const SvgSearch = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
);

const SvgCar=(
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>

);

const SvgHamburguer = (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

);

export function NavbarPrincipal({posicion }) {
 

  const [idle, setIdle] = useState(false);

  return (
    <>
      <nav
        id="Navbar"
        className={`text-black lg:text-white fixed  w-full flex justify-between px-6 py-3 lg:h-[90px]  z-30  items-center bg-white   transition-all duration-150 ease-in-out ${posicion}`}

      >
      
        {/* <!-- Boton responsive navbar --> */}
        <button className="block lg:hidden " onClick={()=>setIdle(!idle)}>
            {SvgHamburguer}
        </button>
        <a href="/"  className=" lg:pt-6 lg:pb-4">
          <img className="w-16 lg:w-24 drop-shadow-3xl hover:scale-105 transition-all duration-75 ease-in-out  " src="https://res.cloudinary.com/dleem7osr/image/upload/v1734559843/imagen_2024-12-18_170959691-removebg-preview_lgpfrn.png" alt="" />
        </a>

        <ul className="lg:flex tracking-wide  font-light hidden">
        <li>
            <a className={Stylelinks} href="/">
              HOME
            </a>
          </li>
          <li>
            <a className={Stylelinks} href="/About">
              ABOUT
            </a>
          </li>
          <li>
            <a className={Stylelinks} href="/">
              USUARIO
            </a>
          </li>
          <li>
            <a className={Stylelinks} href="/">
             CARRITO
            </a>
          </li>
        </ul>
        
        <div className="flex gap-3 lg:hidden">
          <button>
            {SvgCar}
          </button>
          <button>
          {SvgSearch}
          </button>
        </div>
      </nav>
        
      <NavbarMovil  Wait={idle} client:idle/>
            

    </>
  );
}
