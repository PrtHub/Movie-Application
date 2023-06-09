import { useGetMovieQuery } from "../../redux/TMDB"


const Hero = () => {

  const { data, loading, error}  = useGetMovieQuery()
  console.log(data)

  return (
    <>
    <header className="w-full h-[450px] md:h-[550px]">
      <div className="w-full h-full">
        <img src="" alt="" />
      </div>
    </header>
    </>
  )
}

export default Hero