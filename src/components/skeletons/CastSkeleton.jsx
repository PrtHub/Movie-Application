const CastSkeleton = () => {
  return (
    <div className="w-full  h-full flex flex-col gap-2">
      <section className="w-32 h-32 rounded-full overflow-hidden bg-skeleton animate-pulse">
        <div className="w-full h-full bg-skeleton" />
      </section>
      <section className="w-full h-full flex flex-col gap-1">
        <div className="w-full h-4 bg-skeleton"></div>
        <div className="w-full h-4 bg-skeleton"></div>
      </section>
    </div>
  );
};

export default CastSkeleton;
