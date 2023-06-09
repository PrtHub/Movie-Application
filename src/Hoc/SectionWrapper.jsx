const SectionWrapper = (Component) => {
    const WrappedComponent = () => (
      <section className="w-full max-w-7xl mx-auto sm:px-10 px-6">
        <Component />
      </section>
    );
  
    return WrappedComponent;
  };
  
  export default SectionWrapper;
  
