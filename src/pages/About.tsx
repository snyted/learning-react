import { NavLink } from "react-router";
import { Header } from "../components/TodoComponents/Header";

export const About = () => {
  return (
    <main className="flex flex-col gap-10 items-center bg-neutral-300 w-full h-full">
      <Header />
      <h1 className="text-4xl font-bold mt-10">Sobre Nós</h1>
      <p className="max-w-2xl text-center">
        Este projeto é uma aplicação ToDo List desenvolvida em React, criada
        para praticar conceitos de estados, componentes e manipulação de listas.
        Com ela, é possível adicionar, marcar como concluída e remover tarefas,
        ajudando a organizar o dia a dia de forma simples e prática.
      </p>
      <NavLink to="/" className="text-black text-xl hover:text-sky-700">Voltar</NavLink>
    </main>
  );
};
