import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaGraduationCap } from '@react-icons/all-files/fa/FaGraduationCap';
import { FaMapMarkerAlt } from '@react-icons/all-files/fa/FaMapMarkerAlt';

const NavContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 25%; /* Match the last row height from TrapBackground */
  z-index: 5;
`;

const ContactButton = styled(motion.div)`
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 20%;
  background-color: rgba(150, 150, 150, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  z-index: 5;
  padding-bottom: 20px;
  
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
  
  span {
    color: white;
    font-size: 16px;
    font-weight: bold;
    position: relative;
    z-index: 2;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
    text-align: center;
    padding: 0 10px;
    margin: 2px 0;
    
    @media (max-width: 768px) {
      font-size: 14px;
    }
    
    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
  
  /* Specific styling for email content */
  span:nth-child(3) {
    @media (max-width: 768px) {
      font-size: 12px;
    }
    
    @media (max-width: 480px) {
      font-size: 8px;
    }
  }
  
  a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #333333;
    }
  }
`;

const HorizontalElectrode = styled.div`
  position: absolute;
  width: 100%;
  height: 5px;
  background: #fff;
  left: 0;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  z-index: 6;
  
  @media (max-width: 768px) {
    height: 3px;
  }
`;

const VerticalElectrode = styled.div`
  position: absolute;
  width: 5px;
  height: 100%;
  background: #fff;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  z-index: 6;
  
  @media (max-width: 768px) {
    width: 3px;
  }
`;

const IconWrapper = styled.div`
  margin-bottom: 8px;
  font-size: 24px;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
  
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

interface ContactItem {
  label: string;
  content: string;
  link: string | null;
  Icon: React.ComponentType<{ size?: number }>;
}

const contactItems: ContactItem[] = [
  { 
    label: 'Email', 
    content: 'vn95@cornell.edu', 
    link: 'mailto:vn95@cornell.edu',
    Icon: FaEnvelope
  },
  { 
    label: 'LinkedIn', 
    content: 'Profile', 
    link: 'https://www.linkedin.com/in/vighnesh-natarajan-68923a241/',
    Icon: FaLinkedin
  },
  { 
    label: 'GitHub', 
    content: 'vighneshn', 
    link: 'https://github.com/vighneshn',
    Icon: FaGithub
  },
  { 
    label: 'Google Scholar', 
    content: 'Profile', 
    link: 'https://scholar.google.com/citations?hl=en&user=Uy8K9XEAAAAJ',
    Icon: FaGraduationCap
  },
  { 
    label: 'Location', 
    content: 'Ithaca, NY', 
    link: 'https://www.google.com/maps/place/Cornell+University/@42.4534492,-76.4760776,17z/data=!3m1!4b1!4m6!3m5!1s0x89d0821a6191da9d:0xf50ee64d821b9ff4!8m2!3d42.4534492!4d-76.4735027!16zL20vMDF3M3Y?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoASAFQAw%3D%3D',
    Icon: FaMapMarkerAlt
  }
];

const ContactInfoNav: React.FC = () => {
  return (
    <NavContainer>
      {contactItems.map((item, i) => (
        <ContactButton
          key={i}
          style={{ 
            left: `${i * 20}%`,
            cursor: item.link ? 'pointer' : 'default' 
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: {
              delay: i * 0.1,
              duration: 0.4,
              type: 'spring',
              stiffness: 100
            }
          }}
          whileHover={{ 
            backgroundColor: "rgba(160, 160, 160, 0.6)",
            scale: 1.02,
            zIndex: 10,
            boxShadow: "0 0 4px rgba(255, 255, 255, 0.3)"
          }}
          onClick={() => item.link && window.open(item.link, '_blank', 'noopener,noreferrer')}
        >
          <IconWrapper>
            <item.Icon size={24} />
          </IconWrapper>
          <span>{item.label}</span>
          <span>{item.content}</span>
        </ContactButton>
      ))}
      
      <HorizontalElectrode style={{ top: 0 }} />
      
      <VerticalElectrode style={{ left: '20%' }} />
      <VerticalElectrode style={{ left: '40%' }} />
      <VerticalElectrode style={{ left: '60%' }} />
      <VerticalElectrode style={{ left: '80%' }} />
    </NavContainer>
  );
};

export default ContactInfoNav; 