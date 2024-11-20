import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const articleApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_RAPID_API_URL,
    prepareHeaders: (header) => {
      header.set("X-RapidAPI-Key", import.meta.env.VITE_RAPID_API_KEY);
      header.set("X-RapidAPI-Host", import.meta.env.VITE_RAPID_API_HOST);
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) => {
        const queryParams = new URLSearchParams({
          url: encodeURIComponent(params.articleUrl),
          word_per_minute: 300,
          desc_truncate_len: 210,
          desc_len_min: 180,
          content_len_min: 200,
        });
        return `/article/parse?${queryParams.toString()}`;
      },
    }),
  }),
});

export const { useLazyGetSummaryQuery } = articleApi;
