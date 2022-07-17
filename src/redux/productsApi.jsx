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
      query: date => ({
        url: `/api/diary/?date=${date}`,
        method: 'GET',
      }),
      providesTags: ['products'],
    }),

    getAllProducts: builder.query({
      query: () => ({
        url: `/api/products/search`,
        method: 'GET',
      }),
      providesTags: ['products'],
    }),

    createProducts: builder.mutation({
      query: ({
        date = new Date().toISOString().split('T')[0],
        product: title,
        grams: weight,
      }) => ({
        url: `/api/diary`,
        method: 'POST',
        body: {
          date,
          title,
          weight: Number(weight),
        },
      }),
      invalidatesTags: ['products'],
    }),

    // updateProducts: builder.mutation({
    //   query: ({ productId, name, number }) => ({
    //     url: `/products/${productId}`,
    //     method: 'PATCH',
    //     body: { name, number },
    //   }),
    //   invalidatesTags: ['products'],
    // }),

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
  useGetAllProductsQuery,
  useGetProductsQuery,
  useCreateProductsMutation,
  useDeleteProductsMutation,
  // useUpdateProductsMutation,
} = productsApi;
