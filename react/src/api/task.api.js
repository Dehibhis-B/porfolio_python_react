import axios from 'axios';

const tasksApi = axios.create({
    baseURL: "http://localhost:8000/tasks/api/v1/task/"
})

export const getAllTask = () => {
    return tasksApi.get("/")
}

export const getTask = (id) => {
    return tasksApi.get(`/${id}/`)
}

export const createTasks = (task) => {
    return tasksApi.post("/", task)
}

export const deleteTask = (id) => {
    return tasksApi.delete(`/${id}`)
}

export const updateTask = (id, task) => {
    return tasksApi.put(`/${id}/`, task)
}



