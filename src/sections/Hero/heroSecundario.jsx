export function HeroSecundario({ ImgPrincipal }) {
  return (
    <>
      <section className="h-[90vh] lg:h-[55vh] bg-black  relative  ">
        <img className="w-full h-full object-cover  " src={ImgPrincipal} alt="" />
      </section>
    </>
  );
}