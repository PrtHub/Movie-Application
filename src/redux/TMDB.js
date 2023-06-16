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
    getMovieDetails: builder.query({
      query: (movie_id) => `/movie/${movie_id}`
    }),
    getWatchMovie: builder.query({
      query: (movie_id) => `movie/${movie_id}/watch/providers`
    }),
    getMovieCradits: builder.query({
      query: (movie_id) => `movie/${movie_id}/credits`
    }),
    getMovieVideo: builder.query({
      query: (movie_id) => `movie/${movie_id}/videos`
    }),
    getMovieReviews: builder.query({
      query: (movie_id) => `movie/${movie_id}/reviews`
    }), 
    getMovieSimilar: builder.query({
      query: (movie_id) => `movie/${movie_id}/similar`
    }), 
    getMovieRecommend: builder.query({
      query: (movie_id) => `movie/${movie_id}/recommendations`
    }), 
    getWatchTv: builder.query({
      query: (tv_id) => `tv/${tv_id}/watch/providers`
    }),
    getTvDetails: builder.query({
      query: (tv_id) => `/tv/${tv_id}`
    }),
    getTvCradits: builder.query({
      query: (tv_id) => `tv/${tv_id}/credits`
    }),
    getTvVideo: builder.query({
      query: (tv_id) => `tv/${tv_id}/videos`
    }), 
    getTvReviews: builder.query({
      query: (tv_id) => `tv/${tv_id}/reviews`
    }), 
    getTvSimilar: builder.query({
      query: (tv_id) => `tv/${tv_id}/similar`
    }), 
    getTvRecommend: builder.query({
      query: (tv_id) => `tv/${tv_id}/recommendations`
    }), 
    getPeopleDetails: builder.query({
      query: (person_id) => `/person/${person_id}`
    }), 
    getKnownForDetails: builder.query({
      query: (person_id) => `/person/${person_id}/movie_credits`
    }), 
    getNowPlaingMovie: builder.query({
      query: (pageNum) => `/movie/now_playing?page=${pageNum}`
    }), 
    getPopularMovie: builder.query({
      query: (pageNum) => `/movie/popular?page=${pageNum}`
    }), 
    getUpcomingMovie: builder.query({
      query: (pageNum) => `/movie/upcoming?page=${pageNum}`
    }), 
    getTopRatedMovie: builder.query({
      query: (pageNum) => `/movie/top_rated?page=${pageNum}`
    }), 
    getAiringToday: builder.query({
      query: (pageNum) => `/tv/airing_today?page=${pageNum}`
    }), 
    getOnTheAir: builder.query({
      query: (pageNum) => `/tv/on_the_air?page=${pageNum}`
    }), 
    getTvPopular: builder.query({
      query: (pageNum) => `/tv/popular?page=${pageNum}`
    }), 
    getTvTopRated: builder.query({
      query: (pageNum) => `/tv/top_rated?page=${pageNum}`
    }), 
    getPopularPeople: builder.query({
      query: (pageNum) => `/person/popular?page=${pageNum}`
    }), 
    getGenresData: builder.query({
      query: (media_type) => `genre/${media_type}/list`
    }), 
    getSearchMulti: builder.query({
      query: (args) => {
        const { query, pageNum } = args;
        return {
            url: `/search/multi?query=${query}&page=${pageNum}`
        }}
    }),
  }),
});

export const { useGetMovieQuery, useGetTrendingMovieQuery, useGetTrendingTvQuery, useGetTrendingPeopleQuery, useGetSearchMultiQuery, useGetMovieDetailsQuery,useGetTvDetailsQuery, useGetWatchMovieQuery, useGetWatchTvQuery, useGetMovieCraditsQuery, useGetTvCraditsQuery, useGetMovieVideoQuery, useGetTvVideoQuery, useGetTvReviewsQuery, useGetMovieReviewsQuery, useGetTvSimilarQuery, useGetMovieRecommendQuery, useGetMovieSimilarQuery, useGetTvRecommendQuery, useGetPeopleDetailsQuery, useGetKnownForDetailsQuery, useGetNowPlaingMovieQuery, useGetGenresDataQuery, useGetPopularMovieQuery, useGetTopRatedMovieQuery, useGetUpcomingMovieQuery, useGetAiringTodayQuery, useGetOnTheAirQuery, useGetTvTopRatedQuery, useGetTvPopularQuery, useGetPopularPeopleQuery } = tmdbApi;
