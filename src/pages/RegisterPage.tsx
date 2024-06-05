import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const RegisterPage = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={8} className="login-bg">
            {/* <div className="">test</div> */}
          </Col>
          <Col lg={4}>
            <div className="header-form-login">
              <h1 className="text-center">User Register</h1>
              <p className="text-center">Fill up and create an account</p>
            </div>
            <div className="login-form-container"></div>
            <Form>
              <Row>
                <Col lg={6}>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" placeholder="Password" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Re type Password</Form.Label>
                    <Form.Control type="text" placeholder="Re Type Password" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Referral Code</Form.Label>
                    <Form.Control type="text" placeholder="Refferal Code" />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col lg={6}>
                  <Button variant="primary" className="w-100">
                    Register
                  </Button>
                </Col>
                <Col lg={6}>
                  <Button variant="outline-primary" className="w-100">
                    Login
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RegisterPage;
