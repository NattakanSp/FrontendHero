import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../assets/context/ContextProvider";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import GoogleLogin from "react-google-login";
import "./Login.css";

function Login() {
  const { state, dispatch } = useContext(Context);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch({ type: "OPEN_LOGIN" });
  }, [dispatch]);

  const handleClose = () => {
    dispatch({ type: "CLOSE_LOGIN" });
    navigate("/");
  };

  const handleRegister = () => {
    dispatch({ type: "UPDATE_USERS" });
    navigate("/register");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not in the correct format";
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
      valid = false;
    } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(formData.password)) {
      newErrors.password =
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleLogin = () => {
    if (validateForm()) {
      console.log("Valid form data:", formData);
    }
    navigate("/");
  };

  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <>
      <Modal show={state.openLogin} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  name="email"
                  onChange={handleChange}
                  isInvalid={errors.email}
                  isValid={formData.email && errors.email == null && errors.email == ""}
                  className={formData.email && errors.email == null && errors.email == "" ? "valid-email" : ""}
                />
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                <Form.Control.Feedback type="valid">Password meets complexity requirements</Form.Control.Feedback>
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
                  value={formData.password}
                  onChange={handleChange}
                  isInvalid={errors.password}
                  isValid={formData.password && errors.password == null && errors.password == ""}
                  className={
                    formData.password && errors.password == null && errors.password == "" ? "valid-password" : ""
                  }
                />
                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                <Form.Control.Feedback type="valid">Password meets complexity requirements</Form.Control.Feedback>
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* <GoogleLogin
            clientId=""
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          /> */}
          <Button className="btn-menu" variant="primary" onClick={handleLogin}>
            Log In
          </Button>
        </Modal.Footer>
        <p className="mx-3">Don't you have an account ?</p>
        <button className="btn-blue mb-2" onClick={handleRegister}>
          Register
        </button>
      </Modal>
    </>
  );
}

export default Login;
