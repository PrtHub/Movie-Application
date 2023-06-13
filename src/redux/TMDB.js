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
    getTrendingPeople: builder.query({
      query: (time) => `/trending/person/${time}`,
    }),
    getSearchMulti: builder.query({
      query: (query, pageNum) => `/search/multi?query=${query}&page=${pageNum}`,
    }),
    getMovieDetails: builder.query({
      query: (movie_id) => `/movie/${movie_id}`
    }),
    getWatchMovie: builder.query({
      query: (movie_id) => `movie/${movie_id}/watch/providers`
    }),
    getMovieCradits: builder.query({
      query: (movie_id) => `movie/${movie_id}/credits`
    }),
    getTvDetails: builder.query({
      query: (tv_id) => `/tv/${tv_id}`
    }),
    getWatchTv: builder.query({
      query: (movie_id) => `tv/${movie_id}/watch/providers`
    }),
   
  }),
});

export const { useGetMovieQuery, useGetTrendingMovieQuery, useGetTrendingTvQuery, useGetTrendingPeopleQuery, useGetSearchMultiQuery, useGetMovieDetailsQuery,useGetTvDetailsQuery, useGetWatchMovieQuery, useGetWatchTvQuery, useGetMovieCraditsQuery } = tmdbApi;
