import ContentWrapper from "../../Hoc/SectionWrapper";

const Details = () => {
  return (
    <ContentWrapper>
      <section className="w-full h-[1200px] lg:h-[600px] relative">
        <section className="w-full max-w-7xl mx-auto h-full flex flex-col lg:flex-row justify-center items-start gap-10 p-10 absolute top-0 right-0 left-0 z-50 opacity-100 animate-pulse">
          <section className="w-[320px] sm:w-[400px] h-[450px] sm:h-[550px] lg:h-[480px] bg-skeleton animate-pulse">
            <div className="w-full h-full object-cover object-center rounded " />
          </section>
          <section className="w-full h-full flex flex-col items-start justify-start mr-5 lg:mr-0 animate-pulse">
            <section className="w-[80%] h-full flex flex-col animate-pulse gap-2">
              <div className="w-[80%] h-4 bg-skeleton" />
              <div className="w-[70%] h-4 bg-skeleton"></div>
            </section>
            <section className="w-full h-full flex flex-col items-start gap-2 animate-pulse">
              <div className="w-[40%] h-4 bg-skeleton" />
              <div className="w-[50%] h-4 bg-skeleton" />
              <div className="w-full h-5 bg-skeleton" />
            </section>
            <section className="w-[70%] h- flex flex-col gap-4  animate-pulse">
              <div className="w-[50%] h-4 bg-skeleton" />
              <div className="w-[60%] h-4 bg-skeleton" />
              <div className="w-[65%] h-4 bg-skeleton" />
            </section>
          </section>
        </section>
      </section>
    </ContentWrapper>
  );
};

export default Details;
