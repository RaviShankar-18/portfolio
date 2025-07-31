import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaDownload,
} from "react-icons/fa";
import AOS from "aos";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setAlertMessage("Please fill in all required fields.");
      setShowAlert(true);
      return;
    }

    // For now, just show success message
    // In production, you would send this to your backend
    setAlertMessage("Thank you for your message! I'll get back to you soon.");
    setShowAlert(true);

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    // Hide alert after 5 seconds
    setTimeout(() => setShowAlert(false), 5000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      details: "ravishankarkumar.work@gmail.com",
      link: "mailto:ravishankarkumar.work@gmail.com",
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      details: "+91 9354419407",
      link: "tel:+919354419407",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      details: "Greater Noida, India",
      link: null,
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/RaviShankar-18",
      color: "#333",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/ravi-shankar-kumar-404215263/",
      color: "#0077B5",
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      url: "mailto:ravishankarkumar.work@gmail.com",
      color: "#EA4335",
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
          <Col lg={10}>
            <Row>
              {/* Contact Information */}
              <Col lg={5} className="mb-4">
                <Card className="contact-info-card h-100" data-aos="fade-right">
                  <Card.Body>
                    <h4 className="contact-info-title">Get In Touch</h4>
                    <p className="contact-info-text">
                      I'm always open to discussing new opportunities,
                      interesting projects, or just having a chat about
                      technology and development.
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
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="resume-download">
                      <Button
                        variant="primary"
                        href="/resume.pdf"
                        download="RaviShankarKumar_Resume.pdf"
                        className="btn-download"
                      >
                        <FaDownload className="me-2" />
                        Download Resume
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              {/* Contact Form */}
              <Col lg={7}>
                <Card className="contact-form-card" data-aos="fade-left">
                  <Card.Body>
                    <h4 className="contact-form-title">Send Message</h4>

                    {showAlert && (
                      <Alert
                        variant={
                          alertMessage.includes("Thank you")
                            ? "success"
                            : "danger"
                        }
                        onClose={() => setShowAlert(false)}
                        dismissible
                      >
                        {alertMessage}
                      </Alert>
                    )}

                    <Form onSubmit={handleSubmit}>
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Name *</Form.Label>
                            <Form.Control
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Your Name"
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label>Email *</Form.Label>
                            <Form.Control
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="youremail@example.com"
                              required
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Form.Group className="mb-3">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Project Inquiry / Job Opportunity / General"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Message *</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={5}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell me about your project, job opportunity, or just say hello!"
                          required
                        />
                      </Form.Group>

                      <Button
                        type="submit"
                        variant="primary"
                        className="btn-send"
                        size="lg"
                      >
                        <FaPaperPlane className="me-2" />
                        Send Message
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Call to Action */}
        <Row className="mt-5">
          <Col lg={12} className="text-center">
            <Card className="cta-card" data-aos="fade-up">
              <Card.Body>
                <h3>Ready to start your next project?</h3>
                <p>
                  I'm currently available for full-time opportunities and
                  exciting projects. Let's discuss how we can work together to
                  bring your ideas to life.
                </p>
                <Button
                  variant="primary"
                  href="mailto:ravishankarkumar.work@gmail.com"
                  className="btn-cta"
                  size="lg"
                >
                  Start a Conversation
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
