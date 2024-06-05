import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const LoginBgStyle = {
  backgroundImage: "url(../assets/login-bg.png)",
};

const LoginPage = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={8} className="login-bg">
            {/* <div className="">test</div> */}
          </Col>
          <Col lg={4}>
            <div className="header-form-login">
              <h1 className="text-center">User Login</h1>
              <p className="text-center">Please Login Into Your Account</p>
            </div>
            <div className="login-form-container"></div>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" placeholder="Password" />
              </Form.Group>

              <Form.Group className="container-remember-me">
                <input type="checkbox" className="check-box-remember-password" />
                <Form.Label className="remember-me-label">Remember me</Form.Label>
              </Form.Group>

              <Row>
                <Col lg={6}>
                  <Button variant="primary" className="w-100">
                    Login
                  </Button>
                </Col>
                <Col lg={6}>
                  <Button variant="outline-primary" className="w-100">
                    Register
                  </Button>
                </Col>
                <Col lg={12} className="container-forgot-password">
                  <a href="" className="login-forgot-password">
                    Forgot Your Password ?
                  </a>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginPage;
