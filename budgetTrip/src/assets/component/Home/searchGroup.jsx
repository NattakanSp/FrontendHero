import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function SearchGroup() {
  return (
    <>
      <InputGroup>
        <Form.Control aria-label="destination name" className="border border-dark-subtle me-0 border-end-0" />
      </InputGroup>
    </>
  );
}

export default SearchGroup;
