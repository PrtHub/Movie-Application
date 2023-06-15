import loader from '../assets/loader.svg'

const Loader = () => {
  return (
    <div className="w-full h-full flex justify-center items-center m-auto">
        <img src={loader} alt="loading.." className='w-10 h-10 ' />
    </div>
  )
}

export default Loader