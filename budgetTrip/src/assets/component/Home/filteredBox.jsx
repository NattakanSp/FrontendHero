import Card from "react-bootstrap/Card";
import SelectBox from "./selectBox";
import PropTypes from "prop-types";

function FilteredBox({ title, options, selectedOptions, handleChange }) {
  return (
    <Card style={{ width: "100%", backgroundColor: "#f0f0f0", border: "none" }}>
      <Card.Body className="px-0">
        <Card.Title className="pb-2">{title}</Card.Title>
        <SelectBox options={options} selectedOptions={selectedOptions} handleChange={handleChange} />
      </Card.Body>
    </Card>
  );
}
FilteredBox.propTypes = {
  title: PropTypes.string,
  options: PropTypes.array.isRequired,
  selectedOptions: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default FilteredBox;
