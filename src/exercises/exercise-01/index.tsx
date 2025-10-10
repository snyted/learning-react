import { useEffect, useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState<number>(Number(localStorage.getItem('count') || 0));

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(counter));
  }, [counter]);

  const handleIncrement = (): void =>
    setCounter((prev) => {
      return prev >= 10 ? prev : prev + 1;
    });
  const handleDecrement = (): void =>
    setCounter((prev) => {
      return prev <= 0 ? prev : prev - 1;
    });
  const handleReset = () => setCounter(0);
  return (
    <>
      <p className={counter === 10 ? "text-red-500" : "text-black"}>
        {counter}
      </p>
      <button
        className="bg-neutral-600 p-1 text-white mr-1 rounded-md"
        onClick={handleIncrement}
      >
        Aumentar
      </button>
      <button
        className={`
          ${
            counter === 0 ? "bg-neutral-200" : "bg-neutral-600"
          } transition-all duration-600 p-1 text-white mr-1 rounded-md`}
        disabled={counter === 0}
        onClick={handleDecrement}
      >
        Diminuir
      </button>
      <button
        className="bg-neutral-600 p-1 text-white mr-1 rounded-md"
        onClick={handleReset}
      >
        Resetar
      </button>
    </>
  );
}
