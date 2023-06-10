import {  MdFavoriteBorder, MdOutlineSearch } from 'react-icons/md'
import { BiMoviePlay  } from 'react-icons/bi'


const Navbar = () => {
  return (
    <>
    <nav className="w-full h-full bg-pink flex justify-between items-center gap-10 py-5">
      <main className='w-full max-w-7xl mx-auto flex items-center justify-between gap-10 px-20'>
     <section className="flex items-center justify-center gap-16">
       <section className="font-bold text-2xl flex items-center gap-2">
       <BiMoviePlay/>
          TMDB
       </section>
       <ul className="flex items-center justify-center gap-10 font-semibold text-lg">
        <li>Movies</li>
        <li>Tv</li>
        <li>People</li>
       </ul>
     </section>
     <section className="flex items-center justify-center gap-5">
        <MdFavoriteBorder className='w-6 h-6 font-semibold cursor-pointer'/>
        <MdOutlineSearch className='w-6 h-6 font-semibold cursor-pointer'/>
     </section>
      </main>
    </nav>
    </>
  )
}

export default Navbar