import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NavContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 8%;
  display: flex;
  align-items: center;
  z-index: 20;
  padding: 2px 0;
`;

// The container holds electrodes with custom positioning
const ElectrodesContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  max-width: 100%;
  margin: 0 auto;
`;

// Electrode-style button with custom width support
const ElectrodeButton = styled(motion.button)<{ 
  index: number;
  customWidth?: string; 
  customMargin?: string;
}>`
  /* Width can be customized per button */
  width: ${props => props.customWidth || '19%'};
  /* Margins can be customized per button */
  margin: ${props => props.customMargin || '0 0.5%'};
  height: 85%;
  background: #777777;
  border: 1px solid #444;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;
  
  // Subtle electrode pattern
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
    font-size: 22px;
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
  
  &:hover span {
    opacity: 1;
    transform: scale(1.05);
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.9);
  }
`;

// Navigation items for the five buttons - SPECIFIC TO MISC PAGE
const navigationItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Resume', path: '/resume' },
  { name: 'Contact', path: '/contact' },
];

// Custom widths for each electrode (matching the trap background 20% segments)
const buttonWidths = [
  '20%',  // First button width
  '20%',  // Second button width
  '20%',  // Third button width
  '20%',  // Fourth button width
  '20%',  // Fifth button width
];

// Custom margins for each electrode (removed for precise alignment)
const buttonMargins = [
  '0',  // First button margin
  '0',  // Second button margin
  '0',  // Third button margin
  '0',  // Fourth button margin
  '0',  // Fifth button margin
];

// Button animation variants
const buttonVariants = {
  initial: (i: number) => ({
    opacity: 0,
    y: -20,
  }),
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      type: 'spring',
      stiffness: 100
    }
  }),
  hover: {
    backgroundColor: '#777',
    borderColor: '#444',
    y: -2,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: {
      duration: 0.2
    }
  },
  tap: {
    y: 0,
    backgroundColor: '#666',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    transition: {
      duration: 0.1
    }
  }
};

interface MiscPageNavProps {
  currentPage: string;
}

const MiscPageNav: React.FC<MiscPageNavProps> = ({ currentPage }) => {
  const navigate = useNavigate();
  
  // Since we're on the Misc page, we want to show all other pages, so no need to filter out current page
  const displayItems = [...navigationItems];
  
  return (
    <NavContainer>
      <ElectrodesContainer>
        {displayItems.map((item, i) => (
          <ElectrodeButton
            key={i}
            index={i}
            customWidth={buttonWidths[i]}
            customMargin={buttonMargins[i]}
            custom={i}
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            whileHover={item.name ? "hover" : undefined}
            whileTap={item.name ? "tap" : undefined}
            onClick={item.name ? () => navigate(item.path) : undefined}
            style={{
              visibility: item.name ? 'visible' : 'hidden'
            }}
          >
            {item.name && <span>{item.name}</span>}
          </ElectrodeButton>
        ))}
      </ElectrodesContainer>
    </NavContainer>
  );
};

export default MiscPageNav; 