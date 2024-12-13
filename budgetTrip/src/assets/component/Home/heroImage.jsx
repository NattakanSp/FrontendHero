import Image from "react-bootstrap/Image";
import PropTypes from "prop-types";

function HeroImage({ imgView, className }) {
  // Add a check to ensure imgView and imgView.image_url exist
  if (!imgView || !imgView.image_url) {
    return null; // Or a placeholder image or any other fallback content
  }

  return <Image src={imgView.image_url} fluid className={className} />;
}

HeroImage.propTypes = {
  imgView: PropTypes.shape({
    image_url: PropTypes.string.isRequired,
  }),
  className: PropTypes.string,
};

export default HeroImage;
