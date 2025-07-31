import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
} from "react-icons/fa";
import AOS from "aos";
import "./About.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="about" className="about-section section-padding">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <h2 className="section-title" data-aos="fade-up">
              About Me
            </h2>
            <p
              className="section-subtitle"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Get to know more about who I am, what I do, and what skills I have
            </p>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col lg={5} className="mb-4 mb-lg-0">
            <div className="about-image-container" data-aos="fade-right">
              <img
                src="/images/profile.jpg"
                alt="Ravi Shankar Kumar"
                className="img-fluid rounded about-image"
              />
              <div className="about-image-overlay">
                <div className="overlay-content">
                  <h4>Ravi Shankar Kumar</h4>
                  <p>MERN Stack Developer</p>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={7}>
            <div className="about-content" data-aos="fade-left">
              <h3 className="about-title">Professional Summary</h3>
              <p className="about-text">
                A dedicated software developer with over a year of focused
                experience in
                <strong> MERN stack development</strong>. Proven expertise in
                creating intuitive user interfaces and robust full-stack
                applications. Skilled in React.js, Node.js, and modern web
                technologies.
              </p>
              <p className="about-text">
                Seeking a full-stack developer role to leverage my technical
                skills and continue professional growth in building scalable web
                applications that make a real difference in users' lives.
              </p>

              <Row className="mt-4">
                <Col sm={6} className="mb-3">
                  <div className="info-item">
                    <FaEnvelope className="info-icon" />
                    <div>
                      <strong>Email:</strong>
                      <br />
                      <a href="mailto:ravishankar.kumar.work@gmail.com">
                        ravishankarkumar.work@gmail.com
                      </a>
                    </div>
                  </div>
                </Col>
                <Col sm={6} className="mb-3">
                  <div className="info-item">
                    <FaPhone className="info-icon" />
                    <div>
                      <strong>Phone:</strong>
                      <br />
                      <a href="tel:+919354419407">+91 9354419407</a>
                    </div>
                  </div>
                </Col>
                <Col sm={6} className="mb-3">
                  <div className="info-item">
                    <FaMapMarkerAlt className="info-icon" />
                    <div>
                      <strong>Location:</strong>
                      <br />
                      Greater Noida, India
                    </div>
                  </div>
                </Col>
                <Col sm={6} className="mb-3">
                  <div className="info-item">
                    <FaCalendarAlt className="info-icon" />
                    <div>
                      <strong>Available:</strong>
                      <br />
                      Immediately
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        {/* Education Section */}
        <Row className="mt-5">
          <Col lg={12}>
            <h3 className="text-center mb-4" data-aos="fade-up">
              Education
            </h3>
            <Row className="justify-content-center">
              <Col lg={8}>
                <Card
                  className="education-card"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <Card.Body>
                    <div className="education-content">
                      <div className="education-icon">
                        <FaGraduationCap />
                      </div>
                      <div className="education-details">
                        <h4>B.Tech in Computer Science & Engineering</h4>
                        <h5 className="text-primary">Galgotias University</h5>
                        <p className="education-info">
                          <FaMapMarkerAlt className="me-2" />
                          Greater Noida, India
                          <span className="ms-3">
                            <FaCalendarAlt className="me-2" />
                            2019 - 2023
                          </span>
                        </p>
                        <p className="education-cgpa">
                          <strong>CGPA:</strong> 7.28
                        </p>
                        <p className="education-description">
                          Coursework: Data Structures and Algorithms, Computer
                          Networks, Operating Systems, Database Management
                          Systems, Web Technologies
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Quick Stats */}
        <Row className="mt-5">
          <Col lg={12}>
            <Row className="text-center">
              <Col md={3} sm={6} className="mb-4">
                <div
                  className="stat-item"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <h3 className="stat-number">3+</h3>
                  <p className="stat-label">Projects Completed</p>
                </div>
              </Col>
              <Col md={3} sm={6} className="mb-4">
                <div
                  className="stat-item"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <h3 className="stat-number">1+</h3>
                  <p className="stat-label">Years Experience</p>
                </div>
              </Col>
              <Col md={3} sm={6} className="mb-4">
                <div
                  className="stat-item"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <h3 className="stat-number">10+</h3>
                  <p className="stat-label">Technologies Used</p>
                </div>
              </Col>
              <Col md={3} sm={6} className="mb-4">
                <div
                  className="stat-item"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <h3 className="stat-number">1</h3>
                  <p className="stat-label">Research Publication</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
