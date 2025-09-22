import "./App.css";
import HelloWorld from "./components/HelloWorld";
import { InputDisplay } from "./components/InputDisplay";
import NameList from "./components/NameList";

function App() {
  return (
    <main className="w-dvw h-screen flex justify-center items-center text-white">
    <section className="bg-neutral-500 rounded-2xl h-3/4 w-4/5 flex flex-col justify-center items-center gap-4 p-4">
      <HelloWorld />
      {/* <NameList /> */}
      <InputDisplay />
    </section>
  </main>
  );
}

export default App;
