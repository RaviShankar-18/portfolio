import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaExternalLinkAlt,
} from "react-icons/fa";
import AOS from "aos";
import "./Contact.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      details: "ravishankarkumar.work@gmail.com",
      link: "mailto:ravishankarkumar.work@gmail.com",
      description: "Drop me a line anytime!",
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      details: "+91 9354419407",
      link: "tel:+919354419407",
      description: "Call me for quick discussions",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      details: "Greater Noida, India",
      link: null,
      description: "Available for remote work",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/RaviShankar-18",
      color: "#333",
      description: "Check out my code",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/ravi-shankar-kumar-404215263/",
      color: "#0077B5",
      description: "Let's connect professionally",
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      url: "mailto:ravishankarkumar.work@gmail.com",
      color: "#EA4335",
      description: "Send me a message",
    },
  ];

  return (
    <section id="contact" className="contact-section section-padding">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <h2 className="section-title" data-aos="fade-up">
              Let's Connect
            </h2>
            <p
              className="section-subtitle"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Ready to collaborate? Let's build something amazing together!
            </p>
          </Col>
        </Row>

        {/* Contact Information Cards */}
        <Row className="justify-content-center mb-5">
          {contactInfo.map((item, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <Card
                className="contact-card h-100"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Card.Body className="text-center">
                  <div
                    className="contact-icon-large mb-3"
                    style={{ color: "#3498db" }}
                  >
                    {item.icon}
                  </div>
                  <h5 className="contact-title">{item.title}</h5>
                  <p className="contact-description">{item.description}</p>
                  {item.link ? (
                    <a href={item.link} className="contact-link-large">
                      {item.details}
                    </a>
                  ) : (
                    <p className="contact-details-text">{item.details}</p>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Social Links Section */}
        <Row className="justify-content-center mb-5">
          <Col lg={8}>
            <Card className="social-card" data-aos="fade-up">
              <Card.Body>
                <h4 className="text-center mb-4">Connect With Me</h4>
                <Row>
                  {socialLinks.map((social, index) => (
                    <Col md={4} className="mb-3" key={index}>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-card-link"
                      >
                        <div className="social-item">
                          <div
                            className="social-icon-large"
                            style={{ color: social.color }}
                          >
                            {social.icon}
                          </div>
                          <h6>{social.name}</h6>
                          <p>{social.description}</p>
                          <FaExternalLinkAlt className="external-icon" />
                        </div>
                      </a>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Resume Download Section */}
        <Row className="justify-content-center mb-5">
          <Col lg={6} className="text-center">
            <Card className="resume-card" data-aos="fade-up">
              <Card.Body>
                <h4 className="mb-3">Download My Resume</h4>
                <p className="mb-4">
                  Get a detailed overview of my experience, skills, and projects
                </p>
                <Button
                  variant="primary"
                  href="/resume.pdf"
                  download="RaviShankarKumar_Resume.pdf"
                  className="btn-download-large"
                  size="lg"
                >
                  <FaDownload className="me-2" />
                  Download Resume
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Call to Action */}
        <Row>
          <Col lg={12} className="text-center">
            <Card className="cta-card" data-aos="fade-up">
              <Card.Body>
                <h3>Ready to start your next project?</h3>
                <p>
                  I'm currently available for full-time opportunities and
                  exciting projects. Let's discuss how we can work together to
                  bring your ideas to life.
                </p>
                <div className="cta-buttons">
                  <Button
                    variant="light"
                    href="mailto:ravishankarkumar.work@gmail.com"
                    className="btn-cta me-3 mb-2"
                    size="lg"
                  >
                    <FaEnvelope className="me-2" />
                    Send Email
                  </Button>
                  <Button
                    variant="outline-light"
                    href="https://www.linkedin.com/in/ravi-shankar-kumar-404215263/"
                    target="_blank"
                    className="btn-cta-outline mb-2"
                    size="lg"
                  >
                    <FaLinkedin className="me-2" />
                    Connect on LinkedIn
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
