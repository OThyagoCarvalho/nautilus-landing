import Container from "@/app/container";

import Hero from "@/app/hero";
import Faq from "@/app/faq";
import Footer from "@/app/footer";

const basic = [
  {
    isActive: true,
    listText: "1 página: landing page",
  },
  {
    isActive: true,
    listText:
      "Botões de redirecionamento (whatsapp, ig, hotmart checkout, etc.)",
  },
  {
    isActive: true,
    listText: "Envie seu design figma",
  },
  {
    isActive: true,
    listText: "Formulário para captura de contatos",
  },
  {
    isActive: true,
    listText: "Suporte por 30 dias",
  },
  {
    isActive: false,
    listText: "Configuração de hospedagem",
  },
  {
    isActive: false,
    listText: "Criação de design original",
  },
];

const pro = [
  {
    isActive: true,
    listText: "1 página: landing page",
  },
  {
    isActive: true,
    listText:
      "Botões de redirecionamento (whatsapp, ig, hotmart checkout, etc.)",
  },
  {
    isActive: true,
    listText: "Envie seu design figma",
  },
  {
    isActive: true,
    listText: "Formulário para captura de contatos",
  },
];

export default function Home() {
  return (
    <div>
      <Hero />
      <section
        id="partners"
        className="bg-[#0979e5] py-12 lg:py-32 px-8 sm:px-20 lg:px-28 xl:px-40 2xl:px-52"
      >
        <h2 className="font-extralight text-white text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl ">
          Quem confia na gente ?
        </h2>
      </section>
      <section
        id="prices"
        className="bg-white py-12 lg:py-32 px-8 sm:px-20 lg:px-28 xl:px-40 2xl:px-52"
      >
        <div className="flex flex-col items-start gap-6 lg:gap-12">
          <div className="bg-[#C1DDF8] text-[#0979e5] rounded-2xl w-fit font-bold px-4 py-2">
            <p>PREÇOS</p>
          </div>
          <h2 className="font-bold text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
            Mostre sua marca ao mundo
          </h2>
          <p className="font-light text-xl lg:text-2xl 2xl:text-3xl">
            Aumente suas vendas conversões, capture leads e consolide sua marca
            com um site que traduz seus valores e qualidades
          </p>
        </div>
        <div className="grid items-center justify-center gap-8 lg:gap-16 mt-12 lg:grid-cols-3 h-fit">
          <Container
            bgColor="#C1DDF8"
            items={basic}
            cardTitle={"Básico"}
          />
          <Container
            bgColor="#C1DDF8"
            items={pro}
            cardTitle={"Profissional"}
            isFeatured={true}
          />
          <Container
            bgColor="#C1DDF8"
            items={basic}
            cardTitle={"Custom"}
          />
        </div>
      </section>
      <section className="bg-[#C1DDF8] py-12 lg:py-24 grid md:grid-cols-2 lg:gap-[10%] justify-between gap-6 px-8 sm:px-20 lg:px-28 xl:px-40 2xl:px-52">
        <div className="flex flex-col items-start gap-6">
          <h2 className=" font-bold text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
            Ter um site profissional
          </h2>
          <p className="font-light text-xl">
            melhora seus resultados de vendas alavancando a conveniência, o
            baixo custo e a disponibilidade da internet.
          </p>
        </div>
        <div className="grid gap-6 text-left md:text-right">
          <div>
            <p className="text-xlfont-light text-gray-700">
              custo por leads menor
            </p>
            <h4 className="text-7xl font-bold text-[#0979E5] "> 5x</h4>
          </div>
          <div>
            <p className="text-xl font-light text-gray-700 ">
              alcance maior e clientes mais qualificados
            </p>
            <h4 className="text-7xl font-bold text-[#0979E5]">200%</h4>
          </div>
        </div>
      </section>
      <Faq />
      <Footer />
    </div>
  );
}
