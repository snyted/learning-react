import axios from "axios";

const axiosInstance = axios.create();

export interface ITodo {
  id: number;
  label: string;
  complete: boolean;
}

interface ITodoWithoutId {
  label: string;
  complete: boolean;
}

export const TodoAPI = {
  async getAll() {
    const response = await axiosInstance.get("/api/todos");

    return response.data.todos;
  },

  async create(data: ITodoWithoutId) {
    const response = await axiosInstance.post('/api/todos/', data);

    return response.data.todos as ITodo;
  },

  async updateById(id: number, data: Partial<ITodoWithoutId>) {
    await axiosInstance.put(`/api/todos/${id}`, data);

    return;
  },

  async deleteById(id: number) {
    await axiosInstance.delete(`/api/todos/${id}`);

    return;
  },
};
