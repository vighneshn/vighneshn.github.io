import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Modified version of TrapBackground that supports navigation
const NavContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 25%; /* Match the first row height from TrapBackground */
  z-index: 5; /* Lower z-index to stay behind content */
`;

// Navigation buttons styled as electrode rectangles - exact match to TrapBackground
const ElectrodeButton = styled(motion.button)<{ isActive: boolean }>`
  position: absolute;
  top: 0;
  height: 100%;
  width: 20%;
  background-color: ${props => props.isActive ? 'rgba(180, 180, 180, 0.6)' : 'rgba(150, 150, 150, 0.5)'};
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Align text to the top */
  padding-top: 15px; /* Add padding at the top for the text */
  overflow: hidden;
  z-index: 5; /* Lower z-index to ensure it stays behind content */
  
  // Add electrode lighting effect to match TrapBackground
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, 
      rgba(150, 150, 150, 0.1) 0%, 
      rgba(150, 150, 150, 0.3) 50%, 
      rgba(150, 150, 150, 0.1) 100%);
  }
  
  // Button label
  span {
    color: white;
    font-size: 36px; /* Further increased font size for desktop/laptop */
    font-weight: bold;
    position: relative;
    z-index: 2;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
    opacity: 1;
    letter-spacing: 0.5px;
    transition: all 0.2s ease;
    
    @media (max-width: 768px) {
      font-size: 18px;
    }
    
    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
`;

// Horizontal electrode line - exact match to TrapBackground
const HorizontalElectrode = styled.div`
  position: absolute;
  width: 100%;
  height: 5px;
  background: #fff;
  left: 0;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  z-index: 6; /* Slightly higher than buttons but still below content */
  
  @media (max-width: 768px) {
    height: 3px;
  }
`;

// Vertical electrode line - exact match to TrapBackground
const VerticalElectrode = styled.div`
  position: absolute;
  width: 5px;
  height: 100%;
  background: #fff;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  z-index: 6; /* Slightly higher than buttons but still below content */
  
  @media (max-width: 768px) {
    width: 3px;
  }
`;

// Button animation variants - reduced animations
const buttonVariants = {
  initial: (i: number) => ({
    opacity: 0,
    y: -10, // Reduced initial offset
  }),
  animate: (i: number) => ({
    opacity: 1, 
    y: 0,
    transition: {
      delay: i * 0.05, // Reduced delay between buttons
      duration: 0.3, // Shorter animation duration
      type: 'spring',
      stiffness: 70 // Lower stiffness for less bouncy animation
    }
  }),
  hover: {
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Less dramatic color change
    scale: 1.02, // Reduced scale effect
    zIndex: 12,
    boxShadow: "0 0 10px rgba(255, 255, 255, 0.6)", // Less dramatic shadow
    transition: {
      duration: 0.15 // Shorter transition
    }
  },
  tap: {
    scale: 0.98, // Less scale reduction on tap
    backgroundColor: 'rgba(220, 220, 220, 0.8)',
    boxShadow: '0 0 5px rgba(255, 255, 255, 0.4)', // Less dramatic shadow
    transition: {
      duration: 0.1
    }
  }
};

// Fixed navigation items for all pages
const navigationItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Misc', path: '/misc' },
  { name: 'Resume', path: '/resume' },
];

interface PageNavProps {
  currentPage: string;
}

const PageNav: React.FC<PageNavProps> = ({ currentPage }) => {
  const navigate = useNavigate();
  
  return (
    <NavContainer>
      {/* Electrode button segments that match the TrapBackground */}
      {navigationItems.map((item, i) => (
        <ElectrodeButton
          key={i}
          style={{ left: `${i * 20}%` }}
          custom={i}
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          whileHover={item.name.toLowerCase() !== currentPage.toLowerCase() ? "hover" : undefined}
          whileTap={item.name.toLowerCase() !== currentPage.toLowerCase() ? "tap" : undefined}
          onClick={() => item.name.toLowerCase() !== currentPage.toLowerCase() && navigate(item.path)}
          isActive={item.name.toLowerCase() === currentPage.toLowerCase()}
        >
          <span>{item.name}</span>
        </ElectrodeButton>
      ))}
      
      {/* Horizontal electrode line at the bottom */}
      <HorizontalElectrode style={{ bottom: 0 }} />
      
      {/* Vertical electrode lines */}
      <VerticalElectrode style={{ left: '20%' }} />
      <VerticalElectrode style={{ left: '40%' }} />
      <VerticalElectrode style={{ left: '60%' }} />
      <VerticalElectrode style={{ left: '80%' }} />
    </NavContainer>
  );
};

export default PageNav; 