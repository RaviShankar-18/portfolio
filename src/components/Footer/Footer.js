import React from "react";
import { Container, Row, Col } from "react-bootstrap";
<<<<<<< HEAD
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
=======
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
>>>>>>> cb191b04b708023ca6b391983883a20c64aeab23
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <Container>
        <Row className="align-items-center">
<<<<<<< HEAD
          <Col md={6} className="text-center text-md-start">
            <div className="footer-brand">
              <h4>
                Ravi Shankar<span className="text-primary">.</span>
              </h4>
              <p>Full Stack MERN Developer</p>
            </div>
          </Col>

          <Col md={6} className="text-center text-md-end">
=======
          <Col md={8} className="text-center text-md-start">
            <div className="footer-info">
              <p className="footer-text mb-1">
                &copy; {currentYear} Ravi Shankar Kumar. All rights reserved.
              </p>
              <p className="footer-subtitle">Full Stack MERN Developer</p>
            </div>
          </Col>

          <Col md={4} className="text-center text-md-end">
>>>>>>> cb191b04b708023ca6b391983883a20c64aeab23
            <div className="footer-social">
              <a
                href="https://github.com/RaviShankar-18"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
<<<<<<< HEAD
=======
                title="GitHub"
>>>>>>> cb191b04b708023ca6b391983883a20c64aeab23
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/ravi-shankar-kumar-404215263/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
<<<<<<< HEAD
=======
                title="LinkedIn"
>>>>>>> cb191b04b708023ca6b391983883a20c64aeab23
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:ravishankarkumar.work@gmail.com"
                className="social-link"
<<<<<<< HEAD
=======
                title="Email"
>>>>>>> cb191b04b708023ca6b391983883a20c64aeab23
              >
                <FaEnvelope />
              </a>
            </div>
          </Col>
        </Row>
<<<<<<< HEAD

        <hr className="footer-divider" />

        <Row>
          <Col lg={12} className="text-center">
            <p className="footer-text">
              © {currentYear} Ravi Shankar Kumar. Made with{" "}
              <FaHeart className="heart-icon" /> using React & Bootstrap.
            </p>
            <p className="footer-subtext">
              All rights reserved. Built with passion for creating amazing web
              experiences.
            </p>
          </Col>
        </Row>
=======
>>>>>>> cb191b04b708023ca6b391983883a20c64aeab23
      </Container>
    </footer>
  );
};

export default Footer;
