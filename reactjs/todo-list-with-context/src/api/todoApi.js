import { baseQueryAxios } from '../helper/baseQueryAxios';
import queryString from 'query-string';
const baseURL = import.meta.env.VITE_BASE_API;
export const todoApi = {
  list: search => {
    return baseQueryAxios(`${baseURL}/todos?${queryString.stringify(search)}`, 'get');
  },
  create: newTodo => {
    return baseQueryAxios(`${baseURL}/todos`, 'POST', newTodo);
  },
  delete: id => {
    //https://server-booking.vercel.app/api/todos/12
    return baseQueryAxios(`${baseURL}/todos/${id}`, 'delete');
  },
  // vvv...
};
