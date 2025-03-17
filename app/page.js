import Container from "@/app/container";

import Hero from "@/app/hero";
import Faq from "@/app/faq";
import Footer from "@/app/footer";
import Other from "@/app/other";

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
    listText: "Envie seu design ou escolha um template",
  },
  {
    isActive: true,
    listText: "Suporte por 15 dias",
  },
  {
    isActive: true,
    listText: "Configuração de hospedagem",
  },
  {
    isActive: true,
    listText: "Hospedagem grátis por 1 ano",
  },
  {
    isActive: false,
    listText: "Formulário para captura de contatos",
  },
  {
    isActive: false,
    listText: "Design Totalmente Original",
  },
];

const pro = [
  {
    isActive: true,
    listText: "Até 15 páginas",
  },
  {
    isActive: true,
    listText:
      "Botões de redirecionamento (whatsapp, ig, hotmart checkout, etc.)",
  },
  {
    isActive: true,
    listText: "Envie seu design figma ou criamos um para você",
  },
  {
    isActive: true,
    listText: "Suporte por 30 dias",
  },
  {
    isActive: true,
    listText: "Configuração de hospedagem",
  },
  {
    isActive: true,
    listText: "Hospedagem grátis por 1 ano",
  },
  {
    isActive: true,
    listText: "Formulário para captura de contatos",
  },
  {
    isActive: true,
    listText: "Design Totalmente Original",
  },
];

const custom  = [
  {
    isActive: true,
    listText: "Páginas ilimitadas",
  },
  {
    isActive: true,
    listText:
      "Animações avançadas com Framer Motion ",
  },
  {
    isActive: true,
    listText: "Visuais avançados com Three.js e WebGL",
  },
  {
    isActive: true,
    listText: "Suporte por 90 dias",
  },
  {
    isActive: true,
    listText: "Configuração de hospedagem",
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
      {/* <section
        id="partners"
        className="bg-[#0979e5] py-12 lg:py-32 px-8 sm:px-20 lg:px-28 xl:px-40 2xl:px-52"
      >
        <h2 className="font-extralight text-white text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl ">
          Quem confia na gente ?
        </h2>
      </section> */}
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
        <div className="flex items-center justify-center flex-col gap-8 lg:gap-16 mt-12 lg:grid-cols-3 min-h-fit">
          <Container
            price="R$399"
            description="Ideal para páginas estáticas para redirecionamento de leads para whatsapp,
                instagram ou checkouts (e.g. checkout hotmart)."
            bgColor="#C1DDF8"
            items={basic}
            cardTitle={"Basic / Influencer"}
          />
          <Container
            price="R$499"
            description="Ideal para sites institucionais, lojas de ecommerce ou outras ideias mais complexas"
            bgColor="#C1DDF8"
            items={pro}
            cardTitle={"Pro / Enterprise"}
            isFeatured={true}
          />
          <Container
            price=": a consultar"
            description="Ideal para projetos, aplicações e experiências digitais completamente únicas."
            className="md:hidden"
            bgColor="#C1DDF8"
            items={custom}
            cardTitle={"Custom"}
          />
        </div>
      </section>
      <Other />
      <Faq />
      <Footer />
    </div>
  );
}
