export default function Home() {
  return (
    <div>
      <section
        id="hero"
        className="flex flex-col gap-12 sm:flex-row pt-24 pb-12 px-8"
      >
        <div className="flex flex-col items-start gap-6 text-[#242424]">
          <h1 className="font-bold text-5xl sm:text-7xl">
            Transforme visitas em clientes com um site profissional
          </h1>
          <p className="font-light text-xl">
            Aumente suas vendas, capture leads e consolide sua marca com um site
            que traduz a qualidade do seu negócio
          </p>

          <button className="bg-[#0979e5] text-xl text-white font-bold min-w-60 w-full py-4  px-8 rounded-lg">
            solicite um orçamento
          </button>
        </div>
        <div className="w-full sm:w-3/5 sm:min-w-72 flex items-center justify-center">
          <div id="hero-img"></div>
        </div>
      </section>
      <section
        id="partners"
        className="bg-[#0979e5] px-8 py-12"
      >
        <h2 className="font-extralight text-4xl sm:text-6xl text-white">
          Quem confia na gente ?
        </h2>
      </section>
      <section
        id="prices"
        className="bg-white py-12 px-8"
      >
        <div className="bg-[#C1DDF8] text-[#0979e5] rounded-2xl w-fit font-bold px-4 py-2">
          <p>PREÇOS</p>
        </div>
      </section>
    </div>
  );
}
