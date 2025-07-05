import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginImg from "../../../assets/LoginImg.png";
import SignUpFormOrg from "../../organisms/signUpOrg";
import { Link } from "react-router-dom";
import "../../../index.css";

function SignUpTemp() {
  return (
    <Container className="loginContainer">
      <Row>
        <Col>
          <SignUpFormOrg />
          <div className="mt-3">
            <p>
              Already have an account?
              <Link to="/" className="ms-2">
                Sign In
              </Link>
            </p>
          </div>
        </Col>
        <Col>
          <img src={LoginImg} alt="Login Visual" className="loginImage" />
        </Col>
      </Row>
    </Container>
  );
}

export default SignUpTemp;
