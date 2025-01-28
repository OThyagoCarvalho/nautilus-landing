import * as Accordion from "@radix-ui/react-accordion";
import { PlusIcon, MinusIcon, ChevronDownIcon } from "@radix-ui/react-icons";

export default function Accordions() {
  return (
    <Accordion.Root
      type="single"
      className="flex flex-col justify-between"
    >
      <div>
        <Accordion.Item
          className="border-b-[1px] py-4 max-w-96 w-full"
          value="1"
        >
          <Accordion.Header>
            <Accordion.Trigger className="AccordionTrigger flex items-center gap-6">
              <PlusIcon className="AccordionIcon" />
              <h4> Pergunta 1</h4>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="mt-4">
            <div className="text-black">
              Content for section 1 goes here. You can add any JSX or text
              inside this section.
            </div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item
          className="border-b-[1px] py-4 max-w-96 w-full"
          value="2"
        >
          <Accordion.Header>
            <Accordion.Trigger className="AccordionTrigger flex items-center gap-6">
              <PlusIcon className="AccordionIcon" />
              <h4> Pergunta 2</h4>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="mt-4">
            <div className="text-black">
              Content for section 1 goes here. You can add any JSX or text
              inside this section.
            </div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item
          className="border-b-[1px] py-4 max-w-96 w-full"
          value="3"
        >
          <Accordion.Header>
            <Accordion.Trigger className="AccordionTrigger flex items-center gap-6">
              <PlusIcon className="AccordionIcon" />
              <h4> Pergunta 3</h4>
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

      <div>
        <Accordion.Item
          className="border-b-[1px] py-4 max-w-96 w-full"
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

        <Accordion.Item
          className="border-b-[1px] py-4 max-w-96 w-full"
          value="5"
        >
          <Accordion.Header>
            <Accordion.Trigger className="AccordionTrigger flex items-center gap-6">
              <PlusIcon className="AccordionIcon" />
              <h4> Pergunta 5</h4>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="mt-4">
            <div className="text-black">
              Content for section 1 goes here. You can add any JSX or text
              inside this section.
            </div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item
          className="border-b-[1px] py-4 max-w-96 w-full"
          value="6"
        >
          <Accordion.Header>
            <Accordion.Trigger className="AccordionTrigger flex items-center gap-6">
              <PlusIcon className="AccordionIcon" />
              <h4> Pergunta 6</h4>
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
