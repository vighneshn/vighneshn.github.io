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
      '/images/fluorescence-1.pdf', 
      '/images/fluorescence-2.png',
      '/images/fluorescence-3.pdf'
    ]
  },
  'artiq-control': {
    title: 'Precise Control of Trapped Ion Experiments using ARTIQ',
    description: `
      We use ARTIQ (Advanced Real-Time Infrastructure for Quantum physics) control system in our lab for our trapped ion experiments. I have setup our control system with the philosophy of
      easy to use and modular code that anyone in my lab can build on. With this, we are able to run complex experiments towards our first demonstrations of fast ground state cooling of calcium ions.
      All inference is real time, and users have complete flexibility to scan any parameter for spectroscopies and rabi experiments. 
    `,
    achievements: [
      'Development of custom control sequences for complex quantum operations',    
      'Implementation of real-time feedback and control systems', 
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
      
      The code base implements ideas from the paper <a href="https://ieeexplore.ieee.org/abstract/document/10479983" target="_blank" rel="noopener noreferrer">Grating Design Methodology for Tailored Free-Space Beam-Forming</a>.
      Here, I have repositories for creating gratings for a material stack, and also for simulating the designed gratings efficiently using tidy3d. The code is written such that all inputs are defined in json files.
      Once the parameters for the material stack, grating parameters, simulation configurations are decided, the process to design gratings is a few command line calls. The code generates the requisite plots and figures
      that help understand the simulation/design setup and results, with information on the beam profile at the ion location, power efficiency, power in higher order lobes, etc.

      My goal is for this to be a useful tool for the community to design and simulate gratings for ion trap photonics. The repositories will be published on github.
    `,
    achievements: [
      'Development of a code base for ion trap photonics',
      'Implementation of a general framework for grating design and simulation',
      'Creation of a public framework for community adoption'
    ],
    images: [
      '/images/photonics-1.png', 
      '/images/photonics-2.png',
      '/images/photonics-3.jpg'
    ]
  },
  'circular-polarization': {
    title: 'Integrated Circular Polarization Emitters',
    description: `
      Our research in integrated circular polarization emitters focuses on developing compact and efficient 
      solutions for polarization control in quantum experiments. 

      Leveraging an asymmetric perturbation of the waveguide, we can emit out light from one side of a waveguide. In high index contrast waveguides, tight confinement at the edges
      of the waveguide results in a comparable longitudinal electric field vs transverse electric field. These two fields have an intrinsic pi/2 phase shift between them. Emitting 
      light out from one side thus results in high purity circular polarization. This method is robust to index fluctuations and small inaccuracies in the waveguide geometry.
      
      We have designed and measured these grating arrays in silicon nitride and hafnium aluminum oxide, with purities on the order of 99%.

      This work has important applications in quantum computing and quantum sensing, where precise control 
      of light polarization is essential for many quantum operations.
    `,
    achievements: [
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