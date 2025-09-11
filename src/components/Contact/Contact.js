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

        <Row className="justify-content-center">
          <Col lg={8} xl={7}>
            {/* Contact Information Card */}
            <Card className="contact-main-card h-100" data-aos="fade-up">
              <Card.Body>
                <h4 className="contact-info-title text-center mb-4">
                  Get In Touch
                </h4>
                <p className="contact-info-text text-center">
                  I'm always open to discussing new opportunities, interesting
                  projects, or just having a chat about technology and
                  development.
                </p>

                <div className="contact-details">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="contact-item">
                      <div className="contact-icon">{item.icon}</div>
                      <div className="contact-text">
                        <h6>{item.title}</h6>
                        {item.link ? (
                          <a href={item.link} className="contact-link">
                            {item.details}
                          </a>
                        ) : (
                          <p>{item.details}</p>
                        )}
                        <small className="text-muted">{item.description}</small>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="resume-download text-center">
                  <Button
                    variant="primary"
                    href="/resume.pdf"
                    download="RaviShankarKumar_Resume.pdf"
                    className="btn-download"
                    size="lg"
                  >
                    <FaDownload className="me-2" />
                    Download Resume
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Social Links Section */}
        <Row className="justify-content-center mt-5">
          <Col lg={10} xl={8}>
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
                        <div className="social-item text-center">
                          <div
                            className="social-icon-large mb-2"
                            style={{ color: social.color }}
                          >
                            {social.icon}
                          </div>
                          <h6>{social.name}</h6>
                          <p className="small text-muted">
                            {social.description}
                          </p>
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

        {/* Call to Action */}
        <Row className="justify-content-center mt-5">
          <Col lg={10} xl={8}>
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
                    variant="primary"
                    href="mailto:ravishankarkumar.work@gmail.com"
                    className="btn-cta me-3 mb-2"
                    size="lg"
                  >
                    <FaEnvelope className="me-2" />
                    Send Email
                  </Button>
                  <Button
                    variant="outline-primary"
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
