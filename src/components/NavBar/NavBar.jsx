import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // تأكد من أنك تستخدم react-router-dom
import "bootstrap/dist/css/bootstrap.min.css"; // استيراد CSS الخاص بـ Bootstrap
import "./NavBar.css";

export default function NavigationBar() {
  return (
    <Navbar expand="lg" className="me-navbar">
      <Navbar.Brand href="/" className="me-navbar-logo">
        <h2>عيادة العناية السنية</h2>
      </Navbar.Brand>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto me-navbar-links">
          <Nav.Item>
            <Nav.Link as={Link} to="/" className="me-navbar-link">
              الصفحة الرئيسية
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/about" className="me-navbar-link">
              من أنا ؟
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/services" className="me-navbar-link">
              الخدمات التي أقدمها
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/contact" className="me-navbar-link">
              تواصل معي
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Button className="btn-signUp" variant="primary">
              تسجيل الخروج
            </Button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
