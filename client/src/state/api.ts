import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { GetKpisResponse, GetProductsResponse, GetTransactionsResponse } from "./types";


// Create endpoints to call Backend
export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "https://jiroms-backend.onrender.com/"}),
    reducerPath: "main",
    // Keep information (protects them?)
    tagTypes: ["Kpis", "Products", "Transactions"],
    endpoints: (build) => ({
        // endpoint getKpis calls to VITE_BASE_URL + kpi/kpis
        // payload action
        // response
        getKpis: build.query<Array<GetKpisResponse>, void>({
            query: () => 'kpi/kpis/',
            providesTags: ["Kpis"]
        }),
        getProducts: build.query<Array<GetProductsResponse>, void>({
            query: () => 'product/products/',
            providesTags: ["Products"]
        }),
        getTransactions: build.query<Array<GetTransactionsResponse>, void>({
            query: () => 'transaction/transactions/',
            providesTags: ["Transactions"]
        })
        // deleting products
        // deleteProduct
        // invalidateTags: ["Products"]
    })

})

export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } = api;