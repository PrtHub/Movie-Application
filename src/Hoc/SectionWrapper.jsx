/* eslint-disable react/prop-types */
const ContentWrapper = ({ children }) => {
  return (
    <div className="w-full max-w-7xl h-full mx-auto px-5 sm:px-10">
      {children}
    </div>
  );
};

export default ContentWrapper;
