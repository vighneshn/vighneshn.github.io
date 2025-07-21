import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ContentContainerProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  padding?: string;
  margin?: string;
  overflow?: string;
  flexDirection?: string;
  initial?: any;
  animate?: any;
  variants?: any;
}

const StyledContentContainer = styled(motion.div)<{
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  padding?: string;
  margin?: string;
  overflow?: string;
  flexDirection?: string;
}>`
  width: ${props => props.width || '90%'};
  height: ${props => props.height || '80%'};
  max-width: ${props => props.maxWidth || 'none'};
  max-height: ${props => props.maxHeight || 'none'};
  position: relative;
  z-index: 10;
  background: rgba(255, 255, 255, 0.85);
  padding: ${props => props.padding || '2rem'};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: ${props => props.margin || '0 auto'};
  display: flex;
  flex-direction: ${props => props.flexDirection || 'column'};
  overflow: ${props => props.overflow || 'auto'};
  
  @media (max-width: 768px) {
    width: 85%;
    padding: 1.5rem;
    height: 70%;
    margin-bottom: 20px;
  }
  
  @media (max-width: 480px) {
    width: 90%;
    padding: 1rem;
    height: 70%;
    margin-bottom: 30px;
  }
`;

const ContentContainer: React.FC<ContentContainerProps> = ({
  children,
  width,
  height,
  maxWidth,
  maxHeight,
  padding,
  margin,
  overflow,
  flexDirection,
  initial,
  animate,
  variants
}) => {
  return (
    <StyledContentContainer
      width={width}
      height={height}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      padding={padding}
      margin={margin}
      overflow={overflow}
      flexDirection={flexDirection}
      initial={initial}
      animate={animate}
      variants={variants}
    >
      {children}
    </StyledContentContainer>
  );
};

export default ContentContainer; 