import { useState, useEffect } from "react";

import { InputAdd } from "./InputAdd";
import { ListItem } from "./ListItem";
import { List } from "./List";

import { TodoAPI, type ITodo } from "../../shared/services/api/TodoAPI";

export function TodoList() {
  const [list, setList] = useState<ITodo[]>([]);

  useEffect(() => {
    TodoAPI.getAll().then((data) => setList(data));
  }, []);

  const handleAdd = (value: string) => {
    TodoAPI.create({ label: value, complete: false }).then((data) =>
      setList([...list, data])
    );
  };

  const handleRemove = (id: number) => {
    TodoAPI.deleteById(id).then(() => {
      setList([...list.filter((item) => item.id !== id)]);
    });
  };

  const handleComplete = (id: number) => {
    TodoAPI.updateById(id, { complete: true }).then(() => {
      setList(
        list.map((item) =>
          item.id === id ? { ...item, complete: true } : item
        )
      );
    });
  };

  return (
      <section className="flex flex-col items-center w-3/5 bg-white rounded-md p-10 shadow-xl gap-10">
        <h1 className="text-4xl font-bold relative top-0 right-50">TODO List</h1>

        <InputAdd onAdd={handleAdd} />

        <List>
          {list.map((listItem) => (
            <ListItem
              key={listItem.id}
              id={listItem.id}
              label={listItem.label}
              complete={listItem.complete}
              onRemove={() => handleRemove(listItem.id)}
              onComplete={() => handleComplete(listItem.id)}
            />
          ))}
        </List>
      </section>
  );
}
