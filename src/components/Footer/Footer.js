import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="text-center text-md-start">
            <div className="footer-info">
              <p className="footer-text mb-1">
                &copy; {currentYear} Ravi Shankar Kumar. All rights reserved.
              </p>
              <p className="footer-subtitle">Full Stack MERN Developer</p>
            </div>
          </Col>

          <Col md={4} className="text-center text-md-end">
            <div className="footer-social">
              <a
                href="https://github.com/RaviShankar-18"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/ravi-shankar-kumar-404215263/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:ravishankarkumar.work@gmail.com"
                className="social-link"
                title="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
