export const Form = () => {
  function handleSubmit(e: React.FormEvent) {
    console.log(e.currentTarget);
  }

  return (
    <div>
      <form action={handleSubmit} className="flex flex-col">
        <label htmlFor="name">Name:</label>
        <input
          className="bg-black p-2 rounded-md"
          type="text"
          id="name"
          name="name"
        />
        <label htmlFor="email">Email:</label>
        <input
          className="bg-black p-2 rounded-md"
          type="email"
          id="email"
          name="email"
        />
        <label htmlFor="age">Age:</label>
        <input
          className="bg-black p-2 rounded-md"
          type="text"
          id="age"
          name="age"
        />

        <button
          type="submit"
          className="bg-sky-600 cursor-pointer p-2 rounded-sm mt-4"
        >Enviar</button>
      </form>
    </div>
  );
};
