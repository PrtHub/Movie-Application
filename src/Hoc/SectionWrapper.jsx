/* eslint-disable react/prop-types */


const SectionWrapper = ({ Component }) => {
  return (
    <section
    className="w-full max-w-7xl mx-auto sm:px-10 px-6 py-10"
    >
      <Component/>
    </section>
  )
}

export default SectionWrapper
