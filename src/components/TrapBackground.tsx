import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Define props interface
interface TrapBackgroundProps {
  backgroundColor?: string;
  tintColor?: string;
}

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background-color: #e0e0e0;
  z-index: 0;
`;

// Background with trap grid
const TrapBackgroundLayout = styled.div<{ tintColor?: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.tintColor || 'transparent'};
    z-index: 1;
  }
`;

// Gray rectangle areas
const GrayRectangle = styled(motion.div)`
  position: absolute;
  background-color: rgba(150, 150, 150, 0.5);
  z-index: 2;
  transition: background-color 0.15s ease;
  
  &:hover {
    background-color: rgba(160, 160, 160, 0.6);
  }
`;

// Horizontal trap electrodes
const HorizontalElectrode = styled.div`
  position: absolute;
  width: 100%;
  height: 5px;
  background: #fff;
  left: 0;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  z-index: 3;
  
  @media (max-width: 768px) {
    height: 3px;
  }
`;

// Vertical trap electrodes
const VerticalElectrode = styled.div`
  position: absolute;
  width: 5px;
  height: 20%;
  background: #fff;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  z-index: 3;
  
  @media (max-width: 768px) {
    width: 3px;
  }
`;

const TrapBackground: React.FC<TrapBackgroundProps> = ({ backgroundColor = '#e0e0e0', tintColor }) => {
  // Define the updated positions and sizes for the grid
  // Row heights - Make row 1 and row 6 symmetric
  const row1Height = '25%';  // First row - symmetric with row 6
  const row1Y = '0';
  
  const row2Height = '15%';  // Second row
  const row2Y = '25%';       // Start after row 1
  
  const row3Height = '10%';  // Third row
  const row3Y = '40%';       // Start after row 2
  
  const row4Height = '10%';  // Fourth row
  const row4Y = '50%';       // Start after row 3
  
  const row5Height = '15%';  // Fifth row 
  const row5Y = '60%';       // Start after row 4
  
  const row6Height = '25%';  // Sixth row - symmetric with row 1
  const row6Y = '75%';       // Start after row 5
  
  // Define horizontal electrode positions based on row boundaries
  const electrode1Y = row1Y;
  const electrode2Y = row2Y;
  const electrode3Y = row3Y;
  const electrode4Y = row4Y;
  const electrode5Y = row5Y;
  const electrode6Y = row6Y;
  const electrode7Y = '100%';
  
  return (
    <Container style={{ backgroundColor }}>
      <TrapBackgroundLayout tintColor={tintColor}>
        {/* Row 1 (Inverted with previous row 2): Segmented rectangles */}
        <GrayRectangle 
          style={{ top: row1Y, left: '0', width: '20%', height: row1Height }}
          initial={{ backgroundColor: "rgba(150, 150, 150, 0.5)" }}
          whileHover={{ 
            backgroundColor: "rgba(160, 160, 160, 0.6)", 
            scale: 1.005,
            zIndex: 10,
            boxShadow: "0 0 4px rgba(255, 255, 255, 0.3)"
          }}
          transition={{ type: "tween", duration: 0.15 }}
        />
        <GrayRectangle 
          style={{ top: row1Y, left: '20%', width: '20%', height: row1Height }}
          initial={{ backgroundColor: "rgba(150, 150, 150, 0.5)" }}
          whileHover={{ 
            backgroundColor: "rgba(160, 160, 160, 0.6)", 
            scale: 1.005,
            zIndex: 10,
            boxShadow: "0 0 4px rgba(255, 255, 255, 0.3)"
          }}
          transition={{ type: "tween", duration: 0.15 }}
        />
        <GrayRectangle 
          style={{ top: row1Y, left: '40%', width: '20%', height: row1Height }}
          initial={{ backgroundColor: "rgba(150, 150, 150, 0.5)" }}
          whileHover={{ 
            backgroundColor: "rgba(160, 160, 160, 0.6)", 
            scale: 1.005,
            zIndex: 10,
            boxShadow: "0 0 4px rgba(255, 255, 255, 0.3)"
          }}
          transition={{ type: "tween", duration: 0.15 }}
        />
        <GrayRectangle 
          style={{ top: row1Y, left: '60%', width: '20%', height: row1Height }}
          initial={{ backgroundColor: "rgba(150, 150, 150, 0.5)" }}
          whileHover={{ 
            backgroundColor: "rgba(160, 160, 160, 0.6)", 
            scale: 1.005,
            zIndex: 10,
            boxShadow: "0 0 4px rgba(255, 255, 255, 0.3)"
          }}
          transition={{ type: "tween", duration: 0.15 }}
        />
        <GrayRectangle 
          style={{ top: row1Y, left: '80%', width: '20%', height: row1Height }}
          initial={{ backgroundColor: "rgba(150, 150, 150, 0.5)" }}
          whileHover={{ 
            backgroundColor: "rgba(160, 160, 160, 0.6)", 
            scale: 1.005,
            zIndex: 10,
            boxShadow: "0 0 4px rgba(255, 255, 255, 0.3)"
          }}
          transition={{ type: "tween", duration: 0.15 }}
        />
        
        {/* Row 2 (Inverted with previous row 1): Full-width rectangle */}
        <GrayRectangle 
          style={{ top: row2Y, left: '0', width: '100%', height: row2Height }}
          initial={{ backgroundColor: "rgba(150, 150, 150, 0.5)" }}
          whileHover={{ 
            backgroundColor: "rgba(160, 160, 160, 0.6)", 
            scale: 1.005,
            zIndex: 10,
            boxShadow: "0 0 4px rgba(255, 255, 255, 0.3)"
          }}
          transition={{ type: "tween", duration: 0.15 }}
        />
        
        {/* Row 3: Full-width rectangle (shortened) */}
        <GrayRectangle 
          style={{ top: row3Y, left: '0', width: '100%', height: row3Height }}
          initial={{ backgroundColor: "rgba(150, 150, 150, 0.5)" }}
          whileHover={{ 
            backgroundColor: "rgba(160, 160, 160, 0.6)", 
            scale: 1.005,
            zIndex: 10,
            boxShadow: "0 0 4px rgba(255, 255, 255, 0.3)"
          }}
          transition={{ type: "tween", duration: 0.15 }}
        />
        
        {/* Row 4: Full-width rectangle (shortened) */}
        <GrayRectangle 
          style={{ top: row4Y, left: '0', width: '100%', height: row4Height }}
          initial={{ backgroundColor: "rgba(150, 150, 150, 0.5)" }}
          whileHover={{ 
            backgroundColor: "rgba(160, 160, 160, 0.6)", 
            scale: 1.005,
            zIndex: 10,
            boxShadow: "0 0 4px rgba(255, 255, 255, 0.3)"
          }}
          transition={{ type: "tween", duration: 0.15 }}
        />
        
        {/* Row 5 (Inverted with previous row 6): Full-width rectangle */}
        <GrayRectangle 
          style={{ top: row5Y, left: '0', width: '100%', height: row5Height }}
          initial={{ backgroundColor: "rgba(150, 150, 150, 0.5)" }}
          whileHover={{ 
            backgroundColor: "rgba(160, 160, 160, 0.6)", 
            scale: 1.005,
            zIndex: 10,
            boxShadow: "0 0 4px rgba(255, 255, 255, 0.3)"
          }}
          transition={{ type: "tween", duration: 0.15 }}
        />
        
        {/* Row 6 (Inverted with previous row 5): Segmented rectangles */}
        <GrayRectangle 
          style={{ top: row6Y, left: '0', width: '20%', height: row6Height }}
          initial={{ backgroundColor: "rgba(150, 150, 150, 0.5)" }}
          whileHover={{ 
            backgroundColor: "rgba(160, 160, 160, 0.6)", 
            scale: 1.005,
            zIndex: 10,
            boxShadow: "0 0 4px rgba(255, 255, 255, 0.3)"
          }}
          transition={{ type: "tween", duration: 0.15 }}
        />
        <GrayRectangle 
          style={{ top: row6Y, left: '20%', width: '20%', height: row6Height }}
          initial={{ backgroundColor: "rgba(150, 150, 150, 0.5)" }}
          whileHover={{ 
            backgroundColor: "rgba(160, 160, 160, 0.6)", 
            scale: 1.005,
            zIndex: 10,
            boxShadow: "0 0 4px rgba(255, 255, 255, 0.3)"
          }}
          transition={{ type: "tween", duration: 0.15 }}
        />
        <GrayRectangle 
          style={{ top: row6Y, left: '40%', width: '20%', height: row6Height }}
          initial={{ backgroundColor: "rgba(150, 150, 150, 0.5)" }}
          whileHover={{ 
            backgroundColor: "rgba(160, 160, 160, 0.6)", 
            scale: 1.005,
            zIndex: 10,
            boxShadow: "0 0 4px rgba(255, 255, 255, 0.3)"
          }}
          transition={{ type: "tween", duration: 0.15 }}
        />
        <GrayRectangle 
          style={{ top: row6Y, left: '60%', width: '20%', height: row6Height }}
          initial={{ backgroundColor: "rgba(150, 150, 150, 0.5)" }}
          whileHover={{ 
            backgroundColor: "rgba(160, 160, 160, 0.6)", 
            scale: 1.005,
            zIndex: 10,
            boxShadow: "0 0 4px rgba(255, 255, 255, 0.3)"
          }}
          transition={{ type: "tween", duration: 0.15 }}
        />
        <GrayRectangle 
          style={{ top: row6Y, left: '80%', width: '20%', height: row6Height }}
          initial={{ backgroundColor: "rgba(150, 150, 150, 0.5)" }}
          whileHover={{ 
            backgroundColor: "rgba(160, 160, 160, 0.6)", 
            scale: 1.005,
            zIndex: 10,
            boxShadow: "0 0 4px rgba(255, 255, 255, 0.3)"
          }}
          transition={{ type: "tween", duration: 0.15 }}
        />

        {/* Horizontal electrodes - updated positions */}
        <HorizontalElectrode style={{ top: electrode1Y }} />
        <HorizontalElectrode style={{ top: electrode2Y }} />
        <HorizontalElectrode style={{ top: electrode3Y }} />
        <HorizontalElectrode style={{ top: electrode4Y }} />
        <HorizontalElectrode style={{ top: electrode5Y }} />
        <HorizontalElectrode style={{ top: electrode6Y }} />
        
        {/* Vertical electrodes - updated for the new rows */}
        <VerticalElectrode style={{ top: row1Y, left: '20%', height: row1Height }} />
        <VerticalElectrode style={{ top: row1Y, left: '40%', height: row1Height }} />
        <VerticalElectrode style={{ top: row1Y, left: '60%', height: row1Height }} />
        <VerticalElectrode style={{ top: row1Y, left: '80%', height: row1Height }} />
        <VerticalElectrode style={{ top: row6Y, left: '20%', height: row6Height }} />
        <VerticalElectrode style={{ top: row6Y, left: '40%', height: row6Height }} />
        <VerticalElectrode style={{ top: row6Y, left: '60%', height: row6Height }} />
        <VerticalElectrode style={{ top: row6Y, left: '80%', height: row6Height }} />
      </TrapBackgroundLayout>
    </Container>
  );
};

export default TrapBackground; 