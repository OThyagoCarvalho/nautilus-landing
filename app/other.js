export default function Other() {
  return (
    <section className="bg-[#C1DDF8] py-12 lg:py-24 px-8 sm:px-20 lg:px-28 xl:px-40 2xl:px-52 flex flex-col items-start gap-6 md:flex-row md:gap-32">
      <div className="flex flex-col items-start gap-6">
        <h2 className=" font-bold text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
          Ter um site profissional
        </h2>
        <p className="font-light text-xl">
          melhora seus resultados de vendas alavancando a conveniência, o baixo
          custo e a disponibilidade da internet.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-end gap-6 text-left md:text-right">
        <div className="flex flex-col items-start md:items-end">
          <p className="text-xl font-light text-gray-700 text-balance">
            menor custo por leads
          </p>
          <h4 className="text-7xl font-bold text-[#0979E5] "> 5x</h4>
        </div>

        <div className="flex flex-col items-start md:items-end lg:justify-between">
          <p className="text-xl font-light text-gray-700 ">
            mais clientes qualificados
          </p>
          <h4 className="text-7xl font-bold text-[#0979E5]">200%</h4>
        </div>
      </div>
    </section>
  );
}
