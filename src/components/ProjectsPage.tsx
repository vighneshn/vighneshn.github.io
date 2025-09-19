import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import TrapBackground from './TrapBackground';
import PageNav from './PageNav';
import ContactInfoNav from './ContactInfoNav';

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #e0e0e0;
`;

const ContentContainer = styled(motion.div)`
  width: 90%;
  height: 75%;
  position: relative;
  z-index: 15;
  background: rgba(255, 255, 255, 0.75);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    height: 70%;
    padding: 1.5rem;
    margin-bottom: 20px;
  }
  
  @media (max-width: 480px) {
    height: 70%;
    padding: 1rem;
    margin-bottom: 30px;
  }
`;

const PageTitle = styled(motion.h1)`
  font-size: 36px;
  margin-bottom: 1.5rem;
  color: #333;
  text-align: center;
`;

const ProjectsContent = styled.div`
  font-size: 18px;
  line-height: 1.6;
  color: #444;
  overflow-y: auto;
  flex: 1;
  
  p {
    margin-bottom: 1.5rem;
  }
  
  h2 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: #333;
  }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-left: 5px solid #333333;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const ViewMoreButton = styled(motion.button)`
  background: #333333;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: bold;
  margin-top: 1rem;
  cursor: pointer;
  
  &:hover {
    background: #333333;
  }
`;

// Example animation variants
const contentVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const titleVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const ProjectsPage: React.FC = () => {
  const navigate = useNavigate();
  
  const handleProjectClick = (projectId: string) => {
    navigate(`/projects/${projectId}`);
  };
  
  return (
    <Container>
      <TrapBackground backgroundColor="#e0e0e0" />
      <PageNav currentPage="Projects" />
      <ContactInfoNav />
      
      <ContentContainer
        initial="initial"
        animate="animate"
        variants={contentVariants}
      >
        <PageTitle variants={titleVariants}>Research Projects</PageTitle>
        
        <ProjectsContent>
          <ProjectCard 
            whileHover={{ y: -5 }}
            onClick={() => handleProjectClick('integrated-atomic-fluorescence')}
          >
            <h2>Integrated Atomic Fluorescence Collection</h2>
            <p>
              Development of advanced integrated optical systems for efficient collection and detection of atomic fluorescence 
              in trapped ion experiments. This project focuses on optimizing photon collection efficiency and signal-to-noise 
              ratios for improved quantum state detection and measurement.
            </p>
            <p>
              Key achievements include:
              <ul>
                <li>A derivation of the collection efficiency of integrated grating couplers</li>
                <li>A target metric to optimize for the collection of fluorescence from an ion</li>
                <li>A design, simulation and measurement of a fabricated grating coupler</li>
              </ul>
            </p>
            <ViewMoreButton 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              View Details
            </ViewMoreButton>
          </ProjectCard>

          <ProjectCard 
            whileHover={{ y: -5 }}
            onClick={() => handleProjectClick('artiq-control')}
          >
            <h2>Precise Control of Trapped Ion Experiments using ARTIQ</h2>
            <p>
              Implementation and optimization of the ARTIQ (Advanced Real-Time Infrastructure for Quantum physics) 
              control system for trapped ion experiments. This project focuses on developing precise timing and 
              control sequences for complex quantum operations.
            </p>
            <p>
              Recent progress:
              <ul>
                <li>Development of custom control sequences for complex quantum operations</li>
                <li>Implementation of real-time feedback and control systems</li>
              </ul>
            </p>
            <ViewMoreButton 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              View Details
            </ViewMoreButton>
          </ProjectCard>

          <ProjectCard 
            whileHover={{ y: -5 }}
            onClick={() => handleProjectClick('ion-trap-photonics')}
          >
            <h2>Ion Trap Chip Design - Integrated Photonics Framework</h2>
            <p>
              Development of a general framework for ion trap integrated photonics, focusing on scalable and 
              manufacturable designs. This project aims to create a comprehensive design methodology that can 
              be shared with the broader quantum computing community.
            </p>
            <p>
              Key features:
              <ul>
                <li>Development of a code base for ion trap photonics</li>
                <li>Implementation of a general framework for grating design and simulation</li>
                <li>Creation of a public framework for community adoption</li>
              </ul>
            </p>
            <ViewMoreButton 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              View Details
            </ViewMoreButton>
          </ProjectCard>

          <ProjectCard 
            whileHover={{ y: -5 }}
            onClick={() => handleProjectClick('circular-polarization')}
          >
            <h2>Integrated Circular Polarization Emitters</h2>
            <p>
              Design and implementation of integrated optical components for generating and controlling 
              circularly polarized light in trapped ion systems. This project focuses on developing 
              compact and efficient solutions for polarization control in quantum experiments.
            </p>
            <p>
              Technical achievements:
              <ul>
                <li>Implementation of efficient circular polarization generation</li>
              </ul>
            </p>
            <ViewMoreButton 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              View Details
            </ViewMoreButton>
          </ProjectCard>
        </ProjectsContent>
      </ContentContainer>
    </Container>
  );
};

export default ProjectsPage; 