import ContentWrapper from "../../Hoc/SectionWrapper";

const PeopleDetailsSkeleton = () => {
  return (
    <ContentWrapper>
      <section className="w-full h-full  max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-start gap-10 p-10 z-50 animate-pulse">
        <div className="w-[320px] sm:w-[400px] h-[450px] sm:h-[550px] lg:h-[480px] bg-skeleton animate-pulse">
          <div className="w-full h-full object-cover object-center rounded " />
        </div>
        <div className="w-full h-full flex flex-col items-start justify-start animate-pulse gap-10">
          <section className="w-[80%] h-full flex flex-col animate-pulse gap-1">
            <div className="w-[80%] h-4 bg-skeleton" />
            <div className="w-[70%] h-4 bg-skeleton"></div>
          </section>
          <section className="w-full h-full flex flex-col gap-2 animate-pulse">
            <div className="w-[30%] h-4 bg-skeleton" />
            <div className="w-[90%] h-20 bg-skeleton" />
          </section>
        </div>
      </section>
    </ContentWrapper>
  );
};

export default PeopleDetailsSkeleton;
