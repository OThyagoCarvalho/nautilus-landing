"use client";
import * as Accordion from "@radix-ui/react-accordion";
import { PlusIcon, MinusIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import { use, useState } from "react";

export default function Accordions() {
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
        <AccordionItem />
      </div>

      <div>
        <Accordion.Item
          className="border-b-[2px] py-4 max-w-96 w-full"
          value="4"
        >
          <Accordion.Header>
            <Accordion.Trigger className="AccordionTrigger flex items-center gap-6">
              <PlusIcon className="AccordionIcon" />
              <h4> Pergunta 4</h4>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="mt-4">
            <div className="text-black">
              Content for section 1 goes here. You can add any JSX or text
              inside this section.
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </div>
    </Accordion.Root>
  );
}

const AccordionItem = ({ q, a, i }) => {
  return (
    <Accordion.Item
      className="border-b-[2px] py-4 md:max-w-80 w-full"
      value={i}
    >
      <Accordion.Header>
        <Accordion.Trigger className="AccordionTrigger flex items-center gap-6">
          <PlusIcon
            onClick={(e) => handleClick()}
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
