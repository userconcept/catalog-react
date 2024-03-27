import { api } from './api.ts';

import { ProductsItem } from '../../types/products.types.ts';

export const productApi = api.injectEndpoints({
    endpoints: builder => ({
        getProductById: builder.query<Record<string, ProductsItem>, null>({
            query: () => '/products.json'
        })
    })
});

export const { useGetProductByIdQuery } = productApi;
