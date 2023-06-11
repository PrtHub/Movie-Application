import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
    prepareHeaders: (headers) => {
      const token = import.meta.env.VITE_REACT_API_TOKEN  
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
  
      return headers
    },
  }),
  endpoints: (builder) => ({
    getMovie: builder.query({
      query: () => `/discover/movie`,
    }),
    getTrendingMovie: builder.query({
      query: (time) => `/trending/movie/${time}`,
    }),
    getTrendingTv: builder.query({
      query: (time) => `/trending/tv/${time}`,
    }),
    getTrailers: builder.query({
      query: (mediaType) => `/${mediaType}/upcoming`,
    }),
  }),
});

export const { useGetMovieQuery, useGetTrendingMovieQuery, useGetTrendingTvQuery, useGetTrailersQuery } = tmdbApi;
