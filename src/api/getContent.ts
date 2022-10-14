import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Api, Contact } from 'types/types';

export const getContent = createApi({
  reducerPath: 'getContent',
  tagTypes: ['Contacts'],

  baseQuery: fetchBaseQuery({ baseUrl: Api.baseUrl }),

  endpoints: (builder) => ({
    getAllContacts: builder.query<Contact[], undefined>({
      query: () => Api.contacts,

      providesTags: ['Contacts'],
    }),

    addContact: builder.mutation<void, Contact>({
      query: (newContact) => ({
        url: Api.contacts,
        method: 'POST',
        body: newContact,
      }),

      invalidatesTags: ['Contacts'],
    }),

    deleteContact: builder.mutation<void, string>({
      query: (id) => ({
        url: `${Api.contacts}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetAllContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = getContent;
