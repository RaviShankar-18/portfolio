import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt, FaEye } from "react-icons/fa";
import AOS from "aos";
import "./Projects.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const projects = [
    {
      id: 1,
      title: "ResourcePro",
      subtitle: "Full-Stack Resource Management Platform",
      description:
        "Built a full-stack application for managing engineering teams, projects, and resources with real-time updates. Features comprehensive analytics for managers and engineers.",
      image: "/images/project1-resourcepro.jpg", // Add your project images
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT"],
      features: [
        "Job-based dashboards with interactive analytics",
        "Capacity management system with overload alerts",
<<<<<<< HEAD
        "Resource optimization algorithms",
=======
>>>>>>> cb191b04b708023ca6b391983883a20c64aeab23
        "Secure authentication with JWT",
        "Real-time project tracking",
      ],
      liveLink: "https://resource-pro.vercel.app/",
      githubLink: "https://github.com/RaviShankar-18/resource-pro",
      status: "Completed",
    },
    {
      id: 2,
      title: "AnvayaPro",
      subtitle: "Full-Stack CRM App",
      description:
        "Engineered a responsive CRM platform with role-based dashboards for sales team management. Implemented real-time performance tracking and comprehensive reporting.",
      image: "/images/project2-anvayapro.jpg",
      technologies: ["React.js", "Chart.js", "Axios", "Bootstrap", "Node.js"],
      features: [
        "Role-based dashboards using Chart.js",
        "Real-time performance tracking",
        "Comprehensive lead lifecycle management",
<<<<<<< HEAD
        "Automated status updates",
=======
>>>>>>> cb191b04b708023ca6b391983883a20c64aeab23
        "Secure authentication system with JWT",
      ],
      liveLink: "https://anvaya-pro.vercel.app/",
      githubLink: "https://github.com/RaviShankar-18/anvaya-pro",
      status: "Completed",
    },
    {
      id: 3,
      title: "ShopEasy",
      subtitle: "MERN E-commerce Platform",
      description:
<<<<<<< HEAD
        "Developed a full-stack MERN e-commerce platform with seamless shopping experience. Features include advanced product search, dynamic filtering, and secure payment integration.",
=======
        "Developed a full-stack MERN e-commerce platform with seamless shopping experience. Features include advanced product search, dynamic filtering.",
>>>>>>> cb191b04b708023ca6b391983883a20c64aeab23
      image: "/images/project3-shopeasy.jpg",
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Bootstrap",
      ],
      features: [
        "Advanced product search with dynamic filtering",
        "Optimized shopping cart and checkout capabilities",
        "Responsive UI using Bootstrap Grid system",
<<<<<<< HEAD
        "Secure payment gateway integration",
=======
>>>>>>> cb191b04b708023ca6b391983883a20c64aeab23
        "Order management functionality",
      ],
      liveLink: "https://shop-easy-app-iota.vercel.app",
      githubLink: "https://github.com/RaviShankar-18/shop-easy-app",
      status: "Completed",
    },
  ];

  return (
    <section id="projects" className="projects-section section-padding">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <h2 className="section-title" data-aos="fade-up">
              My Projects
            </h2>
            <p
              className="section-subtitle"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Here are some of my recent works that showcase my skills and
              experience
            </p>
          </Col>
        </Row>

        <Row>
          {projects.map((project, index) => (
            <Col lg={12} key={project.id} className="mb-5">
              <Card
                className={`project-card ${
                  index % 2 === 0 ? "project-left" : "project-right"
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <Row className="g-0">
                  <Col
                    md={6}
                    className={index % 2 === 0 ? "order-1" : "order-2"}
                  >
                    <div className="project-image-container">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-image"
                      />
                      <div className="project-overlay">
                        <div className="project-links">
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-light btn-sm me-2"
                          >
                            <FaEye className="me-1" /> Live Demo
                          </a>
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-dark btn-sm"
                          >
                            <FaGithub className="me-1" /> Code
                          </a>
                        </div>
                      </div>
                    </div>
                  </Col>

                  <Col
                    md={6}
                    className={index % 2 === 0 ? "order-2" : "order-1"}
                  >
                    <Card.Body className="project-content">
                      <div className="project-header">
                        <Badge bg="primary" className="project-status mb-2">
                          {project.status}
                        </Badge>
                        <h3 className="project-title">{project.title}</h3>
                        <h5 className="project-subtitle">{project.subtitle}</h5>
                      </div>

                      <p className="project-description">
                        {project.description}
                      </p>

                      <div className="project-features mb-3">
                        <h6>Key Features:</h6>
                        <ul>
                          {project.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="project-tech mb-3">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} bg="secondary" className="me-2 mb-1">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="project-buttons">
                        <Button
                          variant="primary"
                          href={project.liveLink}
                          target="_blank"
                          className="me-2 mb-2"
                        >
                          <FaExternalLinkAlt className="me-2" />
                          Live Demo
                        </Button>
                        <Button
                          variant="outline-dark"
                          href={project.githubLink}
                          target="_blank"
                          className="mb-2"
                        >
                          <FaGithub className="me-2" />
                          View Code
                        </Button>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
