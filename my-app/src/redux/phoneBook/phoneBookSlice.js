import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const phoneBookApi = createApi({
  reducerPath: "phoneBookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6202e00d4d21c200170b9a9c.mockapi.io",
  }),
  tagTypes: ["Contacts"],
  endpoints: (builder) => ({
    fetchContacts: builder.query({
      query: () => "/contacts",
      providesTags: ["Contacts"],
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contacts"],
    }),
    addContact: builder.mutation({
      query: ({ name, number }) => ({
        url: "/contacts",
        method: "POST",
        body: {
          name,
          number,
        },
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = phoneBookApi;
