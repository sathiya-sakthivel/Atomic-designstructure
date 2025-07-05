import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import loginimg from "../../../assets/LoginImg.png";
import SignInFormOrg from "../../organisms/signInOrg";
import { Link } from "react-router-dom";
import "../../../index.css";

function SignInTemp() {
  return (
    <>
      <Container className="loginContainer">
        <Row className="loginRow">
          <Col>
            <SignInFormOrg />
            <div className="mt-3">
              <p>
                Don't have an account?
                <Link to="/signUp" className="ms-2">
                  Sign Up
                </Link>
              </p>
            </div>
          </Col>
          <Col>
            <img src={loginimg} alt="Login" className="loginImage" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SignInTemp;
