const MovieSkeleton = () => {
  return (
    <main className="w-40 h-60 animate-pulse flex flex-col items-center justify-center gap-2">
      <div className="w-full h-full bg-skeleton rounded " />
      <section className="w-full flex flex-col gap-2 ">
        <div className="w-full h-4 bg-skeleton rounded" />
        <div className="w-[80%] h-4 bg-skeleton rounded" />
      </section>
    </main>
  );
};

export default MovieSkeleton;
