import { createServer, Model } from "miragejs";

createServer({
  models: {
    todos: Model,
  },

  routes() {
    this.namespace = "api";

    this.get("/todos", (schema) => {
      return schema.all("todos");
    });

    this.get("/todos:id", (schema, req) => {
      const id = req.params.id;
      return schema.find("todos", id);
    });

    this.post("/todos", (schema, req) => {
      const attrs = JSON.parse(req.requestBody);
      const todo = schema.create("todos", attrs);

      const todos = schema.all("todos");
      localStorage.setItem("MOCK_TODOS", JSON.stringify(todos));

      return todo;
    });

    this.put("/todos/:id", (schema, req) => {
      const id = req.params.id;

      const newAttrs = JSON.parse(req.requestBody);

      const todo = schema.find("todos", id);
      todo?.update(newAttrs);

      const todos = schema.all("todos");
      localStorage.setItem("MOCK_TODOS", JSON.stringify(todos));
      return {};
    });

    this.delete("/todos/:id", (schema, req) => {
      const id = req.params.id;

      const todo = schema.find("todos", id);
      todo?.destroy();

      const todos = schema.all("todos");
      localStorage.setItem("MOCK_TODOS", JSON.stringify(todos));
      return {};
    });
  },

  seeds(server) {
    const storedTodos = localStorage.getItem("MOCK_TODOS");

    if (!storedTodos) return;

    const todos = JSON.parse(storedTodos);

    todos.models.forEach((todo: object) => {
      server.schema.create("todos", todo);
    });
  },
});
