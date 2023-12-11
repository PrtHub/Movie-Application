const HeroSkeleton = () => {
  return (
    <main className="w-full h-[450px] md:h-[500px] bg-skeleton animate-pulse flex-shrink-0 overflow-hidden">
      <section className="h-full w-full bg-[#3f3f3f]">
        <section className="h-full w-full absolute left-0 animate-slide" />
      </section>
    </main>
  );
};

export default HeroSkeleton;
