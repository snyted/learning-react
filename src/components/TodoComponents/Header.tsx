import { NavLink } from "react-router";

export const Header = () => {
    return (
        <header className="bg-emerald-600 h-17 w-full flex justify-center">
        <nav className="flex items-center  gap-10 text-xl  text-white text-center ">
          <NavLink to="/" className="hover:bg-white/20 p-1 rounded-sm">
            Página Inicial
          </NavLink>
          <NavLink to="/sobre" className="hover:bg-white/20 p-1 rounded-sm">Sobre</NavLink>
        </nav>
      </header>
    );
    }