export default function Navbar() {
  return (
    <header className="w-full top-0 bg-transparent translate-y-6 absolute flex justify-between items-center gap-4 px-8 sm:px-20 lg:px-28 xl:px-40 2xl:px-52 -z-10 lg:z-10  ">
      <div className=" h-12 w-32 bg-black"></div>
      <div className="w-fit bg-[rgba(71,138,240,0.05)] rounded-xl border-1 border-blue-100">
        <nav className=" h-fit py-2 px-2 grid items-center grid-cols-3">
          <a className="bg-white rounded-tl-md rounded-bl-md py-2 px-4 w-fit hover:cursor-pointer hover:bg-gray-50 border-r-[1px] font-light text-xl lg:text-2xl 2xl:text-3xl">
            testando
          </a>
          <a className="bg-white py-2 px-4 w-fit hover:cursor-pointer hover:bg-gray-50 font-light text-xl lg:text-2xl 2xl:text-3xl">
            testando
          </a>
          <a className="bg-white rounded-tr-md rounded-br-md py-2 px-4 w-fit  hover:cursor-pointer hover:bg-gray-50 font-light text-xl lg:text-2xl 2xl:text-3xl">
            testando
          </a>
        </nav>
      </div>
      <a className="bg-blue-600 text-white rounded-md rounded-br-md py-2 px-4 w-fit h-fit  hover:cursor-pointer hover:bg-gray-50 font-light text-xl lg:text-2xl 2xl:text-3xl">
        testando
      </a>
    </header>
  );
}
