import loader from "../assets/loader.svg";

const Loader = () => {
  return (
    <div className="w-full h-full flex justify-center items-center m-auto py-10">
      <img src={loader} alt="loading.." className="w-14 h-14 " />
    </div>
  );
};

export default Loader;
