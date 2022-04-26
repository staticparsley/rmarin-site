import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);
  const { education } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Experience" />
          {projects.map((project) => {
            const { title, info, info2 } = project;

            return (
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title}</h3>
                      <div>
                        <p>
                          {info}
                        </p>
                        <p className="mb-4">{info2}</p>
                      </div>
                    </div>
                  </Fade>
            );
          })}
        </div>
      </Container>
      <Container>
        <div className="project-wrapper">
          <Title title="Education" />
          {education.map((project) => {
            const { title, info, info2 } = project;

            return (
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title}</h3>
                      <div>
                        <p>
                          {info}
                        </p>
                        <p className="mb-4">{info2}</p>
                      </div>
                    </div>
                  </Fade>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
