export const Header = () => {
    return (
        <header className="bg-emerald-600 h-17 w-full flex justify-center">
        <nav className="flex items-center  gap-10 text-xl  text-white text-center ">
          <a href="/" className="hover:bg-white/20 p-1 rounded-sm">
            Página Inicial
          </a>
          <a href="Sobre" className="hover:bg-white/20 p-1 rounded-sm">Sobre</a>
        </nav>
      </header>
    );
    }