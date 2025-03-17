import Questions from "@/app/accordion";

export default function Faq() {
  return (
    <section
      id="faq"
      className="py-12 grid gap-6 lg:gap-20 px-8 sm:px-20 lg:px-28 xl:px-40 2xl:px-52"
    >
      <div className="grid md:justify-center">
        <div className="bg-[#C1DDF8] text-[#0979e5] rounded-2xl w-fit font-bold px-4 py-2 ">
          <p>FAQs</p>
        </div>
      </div>
      <div className="flex flex-col items-start gap-6 md:items-center">
        <h2 className=" font-bold text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
          Perguntas Frequentes
        </h2>
        <p className="font-light text-xl">
          Transparência é o nosso compromisso! Confira o mínimo necessário que
          você precisa saber sobre nossos serviços
        </p>
      </div>
      <Questions />
      <div className="text-white bg-[#0979e5] py-12 px-4 lg:p-24  rounded-lg grid gap-16 mt-6 justify-center">
        <h2 className="font-bold text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center">
          E aí, vamos construir algo incrível?
        </h2>
        <div className="w-full flex justify-center">
          <button className="bg-transparent border-2 border-white text-base xl:text-lg text-white font-bold min-w-60 w-fit py-4  px-8 rounded-lg">
          <a target="_blank" href="https://wa.me/5511932199076?text=Ol%C3%A1%2C%20gostaria%20de%20ajuda%20para%20criar%20meu%20site%21">
            Tire suas dúvidas
          </a>
          </button>
        </div>
      </div>
    </section>
  );
}
