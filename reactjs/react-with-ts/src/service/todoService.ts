import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_API }),
  endpoints: builder => ({
    listTodo: builder.query({
      query: () => 'todos',
    }),
    getTodoById: builder.query({
      query: ({ id }: { id: number }) => `todos/${id}`,
    }),
    createTodo: builder.mutation({
      query: ({ todo }) => ({
        url: 'todos',
        body: todo,
        method: 'POST',
      }),
    }),
    deleteTodo: builder.mutation({
      query: ({ id }) => ({
        url: `todos/${id}`,
        method: 'delete',
      }),
    }),
    updateTodo: builder.mutation({
      query: ({ id, todo }) => ({
        url: `todos/${id}`,
        body: todo,
        method: 'patch',
      }),
    }),
  }),
});
export const {
  useLazyListTodoQuery,
  useListTodoQuery,
  useCreateTodoMutation,
  useDeleteTodoMutation,
  useGetTodoByIdQuery,
  useUpdateTodoMutation,
} = todoApi;
