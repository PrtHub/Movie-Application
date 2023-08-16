/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet-async";

const SEO = ({ title }) => {
  return (
    <Helmet>
      <title className="capitalize">{title}</title>
      <meta name="description" content="Explore millions of movies, TV shows and people to discover" />
    </Helmet>
  );
};
 
export default SEO;