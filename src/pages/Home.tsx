import { Header } from "../components/TodoComponents/Header";
import { TodoList } from "../components/TodoComponents/TodoList";

export const Home = () => {
    return (
      <main className="flex flex-col gap-10 items-center bg-neutral-300 w-full h-full">
      <Header />
      <TodoList />
      </main>
    );
    }