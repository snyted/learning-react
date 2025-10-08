import { useParams } from "react-router";
import { Header } from "../components/TodoComponents/Header";

export const Detail = () => {
    const {id} = useParams();

    return (
        <main className="flex flex-col gap-10 items-center bg-neutral-300 w-full h-full">
            <Header />
        <h1>Details Page</h1>
        <p>Id do item: {id}</p>
        </main>
    );
    }