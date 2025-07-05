import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginImg from "../../../assets/LoginImg.png";
import ForgetPassOrg from "../../organisms/forgetPassOrg";
import "../../../index.css";

function ForgetPassTemp() {
  return (
    <>
      <Container className="loginContainer">
        <Row className="loginRow">
          <Col>
            <ForgetPassOrg />
          </Col>
          <Col>
            <img src={LoginImg} alt="Forgot Password Visual" className="loginImage" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ForgetPassTemp;
