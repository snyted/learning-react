import axios from "axios"


const axiosInstance = axios.create()

export const TodoAPI = {
   async getAll() {
    const response = await axiosInstance.get('/api/todos')

    console.log(response)

    return response.data.todos
    }
}