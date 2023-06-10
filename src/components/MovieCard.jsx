/* eslint-disable react/prop-types */


const MovieCard = ({Trending, isFetching, error}) => {
  return (
    <>
    {!isFetching ?(
        <main className="w-40">
       <img src={`https://image.tmdb.org/t/p/original${Trending.poster_path}`} alt="Poster" className="w-full h-full object-contain object-center" />
    </main> 
    ) : (
      <>Loading</>
    )
    }
    </>
  )
}

export default MovieCard