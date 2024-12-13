import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Context } from "../../assets/context/ContextProvider";

function Register() {
  const { dispatch } = useContext(Context);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleClose = () => {
    dispatch({ type: "CLOSE_LOGIN" });
    navigate("/");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErr) => ({
      ...prevErr,
      [name]: "",
    }));
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
    return re.test(password);
  };

  const handleRegister = () => {
    const newErrors = {};
    let valid = true;

    if (!userData.fullname) {
      newErrors.fullname = "Fullname is required";
      valid = false;
    }
    if (!validateEmail(userData.email)) {
      newErrors.email = "Email is not valid";
      valid = false;
    }
    if (!validatePassword(userData.password)) {
      newErrors.password =
        "Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character";
      valid = false;
    }
    if (userData.password !== userData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      valid = false;
    }

    if (!valid) {
      setErrors(newErrors);
      return;
    }

    dispatch({ type: "REGISTER_USER", payload: userData });
    navigate("/");
  };

  const handleLogin = () => {
    dispatch({ type: "OPEN_LOGIN" });
    navigate("/login");
  };

  return (
    <>
      <Modal show={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextFullname">
              <Form.Label column sm="2">
                Fullname
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder="Fullname"
                  name="fullname"
                  value={userData.fullname}
                  onChange={handleInputChange}
                  isInvalid={!!errors.fullname}
                />
                <Form.Control.Feedback type="invalid">{errors.fullname}</Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="email"
                  placeholder="Email address"
                  name="email"
                  value={userData.email}
                  onChange={handleInputChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={userData.password}
                  onChange={handleInputChange}
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextConfirmPassword">
              <Form.Label column sm="2">
                Confirm password
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="password"
                  placeholder="Confirm password"
                  name="confirmPassword"
                  value={userData.confirmPassword}
                  onChange={handleInputChange}
                  isInvalid={!!errors.confirmPassword}
                />
                <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-menu" variant="primary" onClick={handleRegister}>
            Register
          </Button>
        </Modal.Footer>
        <p className="mx-3">You already have an account ?</p>
        <button className="btn-blue mb-2" onClick={handleLogin}>
          Log in
        </button>
      </Modal>
    </>
  );
}

export default Register;
