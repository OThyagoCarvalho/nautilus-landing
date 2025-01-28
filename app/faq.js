import Accordions from "@/app/accordion";

export default function Faq() {
  return (
    <section
      id="faq"
      className="py-12 grid gap-6 px-8 sm:px-20 lg:px-28 xl:px-40 2xl:px-52"
    >
      <div className="bg-[#C1DDF8] text-[#0979e5] rounded-2xl w-fit font-bold px-4 py-2">
        <p>FAQs</p>
      </div>
      <div className="flex flex-col items-start gap-6">
        <h2 className=" font-bold text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
          Perguntas Frequentes
        </h2>
        <p className="font-light text-xl">
          Transparência é o nosso compromisso! Confira o mínimo necessário que
          você precisa saber sobre nossos serviços
        </p>
      </div>
      <Accordions />
      <div className="text-white bg-[#0979e5] py-12 px-4  rounded-lg grid gap-16 mt-6">
        <h2 className="text-4xl font-bold sm:text:6xl ">
          E aí, vamos construir algo incrível?
        </h2>
        <button className="bg-transparent border-2 border-whitetext-xl text-white font-bold min-w-60 w-full py-4  px-8 rounded-lg">
          solicite um orçamento
        </button>
      </div>
    </section>
  );
}
