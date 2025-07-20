import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import "./Hero.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Function to handle resume download
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "RaviShankarKumar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6} className="text-center text-lg-start">
            <div data-aos="fade-up" data-aos-delay="100">
              <h1 className="hero-title mb-3">
                Hi, I'm <span className="text-primary">Ravi Shankar Kumar</span>
              </h1>
              <h2 className="hero-subtitle mb-4">
                Full Stack <span className="text-secondary">MERN</span>{" "}
                Developer
              </h2>
              <p className="hero-description mb-4">
                Passionate software developer with expertise in creating
                intuitive user interfaces and robust full-stack applications. I
                love turning complex problems into simple, beautiful solutions.
              </p>

              <div className="hero-buttons mb-4">
                {/* Fixed: Use Button as anchor for smooth scrolling */}
                <Button
                  as="a"
                  variant="primary"
                  className="btn-custom me-3 mb-2"
                  href="#projects"
                >
                  View My Work
                </Button>

                {/* Fixed: Use onClick handler for download */}
                <Button
                  variant="outline-primary"
                  className="btn-outline-custom mb-2"
                  onClick={handleDownload}
                >
                  <FaDownload className="me-2" />
                  Download Resume
                </Button>
              </div>

              <div className="social-links">
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
                {/* Fixed: Removed debugging onClick, just use href */}
                <a
                  href="mailto:ravishankarkumar.work@gmail.com"
                  className="social-link"
                  title="Send me an email"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </Col>

          <Col lg={6} className="text-center">
            <div data-aos="fade-up" data-aos-delay="300">
              <div className="hero-image">
                <img
                  src="/images/profile.jpg"
                  alt="Ravi Shankar Kumar"
                  className="img-fluid rounded-circle profile-img"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
