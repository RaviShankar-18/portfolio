import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaBootstrap,
  FaDatabase,
  FaCode,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiPostman,
  SiVite,
} from "react-icons/si";
import AOS from "aos";
import "./Skills.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const frontendSkills = [
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
    { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
    { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
    { name: "Express.js", icon: <SiExpress />, color: "#000000" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "JWT", icon: <FaCode />, color: "#000000" },
    { name: "REST APIs", icon: <FaDatabase />, color: "#FF6B6B" },
  ];

  const toolsSkills = [
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
    { name: "VS Code", icon: <FaCode />, color: "#007ACC" },
    { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
    { name: "Vite", icon: <SiVite />, color: "#646CFF" },
  ];

  const SkillCard = ({ skill, index }) => (
    <Col md={6} lg={4} className="mb-4" key={skill.name}>
      <Card
        className="skill-card h-100"
        data-aos="fade-up"
        data-aos-delay={index * 100}
      >
        <Card.Body className="text-center">
          <div className="skill-icon mb-3" style={{ color: skill.color }}>
            {skill.icon}
          </div>
          <h5 className="skill-name">{skill.name}</h5>
        </Card.Body>
      </Card>
    </Col>
  );

  return (
    <section id="skills" className="skills-section section-padding">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <h2 className="section-title" data-aos="fade-up">
              Technical Skills
            </h2>
            <p
              className="section-subtitle"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Technologies and tools I use to create amazing web applications
            </p>
          </Col>
        </Row>

        {/* Frontend Skills */}
        <Row className="mb-5">
          <Col lg={12}>
            <h3 className="skill-category-title" data-aos="fade-up">
              <span className="category-icon">🎨</span>
              Frontend Development
            </h3>
            <Row>
              {frontendSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </Row>
          </Col>
        </Row>

        {/* Backend Skills */}
        <Row className="mb-5">
          <Col lg={12}>
            <h3 className="skill-category-title" data-aos="fade-up">
              <span className="category-icon">⚙️</span>
              Backend Development
            </h3>
            <Row>
              {backendSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </Row>
          </Col>
        </Row>

        {/* Tools & Technologies */}
        <Row>
          <Col lg={12}>
            <h3 className="skill-category-title" data-aos="fade-up">
              <span className="category-icon">🛠️</span>
              Tools & Technologies
            </h3>
            <Row>
              {toolsSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </Row>
          </Col>
        </Row>

        {/* Additional Skills */}
        <Row className="mt-5">
          <Col lg={12}>
            <Card className="additional-skills-card" data-aos="fade-up">
              <Card.Body>
                <h4 className="text-center mb-4">Additional Skills</h4>
                <Row className="text-center">
                  <Col md={3} sm={6} className="mb-3">
                    <div className="additional-skill">
                      <strong>Problem Solving</strong>
                      <p>Algorithmic thinking and debugging</p>
                    </div>
                  </Col>
                  <Col md={3} sm={6} className="mb-3">
                    <div className="additional-skill">
                      <strong>Team Collaboration</strong>
                      <p>Effective communication and teamwork</p>
                    </div>
                  </Col>
                  <Col md={3} sm={6} className="mb-3">
                    <div className="additional-skill">
                      <strong>Time Management</strong>
                      <p>Meeting deadlines and priorities</p>
                    </div>
                  </Col>
                  <Col md={3} sm={6} className="mb-3">
                    <div className="additional-skill">
                      <strong>Quick Learner</strong>
                      <p>Adapting to new technologies</p>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
