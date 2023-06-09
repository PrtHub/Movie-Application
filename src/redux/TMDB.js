import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", import.meta.env.VITE_REACT_API_KEY);
      headers.set("X-RapidAPI-Host", "api.themoviedb.org");

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMovie: builder.query({
      query: () => `/discover/movie`,
    }),
  }),
});

export const { useGetMovieQuery } = tmdbApi;
