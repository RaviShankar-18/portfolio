import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <div className="footer-brand">
              <h4>
                Ravi Shankar<span className="text-primary">.</span>
              </h4>
              <p>Full Stack MERN Developer</p>
            </div>
          </Col>

          <Col md={6} className="text-center text-md-end">
            <div className="footer-social">
              <a
                href="https://github.com/RaviShankar-18"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/ravi-shankar-kumar-404215263/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:ravishankarkumar.work@gmail.com"
                className="social-link"
              >
                <FaEnvelope />
              </a>
            </div>
          </Col>
        </Row>

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
      </Container>
    </footer>
  );
};

export default Footer;
