import { useRef } from "react";

export const SmartForm = () => {
  const refs = [
    { label: "name", ref: useRef<HTMLInputElement>(null), type: "text" },
    { label: "email", ref: useRef<HTMLInputElement>(null), type: "email" },
    {
      label: "password",
      ref: useRef<HTMLInputElement>(null),
      type: "password",
    },
  ];


    const handleClearAll = () => {
        refs.forEach(({ ref }) => {
        if (ref.current) ref.current.value = "";
        });
    };

    const handleNextInput = () => {
        const firstEmpty = refs.find(({ref}) => ref.current?.value === "");
        console.log(firstEmpty);
        if (firstEmpty?.ref.current) {
            firstEmpty.ref.current.focus();
        }
    }
  return (
    <div className="flex flex-col items-center">
      <form className="flex flex-col items-center gap-2">
        {refs.map(({ label, ref, type }) => (
            <input
            key={label}
            ref={ref}
            type={type}
            placeholder={`Digite seu ${label}`}
            className="p-1 rounded-md text-black"
            />
        ))}
</form>
      <button className="bg-sky-500 rounded-md p-1 text-white mt-2 w-1/5"
      onClick={handleNextInput}>
        Próximo
      </button>
      <button className="bg-red-500 rounded-md p-1 text-white mt-2 w-1/5"
      onClick={handleClearAll}>
        Limpar tudo
      </button>
    </div>
  );
};
