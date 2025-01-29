import heroBG from "@/public/herobg.svg";
import Image from "next/image";

export default function Container({
  bgColor,
  items,
  cardTitle,
  isFeatured = false,
  className,
}) {
  return (
    <div
      className={
        `w-full sm:w-[440px] md:w-[568px] lg:w-80 2xl:w-full min-h-fit h-full rounded-xl p-6 lg:p-9 xl:p-12 flex flex-col shadow-lg shadow-blue-200 border-1 border-blue-200 relative ` +
        (isFeatured && " isFeatured ")
      }
    >
      <div className="grid gap-4 h-full items-start ">
        <div>
          <div
            id="header"
            className="grid gap-4"
          >
            <div className="bg-[#0979e5] text-white rounded-lg w-fit font-bold px-4 py-2  text-base lg:text-lg 2xl:text-2xl">
              <p>{cardTitle}</p>
            </div>
            <div
              id="header-icon"
              className=""
            ></div>
            <div className="grid items-start gap-8">
              <div className="text-lg font-normal text-gray-800">
                Páginas estáticas para redirecionamento de leads para whatsapp,
                instagram ou checkouts (e.g. checkout hotmart).
              </div>
            </div>
            <div
              id="container-body"
              className="text-4xl"
            >
              A partir de R$399
            </div>
          </div>
        </div>
        <div className="feature-list ">
          <ul className="grid gap-3 items-start">
            {items.map((item, i) => (
              <ListItem
                key={i}
                isActive={item.isActive}
                listText={item.listText}
              />
            ))}
          </ul>
        </div>
      </div>
      <button className="bg-black text-base xl:text-lg text-white font-bold min-w-60 w-full py-4 px-8 rounded-lg mt-16">
        solicite um orçamento
      </button>
    </div>
  );
}

const ListItem = ({ isActive = true, listText }) => {
  const color = !isActive ? "gray" : "#242424";
  const textDecoration = !isActive ? "line-through" : "";
  return (
    <div
      className="flex gap-4 text-base"
      style={{
        color,
        textDecoration,
      }}
    >
      <h3 className="font-bold">{isActive ? "+" : "x"}</h3>
      <li
        style={{
          color,
          textDecoration,
        }}
      >
        {listText}
      </li>
    </div>
  );
};
