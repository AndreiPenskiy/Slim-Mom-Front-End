import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://slimmom-project-team6.herokuapp.com',

    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['products'],

  endpoints: builder => ({
    getProducts: builder.query({
      query: () => ({
        url: `/api/diary/:date`,
        method: 'GET',
      }),
      providesTags: ['products'],
    }),

    createProducts: builder.mutation({
      query: ({ product: title, grams: weight, kcal = 100 }) => ({
        url: `/api/diary`,
        method: 'POST',
        body: {
          title,
          weight: Number(weight),
          kcal,
        },
      }),
      invalidatesTags: ['products'],
    }),

    updateProducts: builder.mutation({
      query: ({ productId, name, number }) => ({
        url: `/products/${productId}`,
        method: 'PATCH',
        body: { name, number },
      }),
      invalidatesTags: ['products'],
    }),

    deleteProducts: builder.mutation({
      query: productId => ({
        url: `/products/${productId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['products'],
    }),
  }),
});
export const {
  useGetProductsQuery,
  useCreateProductsMutation,
  useDeleteProductsMutation,
  useUpdateProductsMutation,
} = productsApi;

// https://slimmom-project-team6.herokuapp.com/api/auth/signup
// "name": "nick",
// "email": "test@gmail.com",
// "password": "testpassword"
