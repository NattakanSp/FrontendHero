import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

function SelectBox({ options, selectedOptions, handleChange }) {
  return (
    <Form>
      <div className="mb-3">
        {options.map((option, index) => (
          <Form.Check type="checkbox" id={`check-${index}`} key={index}>
            <Form.Check.Input
              type="checkbox"
              checked={selectedOptions.includes(option)}
              onChange={() => handleChange(option)}
            />
            <Form.Check.Label>{option}</Form.Check.Label>
          </Form.Check>
        ))}
      </div>
    </Form>
  );
}
SelectBox.propTypes = {
  options: PropTypes.array.isRequired,
  selectedOptions: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SelectBox;
