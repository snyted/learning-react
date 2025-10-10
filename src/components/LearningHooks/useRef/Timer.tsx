import { useRef } from "react";

export const Timer = () => {
  const timerInterval = useRef<NodeJS.Timeout | null>(null);
  const timer = useRef(10);

  const handleInit = () => {
    if (timerInterval.current) return console.log("Já está rodando");
    console.log("Iniciou");
    timerInterval.current = setInterval(() => {
      if (timer.current === 0) return handleStop();
      console.log(timer.current--);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timerInterval.current as unknown as number);
    timerInterval.current = null;
    console.log("Parou");
  };

  const handleReset = () => {
    if (timerInterval.current)
      clearInterval(timerInterval.current as unknown as number);
    timer.current = 10;
    console.log("Resetou");
  };

  return (
    <div className="text-white flex gap-1">
      <button onClick={handleInit} className="bg-green-500 p-1 rounded-md">
        Iniciar
      </button>
      <button onClick={handleStop} className="bg-red-500 p-1 rounded-md">
        Parar
      </button>
      <button onClick={handleReset} className="bg-blue-500 p-1 rounded-md">
        Resetar
      </button>
    </div>
  );
};