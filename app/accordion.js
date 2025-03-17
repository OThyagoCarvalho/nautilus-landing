"use client";
import * as Accordion from "@radix-ui/react-accordion";
import { PlusIcon, MinusIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import { use, useState } from "react";

export default function Questions() {
  const [value, setValue] = useState("");

  // Handle the ESC key press
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setValue(null); // Close the accordion by setting the value to null
    }
  };

  const handleClick = () => {
    setValue(!value);
  };

  return (
    <Accordion.Root
      value={value}
      onValueChange={setValue}
      onKeyDown={handleKeyDown}
      type="single"
      className="flex flex-col md:grid md:grid-cols-2 md:gap-6 justify-between lg:px-60"
    >
      <div>
        <AccordionItem i={1} q={"Preciso possuir design?"} a={"Não, nós podemos cuidar do design para você!"} handleClick={handleClick}/>
        <AccordionItem i={2} q={"Devo pagar adiantado?"} a={"Não, após definirmos todos os detalhes, definiremos um pequeno sinal para dar início aos trabalhos."} handleClick={handleClick}/>
        <AccordionItem i={3} q={"Posso anunciar no google?"} a={"Sim, depois que o site estiver no ar, daremos todo o suporte para você anunciar seu site adicionando as TAGs do google."} handleClick={handleClick}/>
      </div>

      <div>
        <AccordionItem i={4} q={"Qual o prazo de entrega?"} a={"O prazo varia em virtude da complexidade do projeto, partindo de 7 dias úteis"} handleClick={handleClick}/>
        <AccordionItem i={2} q={"Tenho acesso ao código fonte?"} a={"Sim, a entrega do trabalho inclui acesso ao código original"} handleClick={handleClick}/>
        <AccordionItem i={3} q={"Ainda tenho dúvidas"} a={"Para a maioria das pessoas este é um assunto complicado, entre em contato, sem compromisso, para maiores esclarecimentos 😊"} handleClick={handleClick}/>
      </div>
    </Accordion.Root>
  );
}

const AccordionItem = ({ q, a, i, handleClick = () => {} }) => {
  return (
    <Accordion.Item
      className="border-b-[2px] py-4 md:max-w-80 w-full"
      value={i}
    >
      <Accordion.Header>
        <Accordion.Trigger className="AccordionTrigger flex items-center gap-6"  onClick={() => handleClick()}>
          <PlusIcon
          
            className="AccordionIcon"
          />
          <h4> {q}</h4>
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="mt-4">
        <div className="text-black pl-10">{a}</div>
      </Accordion.Content>
    </Accordion.Item>
  );
};
