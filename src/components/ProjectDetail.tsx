import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import TrapBackground from './TrapBackground';
import PageNav from './PageNav';
import ContentContainer from './ContentContainer';
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

const PageTitle = styled(motion.h1)`
  font-size: 36px;
  margin-bottom: 1rem;
  color: #333;
  text-align: center;
`;

const DetailContent = styled.div`
  font-size: 18px;
  line-height: 1.6;
  color: #444;
  overflow-y: auto;
  flex: 1;
  padding: 0 1rem;
  margin-bottom: 1rem;
  
  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(51, 51, 51, 0.5);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(51, 51, 51, 0.7);
  }
  
  p {
    margin-bottom: 1.5rem;
  }
  
  h2 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: #333;
  }
`;

const BackButton = styled(motion.button)`
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.5rem 1rem;
  background: rgba(51, 51, 51, 0.9);
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  z-index: 20;
  
  &:hover {
    background: rgba(51, 51, 51, 1);
  }
`;

const ImageGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
`;

const ProjectImage = styled.div<{ imageUrl: string }>`
  width: 300px;
  height: 200px;
  border-radius: 8px;
  background-image: ${props => `url(${props.imageUrl})`};
  background-size: cover;
  background-position: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.03);
  }
`;

// Animation variants
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

// Project data interface
interface ProjectData {
  title: string;
  description: string;
  achievements: string[];
  images: string[];
}

// Project data
const projectsData: Record<string, ProjectData> = {
  'integrated-atomic-fluorescence': {
    title: 'Integrated Atomic Fluorescence Collection',
    description: `
      Read out of the internal state of an ion is an important step in quantum computing. Typically this is done using a laser to excite the ion to a higher energy level,
      and then detecting the fluorescence of the ion as it decays back to the ground state using a bulk objective and a photodetector.
      Having integrated optical elements to collect the fluorescence is a way to scale up the number of individual ions that can be read out simultaneously. 

      We present a calculation of the collection efficiency of integrated grating couplers and a target metric to optimize for the collection of fluorescence from an ion.
      We also present the design, simulation and measurement of a fabricated grating to achieve a collection efficiency on the same order as a bulk objective.

      Please see our paper for more details:
      <a href="https://opg.optica.org/opticaq/fulltext.cfm?uri=opticaq-3-1-28" target="_blank" rel="noopener noreferrer">Integrated Atomic Fluorescence Collection</a>
    `,
    achievements: [
      'A derivation of the collection efficiency of integrated grating couplers',
      'A target metric to optimize for the collection of fluorescence from an ion',
      'A design, simulation and measurement of a fabricated grating coupler',
    ],
    images: [
      '/images/fluorescence-1.jpg', 
      '/images/fluorescence-2.jpg',
      '/images/fluorescence-3.jpg'
    ]
  },
  'artiq-control': {
    title: 'Precise Control of Trapped Ion Experiments using ARTIQ',
    description: `
      The ARTIQ (Advanced Real-Time Infrastructure for Quantum physics) control system represents a significant 
      advancement in the control of trapped ion experiments. Our work focuses on implementing and optimizing 
      this system for precise timing and control of complex quantum operations.
      
      I've developed custom control sequences that enable sophisticated quantum operations while maintaining 
      precise timing and synchronization. The system's real-time capabilities allow for immediate feedback and 
      control, essential for maintaining quantum coherence and performing complex quantum algorithms.
      
      Our implementation includes optimization of timing and synchronization for multi-ion operations, 
      integration with existing experimental infrastructure, and development of custom control sequences 
      for specific quantum operations.
    `,
    achievements: [
      'Development of custom control sequences for complex quantum operations',
      'Implementation of real-time feedback and control systems',
      'Optimization of timing and synchronization for multi-ion operations',
      'Integration with existing experimental infrastructure'
    ],
    images: [
      '/images/artiq-1.jpg', 
      '/images/artiq-2.jpg',
      '/images/artiq-3.jpg'
    ]
  },
  'ion-trap-photonics': {
    title: 'Ion Trap Chip Design - Integrated Photonics Framework',
    description: `
      Our work on ion trap integrated photonics focuses on developing a general framework for scalable and 
      manufacturable designs. This project aims to create a comprehensive design methodology that can be 
      shared with the broader quantum computing community, facilitating the development of next-generation 
      ion trap quantum computers.
      
      The framework includes standardized design patterns for ion trap photonics, integration of optical 
      components with ion trap electrodes, and optimization of optical access and collection efficiency. 
      By creating a public framework, we aim to accelerate progress in the field and enable more researchers 
      to develop advanced ion trap systems with integrated photonics.
      
      This work represents a significant step toward scalable quantum computing with trapped ions, as it 
      addresses one of the key challenges in the field: the integration of optical components with ion trap 
      electrodes in a scalable and manufacturable way.
    `,
    achievements: [
      'Development of standardized design patterns for ion trap photonics',
      'Integration of optical components with ion trap electrodes',
      'Optimization of optical access and collection efficiency',
      'Creation of a public framework for community adoption'
    ],
    images: [
      '/images/photonics-1.jpg', 
      '/images/photonics-2.jpg',
      '/images/photonics-3.jpg'
    ]
  },
  'circular-polarization': {
    title: 'Integrated Circular Polarization Emitters',
    description: `
      Our research in integrated circular polarization emitters focuses on developing compact and efficient 
      solutions for polarization control in quantum experiments. By integrating polarization control elements 
      directly into the optical system, we've created a more robust and efficient approach to generating 
      and controlling circularly polarized light in trapped ion systems.
      
      The project combines expertise in integrated photonics, polarization optics, and quantum control to 
      develop novel solutions for polarization control. Our approach focuses on creating integrated components 
      that can generate and control circular polarization with high fidelity, while maintaining compatibility 
      with existing optical systems.
      
      This work has important applications in quantum computing and quantum sensing, where precise control 
      of light polarization is essential for many quantum operations.
    `,
    achievements: [
      'Development of integrated polarization control elements',
      'Implementation of efficient circular polarization generation',
      'Integration with existing optical systems',
      'Demonstration of high-fidelity polarization control'
    ],
    images: [
      '/images/polarization-1.jpg', 
      '/images/polarization-2.jpg',
      '/images/polarization-3.jpg'
    ]
  }
};

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const project = projectId ? projectsData[projectId as keyof typeof projectsData] : null;
  
  if (!project) {
    return (
      <Container>
        <TrapBackground backgroundColor="#e0e0e0" />
        <PageNav currentPage="Projects" />
        <ContactInfoNav />
        
        <ContentContainer>
          <PageTitle variants={titleVariants}>Project Not Found</PageTitle>
          <DetailContent>
            <p>Sorry, the project you're looking for doesn't exist.</p>
          </DetailContent>
        </ContentContainer>
      </Container>
    );
  }

  return (
    <Container>
      <TrapBackground backgroundColor="#e0e0e0" />
      <PageNav currentPage="Projects" />
      <ContactInfoNav />
      
      <BackButton 
        onClick={() => navigate('/projects')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ← Back to Projects
      </BackButton>
      
      <ContentContainer
        width="90%"
        height="80%"
        initial="initial"
        animate="animate"
        variants={contentVariants}
      >
        <PageTitle variants={titleVariants}>{project.title}</PageTitle>
        
        <DetailContent>
          <p>{project.description}</p>
          
          <h2>Key Achievements</h2>
          <ul>
            {project.achievements.map((achievement: string, index: number) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
          
          <h2>Gallery</h2>
          <ImageGallery>
            {project.images.map((imageUrl: string, index: number) => (
              <ProjectImage 
                key={index} 
                imageUrl={imageUrl}
                onClick={() => window.open(imageUrl, '_blank')}
              />
            ))}
          </ImageGallery>
        </DetailContent>
      </ContentContainer>
    </Container>
  );
};

export default ProjectDetail; 