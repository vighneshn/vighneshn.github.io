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

const MiscContent = styled.div`
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

const TopicCard = styled(motion.div)`
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

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem 0;
`;

const TopicImage = styled.img`
  max-width: 100%;
  max-height: 200px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  object-fit: cover;
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

const MiscPage: React.FC = () => {
  const navigate = useNavigate();
  
  const handleTopicClick = (topicId: string) => {
    navigate(`/misc/${topicId}`);
  };
  
  return (
    <Container>
      <TrapBackground backgroundColor="#e0e0e0" />
      <PageNav currentPage="Misc" />
      <ContactInfoNav />
      
      <ContentContainer
        initial="initial"
        animate="animate"
        variants={contentVariants}
      >
        <PageTitle variants={titleVariants}>Miscellaneous Topics</PageTitle>
        
        <MiscContent>
          <p>
            Welcome to the lighter side of our website! Here you'll find a mix of humor from the world of quantum physics
            and the fascinating art of origami. These topics showcase the fun and creative aspects that complement
            the technical content.
          </p>
          
          <TopicCard 
            whileHover={{ y: -5 }}
            onClick={() => handleTopicClick('ion-trap-humor')}
          >
            <h2>Lighter Side of Quantum Physics</h2>
            <p>
              The world of quantum physics isn't all serious equations and lab work.
              There's plenty of room for humor, puns, and the occasional physics joke that might only 
              make sense to those who have spent time debugging an experiment.
            </p>
            <ImageContainer>
              <TopicImage 
                src="/images/joke1.png" 
                alt="Schrodinger's cat meme - both laughing and not laughing at quantum physics jokes"
              />
            </ImageContainer>
            <p>
              What you'll find here:
              <ul>
                <li>Quantum physics jokes that exist in a superposition of funny and not funny</li>
                <li>Tales of the lab where Murphy's Law meets Schrödinger's Cat</li>
                <li>Puns that would make even the most coherent quantum state decohere</li>
                <li>The lighter moments that keep us going through long hours in the lab</li>
              </ul>
            </p>
            <ViewMoreButton 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              View Details
            </ViewMoreButton>
          </TopicCard>
          
          <TopicCard 
            whileHover={{ y: -5 }}
            onClick={() => handleTopicClick('origami')}
          >
            <h2>Origami: The Art of Paper Folding</h2>
            <p>
              Discover the fascinating intersection of art, mathematics, and engineering through the ancient
              Japanese art of paper folding. From simple paper cranes to complex mathematical structures,
              origami has evolved into a field with surprising applications in modern technology.
            </p>
            <ImageContainer>
              <TopicImage 
                src="/images/origami1.jpg" 
                alt="A complex origami dragon created from a single sheet of paper"
              />
            </ImageContainer>
            <p>
              Explore:
              <ul>
                <li>The mathematical principles behind paper folding</li>
                <li>Modern applications in engineering and medical devices</li>
                <li>The cultural significance and evolution of origami</li>
                <li>How origami inspires innovation in space technology</li>
              </ul>
            </p>
            <ViewMoreButton 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              View Details
            </ViewMoreButton>
          </TopicCard>
        </MiscContent>
      </ContentContainer>
    </Container>
  );
};

export default MiscPage; 