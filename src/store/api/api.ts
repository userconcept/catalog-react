import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ProductsItem } from '../../types/products.types.ts';

const API_URL = 'http://localhost:5173';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL
    }),
    endpoints: builder => ({
        getProducts: builder.query<Record<string, ProductsItem>, null>({
            query: () => '/products.json'
        })
    })
});

export const { useGetProductsQuery } = api;
