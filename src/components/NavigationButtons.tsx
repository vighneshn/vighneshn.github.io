import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import TrapBackground from './TrapBackground';

// Define props interface
interface NavigationButtonsProps {
  onNavigate: (page: string) => void;
}

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #e0e0e0;
  margin: 0;
  padding: 0;
  
  @media (max-width: 768px) {
    overflow: auto;
  }
`;

const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  z-index: 10;
  pointer-events: none; /* This ensures clicks pass through to the TrapBackground */
`;

// Ions container positions all ions exactly in the center
const IonsContainer = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  width: 100%;
  height: 100%;
  z-index: 15;
  pointer-events: none; /* Allow clicks to pass through to background */
`;

const NameTitle = styled(motion.h1)`
  position: absolute;
  top: 32%; /* Moved down to align with row 2 (25-40% range) */
  font-size: 48px;
  color: #333;
  text-align: center;
  font-weight: 600;
  z-index: 15;
  margin: 0;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  pointer-events: none; /* Allow clicks to pass through to background */
  
  @media (max-width: 768px) {
    font-size: 36px;
    top: 32%; /* Consistent on all screen sizes */
  }
  
  @media (max-width: 480px) {
    font-size: 24px;
    top: 32%; /* Consistent on all screen sizes */
    width: 100%;
    padding: 0 10px;
  }
`;

const TrapButton = styled(motion.button)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.7);
  position: absolute;
  z-index: 20;
  border: none;
  cursor: pointer;
  pointer-events: auto; /* Re-enable pointer events for buttons */
  
  @media (max-width: 768px) {
      width: 60px;
    height: 60px;
    font-size: 14px;
  }
  
  @media (max-width: 480px) {
    width: 55px;
    height: 55px;
    font-size: 12px;
  }
`;

const TrapButtonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 50%;
  transition: background-color 0.3s ease;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const navigationItems = [
  { name: 'About', label: 'About' },
  { name: 'Projects', label: 'Projects' },
  { name: 'Misc', label: 'Misc' },
  { name: 'Resume', label: 'Resume' },
];

// Desktop trap positions
const getTrapPositions = (width: number) => {
  // Regular desktop spacing
  if (width > 1200) {
    return [
      { x: -240, y: 0 },
      { x: -80, y: 0 },
      { x: 80, y: 0 },
      { x: 240, y: 0 },
    ];
  }
  // Medium screens
  else if (width > 768) {
    return [
      { x: -180, y: 0 },
      { x: -60, y: 0 },
      { x: 60, y: 0 },
      { x: 180, y: 0 },
    ];
  }
  // Tablet
  else if (width > 480) {
    return [
      { x: -135, y: 0 },
      { x: -45, y: 0 },
      { x: 45, y: 0 },
      { x: 135, y: 0 },
    ];
  }
  // Phone - slightly wider spacing to accommodate larger buttons
  else {
    return [
      { x: -127.5, y: 0 },
      { x: -42.5, y: 0 },
      { x: 42.5, y: 0 },
      { x: 127.5, y: 0 },
    ];
  }
};

const NavigationButtons: React.FC<NavigationButtonsProps> = ({ onNavigate }) => {
  const [trapPositions, setTrapPositions] = useState(getTrapPositions(window.innerWidth));
  
  useEffect(() => {
    const handleResize = () => {
      setTrapPositions(getTrapPositions(window.innerWidth));
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <Container>
      <TrapBackground backgroundColor="#e0e0e0" />
      
      <ContentContainer>
        <NameTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Vighnesh Natarajan
        </NameTitle>
        
        {/* Navigation buttons */}
        <IonsContainer>
          {navigationItems.map((item, i) => (
            <TrapButton
              key={item.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                x: trapPositions[i].x,
                y: 0,
                transition: {
                  delay: i * 0.1,
                  duration: 0.5,
                  type: 'spring',
                  stiffness: 200
                }
              }}
              whileHover={{ 
                scale: 1.2,
                boxShadow: '0 0 30px rgba(0, 0, 0, 1)'
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate(item.name)}
            >
              <TrapButtonContent>
                {item.label}
              </TrapButtonContent>
            </TrapButton>
          ))}
        </IonsContainer>
      </ContentContainer>
    </Container>
  );
};

export default NavigationButtons; 