import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import PropTypes from "prop-types";

function ResultBox({ hotel }) {
  return (
    <Card
      style={{
        width: "100%",
        backgroundColor: "#f0f0f0",
        border: "none",
        borderRadius: "5px",
        padding: "5px",
        marginBottom: "10px",
      }}
    >
      <Card.Body className="px-0">
        <Row>
          <Col xs={4}>
            <Image src={hotel.max_photo_url} className="photo-hotel" />
          </Col>
          <Col xs={5} className="px-2 d-flex flex-column justify-content-between">
            <Row className="mx-4">
              <h4 className="text-start font-weight-bold">{hotel.hotel_name}</h4>
              <p className="mb-0 text-start">Distance to center: {hotel.distance_to_cc_formatted}</p>
            </Row>
            <Row className="mx-2">
              <h6>
                {hotel.accommodation_type_name} {hotel.unit_configuration_label}
              </h6>
            </Row>
          </Col>
          <Col xs={3} className="px-4 d-flex flex-column justify-content-between">
            <Row>
              <h5 className="mb-0 text-end font-weight-bold">{hotel.review_score}</h5>
              <p className="mb-0 text-end">Number of reviews: {hotel.review_nr}</p>
            </Row>
            <Row>
              <h5 className="mb-0 text-end font-weight-bold">{hotel.price_breakdown.gross_price}</h5>
              <p className="mb-0 text-end">
                x nights <span className="mb-0 text-end">2 guests</span>
              </p>
              <button className="mb-0 text-end btn-red">View option</button>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

ResultBox.propTypes = {
  hotel: PropTypes.object.isRequired,
};

export default ResultBox;
