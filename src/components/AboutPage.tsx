import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
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
  position: relative;
  z-index: 15;
  background: rgba(255, 255, 255, 0.75);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  max-height: 75vh;
  overflow-y: auto;
  
  /* Scrollbar styling */
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
  
  @media (max-width: 768px) {
    width: 85%;
    padding: 1.5rem;
    max-height: 75vh;
  }
  
  @media (max-width: 480px) {
    width: 90%;
    padding: 1rem;
    max-height: 70vh;
  }
`;

const PageTitle = styled(motion.h1)`
  font-size: 36px;
  margin-bottom: 1.5rem;
  color: #333;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 30px;
  }
  
  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 1rem;
  }
`;

const ProfileImage = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-image: url('/images/ion-trap-chip.jpg');
  background-size: cover;
  background-position: center;
  border: 3px solid #333333;
  float: right;
  margin: 0 0 1.5rem 2rem;
  
  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
    margin: 0 0 1rem 1.5rem;
  }
  
  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
    margin: 0 0 1rem 1rem;
  }
`;

const AboutContent = styled.div`
  font-size: 18px;
  line-height: 1.6;
  color: #444;
  
  p {
    margin-bottom: 1.5rem;
  }
  
  h2 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: #333;
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
    
    h2 {
      font-size: 20px;
      margin-top: 1.5rem;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
    
    p {
      margin-bottom: 1rem;
    }
    
    h2 {
      font-size: 18px;
      margin-top: 1rem;
    }
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

const AboutPage: React.FC = () => {
  return (
    <Container>
      <TrapBackground backgroundColor="#e0e0e0" />
      <PageNav currentPage="About" />
      <ContactInfoNav />
      
      <ContentContainer
        initial="initial"
        animate="animate"
        variants={contentVariants}
      >
        <PageTitle variants={titleVariants}>About Me</PageTitle>
        
        <AboutContent>
          <ProfileImage />
          <p>
            Hello! I'm Vighnesh Natarajan, a 3rd year PhD candidate in the group of Prof. Karan Mehta (<a href="https://sites.coecis.cornell.edu/mehta/" target="_blank" rel="noopener noreferrer">PQE group</a>.), Cornell University. I specialize in quantum technologies, with a focus on trapped ion quantum computing and quantum sensing applications.
          </p>
          
          <p>
            With a background in applied physics and electrical engineering, I develop systems
            that control and manipulate individual atoms for quantum information processing.
            The ion trap chip you see in the background is the type of device my lab uses to trap calcium ions
            for quantum computing experiments.
          </p>
          
          <h2>Research Interests</h2>
          <p>
            My research interests span control of quantum systems, integrated photonics and particularly designing photonic elements and devices for scalable quantum information processing. I'm particularly fascinated by
            the intersection of quantum physics, electrical engineering, and computer science. 
            I have worked with multiple foundries including Lincoln Labs, ASTAR, and AIM photonics for tape outs of ion trap and photonic chips. I characterize and test the chips in close talks with the foundry to aid in 
            the process development with active feedback.
            I enjoy solving problems and getting into the weeds of any task needed to reach my groups goals - demonstrating new operations for scalable trapped ion quantum computing. Our current active goal is to 
            demonstrate fast ground state cooling of calcium atoms in a phase stable standing wave.
          </p>
          
        </AboutContent>
      </ContentContainer>
    </Container>
  );
};

export default AboutPage; 