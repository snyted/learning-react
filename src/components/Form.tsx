export const Form = () => {
    return (
        <div>
            <form action="#"
            className="flex flex-col">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" />
                <input type="submit" value={''} className="bg-sky-600 cursor-pointer p-2 rounded-sm"/>
            </form>
        </div>
    )
}