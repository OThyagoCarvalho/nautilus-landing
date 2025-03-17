export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col gap-12 lg:gap-16 lg:py-48 lg:flex-row lg:justify-between py-12 px-8 sm:px-20 lg:px-28 xl:px-40 2xl:px-52"
    >
      <div className="flex flex-col items-start gap-6 lg:gap-12 text-[#242424] lg:justify-center lg:max-w-[800px]">
        <h1 className="font-bold text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
          Transforme visitas em clientes com um site profissional
        </h1>
        <p className="font-light text-xl lg:text-2xl 2xl:text-3xl">
          Aumente suas vendas, capture leads e consolide sua marca com um site
          que traduz a qualidade do seu negócio
        </p>

        <button className="bg-[#0979e5]  text-xl lg:text-2xl 2xl:text-3xl text-white font-bold min-w-60 w-full py-4  px-8 rounded-lg lg:w-fit">
        <a target="_blank" href="https://wa.me/5511932199076?text=Ol%C3%A1%2C%20gostaria%20de%20ajuda%20para%20criar%20meu%20site%21">
          solicite um orçamento
        </a>
        </button>
      </div>
      <div className="w-full flex items-center justify-center lg:max-w-[700px]">
        <div id="hero-img"></div>
      </div>
    </section>
  );
}
