import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

// Create endpoints to call Backend
export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL}),
    reducerPath: "main",
    // Keep information (protects them?)
    tagTypes: ["Kpis"],
    endpoints: (build) => ({
        // endpoint getKpis calls to VITE_BASE_URL + kpi/kpis
        getKpis: build.query<void, void>({
            query: () => 'kpi/kpis/',
            providesTags: ["Kpis"]
        })

    })

})

export const { useGetKpisQuery } = api;