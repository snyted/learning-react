import "./App.css";
import { Form } from "./components/useState/Form";
import HelloWorld from "./components/Fundamentos";
import { InputDisplay } from "./components/useState/InputDisplay";
import NameList from "./components/useState/NameList";
import SpreadOperator from "./components/SpreadOperator";
import { ShoppingList } from "./components/RenderizandoListas";

function App() {
  return (
    <main className="w-dvw h-screen flex justify-center items-center text-white">
      <section className="bg-neutral-500 rounded-2xl h-3/4 w-4/5 flex flex-col items-center gap-4 p-4">
        {/* <HelloWorld /> */}
        {/* <NameList /> */}
        {/* <InputDisplay /> */}
        {/* <SpreadOperator /> */}
        {/* <Form /> */}
        {/* <ShoppingList /> */}
      </section>
    </main>
  );
}

export default App;
