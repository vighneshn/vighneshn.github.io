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

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/images/IonTrapChipFlat-01.png');
  background-size: cover;
  background-position: center;
  opacity: 0.15;
  z-index: 1;
`;

const ContentContainer = styled(motion.div)`
  width: 90%;
  max-width: 800px;
  position: relative;
  z-index: 15;
  background: rgba(255, 255, 255, 0.85);
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-height: 80vh;
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
    padding: 2rem;
    max-height: 75vh;
  }
  
  @media (max-width: 480px) {
    width: 90%;
    padding: 1.5rem;
    max-height: 70vh;
  }
`;

const PageTitle = styled(motion.h1)`
  font-size: 36px;
  margin-bottom: 1.5rem;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 30px;
  }
  
  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 1rem;
  }
`;

const Message = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #444;
  margin-bottom: 2rem;
  
  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 1.5rem;
  }
`;

const NotFoundIcon = styled(motion.div)`
  font-size: 80px;
  margin-bottom: 1.5rem;
  color: #333333;
  
  @media (max-width: 480px) {
    font-size: 60px;
    margin-bottom: 1rem;
  }
`;

const PDFContainer = styled.div`
  width: 100%;
  height: 65vh;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    height: 55vh;
  }
  
  @media (max-width: 480px) {
    height: 50vh;
  }
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

const Button = styled(motion.button)`
  background: linear-gradient(135deg, #333333, #333333);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  font-size: 18px;
  
  &:hover {
    background: linear-gradient(135deg, #333333, #333333);
  }
  
  @media (max-width: 480px) {
    font-size: 16px;
    padding: 0.6rem 1.2rem;
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

const iconVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Set this to true to show the error message, false to try loading the PDF
const SHOW_ERROR_MESSAGE = true;

const ResumePage: React.FC = () => {
  const navigate = useNavigate();
  const resumePath = '/placeholder_resume.pdf';
  
  if (SHOW_ERROR_MESSAGE) {
    return (
      <Container>
        <TrapBackground backgroundColor="#e0e0e0" />
        <PageNav currentPage="Resume" />
        <ContactInfoNav />
        
        <ContentContainer
          initial="initial"
          animate="animate"
          variants={contentVariants}
        >
          <NotFoundIcon variants={iconVariants}>📄</NotFoundIcon>
          <PageTitle>Resume Not Found</PageTitle>
          <Message>
            The resume PDF could not be loaded. The file may be missing or empty.
            Please check back later or contact me directly for my current resume.
          </Message>
          <Button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
          >
            Return to Home
          </Button>
        </ContentContainer>
      </Container>
    );
  }
  
  return (
    <Container>
      <TrapBackground backgroundColor="#e0e0e0" />
      <PageNav currentPage="Resume" />
      <ContactInfoNav />
      
      <ContentContainer
        initial="initial"
        animate="animate"
        variants={contentVariants}
      >
        <PageTitle>Resume</PageTitle>
        
        <PDFContainer>
          <StyledIframe 
            src={resumePath}
            title="Vighnesh Natarajan Resume"
          />
        </PDFContainer>
        
        <ButtonContainer>
          <Button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
          >
            Return to Home
          </Button>
        </ButtonContainer>
      </ContentContainer>
    </Container>
  );
};

export default ResumePage; 