export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 grid grid-rows-[1fr auto] gap-4  px-8 sm:px-20 lg:px-28 xl:px-40 2xl:px-52">
      <div className="grid gap-12 mb-12">
        <div className="grid gap-6">
          <h5 className="text-2xl font-semibold"> A empresa</h5>
          <div className="grid grid-col-1 gap-2 text-lg ">
            <a className="underline underline-offset-4"> Nossos valores </a>
            <a className="underline underline-offset-4"> Carreiras</a>
          </div>
        </div>
        <div className="grid gap-6">
          <h5 className="text-2xl font-semibold"> Ajuda</h5>
          <div className="grid grid-col-1 gap-2 text-lg ">
            <a className="underline underline-offset-4"> Suporte </a>
            <a className="underline underline-offset-4"> Vendas</a>
          </div>
        </div>
      </div>
      <div className="text-center py-8 border-t-[1px] border-gray-500">
        Desenvolvido por Nautilus Software - São Paulo, 2025.
      </div>
    </footer>
  );
}
