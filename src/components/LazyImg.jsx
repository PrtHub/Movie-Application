/* eslint-disable react/prop-types */
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyImg = ({ className, src }) => {
  return (
    <LazyLoadImage className={className || ""} alt="" src={src} effect="blur" />
  );
};

export default LazyImg;
