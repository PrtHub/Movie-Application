import ContentWrapper from "../../Hoc/SectionWrapper";

const TvDetailsSkeleton = () => {
    return (
      <ContentWrapper>
        <section className="w-full h-[600px] relative">
          <section className="w-full h-full flex justify-center items-start gap-10 p-10 absolute top-0 right-0 left-0 z-50 opacity-100 animate-pulse">
            <section className="w-[400px] h-[480px] bg-skeleton animate-pulse">
              <div className="w-full h-full object-cover object-center rounded " />
            </section>
            <section className="w-full h-full flex flex-col items-start justify-start gap- animate-pulse">
              <section className="w-[80%] full flex flex-col animate-pulse gap-5">
                <div className="w-[80%] h-6 bg-skeleton" />
                <div className="w-[70%] h-6 bg-skeleton"></div>
              </section>
              <section className="w-full h-full flex flex-col items-start gap-5 animate-pulse">
                <div className="w-[40%] h-6 bg-skeleton" />
                <div className="w-[50%] h-6 bg-skeleton" />
                <div className="w-full h-8 bg-skeleton" />
              </section>
              <section className="w-[70%] h- flex flex-col gap-5  animate-pulse">
                <div className="w-[50%] h-6 bg-skeleton" />
                <div className="w-[60%] h-6 bg-skeleton" />
                <div className="w-[65%] h-6 bg-skeleton" />
              </section>
            </section>
          </section>
        </section>
      </ContentWrapper>
    );
  };

  export default TvDetailsSkeleton